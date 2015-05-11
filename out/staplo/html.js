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

var seq__20135 = cljs.core.seq.call(null,elements);
var chunk__20136 = null;
var count__20137 = (0);
var i__20138 = (0);
while(true){
if((i__20138 < count__20137)){
var element = cljs.core._nth.call(null,chunk__20136,i__20138);
var item_20139 = staplo.html.create_list_item.call(null,element,handler);
list.appendChild(item_20139);

var G__20140 = seq__20135;
var G__20141 = chunk__20136;
var G__20142 = count__20137;
var G__20143 = (i__20138 + (1));
seq__20135 = G__20140;
chunk__20136 = G__20141;
count__20137 = G__20142;
i__20138 = G__20143;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20135);
if(temp__4126__auto__){
var seq__20135__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20135__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__20135__$1);
var G__20144 = cljs.core.chunk_rest.call(null,seq__20135__$1);
var G__20145 = c__4559__auto__;
var G__20146 = cljs.core.count.call(null,c__4559__auto__);
var G__20147 = (0);
seq__20135 = G__20144;
chunk__20136 = G__20145;
count__20137 = G__20146;
i__20138 = G__20147;
continue;
} else {
var element = cljs.core.first.call(null,seq__20135__$1);
var item_20148 = staplo.html.create_list_item.call(null,element,handler);
list.appendChild(item_20148);

var G__20149 = cljs.core.next.call(null,seq__20135__$1);
var G__20150 = null;
var G__20151 = (0);
var G__20152 = (0);
seq__20135 = G__20149;
chunk__20136 = G__20150;
count__20137 = G__20151;
i__20138 = G__20152;
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