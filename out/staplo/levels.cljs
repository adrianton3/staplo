(ns staplo.levels)

(defn interval [start end]
  {:start start :end end})

(def level-configs {
  "strings" [
    {
      :name "easy"
      :start-length (interval 3 4)
      :operations {:type "strings" :list ["reverse" "rotate" "push-c"]}
      :steps (interval 3 4)}
    {
      :name "medium"
      :start-length (interval 4 5)
      :operations {:type "strings" :list ["reverse" "rotate" "duplicate-last" "unwrap"]}
      :steps (interval 4 5)}
    {
      :name "hard"
      :start-length (interval 4 5)
      :operations {:type "strings" :list ["reverse" "rotate" "unwrap"
                   "push-a"
                   "push-b"
                   "push-c"]}
      :steps (interval 4 5)}
    {
      :name "harder"
      :start-length (interval 5 6)
      :operations {:type "strings" :list ["reverse" "rotate" "duplicate-last" "pop"
                   "ab -> c"
                   "bc -> a"
                   "ca -> b"]}
      :steps (interval 4 5)}]
  "numbers" [
    {
      :name "easy"
      :start-length (interval 2 20)
      :operations {:type "numbers" :list ["+7" "+9" "*2"]}
      :steps (interval 3 4)}
    {
      :name "medium"
      :start-length (interval 2 20)
      :operations {:type "numbers" :list ["+7" "+9" "*2" "*11" "sqr"]}
      :steps (interval 4 5)}
    {
      :name "hard"
      :start-length (interval 10 20)
      :operations {:type "numbers" :list ["reverse" "rotate" "+7" "*2"]}
      :steps (interval 4 5)}
    {
      :name "harder"
      :start-length (interval 10 20)
      :operations {:type "numbers" :list ["reverse" "rotate" "+7" "+9" "*5" "*11"]}
      :steps (interval 5 6)}]})