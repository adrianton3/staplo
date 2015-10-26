(ns staplo.core
  (:require
    [staplo.generator :as generator]
    [staplo.html :as html]
    [staplo.levels :as levels]
    [staplo.operations :as operations]))

(enable-console-print!)

; =============================================================================

(def state (atom '()))

(def target (atom nil))

(def current-level (atom {:type "" :level ""}))


(defn push-state! [text]
  (swap! state conj text))

(defn pop-state! []
  (when-not (empty? (pop @state))
    (swap! state pop)))

(defn can-pop-state? []
  (empty? @state))

(defn set-start! [text]
  (reset! state (list text)))

(defn get-current [] (first @state))

(defn update-display! [id value]
  (if (= (:type @current-level) "stack")
    (html/update-list! id value)
    (html/set-text! id value)))

(add-watch state :watcher
  (fn [key atom old-state new-state]
    (update-display! "current" (get-current))))

(add-watch target :watcher
  (fn [key atom old-state new-state]
    (update-display! "target" new-state)))

(defn next-level []
  (let [{:keys [type level]} @current-level
        config (nth (get levels/level-configs type) level)
        challenge (generator/generate-challenge config)]
    (set-start! (:start challenge))
    (reset! target (:target challenge))))

(defn win []
  (html/remove-class! "current" "neutral")
  (html/add-class! "current" "correct")
  (js/setTimeout
    (fn []
      (html/remove-class! "current" "correct")
      (html/add-class! "current" "neutral")
      (next-level))
    2500))

(defn win-condition? []
  (= (get-current) @target))

(defn check-win []
  (when (win-condition?) (win)))

(defn clicked-on [op-name]
  (when-not (win-condition?)
    (let [{op :operation} ((operations/operations (:type @current-level)) op-name)
           new-string (op  (get-current))]
      (push-state! new-string)
      (check-win))))

(html/on-click "undo" pop-state!)

(defn query []
  (let [query (.param (js/purl))]
    {:type (.-type query)
     :level (js/parseInt (.-level query) 10)}))

(defn init-current-target []
  (if (= (:type @current-level) "stack")
    (let [current-list (html/create-element "ul" "current")
          target-list (html/create-element "ul" "target")]
      (.appendChild (.getElementById js/document "current-container") current-list)
      (.appendChild (.getElementById js/document "target-container") target-list))
    (let [current-span (html/create-element "span" "current")
          target-span (html/create-element "span" "target")]
      (.appendChild (.getElementById js/document "current-container") current-span)
      (.appendChild (.getElementById js/document "target-container") target-span))))

; =============================================================================

(reset! current-level (query))

(init-current-target)

(html/update-list!
  "list"
  (let [{:keys [type level]} @current-level]
    (:list (:operations (nth (get levels/level-configs type) level))))
  clicked-on)

(next-level)