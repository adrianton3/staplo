// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.operations');
goog.require('cljs.core');
goog.require('clojure.string');
staplo.operations.wrap_endec = (function wrap_endec(fun){
return (function (p1__35671_SHARP_){
return parseInt(fun.call(null,p1__35671_SHARP_.toString()),(10));
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
staplo.operations.safe_apply = (function safe_apply(operation){
return (function (stack){
if((cljs.core.count.call(null,stack) >= (2))){
return operation.call(null,stack);
} else {
return stack;
}
});
});
staplo.operations.sqrt = Math.sqrt;
staplo.operations.operations = new cljs.core.PersistentArrayMap(null, 3, ["strings",cljs.core.PersistentHashMap.fromArrays(["push-c","bc -> a","ca -> b","ab -> c","pop","reverse","push-b","unwrap","duplicate","push-a","duplicate-last","rotate"],[staplo.operations.operation_pair.call(null,(function (p1__35687_SHARP_){
return [cljs.core.str(p1__35687_SHARP_),cljs.core.str("c")].join('');
}),(function (p1__35688_SHARP_){
return (cljs.core.count.call(null,p1__35688_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__35691_SHARP_){
return cljs.core.replace.call(null,p1__35691_SHARP_,/bc/,"a");
}),(function (p1__35692_SHARP_){
return staplo.operations.contains_str.call(null,p1__35692_SHARP_,"bc");
})),staplo.operations.operation_pair.call(null,(function (p1__35693_SHARP_){
return cljs.core.replace.call(null,p1__35693_SHARP_,/ca/,"b");
}),(function (p1__35694_SHARP_){
return staplo.operations.contains_str.call(null,p1__35694_SHARP_,"ca");
})),staplo.operations.operation_pair.call(null,(function (p1__35689_SHARP_){
return cljs.core.replace.call(null,p1__35689_SHARP_,/ab/,"c");
}),(function (p1__35690_SHARP_){
return staplo.operations.contains_str.call(null,p1__35690_SHARP_,"ab");
})),staplo.operations.operation_pair.call(null,(function (p1__35675_SHARP_){
return cljs.core.subs.call(null,p1__35675_SHARP_,(0),(cljs.core.count.call(null,p1__35675_SHARP_) - (1)));
}),(function (p1__35676_SHARP_){
return (cljs.core.count.call(null,p1__35676_SHARP_) > (1));
})),staplo.operations.operation_pair.call(null,clojure.string.reverse,(function (p1__35672_SHARP_,p2__35673_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__35672_SHARP_,clojure.string.reverse.call(null,p1__35672_SHARP_))) && ((cljs.core.empty_QMARK_.call(null,p2__35673_SHARP_)) || (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p2__35673_SHARP_),"reverse")));
})),staplo.operations.operation_pair.call(null,(function (p1__35685_SHARP_){
return [cljs.core.str(p1__35685_SHARP_),cljs.core.str("b")].join('');
}),(function (p1__35686_SHARP_){
return (cljs.core.count.call(null,p1__35686_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__35677_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__35677_SHARP_),cljs.core.last.call(null,p1__35677_SHARP_))){
return cljs.core.subs.call(null,p1__35677_SHARP_,(1),(cljs.core.count.call(null,p1__35677_SHARP_) - (1)));
} else {
return p1__35677_SHARP_;
}
}),(function (p1__35678_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__35678_SHARP_),cljs.core.last.call(null,p1__35678_SHARP_))) && ((cljs.core.count.call(null,p1__35678_SHARP_) > (2)));
})),staplo.operations.operation_pair.call(null,(function (p1__35679_SHARP_){
return [cljs.core.str(p1__35679_SHARP_),cljs.core.str(p1__35679_SHARP_)].join('');
}),(function (p1__35680_SHARP_){
return (cljs.core.count.call(null,p1__35680_SHARP_) < (4));
})),staplo.operations.operation_pair.call(null,(function (p1__35683_SHARP_){
return [cljs.core.str(p1__35683_SHARP_),cljs.core.str("a")].join('');
}),(function (p1__35684_SHARP_){
return (cljs.core.count.call(null,p1__35684_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__35681_SHARP_){
return [cljs.core.str(p1__35681_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__35681_SHARP_))].join('');
}),(function (p1__35682_SHARP_){
return (cljs.core.count.call(null,p1__35682_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,staplo.operations.rotate,(function (p1__35674_SHARP_){
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,p1__35674_SHARP_));
}))]),"numbers",new cljs.core.PersistentArrayMap(null, 8, ["+7",staplo.operations.operation_pair.call(null,(function (p1__35695_SHARP_){
return ((7) + p1__35695_SHARP_);
}),cljs.core.constantly.call(null,true)),"+9",staplo.operations.operation_pair.call(null,(function (p1__35696_SHARP_){
return ((9) + p1__35696_SHARP_);
}),cljs.core.constantly.call(null,true)),"*2",staplo.operations.operation_pair.call(null,(function (p1__35697_SHARP_){
return ((2) * p1__35697_SHARP_);
}),(function (p1__35698_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__35698_SHARP_);
})),"*5",staplo.operations.operation_pair.call(null,(function (p1__35699_SHARP_){
return ((5) * p1__35699_SHARP_);
}),(function (p1__35700_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__35700_SHARP_);
})),"*11",staplo.operations.operation_pair.call(null,(function (p1__35701_SHARP_){
return ((11) * p1__35701_SHARP_);
}),(function (p1__35702_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__35702_SHARP_);
})),"sqr",staplo.operations.operation_pair.call(null,(function (p1__35703_SHARP_){
return (p1__35703_SHARP_ * p1__35703_SHARP_);
}),(function (p1__35704_SHARP_){
return (p1__35704_SHARP_ <= (20));
})),"reverse",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,clojure.string.reverse),(function (p1__35705_SHARP_){
var string = p1__35705_SHARP_.toString();
return cljs.core.not_EQ_.call(null,[cljs.core.str(clojure.string.reverse.call(null,string))].join(''));
})),"rotate",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,staplo.operations.rotate),(function (p1__35706_SHARP_){
var string = p1__35706_SHARP_.toString();
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,string));
}))], null),"stack",new cljs.core.PersistentArrayMap(null, 4, ["+",staplo.operations.operation_pair.call(null,staplo.operations.safe_apply.call(null,(function (p1__35707_SHARP_){
return cljs.core.conj.call(null,cljs.core.next.call(null,cljs.core.next.call(null,p1__35707_SHARP_)),(cljs.core.first.call(null,p1__35707_SHARP_) + cljs.core.first.call(null,cljs.core.next.call(null,p1__35707_SHARP_))));
})),cljs.core.constantly.call(null,true)),"-",staplo.operations.operation_pair.call(null,staplo.operations.safe_apply.call(null,(function (p1__35708_SHARP_){
return cljs.core.conj.call(null,cljs.core.next.call(null,cljs.core.next.call(null,p1__35708_SHARP_)),(cljs.core.first.call(null,p1__35708_SHARP_) - cljs.core.first.call(null,cljs.core.next.call(null,p1__35708_SHARP_))));
})),cljs.core.constantly.call(null,true)),"*",staplo.operations.operation_pair.call(null,staplo.operations.safe_apply.call(null,(function (p1__35709_SHARP_){
return cljs.core.conj.call(null,cljs.core.next.call(null,cljs.core.next.call(null,p1__35709_SHARP_)),(cljs.core.first.call(null,p1__35709_SHARP_) * cljs.core.first.call(null,cljs.core.next.call(null,p1__35709_SHARP_))));
})),(function (p1__35710_SHARP_){
return ((cljs.core.first.call(null,p1__35710_SHARP_) * cljs.core.first.call(null,cljs.core.next.call(null,p1__35710_SHARP_))) <= (100));
})),"/",staplo.operations.operation_pair.call(null,staplo.operations.safe_apply.call(null,(function (p1__35711_SHARP_){
var num = cljs.core.first.call(null,p1__35711_SHARP_);
var div = cljs.core.first.call(null,cljs.core.next.call(null,p1__35711_SHARP_));
if((cljs.core.not_EQ_.call(null,div,(0))) && (cljs.core.integer_QMARK_.call(null,(num / div)))){
return cljs.core.conj.call(null,cljs.core.next.call(null,cljs.core.next.call(null,p1__35711_SHARP_)),(num / div));
} else {
return p1__35711_SHARP_;
}
})),(function (p1__35712_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,cljs.core.next.call(null,p1__35712_SHARP_)),(0));
}))], null)], null);

//# sourceMappingURL=operations.js.map