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

var seq__35633 = cljs.core.seq.call(null,elements);
var chunk__35634 = null;
var count__35635 = (0);
var i__35636 = (0);
while(true){
if((i__35636 < count__35635)){
var element = cljs.core._nth.call(null,chunk__35634,i__35636);
var item_35641 = staplo.html.create_list_item.call(null,element);
list.appendChild(item_35641);

var G__35642 = seq__35633;
var G__35643 = chunk__35634;
var G__35644 = count__35635;
var G__35645 = (i__35636 + (1));
seq__35633 = G__35642;
chunk__35634 = G__35643;
count__35635 = G__35644;
i__35636 = G__35645;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35633);
if(temp__4126__auto__){
var seq__35633__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35633__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__35633__$1);
var G__35646 = cljs.core.chunk_rest.call(null,seq__35633__$1);
var G__35647 = c__4559__auto__;
var G__35648 = cljs.core.count.call(null,c__4559__auto__);
var G__35649 = (0);
seq__35633 = G__35646;
chunk__35634 = G__35647;
count__35635 = G__35648;
i__35636 = G__35649;
continue;
} else {
var element = cljs.core.first.call(null,seq__35633__$1);
var item_35650 = staplo.html.create_list_item.call(null,element);
list.appendChild(item_35650);

var G__35651 = cljs.core.next.call(null,seq__35633__$1);
var G__35652 = null;
var G__35653 = (0);
var G__35654 = (0);
seq__35633 = G__35651;
chunk__35634 = G__35652;
count__35635 = G__35653;
i__35636 = G__35654;
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

var seq__35637 = cljs.core.seq.call(null,elements);
var chunk__35638 = null;
var count__35639 = (0);
var i__35640 = (0);
while(true){
if((i__35640 < count__35639)){
var element = cljs.core._nth.call(null,chunk__35638,i__35640);
var item_35655 = staplo.html.create_list_item.call(null,element);
item_35655.addEventListener("click",cljs.core.partial.call(null,handler,element));

list.appendChild(item_35655);

var G__35656 = seq__35637;
var G__35657 = chunk__35638;
var G__35658 = count__35639;
var G__35659 = (i__35640 + (1));
seq__35637 = G__35656;
chunk__35638 = G__35657;
count__35639 = G__35658;
i__35640 = G__35659;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35637);
if(temp__4126__auto__){
var seq__35637__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35637__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__35637__$1);
var G__35660 = cljs.core.chunk_rest.call(null,seq__35637__$1);
var G__35661 = c__4559__auto__;
var G__35662 = cljs.core.count.call(null,c__4559__auto__);
var G__35663 = (0);
seq__35637 = G__35660;
chunk__35638 = G__35661;
count__35639 = G__35662;
i__35640 = G__35663;
continue;
} else {
var element = cljs.core.first.call(null,seq__35637__$1);
var item_35664 = staplo.html.create_list_item.call(null,element);
item_35664.addEventListener("click",cljs.core.partial.call(null,handler,element));

list.appendChild(item_35664);

var G__35665 = cljs.core.next.call(null,seq__35637__$1);
var G__35666 = null;
var G__35667 = (0);
var G__35668 = (0);
seq__35637 = G__35665;
chunk__35638 = G__35666;
count__35639 = G__35667;
i__35640 = G__35668;
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