(ns staplo.levels)

(defn interval [start end]
  {:start start :end end})

(def level-configs [
  {
    :name "easy"
    :start-length (interval 3 4)
    :operations ["reverse" "rotate" "push-c"]
    :steps (interval 3 4)}
  {
    :name "medium"
    :start-length (interval 4 5)
    :operations ["reverse" "rotate" "duplicate-last" "unwrap"]
    :steps (interval 4 5)}
  {
    :name "hard"
    :start-length (interval 4 5)
    :operations ["reverse" "rotate" "unwrap"
                 "push-a"
                 "push-b"
                 "push-c"]
    :steps (interval 4 5)}
  {
    :name "harder"
    :start-length (interval 5 6)
    :operations ["reverse" "rotate" "duplicate-last" "pop"
                 "ab -> c"
                 "bc -> a"
                 "ca -> b"]
    :steps (interval 4 5)}])