import{b as O}from"./chunk-ELRUIHZQ.js";import"./chunk-WWERPIBW.js";import{j as M}from"./chunk-4JCY43XR.js";import{c as h,d as _,h as C,i as y,k as b}from"./chunk-ON76XF4O.js";import{$a as m,Aa as x,Da as o,Ea as d,Pa as s,Sa as l,Za as r,_a as i,aa as f,db as u,eb as p,kb as a,lb as c,mb as v,rb as I}from"./chunk-D2HDWTVY.js";function w(e,n){if(e&1&&(r(0,"div",2),m(1,"ng-lottie",3),i()),e&2){let t=u();o(),l("options",t.loading)}}function E(e,n){if(e&1&&(r(0,"li",16)(1,"strong"),a(2),i(),a(3),i()),e&2){let t=n.$implicit;o(2),c(t.name),o(),v(": ",t.quantity," ")}}function D(e,n){if(e&1&&(r(0,"li",16),a(1),i()),e&2){let t=n.$implicit;o(),c(t)}}function S(e,n){if(e&1&&(r(0,"section",4)(1,"div",5)(2,"article",6)(3,"h1",7),a(4),i(),r(5,"h2",8),a(6),i(),r(7,"div",9)(8,"h3"),a(9,"Ingredients"),i(),r(10,"ul",10),s(11,E,4,2,"li",11),i()(),r(12,"div",12)(13,"h4"),a(14,"Instructions:"),i(),r(15,"ol"),s(16,D,2,1,"li",11),i()(),r(17,"button",13),a(18,"Add to favorite"),i()(),r(19,"div",14),m(20,"img",15),i()()()),e&2){let t=u();o(4),c(t.currentItem==null?null:t.currentItem.name),o(2),c(t.currentItem==null?null:t.currentItem.category),o(5),l("ngForOf",t.currentItem==null?null:t.currentItem.ingredients),o(5),l("ngForOf",t.currentItem==null?null:t.currentItem.instructions),o(),p("id",t.currentItem==null?null:t.currentItem.id),o(3),p("src",t.currentItem==null?null:t.currentItem.image,x),p("alt",t.currentItem==null?null:t.currentItem.name)}}var P=class e{constructor(n,t){this.http=n;this.active=t}data;itemId;currentItem;loading={path:"assets/loading.json"};isloading=!0;ngOnInit(){this.itemId=this.active.snapshot.params.id,console.log(this.itemId),this.getData().subscribe(n=>{this.data=n,console.log(this.data),this.currentItem=this.data.find(t=>t.id===Number(this.itemId)),console.log(this.currentItem),this.isloading=!1},n=>{console.error("Error occurred while fetching data:",n)})}getData(){return this.http.get("https://jawadtamer.github.io/recipesApi/api.json")}static \u0275fac=function(t){return new(t||e)(d(C),d(b))};static \u0275cmp=f({type:e,selectors:[["app-recipe-details"]],standalone:!0,features:[I],decls:2,vars:2,consts:[["class","loading w-75 m-auto",4,"ngIf"],["class","single-product",4,"ngIf"],[1,"loading","w-75","m-auto"],[3,"options"],[1,"single-product"],[1,"section-center","single-product-center"],[1,"single-product-info"],[1,"single-product-title"],[1,"single-product-company","text-slanted"],[1,"ingredients-section"],[1,"ingredients-list"],["class"," text-black-50",4,"ngFor","ngForOf"],[1,"single-product-desc"],[1,"addToCartBtn","btn",3,"id"],[1,"single-product-image-container"],[1,"single-product-img","img",3,"src","alt"],[1,"text-black-50"]],template:function(t,g){t&1&&s(0,w,2,1,"div",0)(1,S,21,7,"section",1),t&2&&(l("ngIf",g.isloading),o(),l("ngIf",g.data))},dependencies:[y,M,h,_,O],styles:["h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:var(--dark)}h2[_ngcontent-%COMP%]{color:var(--secondary)}strong[_ngcontent-%COMP%]{color:var(--last)}button[_ngcontent-%COMP%]{background-color:var(--last);transition:transform .3s ease;color:#f5f5f5}button[_ngcontent-%COMP%]:hover{transform:scale(1.05);color:#f5f5f5;background-color:var(--secondary)}.single-product-center[_ngcontent-%COMP%]{margin-top:100px}.single-product-center[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.single-product-info[_ngcontent-%COMP%]{flex:1 1 300px;padding:20px}.single-product-image-container[_ngcontent-%COMP%]{flex:1 1 300px;display:flex;justify-content:center;align-items:center;overflow:hidden}.single-product-img[_ngcontent-%COMP%]{width:500px;height:500px;border-radius:10px;object-fit:cover;box-shadow:0 4px 8px #0000001a;transition:transform .4s ease,box-shadow .4s ease}.single-product-img[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 8px 16px #0003}@media (max-width: 768px){.single-product-center[_ngcontent-%COMP%]{flex-direction:column}}"]})};export{P as RecipeDetailsComponent};
