// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.operations');
goog.require('cljs.core');
goog.require('clojure.string');
staplo.operations.wrap_endec = (function wrap_endec(fun){
return (function (p1__26329_SHARP_){
return parseInt(fun.call(null,p1__26329_SHARP_.toString()),(10));
});
});
staplo.operations.rotate = (function rotate(string){
return [cljs.core.str(cljs.core.last.call(null,string)),cljs.core.str(cljs.core.subs.call(null,string,(0),(cljs.core.count.call(null,string) - (1))))].join('');
});
staplo.operations.same_char_QMARK_ = (function same_char_QMARK_(string){
return cljs.core.apply.call(null,cljs.core._EQ_,clojure.string.split.call(null,string,""));
});
staplo.operations.operation_pair = (function operation_pair(op,precondition){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"precondition","precondition",-1794440545),precondition], null);
});
staplo.operations.contains_str = (function contains_str(string,substring){
return (string.indexOf(substring) > (-1));
});
staplo.operations.operations = new cljs.core.PersistentArrayMap(null, 2, ["strings",cljs.core.PersistentHashMap.fromArrays(["push-c","bc -> a","ca -> b","ab -> c","pop","reverse","push-b","unwrap","duplicate","push-a","duplicate-last","rotate"],[staplo.operations.operation_pair.call(null,(function (p1__26345_SHARP_){
return [cljs.core.str(p1__26345_SHARP_),cljs.core.str("c")].join('');
}),(function (p1__26346_SHARP_){
return (cljs.core.count.call(null,p1__26346_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__26349_SHARP_){
return cljs.core.replace.call(null,p1__26349_SHARP_,/bc/,"a");
}),(function (p1__26350_SHARP_){
return staplo.operations.contains_str.call(null,p1__26350_SHARP_,"bc");
})),staplo.operations.operation_pair.call(null,(function (p1__26351_SHARP_){
return cljs.core.replace.call(null,p1__26351_SHARP_,/ca/,"b");
}),(function (p1__26352_SHARP_){
return staplo.operations.contains_str.call(null,p1__26352_SHARP_,"ca");
})),staplo.operations.operation_pair.call(null,(function (p1__26347_SHARP_){
return cljs.core.replace.call(null,p1__26347_SHARP_,/ab/,"c");
}),(function (p1__26348_SHARP_){
return staplo.operations.contains_str.call(null,p1__26348_SHARP_,"ab");
})),staplo.operations.operation_pair.call(null,(function (p1__26333_SHARP_){
return cljs.core.subs.call(null,p1__26333_SHARP_,(0),(cljs.core.count.call(null,p1__26333_SHARP_) - (1)));
}),(function (p1__26334_SHARP_){
return (cljs.core.count.call(null,p1__26334_SHARP_) > (1));
})),staplo.operations.operation_pair.call(null,clojure.string.reverse,(function (p1__26330_SHARP_,p2__26331_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__26330_SHARP_,clojure.string.reverse.call(null,p1__26330_SHARP_))) && ((cljs.core.empty_QMARK_.call(null,p2__26331_SHARP_)) || (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p2__26331_SHARP_),"reverse")));
})),staplo.operations.operation_pair.call(null,(function (p1__26343_SHARP_){
return [cljs.core.str(p1__26343_SHARP_),cljs.core.str("b")].join('');
}),(function (p1__26344_SHARP_){
return (cljs.core.count.call(null,p1__26344_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__26335_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__26335_SHARP_),cljs.core.last.call(null,p1__26335_SHARP_))){
return cljs.core.subs.call(null,p1__26335_SHARP_,(1),(cljs.core.count.call(null,p1__26335_SHARP_) - (1)));
} else {
return p1__26335_SHARP_;
}
}),(function (p1__26336_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__26336_SHARP_),cljs.core.last.call(null,p1__26336_SHARP_))) && ((cljs.core.count.call(null,p1__26336_SHARP_) > (2)));
})),staplo.operations.operation_pair.call(null,(function (p1__26337_SHARP_){
return [cljs.core.str(p1__26337_SHARP_),cljs.core.str(p1__26337_SHARP_)].join('');
}),(function (p1__26338_SHARP_){
return (cljs.core.count.call(null,p1__26338_SHARP_) < (4));
})),staplo.operations.operation_pair.call(null,(function (p1__26341_SHARP_){
return [cljs.core.str(p1__26341_SHARP_),cljs.core.str("a")].join('');
}),(function (p1__26342_SHARP_){
return (cljs.core.count.call(null,p1__26342_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__26339_SHARP_){
return [cljs.core.str(p1__26339_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__26339_SHARP_))].join('');
}),(function (p1__26340_SHARP_){
return (cljs.core.count.call(null,p1__26340_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,staplo.operations.rotate,(function (p1__26332_SHARP_){
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,p1__26332_SHARP_));
}))]),"numbers",new cljs.core.PersistentArrayMap(null, 8, ["+7",staplo.operations.operation_pair.call(null,(function (p1__26353_SHARP_){
return ((7) + p1__26353_SHARP_);
}),cljs.core.constantly.call(null,true)),"+9",staplo.operations.operation_pair.call(null,(function (p1__26354_SHARP_){
return ((9) + p1__26354_SHARP_);
}),cljs.core.constantly.call(null,true)),"*2",staplo.operations.operation_pair.call(null,(function (p1__26355_SHARP_){
return ((2) * p1__26355_SHARP_);
}),(function (p1__26356_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__26356_SHARP_);
})),"*5",staplo.operations.operation_pair.call(null,(function (p1__26357_SHARP_){
return ((5) * p1__26357_SHARP_);
}),(function (p1__26358_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__26358_SHARP_);
})),"*11",staplo.operations.operation_pair.call(null,(function (p1__26359_SHARP_){
return ((11) * p1__26359_SHARP_);
}),(function (p1__26360_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__26360_SHARP_);
})),"sqr",staplo.operations.operation_pair.call(null,(function (p1__26361_SHARP_){
return (p1__26361_SHARP_ * p1__26361_SHARP_);
}),(function (p1__26362_SHARP_){
return (p1__26362_SHARP_ <= (20));
})),"reverse",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,clojure.string.reverse),(function (p1__26363_SHARP_){
var string = p1__26363_SHARP_.toString();
return cljs.core.not_EQ_.call(null,[cljs.core.str(clojure.string.reverse.call(null,string))].join(''));
})),"rotate",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,staplo.operations.rotate),(function (p1__26364_SHARP_){
var string = p1__26364_SHARP_.toString();
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,string));
}))], null)], null);

//# sourceMappingURL=operations.js.map