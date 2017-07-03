(ns staplo.solver)

(defn get-min-and-count [start target operations length-max]
  (letfn [(recurse [state length]
            (cond
              (= state target) {:min length :count 1}
              (> length length-max) nil
              :else (reduce
                      #(if ((:precondition %2) state)
                         (let [new-state ((:operation %2) state)
                               new-length (inc length)
                               partial-result (recurse new-state new-length)]
                           (cond
                             (nil? partial-result) %1
                             (nil? %1) partial-result
                             :else {:min (min (:min partial-result) (:min %1))
                                    :count (+ (:count partial-result) (:count %1))}))
                         %1)
                      nil
                      operations)))]
         (recurse start 0)))