(ns staplo.html)

(defn set-text! [id text]
  (set!
    (.-textContent (.getElementById js/document id))
    text))

(defn add-class! [id class]
  (.add (.-classList (.getElementById js/document id)) class))

(defn remove-class! [id class]
  (.remove (.-classList (.getElementById js/document id)) class))

(defn on-click [id handler]
  (let [element (.getElementById js/document id)]
    (.addEventListener element "click" handler)))

(defn create-list-item [text]
  (let [item (.createElement js/document "li")]
    (set! (.-textContent item) text)
    item))

(defn update-list!
  ([id elements]
    (let [list (.getElementById js/document id)]
      ; clear the list
      (set! (.-innerHTML list) "")
      ; add new elements to it
      (doseq [element elements]
        (let [item (create-list-item element)]
          (.appendChild list item)))))
  ([id elements handler]
    (let [list (.getElementById js/document id)]
      ; clear the list
      (set! (.-innerHTML list) "")
      ; add new elements to it
      (doseq [element elements]
        (let [item (create-list-item element)]
          (.addEventListener item "click" (partial handler element))
          (.appendChild list item))))))

(defn create-element [tag id]
  (let [element (.createElement js/document tag)]
    (set! (.-id element) id)
    element))