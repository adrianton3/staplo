(ns staplo.operations
  (:require
    [clojure.string :as str]))

(defn wrap-endec [fun]
  #(js/parseInt (fun (.toString %)) 10))

(def reverse str/reverse)

(defn rotate [string]
  (str
    (last string)
    (subs string 0 (dec (count string)))))

(def operations {
  "strings" {
    "reverse" reverse
    "rotate" rotate
    "pop" #(subs % 0 (dec (count %)))
    "unwrap" #(if (= (first %) (last %)) (subs % 1 (dec (count %))) %)
    "duplicate" #(str % %)
    "duplicate-last" #(str % (last %))
    "push-a" #(str % "a")
    "push-b" #(str % "b")
    "push-c" #(str % "c")
    "ab -> c" #(str/replace % #"ab" "c")
    "bc -> a" #(str/replace % #"bc" "a")
    "ca -> b" #(str/replace % #"ca" "b")}
  "numbers" {
    "+7" #(+ 7 %)
    "+9" #(+ 9 %)
    "*2" #(* 2 %)
    "*5" #(* 5 %)
    "*11" #(* 11 %)
    "sqr" #(* % %)
    "reverse" (wrap-endec reverse)
    "rotate" (wrap-endec rotate)
  }})
