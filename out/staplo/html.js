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
staplo.html.create_list_item = (function create_list_item(text,handler){
var item = document.createElement("li");
item.textContent = text;

item.addEventListener("click",cljs.core.partial.call(null,handler,text));

return item;
});
staplo.html.update_list_BANG_ = (function update_list_BANG_(id,elements,handler){
var list = document.getElementById(id);
list.innerHTML = "";

var seq__11495 = cljs.core.seq.call(null,elements);
var chunk__11496 = null;
var count__11497 = (0);
var i__11498 = (0);
while(true){
if((i__11498 < count__11497)){
var element = cljs.core._nth.call(null,chunk__11496,i__11498);
var item_11499 = staplo.html.create_list_item.call(null,element,handler);
list.appendChild(item_11499);

var G__11500 = seq__11495;
var G__11501 = chunk__11496;
var G__11502 = count__11497;
var G__11503 = (i__11498 + (1));
seq__11495 = G__11500;
chunk__11496 = G__11501;
count__11497 = G__11502;
i__11498 = G__11503;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11495);
if(temp__4126__auto__){
var seq__11495__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11495__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__11495__$1);
var G__11504 = cljs.core.chunk_rest.call(null,seq__11495__$1);
var G__11505 = c__4559__auto__;
var G__11506 = cljs.core.count.call(null,c__4559__auto__);
var G__11507 = (0);
seq__11495 = G__11504;
chunk__11496 = G__11505;
count__11497 = G__11506;
i__11498 = G__11507;
continue;
} else {
var element = cljs.core.first.call(null,seq__11495__$1);
var item_11508 = staplo.html.create_list_item.call(null,element,handler);
list.appendChild(item_11508);

var G__11509 = cljs.core.next.call(null,seq__11495__$1);
var G__11510 = null;
var G__11511 = (0);
var G__11512 = (0);
seq__11495 = G__11509;
chunk__11496 = G__11510;
count__11497 = G__11511;
i__11498 = G__11512;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=html.js.map