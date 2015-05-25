// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.operations');
goog.require('cljs.core');
goog.require('clojure.string');
staplo.operations.wrap_endec = (function wrap_endec(fun){
return (function (p1__4784_SHARP_){
return parseInt(fun.call(null,p1__4784_SHARP_.toString()),(10));
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
return (function (p1__4785_SHARP_){
if(cljs.core.truth_(predicate.call(null,p1__4785_SHARP_))){
return fun.call(null,p1__4785_SHARP_);
} else {
return p1__4785_SHARP_;
}
});
});
staplo.operations.at_least = (function at_least(min_size,collection){
return (cljs.core.count.call(null,collection) >= min_size);
});
staplo.operations.at_least_2 = cljs.core.partial.call(null,staplo.operations.at_least,(2));
staplo.operations.bin_op = (function bin_op(op){
return (function (p1__4786_SHARP_){
return cljs.core.conj.call(null,cljs.core.next.call(null,cljs.core.next.call(null,p1__4786_SHARP_)),op.call(null,cljs.core.first.call(null,p1__4786_SHARP_),cljs.core.first.call(null,cljs.core.next.call(null,p1__4786_SHARP_))));
});
});
staplo.operations.operations = new cljs.core.PersistentArrayMap(null, 3, ["strings",cljs.core.PersistentHashMap.fromArrays(["push-c","bc -> a","ca -> b","ab -> c","pop","reverse","push-b","unwrap","duplicate","push-a","duplicate-last","rotate"],[staplo.operations.operation_pair.call(null,(function (p1__4804_SHARP_){
return [cljs.core.str(p1__4804_SHARP_),cljs.core.str("c")].join('');
}),(function (p1__4805_SHARP_){
return (cljs.core.count.call(null,p1__4805_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__4808_SHARP_){
return cljs.core.replace.call(null,p1__4808_SHARP_,/bc/,"a");
}),(function (p1__4809_SHARP_){
return staplo.operations.contains_str.call(null,p1__4809_SHARP_,"bc");
})),staplo.operations.operation_pair.call(null,(function (p1__4810_SHARP_){
return cljs.core.replace.call(null,p1__4810_SHARP_,/ca/,"b");
}),(function (p1__4811_SHARP_){
return staplo.operations.contains_str.call(null,p1__4811_SHARP_,"ca");
})),staplo.operations.operation_pair.call(null,(function (p1__4806_SHARP_){
return cljs.core.replace.call(null,p1__4806_SHARP_,/ab/,"c");
}),(function (p1__4807_SHARP_){
return staplo.operations.contains_str.call(null,p1__4807_SHARP_,"ab");
})),staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,(function (p1__4790_SHARP_){
return (cljs.core.count.call(null,p1__4790_SHARP_) > (1));
}),(function (p1__4791_SHARP_){
return cljs.core.subs.call(null,p1__4791_SHARP_,(0),(cljs.core.count.call(null,p1__4791_SHARP_) - (1)));
})),(function (p1__4792_SHARP_){
return (cljs.core.count.call(null,p1__4792_SHARP_) > (1));
})),staplo.operations.operation_pair.call(null,clojure.string.reverse,(function (p1__4787_SHARP_,p2__4788_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__4787_SHARP_,clojure.string.reverse.call(null,p1__4787_SHARP_))) && ((cljs.core.empty_QMARK_.call(null,p2__4788_SHARP_)) || (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p2__4788_SHARP_),"reverse")));
})),staplo.operations.operation_pair.call(null,(function (p1__4802_SHARP_){
return [cljs.core.str(p1__4802_SHARP_),cljs.core.str("b")].join('');
}),(function (p1__4803_SHARP_){
return (cljs.core.count.call(null,p1__4803_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,(function (p1__4793_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4793_SHARP_),cljs.core.last.call(null,p1__4793_SHARP_));
}),(function (p1__4794_SHARP_){
return cljs.core.subs.call(null,p1__4794_SHARP_,(1),(cljs.core.count.call(null,p1__4794_SHARP_) - (1)));
})),(function (p1__4795_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4795_SHARP_),cljs.core.last.call(null,p1__4795_SHARP_))) && ((cljs.core.count.call(null,p1__4795_SHARP_) > (2)));
})),staplo.operations.operation_pair.call(null,(function (p1__4796_SHARP_){
return [cljs.core.str(p1__4796_SHARP_),cljs.core.str(p1__4796_SHARP_)].join('');
}),(function (p1__4797_SHARP_){
return (cljs.core.count.call(null,p1__4797_SHARP_) < (4));
})),staplo.operations.operation_pair.call(null,(function (p1__4800_SHARP_){
return [cljs.core.str(p1__4800_SHARP_),cljs.core.str("a")].join('');
}),(function (p1__4801_SHARP_){
return (cljs.core.count.call(null,p1__4801_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,(function (p1__4798_SHARP_){
return [cljs.core.str(p1__4798_SHARP_),cljs.core.str(cljs.core.last.call(null,p1__4798_SHARP_))].join('');
}),(function (p1__4799_SHARP_){
return (cljs.core.count.call(null,p1__4799_SHARP_) < (6));
})),staplo.operations.operation_pair.call(null,staplo.operations.rotate,(function (p1__4789_SHARP_){
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,p1__4789_SHARP_));
}))]),"numbers",new cljs.core.PersistentArrayMap(null, 8, ["+7",staplo.operations.operation_pair.call(null,(function (p1__4812_SHARP_){
return ((7) + p1__4812_SHARP_);
}),cljs.core.constantly.call(null,true)),"+9",staplo.operations.operation_pair.call(null,(function (p1__4813_SHARP_){
return ((9) + p1__4813_SHARP_);
}),cljs.core.constantly.call(null,true)),"*2",staplo.operations.operation_pair.call(null,(function (p1__4814_SHARP_){
return ((2) * p1__4814_SHARP_);
}),(function (p1__4815_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4815_SHARP_);
})),"*5",staplo.operations.operation_pair.call(null,(function (p1__4816_SHARP_){
return ((5) * p1__4816_SHARP_);
}),(function (p1__4817_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4817_SHARP_);
})),"*11",staplo.operations.operation_pair.call(null,(function (p1__4818_SHARP_){
return ((11) * p1__4818_SHARP_);
}),(function (p1__4819_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__4819_SHARP_);
})),"sqr",staplo.operations.operation_pair.call(null,(function (p1__4820_SHARP_){
return (p1__4820_SHARP_ * p1__4820_SHARP_);
}),(function (p1__4821_SHARP_){
return (p1__4821_SHARP_ <= (20));
})),"reverse",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,clojure.string.reverse),(function (p1__4822_SHARP_){
var string = p1__4822_SHARP_.toString();
return cljs.core.not_EQ_.call(null,[cljs.core.str(clojure.string.reverse.call(null,string))].join(''));
})),"rotate",staplo.operations.operation_pair.call(null,staplo.operations.wrap_endec.call(null,staplo.operations.rotate),(function (p1__4823_SHARP_){
var string = p1__4823_SHARP_.toString();
return cljs.core.not.call(null,staplo.operations.same_char_QMARK_.call(null,string));
}))], null),"stack",new cljs.core.PersistentArrayMap(null, 4, ["+",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,staplo.operations.at_least_2,staplo.operations.bin_op.call(null,cljs.core._PLUS_)),cljs.core.constantly.call(null,true)),"-",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,staplo.operations.at_least_2,staplo.operations.bin_op.call(null,cljs.core._)),cljs.core.constantly.call(null,true)),"*",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,staplo.operations.at_least_2,staplo.operations.bin_op.call(null,cljs.core._STAR_)),(function (p1__4824_SHARP_){
return ((cljs.core.first.call(null,p1__4824_SHARP_) * cljs.core.first.call(null,cljs.core.next.call(null,p1__4824_SHARP_))) <= (100));
})),"/",staplo.operations.operation_pair.call(null,staplo.operations.if_cond.call(null,(function (p1__4825_SHARP_){
var and__3760__auto__ = staplo.operations.at_least_2.call(null,p1__4825_SHARP_);
if(cljs.core.truth_(and__3760__auto__)){
var num = cljs.core.first.call(null,p1__4825_SHARP_);
var div = cljs.core.first.call(null,cljs.core.next.call(null,p1__4825_SHARP_));
return (cljs.core.not_EQ_.call(null,div,(0))) && (cljs.core.integer_QMARK_.call(null,(num / div)));
} else {
return and__3760__auto__;
}
}),staplo.operations.bin_op.call(null,cljs.core._SLASH_)),(function (p1__4826_SHARP_){
var num = cljs.core.first.call(null,p1__4826_SHARP_);
var div = cljs.core.first.call(null,cljs.core.next.call(null,p1__4826_SHARP_));
return (cljs.core.not_EQ_.call(null,div,(0))) && (cljs.core.integer_QMARK_.call(null,(num / div)));
}))], null)], null);

//# sourceMappingURL=operations.js.map