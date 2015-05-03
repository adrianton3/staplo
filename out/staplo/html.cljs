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

(defn create-list-item [text handler]
  (let [item (.createElement js/document "li")]
    (set! (.-textContent item) text)
    (.addEventListener item "click" (partial handler text))
    item))

(defn update-list! [id elements handler]
  (let [list (.getElementById js/document id)]
    ; clear the list
    (set! (.-innerHTML list) "")
    ; add new elements to it
    (doseq [element elements]
      (let [item (create-list-item element handler)]
        (.appendChild list item)))))