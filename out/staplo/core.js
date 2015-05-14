// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.core');
goog.require('cljs.core');
goog.require('staplo.operations');
goog.require('staplo.levels');
goog.require('staplo.html');
goog.require('staplo.generator');
cljs.core.enable_console_print_BANG_.call(null);
staplo.core.state = cljs.core.atom.call(null,cljs.core.List.EMPTY);
staplo.core.target = cljs.core.atom.call(null,null);
staplo.core.current_level = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"level","level",1290497552),""], null));
staplo.core.push_state_BANG_ = (function push_state_BANG_(text){
return cljs.core.swap_BANG_.call(null,staplo.core.state,cljs.core.conj,text);
});
staplo.core.pop_state_BANG_ = (function pop_state_BANG_(){
if(cljs.core.empty_QMARK_.call(null,cljs.core.pop.call(null,cljs.core.deref.call(null,staplo.core.state)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,staplo.core.state,cljs.core.pop);
}
});
staplo.core.can_pop_state_QMARK_ = (function can_pop_state_QMARK_(){
return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,staplo.core.state));
});
staplo.core.set_start_BANG_ = (function set_start_BANG_(text){
return cljs.core.reset_BANG_.call(null,staplo.core.state,cljs.core._conj.call(null,cljs.core.List.EMPTY,text));
});
staplo.core.get_current = (function get_current(){
return cljs.core.first.call(null,cljs.core.deref.call(null,staplo.core.state));
});
staplo.core.update_display_BANG_ = (function update_display_BANG_(id,value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,staplo.core.current_level)),"stack")){
return staplo.html.update_list_BANG_.call(null,id,value);
} else {
return staplo.html.set_text_BANG_.call(null,id,value);
}
});
cljs.core.add_watch.call(null,staplo.core.state,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (key,atom,old_state,new_state){
return staplo.core.update_display_BANG_.call(null,"current",staplo.core.get_current.call(null));
}));
cljs.core.add_watch.call(null,staplo.core.target,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (key,atom,old_state,new_state){
return staplo.core.update_display_BANG_.call(null,"target",new_state);
}));
staplo.core.clicked_on = (function clicked_on(op_name){
if(cljs.core.truth_(staplo.core.win_condition_QMARK_.call(null))){
return null;
} else {
var map__35617 = staplo.operations.operations.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,staplo.core.current_level))).call(null,op_name);
var map__35617__$1 = ((cljs.core.seq_QMARK_.call(null,map__35617))?cljs.core.apply.call(null,cljs.core.hash_map,map__35617):map__35617);
var op = cljs.core.get.call(null,map__35617__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var new_string = op.call(null,staplo.core.get_current.call(null));
staplo.core.push_state_BANG_.call(null,new_string);

return staplo.core.check_win.call(null);
}
});
staplo.core.win_condition_QMARK_ = (function win_condition_QMARK_(){
return cljs.core._EQ_.call(null,staplo.core.get_current.call(null),cljs.core.deref.call(null,staplo.core.target));
});
staplo.core.check_win = (function check_win(){
if(staplo.core.win_condition_QMARK_.call(null)){
return staplo.core.win.call(null);
} else {
return null;
}
});
staplo.core.win = (function win(){
staplo.html.remove_class_BANG_.call(null,"current","neutral");

staplo.html.add_class_BANG_.call(null,"current","correct");

return setTimeout((function (){
staplo.html.remove_class_BANG_.call(null,"current","correct");

staplo.html.add_class_BANG_.call(null,"current","neutral");

return staplo.core.next_level.call(null);
}),(2500));
});
staplo.html.on_click.call(null,"undo",staplo.core.pop_state_BANG_);
staplo.core.next_level = (function next_level(){
var map__35619 = cljs.core.deref.call(null,staplo.core.current_level);
var map__35619__$1 = ((cljs.core.seq_QMARK_.call(null,map__35619))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);
var level = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var type = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var config = cljs.core.nth.call(null,cljs.core.get.call(null,staplo.levels.level_configs,type),level);
var challenge = staplo.generator.generate_challenge.call(null,config);
staplo.core.set_start_BANG_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(challenge));

return cljs.core.reset_BANG_.call(null,staplo.core.target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(challenge));
});
staplo.core.query = (function query(){
var query__$1 = purl().param();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),query__$1.type,new cljs.core.Keyword(null,"level","level",1290497552),parseInt(query__$1.level,(10))], null);
});
staplo.core.init_current_target = (function init_current_target(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,staplo.core.current_level)),"stack")){
var current_list = staplo.html.create_element.call(null,"ul","current");
var target_list = staplo.html.create_element.call(null,"ul","target");
document.getElementById("current-container").appendChild(current_list);

return document.getElementById("target-container").appendChild(target_list);
} else {
var current_span = staplo.html.create_element.call(null,"span","current");
var target_span = staplo.html.create_element.call(null,"span","target");
document.getElementById("current-container").appendChild(current_span);

return document.getElementById("target-container").appendChild(target_span);
}
});
cljs.core.reset_BANG_.call(null,staplo.core.current_level,staplo.core.query.call(null));
staplo.core.init_current_target.call(null);
staplo.html.update_list_BANG_.call(null,"list",(function (){var map__35620 = cljs.core.deref.call(null,staplo.core.current_level);
var map__35620__$1 = ((cljs.core.seq_QMARK_.call(null,map__35620))?cljs.core.apply.call(null,cljs.core.hash_map,map__35620):map__35620);
var level = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var type = cljs.core.get.call(null,map__35620__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.get.call(null,staplo.levels.level_configs,type),level)));
})(),staplo.core.clicked_on);
staplo.core.next_level.call(null);

//# sourceMappingURL=core.js.map