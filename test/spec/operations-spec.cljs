(ns staplo-test.operations
  (:require
    [staplo.operations :as operations])
  (:require-macros [staplo-test.jasmine :as jas]))

(enable-console-print!)

(def string-ops (get operations/operations "strings"))
(def number-ops (get operations/operations "numbers"))
(def stack-ops (get operations/operations "stack"))

(jas/describe "strings"
  (jas/describe "rotate"
    (let [rotate (:operation (get string-ops "rotate"))]

      (jas/it "rotates a string"
        (.toEqual (jas/expect (rotate "asd")) "das"))

      (jas/it "does nothing to an empty string"
        (.toEqual (jas/expect (rotate "")) ""))))

    (jas/describe "reverse"
      (let [reverse (:operation (get string-ops "reverse"))]
        (jas/it "reverses a string"
          (.toEqual (jas/expect (reverse "asd")) "dsa"))

        (jas/it "does nothing to an empty string"
          (.toEqual (jas/expect (reverse "")) "")))))