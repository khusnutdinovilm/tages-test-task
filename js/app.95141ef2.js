(function(){var e={147:function(e,t,a){"use strict";var r=a(751),s=a(641),o=a(953);const n={class:"product-list-filter"},i={class:"product-list-filter__wrapper"};var l=(0,s.pM)({__name:"filter",props:{selectedSort:{},sortOptions:{},selectedMaterial:{},materialsOptions:{}},emits:["update:selectedSort","update:selectedMaterial"],setup(e,{emit:t}){const a=e,r=t,l=(0,o.KR)(a.selectedSort);(0,s.wB)(l,(()=>r("update:selectedSort",l.value)));const c=(0,o.KR)(a.selectedMaterial);return(0,s.wB)(c,(()=>r("update:selectedMaterial",c.value))),(e,t)=>{const a=(0,s.g2)("ui-select");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("div",i,[(0,s.bF)(a,{class:"product-list-filter__item",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"label-text":"Сортировать по",options:e.sortOptions},null,8,["modelValue","options"]),(0,s.bF)(a,{class:"product-list-filter__item",modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),"label-text":"Материал","empty-option":"Не выбрано",options:e.materialsOptions},null,8,["modelValue","options"])])])}}});const c=l;var u=c,p=a(33);const d=e=>{const t=JSON.parse(localStorage.getItem("cart-items")||"[]");return!!t&&t.some((t=>t.id===e.id))},v=e=>{const t=JSON.parse(localStorage.getItem("favorite-items")||"[]");return!!t&&t.some((t=>t.id===e.id))},C={class:"product-card"},m={class:"product-card__wrapper"},f={key:0,class:"product-card__has-discount"},g={class:"product-card__top"},h={class:"product-card__image"},L=["src"],w={class:"product-card__info"},k={class:"product-card__code"},b={class:"product-card__name"},S={class:"product-card__bottom"},F={class:"product-card__price"},y={key:0,class:"product-card__old-price"},A={class:"product-card__current-price"},I={class:"product-card__btns"};var E=(0,s.pM)({__name:"item",props:{product:{}},emits:["manage-cart","manage-favorite"],setup(e,{emit:t}){const r=e,n=t,i=(0,s.EW)((()=>!!r.product.price.old_price)),l=(0,o.KR)(d(r.product)),c=()=>{n("manage-cart",r.product),l.value=!l.value},u=(0,o.KR)(v(r.product)),E=()=>{n("manage-favorite",r.product),u.value=!u.value},M=e=>{if(!e)return"";const t=Math.round(100*e)/100,a=Math.round(e)!==e;return a?t.toLocaleString("ru-RU",{minimumFractionDigits:2}):t.toLocaleString("ru-RU")};return(e,t)=>{const r=(0,s.g2)("cart-icon"),o=(0,s.g2)("favorite-icon");return(0,s.uX)(),(0,s.CE)("div",C,[(0,s.Lk)("div",m,[i.value?((0,s.uX)(),(0,s.CE)("div",f,"Скидка")):(0,s.Q3)("",!0),(0,s.Lk)("div",g,[(0,s.Lk)("div",h,[(0,s.Lk)("img",{src:a(382)(`./${e.product.image.url}`)},null,8,L)])]),(0,s.Lk)("div",w,[(0,s.Lk)("div",k,(0,p.v_)(e.product.code),1),(0,s.Lk)("div",b,(0,p.v_)(e.product.name),1),(0,s.Lk)("div",S,[(0,s.Lk)("div",F,[i.value?((0,s.uX)(),(0,s.CE)("div",y,(0,p.v_)(M(e.product.price.old_price))+"₽ ",1)):(0,s.Q3)("",!0),(0,s.Lk)("div",A,(0,p.v_)(M(e.product.price.current_price))+"₽ ",1)]),(0,s.Lk)("div",I,[(0,s.Lk)("div",{class:"product-card__cart-btn",onClick:c},[(0,s.bF)(r,{"is-in-cart":l.value},null,8,["is-in-cart"])]),(0,s.Lk)("div",{class:"product-card__favorite-btn",onClick:E},[(0,s.bF)(o,{"is-in-favorite":u.value},null,8,["is-in-favorite"])])])])])])])}}});const M=E;var R=M,O=a(278);const Q=(0,s.Lk)("div",{class:"empty-list-title"},"Список товаров пуст",-1),U={class:"product-list"},X={class:"product-list__items"};var x=(0,s.pM)({__name:"product-list",setup(e){const t=(0,O.Pj)(),a=(0,o.KR)(!0),r=(0,o.KR)({}),n=[{id:"0",name:"Цена по возрастанию"},{id:"1",name:"Цена по убыванию"}],i=(0,o.KR)({}),l=(0,o.KR)([]),c={0:e=>e.sort(((e,t)=>e.price.current_price-t.price.current_price)),1:e=>e.sort(((e,t)=>t.price.current_price-e.price.current_price))},p=(0,s.EW)((()=>t.state.products.products)),d=(0,s.EW)((()=>{const e=p.value.filter((e=>e.material===+i.value?.id)),t=!Object.keys(i.value).length;return t?p.value:e})),v=(0,s.EW)((()=>c[r.value?.id](d.value))),C=e=>{t.dispatch("cart/manageCart",e)},m=e=>{t.dispatch("favorite/manageFavorite",e)};return(0,s.sV)((async()=>{try{r.value=n[0],l.value=await t.dispatch("products/getMaterials"),await t.dispatch("products/getProducts")}catch(e){throw e}finally{a.value=!1}})),(e,t)=>{const o=(0,s.g2)("page-container");return(0,s.uX)(),(0,s.Wv)(o,{loadingContent:a.value,"page-content-empty":!p.value.length&&!a.value},{"page-title":(0,s.k6)((()=>[(0,s.eW)(" Комплекты стеллажных систем ")])),"page-content-empty":(0,s.k6)((()=>[Q])),"page-content":(0,s.k6)((()=>[(0,s.Lk)("div",U,[(0,s.bF)(u,{"selected-sort":r.value,"onUpdate:selectedSort":t[0]||(t[0]=e=>r.value=e),"sort-options":n,"selected-material":i.value,"onUpdate:selectedMaterial":t[1]||(t[1]=e=>i.value=e),"materials-options":l.value},null,8,["selected-sort","selected-material","materials-options"]),(0,s.Lk)("div",X,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(v.value,(e=>((0,s.uX)(),(0,s.Wv)(R,{key:e.id,class:"product-list__item",product:e,onManageCart:t=>C(e),onManageFavorite:t=>m(e)},null,8,["product","onManageCart","onManageFavorite"])))),128))])])])),_:1},8,["loadingContent","page-content-empty"])}}});const V=x;var B=V,J={__name:"App",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(B))}};const G=J;var Y=G;const T="/tages-test-task/",Z=()=>fetch(T+"db/materials.json"),K=()=>fetch(T+"db/items.json");var P={namespaced:!0,state:{products:[]},getters:{products:e=>e.products},mutations:{setProducts(e,t){e.products=t}},actions:{async getProducts({commit:e}){try{const t=await K(),a=await t.json();e("setProducts",a)}catch(t){alert(t.message)}},async getMaterials(){try{const e=await Z();return await e.json()}catch(e){alert(e.message)}}}},N={namespaced:!0,state:{cartItems:JSON.parse(localStorage.getItem("cart-items"))||[]},getters:{cartItems:e=>e.cartItems},mutations:{addToCart(e,t){e.cartItems.push(t),localStorage.setItem("cart-items",JSON.stringify(e.cartItems))},deleteFromCart(e,t){let a=e.cartItems.findIndex((e=>e.id===t.id));-1!==a&&(e.cartItems.splice(a,1),localStorage.setItem("cart-items",JSON.stringify(e.cartItems)))}},actions:{manageCart({commit:e},t){d(t)?e("deleteFromCart",t):e("addToCart",t)}}},j={namespaced:!0,state:{favoriteItems:JSON.parse(localStorage.getItem("favorite-items"))||[]},getters:{favoriteItems:e=>e.favoriteItems},mutations:{addToFavorite(e,t){e.favoriteItems.push(t),localStorage.setItem("favorite-items",JSON.stringify(e.favoriteItems))},deleteFromFavorite(e,t){let a=e.favoriteItems.findIndex((e=>e.id===t.id));-1!==a&&(e.favoriteItems.splice(a,1),localStorage.setItem("favorite-items",JSON.stringify(e.favoriteItems)))}},actions:{manageFavorite({commit:e},t){v(t)?e("deleteFromFavorite",t):e("addToFavorite",t)}}},D=(0,O.y$)({state:{},getters:{},mutations:{},actions:{},modules:{products:P,cart:N,favorite:j}});const H={class:"ui-select"},q={class:"ui-select__wrapper"},z={class:"ui-select__label"},W={class:"ui-select__selected-item-text"},_={class:"ui-select__selected-item-icon"},$=["onClick"],ee={name:"ui-select"};var te=(0,s.pM)({...ee,props:{labelText:{},options:{},emptyOption:{},modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,r=t,n=(0,o.KR)(a.modelValue),i=(0,o.KR)(!1),l=()=>{i.value=!i.value},c=e=>{r("update:modelValue",e),n.value=e,l()};return(e,t)=>{const a=(0,s.g2)("chevron-icon");return(0,s.uX)(),(0,s.CE)("div",H,[(0,s.Lk)("div",q,[(0,s.Lk)("div",z,(0,p.v_)(e.labelText)+":",1),(0,s.Lk)("div",{class:"ui-select__selected-item",onClick:l},[(0,s.Lk)("div",W,(0,p.v_)(n.value?.name||e.emptyOption),1),(0,s.Lk)("div",_,[(0,s.bF)(a,{"is-chevron-up":i.value},null,8,["is-chevron-up"])])]),(0,s.Lk)("div",{class:(0,p.C4)(["ui-select__options",{"ui-select__options_open":i.value}])},[e.emptyOption?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"ui-select__option",onClick:t[0]||(t[0]=e=>c({}))},(0,p.v_)(e.emptyOption),1)):(0,s.Q3)("",!0),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.options,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"ui-select__option",onClick:t=>c(e)},(0,p.v_)(e.name),9,$)))),128))],2)])])}}});const ae=te;var re=ae,se=[re];const oe=(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.2929 7.29291L20.7071 8.70712L12 17.4142L3.29291 8.70712L4.70712 7.29291L12 14.5858L19.2929 7.29291Z",fill:"black"},null,-1),ne=(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.2929 7.29291L20.7071 8.70712L12 17.4142L3.29291 8.70712L4.70712 7.29291L12 14.5858L19.2929 7.29291Z",fill:"black"},null,-1),ie=[oe,ne],le={name:"chevron-icon"};var ce=(0,s.pM)({...le,props:{isChevronUp:{type:Boolean,default:!1}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("svg",{class:(0,p.C4)(["chevron-svg",{"chevron-svg_open":e.isChevronUp}]),width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ie,2))}});const ue=ce;var pe=ue;const de={key:0,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ve=(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.9944 15.5C13.9274 15.5 15.4944 13.933 15.4944 12C15.4944 10.067 13.9274 8.5 11.9944 8.5C10.0614 8.5 8.49439 10.067 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5ZM11.9944 13.4944C11.1691 13.4944 10.5 12.8253 10.5 12C10.5 11.1747 11.1691 10.5056 11.9944 10.5056C12.8197 10.5056 13.4888 11.1747 13.4888 12C13.4888 12.8253 12.8197 13.4944 11.9944 13.4944Z",fill:"#0F0F0F"},null,-1),Ce=(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 5C7.18879 5 3.9167 7.60905 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C16.8112 19 20.0833 16.391 21.8107 14.5202C23.1426 13.0778 23.1426 10.9222 21.8107 9.47978C20.0833 7.60905 16.8112 5 12 5ZM3.65868 10.8366C5.18832 9.18002 7.9669 7 12 7C16.0331 7 18.8117 9.18002 20.3413 10.8366C20.9657 11.5128 20.9657 12.4872 20.3413 13.1634C18.8117 14.82 16.0331 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366Z",fill:"#0F0F0F"},null,-1),me=[ve,Ce],fe={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge=(0,s.Fv)('<path d="M4.4955 7.44088C3.54724 8.11787 2.77843 8.84176 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C13.2958 19 14.4799 18.8108 15.5523 18.4977L13.8895 16.8349C13.2936 16.9409 12.6638 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366C4.23754 10.2097 4.99526 9.50784 5.93214 8.87753L4.4955 7.44088Z" fill="#0F0F0F"></path><path d="M8.53299 11.4784C8.50756 11.6486 8.49439 11.8227 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5C12.1716 15.5 12.3458 15.4868 12.516 15.4614L8.53299 11.4784Z" fill="#0F0F0F"></path><path d="M15.4661 12.4471L11.5473 8.52829C11.6937 8.50962 11.8429 8.5 11.9944 8.5C13.9274 8.5 15.4944 10.067 15.4944 12C15.4944 12.1515 15.4848 12.3007 15.4661 12.4471Z" fill="#0F0F0F"></path><path d="M18.1118 15.0928C19.0284 14.4702 19.7715 13.7805 20.3413 13.1634C20.9657 12.4872 20.9657 11.5128 20.3413 10.8366C18.8117 9.18002 16.0331 7 12 7C11.3594 7 10.7505 7.05499 10.1732 7.15415L8.50483 5.48582C9.5621 5.1826 10.7272 5 12 5C16.8112 5 20.0833 7.60905 21.8107 9.47978C23.1426 10.9222 23.1426 13.0778 21.8107 14.5202C21.2305 15.1486 20.476 15.8603 19.5474 16.5284L18.1118 15.0928Z" fill="#0F0F0F"></path><path d="M2.00789 3.42207C1.61736 3.03155 1.61736 2.39838 2.00789 2.00786C2.39841 1.61733 3.03158 1.61733 3.4221 2.00786L22.0004 20.5862C22.391 20.9767 22.391 21.6099 22.0004 22.0004C21.6099 22.3909 20.9767 22.3909 20.5862 22.0004L2.00789 3.42207Z" fill="#0F0F0F"></path>',5),he=[ge],Le={name:"eye-icon"};var we=Object.assign(Le,{props:{isEyeOpen:{type:Boolean,required:!1}},setup(e){return(t,a)=>e.isEyeOpen?((0,s.uX)(),(0,s.CE)("svg",de,me)):((0,s.uX)(),(0,s.CE)("svg",fe,he))}});const ke=we;var be=ke;const Se={width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Fe=["fill"],ye={name:"favorite-icon"};var Ae=(0,s.pM)({...ye,props:{isInFavorite:{type:Boolean,default:!1}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("svg",Se,[(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.0979 1.44916e-05C12.795 0 11.9551 0.155217 10.9924 0.626465C10.6359 0.800937 10.3015 1.01105 9.99095 1.25618C9.69235 1.0248 9.37131 0.824326 9.0296 0.655321C8.04816 0.169898 7.16523 0 5.90907 0C2.54477 0 0.0999756 2.78754 0.0999756 6.40789C0.0999756 9.14198 1.62442 11.7831 4.46393 14.3369C5.95438 15.6774 7.85737 17.004 9.22022 17.7097L9.99998 18.1135L10.7797 17.7097C12.1426 17.004 14.0456 15.6774 15.536 14.3369C18.3755 11.7831 19.9 9.14198 19.9 6.40789C19.9 2.82586 17.4321 0.0138225 14.0979 1.44916e-05ZM18.1 6.40793C18.1 8.54995 16.8276 10.7544 14.3324 12.9986C12.972 14.2221 11.2231 15.4449 10 16.0864C8.77695 15.4449 7.02806 14.2221 5.66767 12.9986C3.17246 10.7544 1.90002 8.54995 1.90002 6.40793C1.90002 3.73298 3.5953 1.80004 5.90911 1.80004C6.90787 1.80004 7.52333 1.91847 8.23164 2.2688C8.65002 2.47573 9.01981 2.74897 9.3399 3.09043L10.0021 3.79687L10.6583 3.08483C10.9856 2.72969 11.3608 2.45023 11.7837 2.24322C12.4713 1.90668 13.0483 1.80004 14.0942 1.80004C16.3794 1.80952 18.1 3.7701 18.1 6.40793Z",fill:e.isInFavorite?"red":"black"},null,8,Fe)]))}});const Ie=Ae;var Ee=Ie;const Me={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re=(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.99997 19.8999C4.53235 19.8999 0.099968 15.4676 0.099968 9.99994C0.099968 4.53233 4.53235 0.0999451 9.99997 0.0999451C15.4676 0.0999451 19.9 4.53233 19.9 9.99994C19.9 15.4676 15.4676 19.8999 9.99997 19.8999ZM9.99997 18.0999C14.4735 18.0999 18.1 14.4734 18.1 9.99994C18.1 5.52644 14.4735 1.89994 9.99997 1.89994C5.52646 1.89994 1.89997 5.52644 1.89997 9.99994C1.89997 14.4734 5.52646 18.0999 9.99997 18.0999ZM12.9636 6.66355L8.19997 11.4272L6.13637 9.36355L4.86358 10.6363L8.19997 13.9727L14.2364 7.93635L12.9636 6.66355Z",fill:"#27AE60"},null,-1),Oe=[Re],Qe={key:1,width:"20",height:"20",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ue=(0,s.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.66412 1.80229C3.50428 1.80194 3.3502 1.82003 3.20378 1.85443C3.00307 1.41204 2.73794 1.01515 2.4364 0.713604C1.92459 0.201799 1.1174 0 0 0V1.8C0.682603 1.8 1.07541 1.8982 1.1636 1.9864C1.50378 2.32657 1.8 3.01776 1.8 3.6L1.80905 3.72728L2.69093 9.90046C1.21532 9.97702 0.0721779 11.1229 0.00110572 12.5554L0 13.5C0.0871391 14.9795 1.22648 16.1177 2.64892 16.1985L2.85323 16.1989C3.22356 17.2481 4.22398 18 5.4 18C6.5756 18 7.57571 17.2487 7.94636 16.2H10.0536C10.4243 17.2487 11.4244 18 12.6 18C14.0912 18 15.3 16.7912 15.3 15.3C15.3 13.8088 14.0912 12.6 12.6 12.6C11.4244 12.6 10.4243 13.3513 10.0536 14.4H7.94636C7.57571 13.3513 6.5756 12.6 5.4 12.6C4.2244 12.6 3.22429 13.3513 2.85364 14.4H2.7C2.24101 14.3725 1.82928 13.9612 1.79838 13.4461L1.8 12.6C1.82427 12.1332 2.23318 11.7243 2.7446 11.6989L4.52132 11.6993L4.5342 11.7H13.6052L13.738 11.6578C14.4204 11.4413 14.9667 10.9275 15.2253 10.2623L15.3201 10.0746L15.6282 9.46429C15.9469 8.83253 16.2656 8.19968 16.5762 7.58142C17.3369 6.06697 17.8153 5.1045 17.9213 4.86815C18.4654 3.65441 17.3632 2.72022 16.2366 2.70032L3.66412 1.80229ZM13.2924 9.89997H4.60154C4.54375 9.88391 4.49972 9.83495 4.4911 9.77399L3.60919 3.60063L16.104 4.4954C15.8854 4.94126 15.4879 5.73762 14.9676 6.77345L14.9546 6.79941C14.6576 7.39065 14.3393 8.02262 14.0211 8.65354L13.7134 9.26309L13.5968 9.49393L13.5529 9.59597C13.5058 9.72695 13.4125 9.83459 13.2924 9.89997ZM12.6 16.1999C13.097 16.1999 13.5 15.797 13.5 15.2999C13.5 14.8029 13.097 14.3999 12.6 14.3999C12.1029 14.3999 11.7 14.8029 11.7 15.2999C11.7 15.797 12.1029 16.1999 12.6 16.1999ZM6.3 15.2999C6.3 15.797 5.89706 16.1999 5.4 16.1999C4.90294 16.1999 4.5 15.797 4.5 15.2999C4.5 14.8029 4.90294 14.3999 5.4 14.3999C5.89706 14.3999 6.3 14.8029 6.3 15.2999Z",fill:"black"},null,-1),Xe=[Ue],xe={name:"cart-icon"};var Ve=(0,s.pM)({...xe,props:{isInCart:{type:Boolean,default:!1}},setup(e){return(e,t)=>e.isInCart?((0,s.uX)(),(0,s.CE)("svg",Me,Oe)):((0,s.uX)(),(0,s.CE)("svg",Qe,Xe))}});const Be=Ve;var Je=Be,Ge=[pe,be,Ee,Je];const Ye={class:"breadcrumbs"},Te={class:"breadcrumbs__wrapper"},Ze={key:0,class:"breadcrumbs__del"},Ke=["href"];var Pe={__name:"breadcrumbs",setup(e){const t=[{to:"",name:"Главная"},{to:"",name:"Системы хранения"},{to:"",name:"Комплекты стеллажных систем"}];return(e,a)=>((0,s.uX)(),(0,s.CE)("div",Ye,[(0,s.Lk)("div",Te,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(t,((e,a)=>((0,s.uX)(),(0,s.CE)(s.FK,{key:e.to},[0!==a?((0,s.uX)(),(0,s.CE)("div",Ze,"/")):(0,s.Q3)("",!0),(0,s.Lk)("a",{class:(0,p.C4)(["breadcrumbs__link",{breadcrumbs__link_active:a===t.length-1}]),href:e.to},(0,p.v_)(e.name),11,Ke)],64)))),64))])]))}};const Ne=Pe;var je=Ne;const De={class:"page-container"},He={class:"page-container__wrapper"},qe={key:0,class:"page-container__page-breadcrumbs"},ze={class:"page-container__page-title"},We={key:1,class:"page-container__page-content-loading"},_e=(0,s.Lk)("div",{class:"loader"},null,-1),$e=[_e],et={key:2,class:"page-container__page-content-empty"},tt={key:3,class:"page-container__content"},at={name:"page-container"};var rt=(0,s.pM)({...at,props:{withoutBreadcrumbs:{type:Boolean,default:!1},loadingContent:{type:Boolean,default:!0},pageContentEmpty:{type:Boolean,default:!0}},setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)("main",De,[(0,s.Lk)("div",He,[e.withoutBreadcrumbs?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",qe,[(0,s.bF)(je)])),(0,s.Lk)("h1",ze,[(0,s.RG)(e.$slots,"page-title")]),e.loadingContent?((0,s.uX)(),(0,s.CE)("div",We,$e)):e.pageContentEmpty?((0,s.uX)(),(0,s.CE)("div",et,[(0,s.RG)(e.$slots,"page-content-empty")])):((0,s.uX)(),(0,s.CE)("div",tt,[(0,s.RG)(e.$slots,"page-content")]))])]))}});const st=rt;var ot=st,nt=[ot];const it=[...se,...Ge,...nt],lt=(0,r.Ef)(Y);it.forEach((e=>lt.component(e.name,e))),lt.use(D).mount("#app")},382:function(e,t,a){var r={"./pic1.png":937,"./pic1.webp":794,"./pic2.png":226,"./pic2.webp":691,"./pic3.png":91,"./pic3.webp":648,"./pic4.png":788,"./pic4.webp":665};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=382},937:function(e,t,a){"use strict";e.exports=a.p+"img/pic1.f543ddfc.png"},794:function(e){"use strict";e.exports="data:image/webp;base64,UklGRuIEAABXRUJQVlA4INYEAACQLACdASruAO0APpFInEslpDIhpZXJWkASCWlu4XMHqCyn3+oYw502DRIa0YL8J0DR5Rq7u7u7u7u7u7u7u7u7u349IMT9+cZdi9BltzE8aMimdTpGgSN8b5BXDWi04SjPWH2kQhg7GD0nUmCcD/465oyhkPbAR7RotNRq+53Gif3wQWDGKHH1NsqSwwwXT0Fynnw5ZJSKxG6pv/+fPl8GS+xQ/od17SK39s72CFMkqtRJ9xKd5w+nt3e58UQxK1qMvVYDtTzofrLYz1DBYylJhQaMFqSn26ZfL1dWTrPE8RVw0uAa1R8xsf0fmvQUWq5jCBkZVT6EO8RkMqZbPhV2oKc4Y2s2+FpNYbl2d/79g8CcWHczDT5XWjzJUROBYctrnmkjXIEkYIgsW1/k3X8sS0Grng/77Q5p3QUCJpv1NU34ToGjygKo282ahLvHB4MPyaFXcHOEs6SRiL4RtGi04SzpJGC/CdA0eUamAAD+/t0wAAAbgEtdXTUoOm6UPFuwRNE2ZpFGUE7elYkK+7ESeDNghqBD2DYxtfjbluITmDKnMMmfxtMzyIZCRYkUDmJhXHRnZFj5pKkgxu2QkNyl4usk22p6mhntT76Hf7YbYQ4f0LjYGzKlnFqUs5751gcl+57I76ctnVgpbbLQC2x00WPydcfZLXM3Li14csi4qfRuhb7mUGAeUZYE00lh906N0e/qntg5k6RYpfdC0PELLVkV4hG1kBxfG30YTdJjJkBeL4Yv6tfni34CuC4GnwDPgKIypRftFrFx3wAn7Tz87Rwbrt4AQIhMYZGP7rmmm5m95ZLwl22bfhmDa6lK49KfRM90rsiVDfQfLsR+twoBqeLPE6EqB//9Q3ixebSHm5Vt9ovIj3j+WOkEyHFwxqfnGCOhC/Z1mN7Y6srP1t0+1RTF4UDGLy2dU+w2Lxg+aVWgEswX8s3GbRES+CEDCHAqx7hXv7h5tjVNksw1kQLEy+6pkpc62f+TJD8J4gtPslB+ls7isPXuI7yC1wd1ecC2i5JNbOIEuJDgQTIaYbP2uJ+tUt0wu/ocjRKBC/kPm5piuu8+jQcJ29o7t7JUHRhORL9EqGW9lyi46xVsm4qMcKNiz6vndtjWKV6GfYPvKb02OUFpmbB5Ic/qH0rOxE/R+Y2rju+TC6e68IHAU7f0BQognpfzuZb4gYUXS5llHQBwTVSZe3aqeDrr45JmxieYQvAE8OqTKIPeN1K1JqSAYp3IjkSo0Wmu99sK7FhH6Igfk82+RYa8sotipvbzQgnvaQR9pITtAVslPjgbd5lvIANiQfesC7ueU2owTKxyf2t7shJAULv6KL3y3aS5IEsRJUa18z6/6Mb2NGk8/U7srEf/KasSiOTo1mHupsTko+rbLxu2hlGy79fEeoP3CB9uKYhjtUjzSHueaiaYzpKsDTXe7bYwvf71EUUz0R9xzByzilTtIM2wz6JFqoJ5/aSVH4nlStQzJcJ6Z3zTBJhzgevsTwFaONjF70abY2v0LWEIucz77Nv6+CTi1oIMFihygPzSsgVCKGROTvY7t7VxJ/i+jrw84n2CvZsP0WRr30RkW4VYzI7+rUSJWnVLZDJ0TaJ0BHNLdsAHsXJTSF8hT70Pdd+Uq0L5xhJZkSUWiAAAAAAAAA=="},226:function(e,t,a){"use strict";e.exports=a.p+"img/pic2.1fd71635.png"},691:function(e){"use strict";e.exports="data:image/webp;base64,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"},91:function(e,t,a){"use strict";e.exports=a.p+"img/pic3.f3a1fd4f.png"},648:function(e){"use strict";e.exports="data:image/webp;base64,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"},788:function(e,t,a){"use strict";e.exports=a.p+"img/pic4.edda0b66.png"},665:function(e){"use strict";e.exports="data:image/webp;base64,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"}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,o){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,s,o]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/tages-test-task/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(t&&t(r);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunktages_test_task"]=self["webpackChunktages_test_task"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(147)}));r=a.O(r)})();
//# sourceMappingURL=app.95141ef2.js.map