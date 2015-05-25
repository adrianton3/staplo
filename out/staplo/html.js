// Compiled by ClojureScript 0.0-2755 {}
goog.provide('staplo.html');
goog.require('cljs.core');
staplo.html.set_text_BANG_ = (function set_text_BANG_(id,text){
return document.getElementById(id).textContent = text;
});
staplo.html.add_class_BANG_ = (function add_class_BANG_(id,class$){
return document.getElementById(id).classList.add(class$);
});
staplo.html.remove_class_BANG_ = (function remove_class_BANG_(id,class$){
return document.getElementById(id).classList.remove(class$);
});
staplo.html.on_click = (function on_click(id,handler){
var element = document.getElementById(id);
return element.addEventListener("click",handler);
});
staplo.html.create_list_item = (function create_list_item(text){
var item = document.createElement("li");
item.textContent = text;

return item;
});
staplo.html.update_list_BANG_ = (function() {
var update_list_BANG_ = null;
var update_list_BANG___2 = (function (id,elements){
var list = document.getElementById(id);
list.innerHTML = "";

var seq__5382 = cljs.core.seq.call(null,elements);
var chunk__5383 = null;
var count__5384 = (0);
var i__5385 = (0);
while(true){
if((i__5385 < count__5384)){
var element = cljs.core._nth.call(null,chunk__5383,i__5385);
var item_5390 = staplo.html.create_list_item.call(null,element);
list.appendChild(item_5390);

var G__5391 = seq__5382;
var G__5392 = chunk__5383;
var G__5393 = count__5384;
var G__5394 = (i__5385 + (1));
seq__5382 = G__5391;
chunk__5383 = G__5392;
count__5384 = G__5393;
i__5385 = G__5394;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5382);
if(temp__4126__auto__){
var seq__5382__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5382__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__5382__$1);
var G__5395 = cljs.core.chunk_rest.call(null,seq__5382__$1);
var G__5396 = c__4559__auto__;
var G__5397 = cljs.core.count.call(null,c__4559__auto__);
var G__5398 = (0);
seq__5382 = G__5395;
chunk__5383 = G__5396;
count__5384 = G__5397;
i__5385 = G__5398;
continue;
} else {
var element = cljs.core.first.call(null,seq__5382__$1);
var item_5399 = staplo.html.create_list_item.call(null,element);
list.appendChild(item_5399);

var G__5400 = cljs.core.next.call(null,seq__5382__$1);
var G__5401 = null;
var G__5402 = (0);
var G__5403 = (0);
seq__5382 = G__5400;
chunk__5383 = G__5401;
count__5384 = G__5402;
i__5385 = G__5403;
continue;
}
} else {
return null;
}
}
break;
}
});
var update_list_BANG___3 = (function (id,elements,handler){
var list = document.getElementById(id);
list.innerHTML = "";

var seq__5386 = cljs.core.seq.call(null,elements);
var chunk__5387 = null;
var count__5388 = (0);
var i__5389 = (0);
while(true){
if((i__5389 < count__5388)){
var element = cljs.core._nth.call(null,chunk__5387,i__5389);
var item_5404 = staplo.html.create_list_item.call(null,element);
item_5404.addEventListener("click",cljs.core.partial.call(null,handler,element));

list.appendChild(item_5404);

var G__5405 = seq__5386;
var G__5406 = chunk__5387;
var G__5407 = count__5388;
var G__5408 = (i__5389 + (1));
seq__5386 = G__5405;
chunk__5387 = G__5406;
count__5388 = G__5407;
i__5389 = G__5408;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5386);
if(temp__4126__auto__){
var seq__5386__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5386__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__5386__$1);
var G__5409 = cljs.core.chunk_rest.call(null,seq__5386__$1);
var G__5410 = c__4559__auto__;
var G__5411 = cljs.core.count.call(null,c__4559__auto__);
var G__5412 = (0);
seq__5386 = G__5409;
chunk__5387 = G__5410;
count__5388 = G__5411;
i__5389 = G__5412;
continue;
} else {
var element = cljs.core.first.call(null,seq__5386__$1);
var item_5413 = staplo.html.create_list_item.call(null,element);
item_5413.addEventListener("click",cljs.core.partial.call(null,handler,element));

list.appendChild(item_5413);

var G__5414 = cljs.core.next.call(null,seq__5386__$1);
var G__5415 = null;
var G__5416 = (0);
var G__5417 = (0);
seq__5386 = G__5414;
chunk__5387 = G__5415;
count__5388 = G__5416;
i__5389 = G__5417;
continue;
}
} else {
return null;
}
}
break;
}
});
update_list_BANG_ = function(id,elements,handler){
switch(arguments.length){
case 2:
return update_list_BANG___2.call(this,id,elements);
case 3:
return update_list_BANG___3.call(this,id,elements,handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_list_BANG_.cljs$core$IFn$_invoke$arity$2 = update_list_BANG___2;
update_list_BANG_.cljs$core$IFn$_invoke$arity$3 = update_list_BANG___3;
return update_list_BANG_;
})()
;
staplo.html.create_element = (function create_element(tag,id){
var element = document.createElement(tag);
element.id = id;

return element;
});

//# sourceMappingURL=html.js.map