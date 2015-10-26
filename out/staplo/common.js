// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.common');
goog.require('cljs.core');
staplo.common.interval = (function interval(start,end){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null);
});
staplo.common.rand2 = (function rand2(start,end){
return (start + cljs.core.rand_int.call(null,((end - start) + (1))));
});
staplo.common.rand_interval = (function rand_interval(p__4929){
var map__4931 = p__4929;
var map__4931__$1 = ((cljs.core.seq_QMARK_.call(null,map__4931))?cljs.core.apply.call(null,cljs.core.hash_map,map__4931):map__4931);
var end = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start = cljs.core.get.call(null,map__4931__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return staplo.common.rand2.call(null,start,end);
});
staplo.common.accumulate = (function accumulate(fun,base,times){
return cljs.core.reduce.call(null,(function (p1__4932_SHARP_){
return fun.call(null,p1__4932_SHARP_);
}),base,cljs.core.range.call(null,(0),times));
});

//# sourceMappingURL=common.js.map