(ns staplo-test.operations
  (:require
    [staplo.operations :as operations])
  (:require-macros [staplo-test.jasmine :refer [describe it expect]]))

(enable-console-print!)

(def string-ops (get operations/operations "strings"))
(def number-ops (get operations/operations "numbers"))
(def stack-ops (get operations/operations "stack"))

(describe "strings"
  (describe "rotate"
    (let [rotate (:operation (get string-ops "rotate"))]

      (it "rotates a string"
        (.toEqual (expect (rotate "asd")) "das"))

      (it "does nothing to an empty string"
        (.toEqual (expect (rotate "")) ""))))

  (describe "reverse"
    (let [reverse (:operation (get string-ops "reverse"))]
      (it "reverses a string"
        (.toEqual (expect (reverse "asd")) "dsa"))

      (it "does nothing to an empty string"
        (.toEqual (expect (reverse "")) ""))))

  (describe "pop"
    (let [pop (:operation (get string-ops "pop"))]
      (it "removes the last character of a string"
        (.toEqual (expect (pop "asd")) "as"))

      (it "does nothing to an empty string"
        (.toEqual (expect (pop "")) ""))))

  (describe "unwrap"
    (let [unwrap (:operation (get string-ops "unwrap"))]
      (it "removes the first and last characters when they are the same"
        (.toEqual (expect (unwrap "asda")) "sd"))

      (it "does not remove the first and last characters when they are not the same"
        (.toEqual (expect (unwrap "asdf")) "asdf"))

      (it "does nothing to a single letter string"
        (.toEqual (expect (unwrap "a")) "a"))

      (it "unwraps a double letter string"
        (.toEqual (expect (unwrap "aa")) ""))

      (it "does nothing to an empty string"
        (.toEqual (expect (unwrap "")) ""))))

  (describe "duplicate"
    (let [duplicate (:operation (get string-ops "duplicate"))]
      (it "duplicates a string"
        (.toEqual (expect (duplicate "asd")) "asdasd"))

      (it "does nothing to an empty string"
        (.toEqual (expect (duplicate "")) ""))))

  (describe "duplicate-last"
    (let [duplicate-last (:operation (get string-ops "duplicate-last"))]
      (it "duplicates the last character of a string"
        (.toEqual (expect (duplicate-last "asd")) "asdd"))

      (it "does nothing to an empty string"
        (.toEqual (expect (duplicate-last "")) "")))))

(describe "numbers"
  (describe "rotate"
    (let [rotate (:operation (get number-ops "rotate"))]
      (it "rotates a number"
        (.toEqual (expect (rotate 1234)) 4123))

      (it "does nothing to a single digit number"
        (.toEqual (expect (rotate 3)) 3))

      (it "cancels leading zeros"
        (.toEqual (expect (rotate 400)) 40))))

  (describe "reverse"
    (let [reverse (:operation (get number-ops "reverse"))]
      (it "reverses a number"
        (.toEqual (expect (reverse 1234)) 4321))

      (it "does nothing to a single digit number"
        (.toEqual (expect (reverse 3)) 3))

      (it "cancels leading zeros"
        (.toEqual (expect (reverse 400)) 4)))))