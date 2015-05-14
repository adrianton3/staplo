// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.generator');
goog.require('cljs.core');
goog.require('staplo.common');
goog.require('staplo.operations');
goog.require('clojure.string');
staplo.generator.same_char_QMARK_ = (function same_char_QMARK_(string){
return cljs.core.apply.call(null,cljs.core._EQ_,clojure.string.split.call(null,string,""));
});
staplo.generator.generate_string = (function generate_string(interval){
var char_set = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null);
var length = staplo.common.rand_interval.call(null,interval);
var generate_candidate = ((function (char_set,length){
return (function (){
return staplo.common.accumulate.call(null,((function (char_set,length){
return (function (p1__35721_SHARP_){
return [cljs.core.str(p1__35721_SHARP_),cljs.core.str(cljs.core.rand_nth.call(null,char_set))].join('');
});})(char_set,length))
,"",length);
});})(char_set,length))
;
var candidate = generate_candidate.call(null);
while(true){
if(cljs.core.truth_(staplo.generator.same_char_QMARK_.call(null,candidate))){
var G__35722 = generate_candidate.call(null);
candidate = G__35722;
continue;
} else {
return candidate;
}
break;
}
});
staplo.generator.generate_number = staplo.common.rand_interval;
staplo.generator.generate_stack = (function generate_stack(interval){
return staplo.common.accumulate.call(null,(function (p1__35723_SHARP_){
return cljs.core.conj.call(null,p1__35723_SHARP_,staplo.common.rand2.call(null,(3),(9)));
}),cljs.core.List.EMPTY,staplo.common.rand_interval.call(null,interval));
});
staplo.generator.generators = new cljs.core.PersistentArrayMap(null, 3, ["strings",staplo.generator.generate_string,"numbers",staplo.generator.generate_number,"stack",staplo.generator.generate_stack], null);
staplo.generator.generate_start = (function generate_start(type,length){
return staplo.generator.generators.call(null,type).call(null,length);
});
staplo.generator.generate_op = (function generate_op(operations,operation_names,text,op_history,text_history){
var rand_op = (function (){
var op_name = cljs.core.rand_nth.call(null,operation_names);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-name","op-name",854688697),op_name,new cljs.core.Keyword(null,"op","op",-1882987955),operations.call(null,op_name)], null);
});
var candidate_op = rand_op.call(null);
while(true){
var map__35726 = candidate_op;
var map__35726__$1 = ((cljs.core.seq_QMARK_.call(null,map__35726))?cljs.core.apply.call(null,cljs.core.hash_map,map__35726):map__35726);
var map__35727 = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var map__35727__$1 = ((cljs.core.seq_QMARK_.call(null,map__35727))?cljs.core.apply.call(null,cljs.core.hash_map,map__35727):map__35727);
var precondition = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"precondition","precondition",-1794440545));
var operation = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var result = operation.call(null,text);
if(cljs.core.truth_((function (){var and__3760__auto__ = precondition.call(null,text,op_history);
if(cljs.core.truth_(and__3760__auto__)){
return !(cljs.core.contains_QMARK_.call(null,text_history,result));
} else {
return and__3760__auto__;
}
})())){
return candidate_op;
} else {
var G__35728 = rand_op.call(null);
candidate_op = G__35728;
continue;
}
break;
}
});
staplo.generator.generate_ops = (function generate_ops(start_text,steps,operations_config){
var step = (function step(p__35744){
var map__35747 = p__35744;
var map__35747__$1 = ((cljs.core.seq_QMARK_.call(null,map__35747))?cljs.core.apply.call(null,cljs.core.hash_map,map__35747):map__35747);
var text = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var op_history = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"op-history","op-history",-1175310787));
var text_history = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"text-history","text-history",1517872421));
var op_sort = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(operations_config);
var map__35748 = staplo.generator.generate_op.call(null,staplo.operations.operations.call(null,op_sort),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(operations_config),text,op_history,text_history);
var map__35748__$1 = ((cljs.core.seq_QMARK_.call(null,map__35748))?cljs.core.apply.call(null,cljs.core.hash_map,map__35748):map__35748);
var op_name = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"op-name","op-name",854688697));
var op = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var result = new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(op).call(null,text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),result,new cljs.core.Keyword(null,"op-history","op-history",-1175310787),cljs.core.conj.call(null,op_history,op_name),new cljs.core.Keyword(null,"text-history","text-history",1517872421),cljs.core.conj.call(null,text_history,result)], null);
});
return staplo.common.accumulate.call(null,step,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),start_text,new cljs.core.Keyword(null,"op-history","op-history",-1175310787),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"text-history","text-history",1517872421),cljs.core.PersistentHashSet.fromArray([start_text], true)], null),steps);
});
staplo.generator.generate_challenge = (function generate_challenge(config){
var start = staplo.generator.generate_start.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"start-length","start-length",-1835704351).cljs$core$IFn$_invoke$arity$1(config));
var steps = staplo.common.rand_interval.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(config));
var target = staplo.generator.generate_ops.call(null,start,steps,new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(config)).call(null,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"target","target",253001721),target], null);
});

//# sourceMappingURL=generator.js.map