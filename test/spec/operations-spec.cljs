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
          (.toEqual (expect (reverse "")) "")))))