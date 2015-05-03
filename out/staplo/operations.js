// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.operations');
goog.require('cljs.core');
goog.require('clojure.string');
staplo.operations.wrap_endec = (function wrap_endec(fun){
return (function (p1__11976_SHARP_){
return parseInt(fun.call(null,p1__11976_SHARP_.toString()),(10));
});
});
staplo.operations.reverse = clojure.string.reverse;
staplo.operations.rotate = (function rotate(string){
return [cljs.core.str(cljs.core.last.call(null,string)),cljs.core.str(cljs.core.subs.call(null,string,(0),(cljs.core.count.call(null,string) - (1))))].join('');
});
staplo.operations.operations = new cljs.core.PersistentArrayMap(null, 2, ["strings",cljs.core.PersistentHashMap.fromArrays(["push-c","bc -> a","ca -> b","ab -> c","pop","reverse","push-b","unwrap","duplicate","push-a","duplicate-last","rotate"],[(function (p1__11983_SHARP_){
return [cljs.core.str(p1__11983_SHARP_),cljs.core.str("c")].join('');
}),(function (p1__11985_SHARP_){
return clojure.string.replace.call(null,p1__11985_SHARP_,/bc/,"a");
}),(function (p1__11986_SHARP_){
return clojure.string.replace.call(null,p1__11986_SHARP_,/ca/,"b");
}),(function (p1__11984_SHARP_){
return clojure.string.replace.call(null,p1__11984_SHARP_,/ab/,"c");
}),(function (p1__11977_SHARP_){
return cljs.core.subs.call(null,p1__11977_SHARP_,(0),(cljs.core.count.call(null,p1__11977_SHARP_) - (1)));
}),staplo.operations.reverse,(function (p1__11982_SHARP_){
return [cljs.core.str(p1__11982_SHARP_),cljs.core.str("b")].join('');
}),(function (p1__11978_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__11978_SHARP_),cljs.core.last.call(null,p1__11978_SHARP_))){
return cljs.core.subs.call(null,p1__11978_SHARP_,(1),(cljs.core.count.call(null,p1__11978_SHARP_) - (1)));
} else {
return p1__11978_SHARP_;
}
}),(function (p1__11979_SHARP_){
return [cljs.core.str(p1__11979_SHARP_),cljs.core.str(p1__11979_SHARP_)].join('');
}),(function (p1__11981_SHARP_){
return [cljs.core.str(p1__11981_SHARP_),cljs.core.str("a")].join('');
}),(function (p1__11980_SHARP_){
return [cljs.core.str(p1__11980_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__11980_SHARP_))].join('');
}),staplo.operations.rotate]),"numbers",new cljs.core.PersistentArrayMap(null, 8, ["+7",(function (p1__11987_SHARP_){
return ((7) + p1__11987_SHARP_);
}),"+9",(function (p1__11988_SHARP_){
return ((9) + p1__11988_SHARP_);
}),"*2",(function (p1__11989_SHARP_){
return ((2) * p1__11989_SHARP_);
}),"*5",(function (p1__11990_SHARP_){
return ((5) * p1__11990_SHARP_);
}),"*11",(function (p1__11991_SHARP_){
return ((11) * p1__11991_SHARP_);
}),"sqr",(function (p1__11992_SHARP_){
return (p1__11992_SHARP_ * p1__11992_SHARP_);
}),"reverse",staplo.operations.wrap_endec.call(null,staplo.operations.reverse),"rotate",staplo.operations.wrap_endec.call(null,staplo.operations.rotate)], null)], null);

//# sourceMappingURL=operations.js.map