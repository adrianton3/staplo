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
        (.toEqual (expect (unwrap "")) "")))))