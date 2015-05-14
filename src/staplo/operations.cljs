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

(defn safe-apply [operation]
  (fn [stack]
    (if (>= (count stack) 2)
      (operation stack)
      stack)))

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
                  (safe-apply #(conj
                                 (next (next %))
                                 (+
                                   (first %)
                                   (first (next %)))))
                  (constantly true))
            "-" (operation-pair
                  (safe-apply #(conj
                                 (next (next %))
                                 (-
                                   (first %)
                                   (first (next %)))))
                  (constantly true))
            "*" (operation-pair
                  (safe-apply #(conj
                                 (next (next %))
                                 (*
                                   (first %)
                                   (first (next %)))))
                  #(<=
                     (*
                       (first %)
                       (first (next %)))
                     100))
            "/" (operation-pair
                  (safe-apply #(conj
                                 (next (next %))
                                 (quot
                                   (first %)
                                   (first (next %)))))
                  #(not= (first (next %)) 0))
            }})
