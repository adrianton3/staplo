// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.generator');
goog.require('cljs.core');
goog.require('staplo.operations');
staplo.generator.rand2 = (function rand2(start,end){
return (start + cljs.core.rand_int.call(null,((end - start) + (1))));
});
staplo.generator.rand_interval = (function rand_interval(p__12017){
var map__12019 = p__12017;
var map__12019__$1 = ((cljs.core.seq_QMARK_.call(null,map__12019))?cljs.core.apply.call(null,cljs.core.hash_map,map__12019):map__12019);
var end = cljs.core.get.call(null,map__12019__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__12019__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return staplo.generator.rand2.call(null,start,end);
});
staplo.generator.accumulate = (function accumulate(fun,base,times){
return cljs.core.reduce.call(null,(function (p1__12020_SHARP_){
return fun.call(null,p1__12020_SHARP_);
}),base,cljs.core.range.call(null,(0),times));
});
staplo.generator.generate_string = (function generate_string(interval){
var char_set = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null);
var length = staplo.generator.rand_interval.call(null,interval);
return staplo.generator.accumulate.call(null,((function (char_set,length){
return (function (p1__12021_SHARP_){
return [cljs.core.str(p1__12021_SHARP_),cljs.core.str(cljs.core.rand_nth.call(null,char_set))].join('');
});})(char_set,length))
,"",length);
});
staplo.generator.generate_number = staplo.generator.rand_interval;
staplo.generator.generate_start = (function generate_start(type,length){
return ((cljs.core._EQ_.call(null,type,"strings"))?staplo.generator.generate_string:staplo.generator.generate_number).call(null,length);
});
staplo.generator.generate_ops = (function generate_ops(start_text,steps,operations){
var step = (function step(text){
var op_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(operations);
var op_name = cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(operations));
var op = cljs.core.get.call(null,cljs.core.get.call(null,staplo.operations.operations,op_type),op_name);
return op.call(null,text);
});
return staplo.generator.accumulate.call(null,step,start_text,steps);
});
staplo.generator.generate_challenge = (function generate_challenge(config){
var start = staplo.generator.generate_start.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"start-length","start-length",-1835704351).cljs$core$IFn$_invoke$arity$1(config));
var steps = staplo.generator.rand_interval.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(config));
var target = staplo.generator.generate_ops.call(null,start,steps,new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(config));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"target","target",253001721),target], null);
});

//# sourceMappingURL=generator.js.map