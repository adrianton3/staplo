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

(defn generate-op-try [op-seq state op-history state-history]
  (loop [op (rand-nth op-seq)
         tries-remaining 20]
    (cond
      (zero? tries-remaining) nil
      (and
        ((:precondition op) state op-history)
        ((:generator-precondition op) state op-history)
        (not (contains? state-history ((:operation op) state))))
      op
      :else (recur (rand-nth op-seq) (dec tries-remaining)))))

(defn generate-ops-try [start-state step-count op-seq]
  (loop [state start-state
         remaining step-count
         op-history '()
         state-history (list start-state)]
    (let [op (generate-op-try op-seq state op-history state-history)]
      (cond
        (zero? remaining) {:state state
                           :op-history op-history
                           :state-history state-history}
        (nil? op) nil
        :else (let [new-state ((:operation op) state)]
                (recur
                  new-state
                  (dec remaining)
                  (conj op-history (:name op))
                  (conj state-history new-state)))))))

(defn generate-ops [start-state step-count level-op-config op-config]
  (let [op-map (op-config (:type level-op-config))
        op-names (:list level-op-config)
        op-seq (for [name op-names]
                 (assoc (op-map name) :name name))]
    (loop [ops nil]
      (if (nil? ops)
        (recur (generate-ops-try start-state step-count op-seq))
        ops))))

(defn generate-candidate [level-config]
  (let [start (generate-start (:type (:operations level-config)) (:start-length level-config))
        steps (rand-interval (:steps level-config))
        generated (generate-ops start steps (:operations level-config) operations/operations)]
    {:start start
     :target (:state generated)
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