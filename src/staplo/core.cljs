(ns staplo.core
  (:require
    [reagent.core :as r]
    [staplo.generator :as generator]
    [staplo.levels :as levels]
    [staplo.operations :as operations]))

(enable-console-print!)

; =============================================================================

(def app-state (r/atom :play))

(def game-state (r/atom '()))

(def target (r/atom nil))

(def steps-min (r/atom 0))

(def current-level (r/atom {:type "" :level ""}))


(defn push-state! [text]
  (swap! game-state conj text))


(defn pop-state! []
  (when-not (empty? (pop @game-state))
    (swap! game-state pop)))


(defn set-start! [text]
  (reset! game-state (list text)))


(defn get-current []
  (first @game-state))


(defn apply-op [op]
  (push-state! (op (get-current))))


(defn next-level []
  (let [{:keys [type level]} @current-level
        config (nth (get levels/level-configs type) level)
        challenge (generator/generate-challenge config)]
    (set-start! (:start challenge))
    (reset! target (:target challenge))
    (reset! steps-min (:min challenge))
    (reset! app-state :play)))


(defn query []
  (let [query (.param (js/purl))]
    {:type (.-type query)
     :level (js/parseInt (.-level query) 10)}))


(defn win []
  (reset! app-state :win)
  (js/setTimeout next-level 2500))


(defn win-condition? []
  (= (get-current) @target))


(defn handle-click [op-name]
  (let [{op :operation precondition :precondition}
        ((operations/operations (:type @current-level)) op-name)]
    (when (precondition (first @game-state) '())
      (apply-op op)
      (when (win-condition?) (win)))))


(defn render-operations [op-names]
  [:ul
   (doall
     (for [op-name op-names]
       ^{:key op-name}
       [:li
        {:class (str
                  "operation "
                  (let [op (get-in operations/operations [(:type @current-level) op-name])]
                    (when ((:precondition op) (first @game-state) '())
                      "available")))
         :on-click (when
                     (= @app-state :play)
                     (partial handle-click op-name))}
        op-name]))])


(defn render-stats [steps steps-min]
  [:div.score
   [:span.step "Steps: " steps]
   [:span.step "Shortest: " steps-min]])


(defn render-state [state]
  (if (= (:type @current-level) "stack")
    [:ul
     (map-indexed
       (fn [index item] ^{:key [item index]} [:li item])
       state)]
    [:span state]))


(defn render-current [current]
  [:div
   {:class (str
             "centered-container neutral current "
             (when (= @app-state :win) "correct"))}
   [render-state current]])


(defn render-target [target]
  [:div.centered-container.target
   [render-state target]])


(defn render-game []
  (let [{:keys [type level]} @current-level
        op-names (get-in levels/level-configs [type level :operations :list])]
    [:div.game
     [render-operations op-names]
     [render-stats (dec (count @game-state)) @steps-min]
     [render-current (get-current)]
     [render-target @target]

     [:button.undo
      {:on-click (when (= @app-state :play) pop-state!)}
      "Undo"]

     [:div.instructions
      "Apply operations on the given data (in blue) to obtain the target data (in black)"]]))


(defn render []
  (r/render-component [render-game]
                      (.getElementById js/document "app")))

; =============================================================================

(reset! current-level (query))

(next-level)

(render)