goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../staplo/common.js", ['staplo.common'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../staplo/operations.js", ['staplo.operations'], ['cljs.core', 'clojure.string']);
goog.addDependency("../staplo/generator.js", ['staplo.generator'], ['cljs.core', 'staplo.common', 'staplo.operations', 'clojure.string']);
goog.addDependency("../staplo/html.js", ['staplo.html'], ['cljs.core']);
goog.addDependency("../staplo/levels.js", ['staplo.levels'], ['cljs.core', 'staplo.common']);
goog.addDependency("../staplo/core.js", ['staplo.core'], ['staplo.generator', 'cljs.core', 'staplo.html', 'staplo.levels', 'staplo.operations']);