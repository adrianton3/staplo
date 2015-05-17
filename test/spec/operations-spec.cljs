(ns staplo-test.operations
  (:require
    [staplo.operations :as operations]))

(enable-console-print!)

(def string-ops (get operations/operations "strings"))
(def number-ops (get operations/operations "numbers"))
(def stack-ops (get operations/operations "stack"))

(js/describe "strings" (fn []
  (js/describe "rotate" (fn []
    (let [rotate (:operation (get string-ops "rotate"))]
      (js/it "rotates a string" (fn []
        (.toEqual (js/expect (rotate "asd")) "das"))))))))