(ns spec.solver
  (:require
    [staplo.solver :as solver])
  (:require-macros [utils.jasmine :refer [describe it expect]]))

(enable-console-print!)

(describe
  "solver"
  (describe
    "get-min-and-count"
    (let [operations [{:precondition (constantly true)
                       :operation (partial + 1)}]
          operations-two [{:precondition (constantly true)
                           :operation (partial + 1)}
                          {:precondition (constantly true)
                           :operation (partial + 2)}]
          operations-three [{:precondition (constantly true)
                             :operation (partial + 1)}
                            {:precondition (constantly true)
                             :operation (partial + 3)}
                            {:precondition (constantly true)
                             :operation (partial + 5)}]]
      (it "finds the trivial solution"
          (let [result (solver/get-min-and-count 1 3 operations 10)]
            (.toEqual (expect (:min result)) 2)))

      (it "finds the solution in the minimum number of steps"
          (let [result (solver/get-min-and-count 1 7 operations-three 10)]
            (.toEqual (expect (:min result)) 2)))

      (it "finds all solutions"
          (let [result (solver/get-min-and-count 1 4 operations-two 10)]
            (.toEqual (expect (:count result)) 3))))))