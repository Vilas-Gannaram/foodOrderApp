(this.webpackJsonpfoodorderapp=this.webpackJsonpfoodorderapp||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2RwA2",summary:"CartItem_summary__23HZb",price:"CartItem_price__2RBCa",amount:"CartItem_amount__cn6oG",actions:"CartItem_actions__1M7qY"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3L-PU",total:"Cart_total__2ihiw",actions:"Cart_actions__2BDYL","button--alt":"Cart_button--alt__23JjG",button:"Cart_button__2b2_c"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3KFrD",icon:"HeaderCartButton_icon__bbWDF",badge:"HeaderCartButton_badge__1RcFB",bump:"HeaderCartButton_bump__1-Hdh"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__3Rgpw",description:"MealItem_description__3XN8K",price:"MealItem_price__gO1hp"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1dQZN",modal:"Modal_modal__GljPO","slide-down":"Modal_slide-down__2kLi1"}},function(e,t,n){e.exports={header:"Header_header__2eR5p","main-image":"Header_main-image__DAAew"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__2j5W-"}},function(e,t,n){e.exports={input:"Input_input__24rJ7"}},function(e,t,n){e.exports={form:"MealItemForm_form__345Yk"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1459c","meals-appear":"AvailableMeals_meals-appear__3xUrB"}},function(e,t,n){e.exports={card:"Card_card__2ZlWu"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),o=n.n(r),s=n(0),l=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(7),m=n.n(u),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(d).items,u=o.reduce((function(e,t){return e+t.amount}),0),j="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(r.useEffect)((function(){if(o.length>0){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){return clearTimeout(e)}}}),[o]),Object(s.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(s.jsx)("span",{className:m.a.icon,children:Object(s.jsx)(l,{})}),Object(s.jsx)("span",{children:"Your Cart"}),Object(s.jsx)("span",{className:m.a.badge,children:u})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(12),x=n.n(O),p=function(e){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("header",{className:x.a.header,children:[Object(s.jsx)("h1",{children:"React Meals"}),Object(s.jsx)(j,{onClick:e.onShowCart})]}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:x.a["main-image"],src:b,alt:"A table full of delicious food"})})]})},h=n(16),_=n.n(h),f=function(){return Object(s.jsxs)("section",{className:_.a.summary,children:[Object(s.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(s.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(s.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(2),C=n(17),g=n.n(C),A=o.a.forwardRef((function(e,t){return Object(s.jsxs)("div",{className:g.a.input,children:[Object(s.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(s.jsx)("input",Object(v.a)({ref:t},e.input))]})})),N=n(18),I=n.n(N),y=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},className:I.a.form,children:[Object(s.jsx)(A,{ref:o,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(s.jsx)("button",{children:"+ Add"}),!a&&Object(s.jsx)("p",{children:"Please enter a valid amount"})]})},M=n(10),w=n.n(M),k=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(s.jsx)(r.Fragment,{children:Object(s.jsxs)("li",{className:w.a.meal,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("div",{className:w.a.description,children:e.description}),Object(s.jsx)("div",{className:w.a.price,children:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)(y,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})})},B=n(19),F=n.n(B),H=n(20),R=n.n(H),D=function(e){return Object(s.jsx)("div",{className:R.a.card,children:e.children})},E=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],T=function(){var e=E.map((function(e){return Object(s.jsx)(k,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(s.jsx)("section",{className:F.a.meals,children:Object(s.jsx)(D,{children:Object(s.jsx)("ul",{children:e})})})},S=function(){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(f,{}),Object(s.jsx)(T,{})]})},P=n(4),Y=n.n(P),z=function(e){var t="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:Y.a["cart-item"],children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsxs)("div",{className:Y.a.summary,children:[Object(s.jsx)("span",{className:Y.a.price,children:t}),Object(s.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(s.jsxs)("div",{className:Y.a.actions,children:[Object(s.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(s.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},G=n(8),J=n.n(G),L=n(11),V=n.n(L),W=function(e){return Object(s.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},Z=function(e){return Object(s.jsx)("div",{className:V.a.modal,children:Object(s.jsx)("div",{className:V.a.content,children:e.children})})},$=document.getElementById("overlays"),q=function(e){return Object(s.jsxs)(r.Fragment,{children:[J.a.createPortal(Object(s.jsx)(W,{onClose:e.onClose}),$),J.a.createPortal(Object(s.jsx)(Z,{children:e.children}),$)]})},K=n(5),U=n.n(K),Q=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){return t.removeItem(e)},i=function(e){return t.addItem(Object(v.a)(Object(v.a)({},e),{},{amount:1}))},o=Object(s.jsx)("ul",{className:U.a["cart-items"],children:t.items.map((function(e){return Object(s.jsx)(z,{name:e.name,amount:e.amount,price:e.price,onAdd:i.bind(null,e),onRemove:c.bind(null,e.id)},e.id)}))});return Object(s.jsxs)(q,{onClose:e.onClose,children:[o,Object(s.jsxs)("div",{className:U.a.total,children:[Object(s.jsx)("span",{children:"Total Amount"}),Object(s.jsx)("span",{children:n})]}),Object(s.jsxs)("div",{className:U.a.actions,children:[Object(s.jsx)("button",{onClick:e.onClose,className:U.a["button--alt"],children:"Close"}),a&&Object(s.jsx)("button",{className:U.a.button,children:"Order"})]})]})},X=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD_ITEM"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(v.a)(Object(v.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(X.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE_ITEM"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(v.a)(Object(v.a)({},l),{},{amount:l.amount-1});(o=Object(X.a)(e.items))[s]=u}return{items:o,totalAmount:d}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})}};return Object(s.jsx)(d.Provider,{value:o,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(ne,{children:[n&&Object(s.jsx)(Q,{onClose:function(){return a(!1)}}),Object(s.jsx)(p,{onShowCart:function(){return a(!0)}}),Object(s.jsx)("main",{children:Object(s.jsx)(S,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.e2403a06.chunk.js.map