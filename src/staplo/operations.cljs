(ns staplo.operations
  (:require
    [clojure.string :as str]))

(def operations {
  "reverse" str/reverse
  "rotate" #(str
              (last %)
              (subs % 0 (dec (count %))))
  "pop" #(subs % 0 (dec (count %)))
  "unwrap" #(if (= (first %) (last %)) (subs % 1 (dec (count %))) %)
  "duplicate" #(str % %)
  "duplicate-last" #(str % (last %))
  "push-a" #(str % "a")
  "push-b" #(str % "b")
  "push-c" #(str % "c")
  "ab -> c" #(str/replace % #"ab" "c")
  "bc -> a" #(str/replace % #"bc" "a")
  "ca -> b" #(str/replace % #"ca" "b")})
