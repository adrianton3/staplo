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

(defn clicked-on [text]
  (let [new-string ((get operations/operations text) (get-current))]
    (push-state! new-string)
    (check-win)))

(defn check-win []
  (if
    (= (get-current) @target)
    (print "victory")))

(html/on-click "undo" pop-state!)


(defn next-level [config]
  (let [challenge (generator/generate-challenge config)]
    (set-start! (:start challenge))
    (reset! target (:target challenge))))



(html/update-list! "list" (:operations (nth levels/level-configs 0)) clicked-on)

(next-level (nth levels/level-configs 0))