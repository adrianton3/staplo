// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.operations');
goog.require('cljs.core');
goog.require('clojure.string');
staplo.operations.wrap_endec = (function wrap_endec(fun){
return (function (p1__4829_SHARP_){
return parseInt(fun.call(null,p1__4829_SHARP_.toString()),(10));
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
staplo.operations.if_cond = (function if_cond(predicate,fun){
return (function (p1__4830_SHARP_){
if(cljs.core.truth_(predicate.call(null,p1__4830_SHARP_))){
return fun.call(null,p1__4830_SHARP_);
} else {
return p1__4830_SHARP_;
}
});
});
staplo.operations.at_least = (function at_least(min_size,collection){
return (cljs.core.count.call(null,collection) >= min_size);
});
staplo.operations.at_least_2 = cljs.core.partial.call(null,staplo.operations.at_least,(2));
staplo.operations.bin_op = (function bin_op(op){
return (function (p1__4831_SHARP_){
return cljs.core.conj.call(null,cljs.core.next.call(null,cljs.core.next.call(null,p1__4831_SHARP_)),op.call(null,cljs.core.first.call(null,p1__4831_SHARP_),cljs.core.first.call(null,cljs.core.next.call(null,p1__4831_SHARP_))));
});
});
staplo.operations.operations = new cljs.core.PersistentArrayMap(null, 3, ["strings",cljs.core.PersistentHashMap.fromArrays(["push-c","bc -> a","ca -> b","ab -> c","pop","reverse","push-b","unwrap","duplicate","push-a","duplicate-last","rotate"],[staplo.operations.operation_pair.call(null,(function (p1__4849_SHARP_){
return [cljs.core.str(p1__4849_SHARP_),cljs.core.str("c")].join('');
}),(function (p1__4850_SHARP_){
return (cljs.core.count.call(null,p1__4850_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__4853_SHARP_){
return clojure.string.replace.call(null,p1__4853_SHARP_,/bc/,"a");
}),(function (p1__4854_SHARP_){
return staplo.operations.contains_str.call(null,p1__4854_SHARP_,"bc");
})),staplo.operations.operation_pair.call(null,(function (p1__4855_SHARP_){
return clojure.string.replace.call(null,p1__4855_SHARP_,/ca/,"b");
}),(function (p1__4856_SHARP_){
return staplo.operations.contains_str.call(null,p1__4856_SHARP_,"ca");
})),staplo.operations.operation_pair.call(null,(function (p1__4851_SHARP_){
return clojure.string.replace.call(null,p1__4851_SHARP_,/ab/,"c");
}),(function (p1__4852_SHARP_){
return staplo.operations.contains_str.call(null,p1__4852_SHARP_,"ab");
})),staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,(function (p1__4835_SHARP_){
return (cljs.core.count.call(null,p1__4835_SHARP_) > (1));
}),(function (p1__4836_SHARP_){
return cljs.core.subs.call(null,p1__4836_SHARP_,(0),(cljs.core.count.call(null,p1__4836_SHARP_) - (1)));
})),(function (p1__4837_SHARP_){
return (cljs.core.count.call(null,p1__4837_SHARP_) > (1));
})),staplo.operations.operation_pair.call(null,clojure.string.reverse,(function (p1__4832_SHARP_,p2__4833_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__4832_SHARP_,clojure.string.reverse.call(null,p1__4832_SHARP_))) && ((cljs.core.empty_QMARK_.call(null,p2__4833_SHARP_)) || (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p2__4833_SHARP_),"reverse")));
})),staplo.operations.operation_pair.call(null,(function (p1__4847_SHARP_){
return [cljs.core.str(p1__4847_SHARP_),cljs.core.str("b")].join('');
}),(function (p1__4848_SHARP_){
return (cljs.core.count.call(null,p1__4848_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,(function (p1__4838_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4838_SHARP_),cljs.core.last.call(null,p1__4838_SHARP_));
}),(function (p1__4839_SHARP_){
return cljs.core.subs.call(null,p1__4839_SHARP_,(1),(cljs.core.count.call(null,p1__4839_SHARP_) - (1)));
})),(function (p1__4840_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4840_SHARP_),cljs.core.last.call(null,p1__4840_SHARP_))) && ((cljs.core.count.call(null,p1__4840_SHARP_) > (2)));
})),staplo.operations.operation_pair.call(null,(function (p1__4841_SHARP_){
return [cljs.core.str(p1__4841_SHARP_),cljs.core.str(p1__4841_SHARP_)].join('');
}),(function (p1__4842_SHARP_){
return (cljs.core.count.call(null,p1__4842_SHARP_) < (4));
})),staplo.operations.operation_pair.call(null,(function (p1__4845_SHARP_){
return [cljs.core.str(p1__4845_SHARP_),cljs.core.str("a")].join('');
}),(function (p1__4846_SHARP_){
return (cljs.core.count.call(null,p1__4846_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__4843_SHARP_){
return [cljs.core.str(p1__4843_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__4843_SHARP_))].join('');
}),(function (p1__4844_SHARP_){
return (cljs.core.count.call(null,p1__4844_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,staplo.operations.rotate,(function (p1__4834_SHARP_){
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,p1__4834_SHARP_));
}))]),"numbers",new cljs.core.PersistentArrayMap(null, 8, ["+7",staplo.operations.operation_pair.call(null,(function (p1__4857_SHARP_){
return ((7) + p1__4857_SHARP_);
}),cljs.core.constantly.call(null,true)),"+9",staplo.operations.operation_pair.call(null,(function (p1__4858_SHARP_){
return ((9) + p1__4858_SHARP_);
}),cljs.core.constantly.call(null,true)),"*2",staplo.operations.operation_pair.call(null,(function (p1__4859_SHARP_){
return ((2) * p1__4859_SHARP_);
}),(function (p1__4860_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4860_SHARP_);
})),"*5",staplo.operations.operation_pair.call(null,(function (p1__4861_SHARP_){
return ((5) * p1__4861_SHARP_);
}),(function (p1__4862_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4862_SHARP_);
})),"*11",staplo.operations.operation_pair.call(null,(function (p1__4863_SHARP_){
return ((11) * p1__4863_SHARP_);
}),(function (p1__4864_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4864_SHARP_);
})),"sqr",staplo.operations.operation_pair.call(null,(function (p1__4865_SHARP_){
return (p1__4865_SHARP_ * p1__4865_SHARP_);
}),(function (p1__4866_SHARP_){
return (p1__4866_SHARP_ <= (20));
})),"reverse",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,clojure.string.reverse),(function (p1__4867_SHARP_){
var string = p1__4867_SHARP_.toString();
return cljs.core.not_EQ_.call(null,[cljs.core.str(clojure.string.reverse.call(null,string))].join(''));
})),"rotate",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,staplo.operations.rotate),(function (p1__4868_SHARP_){
var string = p1__4868_SHARP_.toString();
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,string));
}))], null),"stack",new cljs.core.PersistentArrayMap(null, 4, ["+",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,staplo.operations.at_least_2,staplo.operations.bin_op.call(null,cljs.core._PLUS_)),cljs.core.constantly.call(null,true)),"-",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,staplo.operations.at_least_2,staplo.operations.bin_op.call(null,cljs.core._)),cljs.core.constantly.call(null,true)),"*",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,staplo.operations.at_least_2,staplo.operations.bin_op.call(null,cljs.core._STAR_)),(function (p1__4869_SHARP_){
return ((cljs.core.first.call(null,p1__4869_SHARP_) * cljs.core.first.call(null,cljs.core.next.call(null,p1__4869_SHARP_))) <= (100));
})),"/",(function (){var safe_div = (function (p1__4870_SHARP_){
var num = cljs.core.first.call(null,p1__4870_SHARP_);
var div = cljs.core.first.call(null,cljs.core.next.call(null,p1__4870_SHARP_));
return (cljs.core.not_EQ_.call(null,div,(0))) && (cljs.core.integer_QMARK_.call(null,(num / div)));
});
return staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,((function (safe_div){
return (function (p1__4871_SHARP_){
var and__3760__auto__ = staplo.operations.at_least_2.call(null,p1__4871_SHARP_);
if(cljs.core.truth_(and__3760__auto__)){
return safe_div.call(null,p1__4871_SHARP_);
} else {
return and__3760__auto__;
}
});})(safe_div))
,staplo.operations.bin_op.call(null,cljs.core._SLASH_)),safe_div);
})()], null)], null);

//# sourceMappingURL=operations.js.map