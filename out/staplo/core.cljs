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
  (if-not (empty? (pop @state))
    (swap! state pop)))

(defn can-pop-state? []
  (empty? @state))

(defn set-start! [text]
  (reset! state (list text)))

(defn get-current [] (first @state))

(add-watch state :watcher
  (fn [key atom old-state new-state]
    (html/set-text! "current" (get-current))))

(add-watch target :watcher
  (fn [key atom old-state new-state]
    (html/set-text! "target" new-state)))

(defn clicked-on [op-name]
  (if-not (win-condition?)
    (let [{op :operation} ((operations/operations (:type @current-level)) op-name)
           new-string (op  (get-current))]
      (push-state! new-string)
      (check-win))))

(defn win-condition? []
  (= (get-current) @target))

(defn check-win []
  (if
    (win-condition?)
    (win)))

(defn win []
  (html/remove-class! "current" "neutral")
  (html/add-class! "current" "correct")
  (js/setTimeout
    (fn []
      (html/remove-class! "current" "correct")
      (html/add-class! "current" "neutral")
      (next-level))
    2500))

(html/on-click "undo" pop-state!)

(defn next-level []
  (let [{:keys [type level]} @current-level
         config (nth (get levels/level-configs type) level)
         challenge (generator/generate-challenge config)]
    (set-start! (:start challenge))
    (reset! target (:target challenge))))

(defn query []
  (let [query (.param (js/purl))]
    {:type (.-type query)
     :level (js/parseInt (.-level query) 10)}))

; =============================================================================

(reset! current-level (query))

(html/update-list!
  "list"
  (let [{:keys [type level]} @current-level]
    (:list (:operations (nth (get levels/level-configs type) level))))
  clicked-on)

(next-level)