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

(defn if-cond [predicate fun]
  #(if (predicate %) (fun %) %))

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
              "reverse" (operation-pair
                          str/reverse
                          #(and
                             (not= % (str/reverse %))
                             (or
                               (empty? %2)
                               (not= (first %2) "reverse"))))
              "rotate" (operation-pair
                         rotate
                         #(not (same-char? %)))
              "pop" (operation-pair
                      (if-cond
                        #(> (count %) 1)
                        #(subs % 0 (dec (count %))))
                      #(> (count %) 1))
              "unwrap" (operation-pair
                         (if-cond
                            #(= (first %) (last %))
                            #(subs % 1 (dec (count %))))
                         #(and (= (first %) (last %)) (> (count %) 2)))
              "duplicate" (operation-pair
                            #(str % %)
                            #(< (count %) 4))
              "duplicate-last" (operation-pair
                                 #(str % (last %))
                                 #(< (count %) 6))
              "push-a" (operation-pair
                         #(str % "a")
                         #(< (count %) 6))
              "push-b" (operation-pair
                         #(str % "b")
                         #(< (count %) 6))
              "push-c" (operation-pair
                         #(str % "c")
                         #(< (count %) 6))
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
              "+7" (operation-pair
                     #(+ 7 %)
                     (constantly true))
              "+9" (operation-pair
                     #(+ 9 %)
                     (constantly true))
              "*2" (operation-pair
                     #(* 2 %)
                     #(not= 0 %))
              "*5" (operation-pair
                     #(* 5 %)
                     #(not= 0 %))
              "*11" (operation-pair
                      #(* 11 %)
                      #(not= 0 %))
              "sqr" (operation-pair
                      #(* % %)
                      #(<= % 20))
              "reverse" (operation-pair
                          (wrap-endec str/reverse)
                          #(let [string (.toString %)] (not= (str (str/reverse string)))))
              "rotate" (operation-pair
                         (wrap-endec rotate)
                         #(let [string (.toString %)] (not (same-char? string))))
              }
  "stack" {
            "+" (operation-pair
                  (if-cond
                    at-least-2
                    (bin-op +))
                  (constantly true))
            "-" (operation-pair
                  (if-cond
                    at-least-2
                    (bin-op -))
                  (constantly true))
            "*" (operation-pair
                  (if-cond
                    at-least-2
                    (bin-op *))
                  #(<=
                     (*
                       (first %)
                       (first (next %)))
                     100))
            "/" (let [safe-div
                      #(let [num (first %)
                             div (first (next %))]
                         (and
                           (not= div 0)
                           (integer? (/ num div))))]
                  (operation-pair
                    (if-cond
                      #(and
                         (at-least-2 %)
                         (safe-div %))
                      (bin-op /))
                    safe-div))
            }})
