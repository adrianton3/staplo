(ns staplo.generator
  (:require
    [staplo.operations :as operations]))

(defn generate-string [length chars]
  (reduce
    #(str % (rand-nth chars))
    ""
    (range 0 length)))

(defn generate-ops [start-text steps operations]
  (letfn [
    (step [text]
      (let [op-name (rand-nth operations)
            op (get operations/operations op-name)]
        (op text)))]
    (reduce
      step
      start-text
      (range 0 steps))))

(defn generate-challenge [config]
  (let [char-sets [["a" "b"] ["a" "b" "c"]]
        char-set (rand-nth char-sets)
        start (generate-string 4 char-set)
        target (generate-ops start 3 (:operations config))]
    {:start start
     :target target}))