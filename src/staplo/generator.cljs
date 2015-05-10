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

; way too many parameters
(defn generate-op [operations operation-names start-text text history]
  (let [rand-op
        #(let [op-name (rand-nth operation-names)]
            {:op-name op-name
             :op (operations op-name)})]
    (loop [candidate-op (rand-op)]
      (let [{{precondition :precondition operation :operation} :op} candidate-op
            result (operation text)]
        (if (and (precondition text history) (not= start-text result))
          candidate-op
          (recur (rand-op)))))))

(defn generate-ops [start-text steps operations-config]
  (letfn [
    (step [{text :text history :history}]
      (let [op-sort (:type operations-config)
            {op-name :op-name op :op} (generate-op
                                        (operations/operations op-sort)
                                        (:list operations-config)
                                        start-text
                                        text
                                        history)]
        {:text ((:operation op) text)
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