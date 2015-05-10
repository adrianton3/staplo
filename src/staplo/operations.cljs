(ns staplo.operations
  (:require
    [clojure.string :as str]))

(defn wrap-endec [fun]
  #(js/parseInt (fun (.toString %)) 10))

(defn rotate [string]
  (str
    (last string)
    (subs string 0 (dec (count string)))))

(defn same-char? [string]
  (apply = (str/split string "")))

(defn operation-pair [op precondition]
  {:operation op :precondition precondition})

(defn contains-str [string substring]
  (> (.indexOf string substring) -1))

(def operations {
  "strings" {
              "reverse" (operation-pair
                          str/reverse
                          #(and (not= % (str/reverse %)) (or (empty? %2) (not= (first %2) "reverse"))))
              "rotate" (operation-pair
                         rotate
                         #(not (same-char? %)))
              "pop" (operation-pair
                      #(subs % 0 (dec (count %)))
                      #(> (count %) 1))
              "unwrap" (operation-pair
                         #(if (= (first %) (last %)) (subs % 1 (dec (count %))) %)
                         #(and (= (first %) (last %)) (> (count %) 2)))
              "duplicate" (operation-pair
                            #(str % %)
                            #(< (count %) 4))
              "duplicate-last" (operation-pair
                                 #(str % (last %))
                                 #(< (count %) 5))
              "push-a" (operation-pair
                         #(str % "a")
                         #(< (count %) 5))
              "push-b" (operation-pair
                         #(str % "b")
                         #(< (count %) 5))
              "push-c" (operation-pair
                         #(str % "c")
                         #(< (count %) 5))
              "ab -> c" (operation-pair
                          #(replace % #"ab" "c")
                          #(contains-str % "ab"))
              "bc -> a" (operation-pair
                          #(replace % #"bc" "a")
                          #(contains-str % "bc"))
              "ca -> b" (operation-pair
                          #(replace % #"ca" "b")
                          #(contains-str % "ca"))
              }
  "numbers" {
    "+7" #(+ 7 %)
    "+9" #(+ 9 %)
    "*2" #(* 2 %)
    "*5" #(* 5 %)
    "*11" #(* 11 %)
    "sqr" #(* % %)
    "reverse" (wrap-endec str/reverse)
    "rotate" (wrap-endec rotate)
  }})
