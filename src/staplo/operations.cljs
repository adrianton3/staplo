(ns staplo.operations
  (:require
    [clojure.string :as str]))

(defn wrap-endec [fun]
  #(-> % str fun int))

(defn rotate [string]
  (str
    (last string)
    (subs string 0 (dec (count string)))))

(defn same-char? [string]
  (apply = (str/split string "")))

(defn make-operation
  ([op precondition]
   {:operation op
    :precondition precondition
    :generator-precondition precondition})
  ([op precondition generator-precondition]
   {:operation op
    :precondition precondition
    :generator-precondition generator-precondition}))

(defn contains-str [string substring]
  (> (.indexOf string substring) -1))

(defn at-least [min-size collection]
  (>= (count collection) min-size))

(def at-least-2 (partial at-least 2))

(defn bin-op [op]
  #(conj
     (next (next %))
     (op
       (first %)
       (first (next %)))))

(def operations {
  "strings" {
              "reverse" (make-operation
                          str/reverse
                          #(not= % (str/reverse %))
                          #(or
                             (empty? %2)
                             (not= (first %2) "reverse")))
              "rotate" (make-operation
                         rotate
                         #(not (same-char? %)))
              "pop" (make-operation
                      #(subs % 0 (dec (count %)))
                      #(> (count %) 1))
              "unwrap" (make-operation
                         #(subs % 1 (dec (count %)))
                         #(and
                            (= (first %) (last %))
                            (> (count %) 2)))
              "duplicate" (make-operation
                            #(str % %)
                            (constantly true)
                            #(< (count %) 4))
              "duplicate-last" (make-operation
                                 #(str % (last %))
                                 (constantly true)
                                 #(< (count %) 6))
              "push-a" (make-operation
                         #(str % "a")
                         (constantly true)
                         #(< (count %) 6))
              "push-b" (make-operation
                         #(str % "b")
                         (constantly true)
                         #(< (count %) 6))
              "push-c" (make-operation
                         #(str % "c")
                         (constantly true)
                         #(< (count %) 6))
              "ab -> c" (make-operation
                          #(str/replace % #"ab" "c")
                          #(contains-str % "ab"))
              "bc -> a" (make-operation
                          #(str/replace % #"bc" "a")
                          #(contains-str % "bc"))
              "ca -> b" (make-operation
                          #(str/replace % #"ca" "b")
                          #(contains-str % "ca"))
              }
  "numbers" {
              "+7" (make-operation
                     #(+ 7 %)
                     (constantly true))
              "+9" (make-operation
                     #(+ 9 %)
                     (constantly true))
              "*2" (make-operation
                     #(* 2 %)
                     (constantly true)
                     #(not= 0 %))
              "*5" (make-operation
                     #(* 5 %)
                     (constantly true)
                     #(not= 0 %))
              "*11" (make-operation
                      #(* 11 %)
                      (constantly true)
                      #(not= 0 %))
              "sqr" (make-operation
                      #(* % %)
                      (constantly true)
                      #(<= % 20))
              "reverse" (make-operation
                          (wrap-endec str/reverse)
                          #(not= % ((wrap-endec str/reverse) %)))
              "rotate" (make-operation
                         (wrap-endec rotate)
                         #(not (same-char? (str %))))
              }
  "stack" {
            "+" (make-operation
                  (bin-op +)
                  at-least-2)
            "-" (make-operation
                  (bin-op -)
                  at-least-2)
            "*" (make-operation
                  (bin-op *)
                  at-least-2
                  #(<=
                     (*
                       (first %)
                       (first (next %)))
                     100))
            "/" (let [safe-div?
                      #(let [num (first %)
                             div (first (next %))]
                         (and
                           (not= div 0)
                           (integer? (/ num div))))]
                  (make-operation
                    (bin-op /)
                    #(and
                       (at-least-2 %)
                       (safe-div? %))))
            }})
