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

var seq__4846 = cljs.core.seq.call(null,elements);
var chunk__4847 = null;
var count__4848 = (0);
var i__4849 = (0);
while(true){
if((i__4849 < count__4848)){
var element = cljs.core._nth.call(null,chunk__4847,i__4849);
var item_4854 = staplo.html.create_list_item.call(null,element);
list.appendChild(item_4854);

var G__4855 = seq__4846;
var G__4856 = chunk__4847;
var G__4857 = count__4848;
var G__4858 = (i__4849 + (1));
seq__4846 = G__4855;
chunk__4847 = G__4856;
count__4848 = G__4857;
i__4849 = G__4858;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__4846);
if(temp__4126__auto__){
var seq__4846__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4846__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__4846__$1);
var G__4859 = cljs.core.chunk_rest.call(null,seq__4846__$1);
var G__4860 = c__4559__auto__;
var G__4861 = cljs.core.count.call(null,c__4559__auto__);
var G__4862 = (0);
seq__4846 = G__4859;
chunk__4847 = G__4860;
count__4848 = G__4861;
i__4849 = G__4862;
continue;
} else {
var element = cljs.core.first.call(null,seq__4846__$1);
var item_4863 = staplo.html.create_list_item.call(null,element);
list.appendChild(item_4863);

var G__4864 = cljs.core.next.call(null,seq__4846__$1);
var G__4865 = null;
var G__4866 = (0);
var G__4867 = (0);
seq__4846 = G__4864;
chunk__4847 = G__4865;
count__4848 = G__4866;
i__4849 = G__4867;
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

var seq__4850 = cljs.core.seq.call(null,elements);
var chunk__4851 = null;
var count__4852 = (0);
var i__4853 = (0);
while(true){
if((i__4853 < count__4852)){
var element = cljs.core._nth.call(null,chunk__4851,i__4853);
var item_4868 = staplo.html.create_list_item.call(null,element);
item_4868.addEventListener("click",cljs.core.partial.call(null,handler,element));

list.appendChild(item_4868);

var G__4869 = seq__4850;
var G__4870 = chunk__4851;
var G__4871 = count__4852;
var G__4872 = (i__4853 + (1));
seq__4850 = G__4869;
chunk__4851 = G__4870;
count__4852 = G__4871;
i__4853 = G__4872;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__4850);
if(temp__4126__auto__){
var seq__4850__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4850__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__4850__$1);
var G__4873 = cljs.core.chunk_rest.call(null,seq__4850__$1);
var G__4874 = c__4559__auto__;
var G__4875 = cljs.core.count.call(null,c__4559__auto__);
var G__4876 = (0);
seq__4850 = G__4873;
chunk__4851 = G__4874;
count__4852 = G__4875;
i__4853 = G__4876;
continue;
} else {
var element = cljs.core.first.call(null,seq__4850__$1);
var item_4877 = staplo.html.create_list_item.call(null,element);
item_4877.addEventListener("click",cljs.core.partial.call(null,handler,element));

list.appendChild(item_4877);

var G__4878 = cljs.core.next.call(null,seq__4850__$1);
var G__4879 = null;
var G__4880 = (0);
var G__4881 = (0);
seq__4850 = G__4878;
chunk__4851 = G__4879;
count__4852 = G__4880;
i__4853 = G__4881;
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