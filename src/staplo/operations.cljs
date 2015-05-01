(ns staplo.operations
  (:require
    [clojure.string :as str]))

(def operations {
  "reverse" str/reverse
  "pop" (fn [string] (subs string 0 (- (count string) 1)))
  "duplicate" (fn [string] (str string string))
  "rotate" (fn [string] (str
                          (last string)
                          (subs string 0 (dec (count string)))))
  "push-a" (fn [string] (str string "a"))
  "push-b" (fn [string] (str string "b"))})


;"unwrap"
;"duplicate-last"
