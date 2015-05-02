(ns staplo.generator
  (:require
    [staplo.operations :as operations]))

(defn rand2 [start end]
  (+ start (rand-int (- end start))))

(defn rand-interval [{:keys [start end]}]
  (rand2 start end))

; clojure probably has this already
(defn accumulate [fun base times]
  (reduce
    #(fun %)
    base
    (range 0 times)))

(defn generate-string [length chars]
  (accumulate
    #(str % (rand-nth chars))
    ""
    length))

(defn generate-ops [start-text steps operations]
  (letfn [
    (step [text]
      (let [op-name (rand-nth operations)
            op (get operations/operations op-name)]
        (op text)))]
    (accumulate step start-text steps)))

(defn generate-challenge [config]
  (let [char-sets [["a" "b"] ["a" "b" "c"]]
        char-set (rand-nth char-sets)
        start-length (rand-interval (:start-length config))
        start (generate-string start-length char-set)
        steps (rand-interval (:steps config))
        target (generate-ops start steps (:operations config))]
    {:start start
     :target target}))