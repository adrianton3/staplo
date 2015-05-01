(ns staplo.generator
  (:require
    [staplo.operations :as operations]))

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
  (let [start "abc"
        target (generate-ops start 3 (:operations config))]
    {:start start
     :target target}))