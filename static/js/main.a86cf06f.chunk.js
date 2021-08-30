(this["webpackJsonpbook-room-app"]=this["webpackJsonpbook-room-app"]||[]).push([[0],{102:function(e,t){},136:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(56),s=n.n(a),i=(n(71),n(72),n(0)),o=function(e){var t=e.children,n=e.hero;return Object(i.jsx)("header",{className:n,children:t})},j=o;o.defaultProps={hero:"defaultHero"};var l=function(e){var t=e.children,n=e.title,c=e.subtitle;return Object(i.jsxs)("div",{className:"banner",children:[Object(i.jsx)("h1",{children:n}),Object(i.jsx)("div",{}),Object(i.jsx)("p",{children:c}),t]})},d=n(4),b=n(12),m=n(13),u=n(15),h=n(14),O=function(e){var t=e.title;return Object(i.jsx)("div",{className:"section-title",children:Object(i.jsx)("h4",{children:t})})},p=n(18),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={services:[{icon:Object(i.jsx)(p.c,{}),title:"Drinki",info:"Pierwszy drink w barze za darmo, przyjd\u017a i baw si\u0119 dobrze..."},{icon:Object(i.jsx)(p.e,{}),title:"Wygodny dojazd",info:"Wybieramy lokalizacje kt\xf3re pozwalaj\u0105 na wygodny dojazd"},{icon:Object(i.jsx)(p.d,{}),title:"Wypo\u017cuczalnia sprzetu",info:"Najleprzy sprz\u0119t do wynaj\u0119cia na miejscu w najleprzych cenach"},{icon:Object(i.jsx)(p.b,{}),title:"Domowe Piwo",info:"Oferujemy najwy\u017cszej jako\u015bci piwa z naturalnych produkt\xf3w"}]},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("section",{className:"services",children:[Object(i.jsx)(O,{title:"Services"}),Object(i.jsx)("div",{className:"services-center",children:this.state.services.map((function(e,t){return Object(i.jsxs)("article",{className:"service",children:[Object(i.jsx)("span",{children:e.icon}),Object(i.jsx)("h6",{children:e.title}),Object(i.jsx)("p",{children:e.info})]},t)}))})]})}}]),n}(c.Component),f=n(19),v=n(25),g=n(21),y=n.n(g),k=n(16),N=n(57),z=n(58),S=Object(z.createClient)({space:Object({NODE_ENV:"production",PUBLIC_URL:"/Book__room_app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_SPACE,accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/Book__room_app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ACCESS_TOKEN}),C=r.a.createContext(),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:600,minSize:0,maxSize:0,breakfast:!1,pets:!1},e.getData=Object(N.a)(y.a.mark((function t(){var n,c,r,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.getEntries({content_type:"bookRoomContent"});case 3:n=t.sent,c=e.formatData(n.items),r=Math.max.apply(Math,Object(k.a)(c.map((function(e){return e.price})))),a=Math.max.apply(Math,Object(k.a)(c.map((function(e){return e.size})))),e.setState({rooms:c,featuredRooms:c,sortedRooms:c,loading:!1,price:r,maxSize:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e.getRoom=function(t){return Object(k.a)(e.state.rooms).find((function(e){return e.slug===t}))},e.handleChange=function(t){var n=t.target,c="checkbox"===n.type?n.checked:n.value,r=t.target.name;e.setState(Object(v.a)({},r,c),e.filterRooms)},e.filterRooms=function(){var t=e.state,n=t.rooms,c=t.type,r=t.capacity,a=t.price,s=t.minSize,i=t.maxSize,o=t.breakfast,j=t.pets,l=Object(k.a)(n);"all"!==c&&(l=l.filter((function(e){return e.type===c}))),1!==r&&(l=l.filter((function(e){return e.capacity>=r}))),l=(l=l.filter((function(e){return e.price<=a}))).filter((function(e){return e.size>=s&&e.size<=i})),o&&(l=l.filter((function(e){return!0===e.breakfast}))),j&&(l=l.filter((function(e){return!0===e.pets}))),e.setState({sortedRooms:l})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,n=e.fields.images.map((function(e){return e.fields.file.url}));return Object(f.a)(Object(f.a)({},e.fields),{},{images:n,id:t})}))}},{key:"render",value:function(){return Object(i.jsx)(C.Provider,{value:Object(f.a)(Object(f.a)({},this.state),{},{getRoom:this.getRoom,handleChange:this.handleChange}),children:this.props.children})}}]),n}(c.Component),P=C.Consumer;var _=n.p+"static/media/loading-arrow.dd29210f.gif";function R(){return Object(i.jsxs)("div",{className:"loading",children:[Object(i.jsx)("h4",{children:"rooms data loading..."}),Object(i.jsx)("img",{src:_,alt:"loadingGirs"})]})}var T=n.p+"static/media/room-1.05b90599.jpeg",E=n(9),D=n.n(E);function F(e){var t=e.room,n=t.name,c=t.slug,r=t.images,a=t.price;return Object(i.jsxs)("article",{className:"room",children:[Object(i.jsxs)("div",{className:"img-container",children:[Object(i.jsx)("img",{src:r[0]||T,alt:"single room"}),Object(i.jsxs)("div",{className:"price-top",children:[Object(i.jsx)("h6",{children:"Cena"}),Object(i.jsxs)("h6",{children:[a,"z\u0142"]})]}),Object(i.jsx)(d.b,{to:"/rooms/".concat(c),className:"btn-primary room-link",children:"Sprawd\u017a"})]}),Object(i.jsx)("p",{className:"room-info",children:n})]})}F.propTyoes={room:D.a.shape({name:D.a.string.isRequired,slug:D.a.string.isRequired,images:D.a.arrayOf(D.a.string).isRequired,price:D.a.number.isRequired})};var A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.context,t=e.loading,n=e.featuredRooms;return n=n.map((function(e){return Object(i.jsx)(F,{room:e},e.id)})),Object(i.jsxs)("section",{className:"featured-rooms",children:[Object(i.jsx)(O,{title:"Wyr\xf3\u017cnione pokoje"}),Object(i.jsx)("div",{className:"featured-rooms-center",children:t?Object(i.jsx)(R,{}):n})]})}}]),n}(c.Component);function W(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{children:Object(i.jsx)(l,{title:"Luksusowe pokoje",subtitle:"Pokoje zaczynaj\u0105 si\u0119 od 299z\u0142",children:Object(i.jsx)(d.b,{to:"/rooms",className:"btn-primary",children:"Sprawd\u017a"})})}),Object(i.jsx)(x,{}),Object(i.jsx)(A,{})]})}function H(e){var t=e.rooms;return 0===t.length?Object(i.jsx)("div",{className:"empty-search",children:Object(i.jsx)("h3",{children:"\u017baden z pokoi nie pasuje do wyszukiwanych parametr\xf3w"})}):Object(i.jsx)("section",{className:"roomslist",children:Object(i.jsx)("div",{className:"roomslist-center",children:t.map((function(e){return Object(i.jsx)(F,{room:e},e.id)}))})})}A.contextType=C;var B=function(e,t){return Object(k.a)(new Set(e.map((function(e){return e[t]}))))};function L(e){var t=e.rooms,n=Object(c.useContext)(C),r=n.handleChange,a=n.type,s=n.capacity,o=n.price,j=n.minPrice,l=n.maxPrice,d=n.minSize,b=n.maxSize,m=n.breackfast,u=n.pets,h=B(t,"type");h=(h=["all"].concat(Object(k.a)(h))).map((function(e,t){return Object(i.jsx)("option",{value:e,children:e},t)}));var p=B(t,"capacity");return p=p.map((function(e,t){return Object(i.jsx)("option",{value:e,children:e},t)})),Object(i.jsxs)("section",{className:"filter-container",children:[Object(i.jsx)(O,{title:"Filtruj pokoje"}),Object(i.jsxs)("form",{className:"filter-form",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"type",children:"typy pokoi"}),Object(i.jsx)("select",{name:"type",id:"type",value:a,className:"form-contol",onChange:r,children:h})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"type",children:"Go\u015bcie"}),Object(i.jsx)("select",{name:"capacity",id:"capacity",value:s,className:"form-contol",onChange:r,children:p})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsxs)("label",{htmlFor:"price",children:["Cena Pokoju ",o,"z\u0142"]}),Object(i.jsx)("input",{type:"range",name:"price",id:"price",value:o,min:j,max:l,onChange:r,className:"form-contol"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"size",children:"Rozmiar Pokoju m\xb2"}),Object(i.jsxs)("div",{className:"size-inputs",children:[Object(i.jsx)("input",{type:"number",name:"minSize",id:"size",value:d,onChange:r,className:"size-input"}),Object(i.jsx)("input",{type:"number",name:"maxSize",id:"size",value:b,onChange:r,className:"size-input"})]})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsxs)("div",{className:"single-extra",children:[Object(i.jsx)("input",{type:"checkbox",name:"breakfast",id:"breackfast",checked:m,onChange:r}),Object(i.jsx)("label",{htmlFor:"breakfast",children:"\u015aniadanie"})]}),Object(i.jsxs)("div",{className:"single-extra",children:[Object(i.jsx)("input",{type:"checkbox",name:"pets",id:"pets",checked:u,onChange:r}),Object(i.jsx)("label",{htmlFor:"breakfast",children:"Pupile"})]})]})]})]})}var K,M,I=(K=function(e){var t=e.context,n=(t.loading,t.sortedRooms),c=t.rooms;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(L,{rooms:c}),Object(i.jsx)(H,{rooms:n})]})},function(e){return Object(i.jsx)(P,{children:function(t){return Object(i.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{context:t}))}})}),q=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{hero:"roomsHero",children:Object(i.jsx)(l,{title:"Nasze Pokoje",children:Object(i.jsx)(d.b,{to:"/",className:"btn-primary",children:"Powr\xf3t do strony g\u0142\xf3wnej"})})}),Object(i.jsx)(I,{})]})},U=n(66),G=n(60),J=n(61),V=n(62).a.header(M||(M=Object(J.a)(["\n  min-height: 60vh;\n  background: url(",")\n    center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.img?e.img:T})),Q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).state={slug:c.props.match.params.slug,defaultBcg:T},c}return Object(m.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(!e)return Object(i.jsxs)("div",{className:"error",children:[Object(i.jsx)("h3",{children:"Takiego pokoju nie istnieje..."}),Object(i.jsx)(d.b,{to:"/rooms",className:"btn-primary",children:"Powr\xf3t do pokoi"})]});var t=e.name,n=e.description,c=e.capacity,r=e.size,a=e.price,s=e.extras,o=e.breakfast,j=e.pets,b=e.images,m=Object(G.a)(b).slice(0),u=Object(U.a)(b,1)[0];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(V,{img:u||this.state.defaultBcg,children:Object(i.jsx)(l,{title:"".concat(t),children:Object(i.jsx)(d.b,{to:"/rooms",className:"btn-primary",children:"Powr\xf3t do pokoi"})})}),Object(i.jsxs)("section",{className:"single-room",children:[Object(i.jsx)("div",{className:"single-room-images",children:m.map((function(e,n){return Object(i.jsx)("img",{src:e,alt:t},n)}))}),Object(i.jsxs)("div",{className:"single-room-info",children:[Object(i.jsxs)("article",{className:"desc",children:[Object(i.jsx)("h3",{children:"Opis"}),Object(i.jsx)("p",{children:n})]}),Object(i.jsxs)("article",{className:"info",children:[Object(i.jsx)("h3",{children:"Informacje"}),Object(i.jsxs)("h6",{children:["Cena : ",a,"z\u0142"]}),Object(i.jsxs)("h6",{children:["Rozmiar: ",r,"m\xb2"]}),Object(i.jsxs)("h6",{children:["pojemno\u015b\u0107 :"," ","".concat(c,c>1?" Osoby":" Osoba")]}),Object(i.jsx)("h6",{children:j?"Pupile dozwolone":"Pupile zabronione"}),Object(i.jsx)("h6",{children:o&&"Darmowe \u015bniadanie"})]})]})]}),Object(i.jsxs)("section",{className:"room-extras",children:[Object(i.jsx)("h6",{children:"Dodatki"}),Object(i.jsx)("ul",{className:"extras",children:s.map((function(e,t){return Object(i.jsx)("li",{children:e},t)}))})]})]})}}]),n}(c.Component);function X(){return Object(i.jsx)(j,{children:Object(i.jsx)(l,{title:"Strona 404",subtitle:"Strona kt\xf3rej szukasz nie istnieje",children:Object(i.jsx)(d.b,{to:"/",className:"btn-primary",children:"Powr\xf3t do strony g\u0142\xf3wnej"})})})}Q.contextType=C;var Y=n(2),Z=n.p+"static/media/logo.9dcb348e.svg",$=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.handleToggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"nav-center",children:[Object(i.jsxs)("div",{className:"nav-header",children:[Object(i.jsx)(d.b,{to:"/",children:Object(i.jsx)("img",{src:Z,alt:"Logo Hotel"})}),Object(i.jsx)("button",{type:"button",className:"nav-btn",onClick:this.handleToggle,children:Object(i.jsx)(p.a,{className:"nav-icon"})})]}),Object(i.jsxs)("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links",children:[Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:"/",children:"Strona G\u0142\xf3wna"})}),Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:"/rooms",children:"Pokoje"})})]})]})})}}]),n}(c.Component),ee=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("div",{className:"footer-container",children:Object(i.jsx)("h6",{children:"Copyright \xa9 2021"})})})};var te=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)($,{}),Object(i.jsxs)(Y.c,{children:[Object(i.jsx)(Y.a,{exact:!0,path:"/",component:W}),Object(i.jsx)(Y.a,{exact:!0,path:"/rooms/",component:q}),Object(i.jsx)(Y.a,{exact:!0,path:"/rooms/:slug",component:Q}),Object(i.jsx)(Y.a,{component:X})]}),Object(i.jsx)(ee,{})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{children:Object(i.jsx)(d.a,{children:Object(i.jsx)(te,{})})})}),document.getElementById("root")),ne()},36:function(e,t){},71:function(e,t,n){},72:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.a86cf06f.chunk.js.map