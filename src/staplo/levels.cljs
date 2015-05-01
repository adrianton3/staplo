(ns staplo.levels)

(defn interval [start end]
  {:start start :end end})

(def level-configs [
  {
    :name "easy"
    :start-length (interval 3 4)
    :operations ["reverse" "rotate"]
    :steps (interval 3 4)}
  {
    :name "medium"
    :start-length (interval 4 5)
    :operations ["reverse" "rotate"]
    :steps (interval 4 5)}])