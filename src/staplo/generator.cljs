(ns staplo.generator
  (:require
    [clojure.string :as str]
    [staplo.operations :as operations]
    [staplo.solver :as solver]
    [staplo.common :refer [rand2 rand-interval accumulate]]))

(defn same-char? [string]
  (apply = (str/split string "")))

(defn generate-string [interval]
  (let [char-set ["a" "b" "c"]
        length (rand-interval interval)
        generate-candidate
          (fn []
            (accumulate
            #(str % (rand-nth char-set))
            ""
            length))]
    (loop [candidate (generate-candidate)]
      (if (same-char? candidate)
        (recur (generate-candidate))
        candidate))))

(def generate-number rand-interval)

(defn generate-stack [interval]
  (accumulate
    #(conj % (rand2 3 9))
    '()
    (rand-interval interval)))

(def generators {
  "strings" generate-string
  "numbers" generate-number
  "stack" generate-stack
  })

(defn generate-start [type length]
  ((generators type) length))

; way too many parameters
(defn generate-op [operations operation-names text op-history text-history]
  (let [rand-op
        #(let [op-name (rand-nth operation-names)]
            {:op-name op-name
             :op (operations op-name)})]
    (loop [candidate-op (rand-op)]
      (let [{{precondition :precondition operation :operation} :op} candidate-op
            result (operation text)]
        (if (and
              (precondition text op-history)
              (not (contains? text-history result)))
          candidate-op
          (recur (rand-op)))))))

(defn generate-ops [start-text steps operations-config]
  (letfn [
    (step [{text :text op-history :op-history text-history :text-history}]
      (let [op-sort (:type operations-config)
            {op-name :op-name op :op} (generate-op
                                        (operations/operations op-sort)
                                        (:list operations-config)
                                        text
                                        op-history
                                        text-history)
            result ((:operation op) text)]
        {:text result
         :op-history (conj op-history op-name)
         :text-history (conj text-history result)}))]
    (accumulate
      step
      {:text start-text :op-history '() :text-history #{start-text}}
      steps)))

(defn generate-candidate [config]
  (let [start (generate-start (:type (:operations config)) (:start-length config))
        steps (rand-interval (:steps config))
        target ((generate-ops start steps (:operations config)) :text)]
    {:start start
     :target target
     :steps steps}))

(defn generate-challenge [config]
  (let [operations-map (operations/operations (->> config :operations :type))
        operations (vals operations-map)
        candidates (repeatedly 5 #(generate-candidate config))
        solved (map
                 #(merge
                    %
                    (solver/get-min-and-count
                      (:start %)
                      (:target %)
                      operations
                      (:steps %)))
                 candidates)]
    (apply max-key
      #(- (* (:min %) 500) (:count %))
      solved)))