(ns staplo.common)

(defn interval [start end]
  {:start start :end end})

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