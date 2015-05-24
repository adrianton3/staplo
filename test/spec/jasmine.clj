(ns staplo-test.jasmine)

(defmacro describe [text & body]
  `(js/describe ~text
     (fn [] ~@body)))

(defmacro it [text & body]
  `(js/it ~text
     (fn [] ~@body)))

(defmacro expect [argument]
  `(js/expect ~argument))