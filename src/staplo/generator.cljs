(ns staplo.generator
  (:require
    [clojure.string :as str]
    [staplo.operations :as operations]))

(defn rand2 [start end]
  (+ start (rand-int (inc (- end start)))))

(defn rand-interval [{:keys [start end]}]
  (rand2 start end))

; clojure probably has this already
(defn accumulate [fun base times]
  (reduce
    #(fun %)
    base
    (range 0 times)))

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

(defn generate-start [type length]
  ((if (= type "strings")
     generate-string
     generate-number) length))


(defn generate-ops [start-text steps operations]
  (letfn [
    (step [{text :text history :history}]
      (let [op-sort (:type operations)
            op-name (rand-nth (:list operations))
            {op :operation} ((operations/operations op-sort) op-name)]
        {:text (op text)
         :history (conj history op-name)}))]
    (accumulate
      step
      {:text start-text :history '()}
      steps)))

(defn generate-challenge [config]
  (let [start (generate-start (:type (:operations config)) (:start-length config))
        steps (rand-interval (:steps config))
        target ((generate-ops start steps (:operations config)) :text)]
    {:start start
     :target target}))