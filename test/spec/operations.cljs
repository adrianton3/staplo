(ns spec.operations
  (:require
    [staplo.operations :as operations])
  (:require-macros [utils.jasmine :refer [describe it expect]]))

(enable-console-print!)

(def string-ops (get operations/operations "strings"))
(def number-ops (get operations/operations "numbers"))
(def stack-ops (get operations/operations "stack"))

(describe
  "strings"
  (describe
    "rotate"
    (describe
      "precondition"
      (let [precondition (get-in string-ops ["rotate" :precondition])]
        (it "passes"
            (.toEqual (expect (precondition "asd")) true))

        (it "fails if all chars are the same"
            (.toEqual (expect (precondition "aaa")) false))))

    (describe
      "operation"
      (let [rotate (:operation (get string-ops "rotate"))]
        (it "rotates a string"
            (.toEqual (expect (rotate "asd")) "das")))))

  (describe
    "reverse"
    (let [reverse (:operation (get string-ops "reverse"))]
      (it "reverses a string"
          (.toEqual (expect (reverse "asd")) "dsa"))))

  (describe
    "pop"
    (let [pop (:operation (get string-ops "pop"))]
      (it "removes the last character of a string"
          (.toEqual (expect (pop "asd")) "as"))))

  (describe
    "unwrap"
    (describe
      "precondition"
      (let [precondition (get-in string-ops ["unwrap" :precondition])]
        (it "passes"
            (.toEqual (expect (precondition "asda")) true))

        (it "fails for a string with different first and last chars"
            (.toEqual (expect (precondition "asd")) false))

        (it "fails for a 2-char string"
            (.toEqual (expect (precondition "aa")) false))))

    (describe
      "operation"
      (let [unwrap (get-in string-ops ["unwrap" :operation])]
        (it "removes the first and last characters"
            (.toEqual (expect (unwrap "asda")) "sd")))))

  (describe
    "duplicate"
    (let [duplicate (:operation (get string-ops "duplicate"))]
      (it "duplicates a string"
          (.toEqual (expect (duplicate "asd")) "asdasd"))))

  (describe
    "duplicate-last"
    (let [duplicate-last (:operation (get string-ops "duplicate-last"))]
      (it "duplicates the last character of a string"
          (.toEqual (expect (duplicate-last "asd")) "asdd")))))


(describe
  "numbers"
  (describe
    "rotate"
    (describe
      "precondition"
      (let [precondition (get-in number-ops ["rotate" :precondition])]
        (it "passes"
            (.toEqual (expect (precondition 1234)) true))

        (it "fails for a single digit number"
            (.toEqual (expect (precondition 3)) false))

        (it "fails if all digits are the same"
            (.toEqual (expect (precondition 333)) false))))

    (describe
      "operation"
      (let [rotate (get-in number-ops ["rotate" :operation])]
        (it "rotates a number"
            (.toEqual (expect (rotate 1234)) 4123))

        (it "cancels leading zeros"
            (.toEqual (expect (rotate 400)) 40)))))

  (describe
    "reverse"
    (describe
      "precondition"
      (let [precondition (get-in number-ops ["reverse" :precondition])]
        (it "passes"
            (.toEqual (expect (precondition 1234)) true))

        (it "fails for a palindromic number"
            (.toEqual (expect (precondition 323)) false))))

    (describe
      "operation"
      (let [reverse (get-in number-ops ["reverse" :operation])]
        (it "reverses a number"
            (.toEqual (expect (reverse 1234)) 4321))

        (it "cancels leading zeros"
            (.toEqual (expect (reverse 400)) 4))))))


(describe
  "stack"
  (describe
    "+"
    (let [plus (:operation (get stack-ops "+"))]
      (it "adds the two top numbers"
          (.toEqual (expect (plus '(3 8 1 2))) '(11 1 2)))))

  (describe
    "/"
    (describe
      "precondition"
      (let [precondition (:precondition (get stack-ops "/"))]
        (it "passes"
            (.toEqual (expect (precondition '(8 4 1 2))) true))

        (it "fails if the result would not be an integer"
            (.toEqual (expect (precondition '(8 3 1 2))) false))

        (it "fails if the divisor is 0"
            (.toEqual (expect (precondition '(8 0 1 2))) false))

        (it "fails for a one element stack"
            (.toEqual (expect (precondition '(3))) false))

        (it "fails for an empty stack"
            (.toEqual (expect (precondition '())) false))))

    (describe
      "operation"
      (let [divide (:operation (get stack-ops "/"))]
        (it "divides the two top numbers"
            (.toEqual (expect (divide '(8 4 1 2))) '(2 1 2)))))))