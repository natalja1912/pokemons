(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),i=c.n(s),o=c(4),r=(c(22),c(9)),l=c(2),j=(c(23),c(24),c(0));var m=function(e){return Object(j.jsx)("div",{className:"wrapper ".concat(e.className),children:e.children})};c(26),c(27);var u=function(){return Object(j.jsx)("div",{className:"flag"})};c(28);var d=function(){return Object(j.jsx)("div",{className:"trash"})};var h=function(e){var t=e.card,c=e.mainpage,a=e.favorite,s=e.addToFavorites,i=Object(n.useState)(a),l=Object(r.a)(i,2),m=l[0],h=l[1],b="";return b=m?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",Object(j.jsxs)("section",{className:"card",children:[Object(j.jsx)("button",{className:"card__flag-icon",onClick:function(){s(t),h((function(e){return!e}))},children:m?Object(j.jsx)(d,{}):Object(j.jsx)(u,{})}),Object(j.jsx)("div",{className:"card__info-text",children:b}),Object(j.jsxs)(o.b,{to:"pokemons/".concat(t.name),children:[Object(j.jsx)("img",{className:"card__image",src:t.picture,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430"}),Object(j.jsxs)("div",{className:"card__group",children:[Object(j.jsx)("h2",{className:"card__heading",children:t.name}),!c&&Object(j.jsx)("p",{className:"card__info",children:"\u0442\u0438\u043f: ".concat(t.type)}),!c&&Object(j.jsx)("p",{className:"card__info",children:"\u0432\u044b\u0441\u043e\u0442\u0430: ".concat(t.height)}),!c&&Object(j.jsx)("p",{className:"card__info",children:"\u0432\u0435\u0441: ".concat(t.weight)}),!c&&Object(j.jsx)("p",{className:"card__text",children:t.description})]})]})]})},b=(c(34),c(35));var p=function(e){var t=e.pokemonsList,c=e.favorites,n=e.onSelectButtonClick;return Object(j.jsx)(m,{children:Object(j.jsx)("main",{className:"main-page",children:Object(j.jsx)("ul",{className:"pokemons",children:t&&t.map((function(e){return Object(j.jsx)(h,{mainpage:!0,card:e,favorite:c.some((function(t){return t.name===e.name})),addToFavorites:function(e){return n(e)}},b())}))})})})};c(37);var f=function(){return Object(j.jsx)(m,{children:Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{className:"footer__copyright",children:"\xa92021\xa0Natalia\xa0Pavlova"}),Object(j.jsxs)("div",{className:"footer__links-group",children:[Object(j.jsx)("div",{className:"footer__links",children:Object(j.jsx)(o.b,{className:"footer__link",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(j.jsx)("div",{className:"footer__icons",children:Object(j.jsx)("a",{className:"footer__icon footer__icon_type_github",rel:"noreferrer",target:"_blank",href:"https://github.com/natalja1912"})})]})]})})};c(38),c(39);var O=function(e){var t=e.showMenu,c=Object(l.f)();return Object(j.jsxs)("nav",{className:"nav ".concat(t&&"nav_active"),children:[Object(j.jsx)(o.b,{to:"/",className:"nav__link ".concat("/"===c.pathname&&"nav__link_type_active"),children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(j.jsx)(o.b,{to:"/my-collection",className:"nav__link ".concat("/my-collection"===c.pathname&&"nav__link_type_active"),children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})};var _=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)(m,{className:"wrapper_no-padding",children:Object(j.jsxs)("div",{className:"header__group",children:[Object(j.jsxs)("div",{className:"header__menu",children:[Object(j.jsx)(o.b,{to:"/",className:"header__logo",children:"PokemonsApi"}),Object(j.jsx)("button",{className:"header__menu-button ".concat(!c&&"header__menu-button_active"," ").concat(c&&"header__menu-button_close"),onClick:function(){a((function(e){return!e}))}})]}),Object(j.jsx)(O,{showMenu:c})]})})})};c(40);var x=function(e){var t=e.cards,c=e.onSelectButtonClick;return Object(j.jsx)(m,{children:Object(j.jsx)("main",{className:"selected",children:Object(j.jsx)("ul",{className:"selected_pokemons",children:t.length>0&&t.map((function(e){return Object(j.jsx)(h,{mainpage:!1,card:e,favorite:t.some((function(t){return t.name===e.name})),addToFavorites:function(e){return c(e)}},e.name)}))})})})};c(41);var g=function(){return Object(j.jsxs)("div",{className:"not-found",children:[Object(j.jsxs)("h3",{className:"not-found__title",children:[Object(j.jsx)("span",{children:"404"})," - \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]}),Object(j.jsx)("img",{className:"not-found__image",src:"../images/404.svg",alt:""}),Object(j.jsx)("p",{className:"not-found__text",children:"\u041b\u0443\u0447\u0448\u0435 404 \u0441 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \xab\u041d\u0430\u0437\u0430\u0434\xbb, \u0447\u0435\u043c \u0436\u0443\u0440\u0430\u0432\u043b\u044c \u0432 \u043d\u0435\u0431\u0435."}),Object(j.jsx)(o.b,{className:"button button_type_to-main",to:"/",children:"Try Main Page"})]})},v=[{picture:"https://gabbyapp.com/pockemons/i/Bulbasaur.png",name:"Bulbasaur",description:"\u0411\u0443\u043b\u044c\u0431\u0430\u0437\u0430\u0432\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0434\u0440\u0435\u043c\u043b\u044e\u0449\u0438\u043c \u043f\u0440\u0438 \u044f\u0440\u043a\u043e\u043c \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u043c \u0441\u0432\u0435\u0442\u0435. \u041d\u0430 \u0435\u0433\u043e \u0441\u043f\u0438\u043d\u0435 \u0435\u0441\u0442\u044c \u0441\u0435\u043c\u044f. \u041d\u0430 \u0441\u043e\u043b\u043d\u0446\u0435 \u0441\u0435\u043c\u044f \u0440\u0430\u0441\u0442\u0435\u0442 \u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435.",height:"0.7 \u043c",weight:"6.9 \u043a\u0433",type:"Seed"},{picture:"https://gabbyapp.com/pockemons/i/Pikachu.png",name:"Pikachu",description:"\u0412\u0441\u044f\u043a\u0438\u0439 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u041f\u0438\u043a\u0430\u0447\u0443 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 \u0447\u0442\u043e-\u0442\u043e \u043d\u043e\u0432\u043e\u0435, \u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0440\u0430\u0437\u0438\u0442\u044c \u044d\u0442\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u043c. \u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u0442\u043e\u043b\u043a\u043d\u0435\u0442\u0435\u0441\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441 \u043f\u043e\u0447\u0435\u0440\u043d\u0435\u0432\u0448\u0438\u043c\u0438 \u044f\u0433\u043e\u0434\u0430\u043c\u0438 - \u044d\u0442\u043e \u043f\u0440\u044f\u043c\u043e\u0435 \u0434\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u041f\u0438\u043a\u0430\u0447\u0443 \u043e\u0448\u0438\u0431\u043e\u0447\u043d\u043e \u043f\u0440\u0438\u043d\u044f\u043b \u0438\u0445 \u0437\u0430 \u0447\u0442\u043e-\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0435.",height:"0.4 \u043c",weight:"6 \u043a\u0433",type:"Mouse"},{picture:"https://gabbyapp.com/pockemons/i/Venusaur.png",name:"Venusaur",description:"\u041d\u0430 \u0441\u043f\u0438\u043d\u0435 \u0412\u0435\u043d\u0443\u0437\u0430\u0432\u0440\u0430 \u0435\u0441\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0446\u0432\u0435\u0442\u043e\u043a. \u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u043a\u0440\u0430\u0448\u0435\u043d \u0432 \u044f\u0440\u043a\u0438\u0435 \u0446\u0432\u0435\u0442\u0430, \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u0442\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432 \u0438 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0441\u0432\u0435\u0442\u0430. \u0426\u0432\u0435\u0442\u043e\u0447\u043d\u044b\u0439 \u0430\u0440\u043e\u043c\u0430\u0442 \u0443\u0441\u043f\u043e\u043a\u0430\u0438\u0432\u0430\u0435\u0442 \u044d\u043c\u043e\u0446\u0438\u0438 \u043b\u044e\u0434\u0435\u0439.",height:"2 \u043c",weight:"100 \u043a\u0433",type:"Seed"},{picture:"https://gabbyapp.com/pockemons/i/Vulpix.png",name:"Vulpix",description:"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0412\u0443\u043b\u044c\u043f\u0438\u043a\u0441 \u0438\u043c\u0435\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0431\u0435\u043b\u044b\u0439 \u0445\u0432\u043e\u0441\u0442. \u041f\u043e\u0437\u0436\u0435 \u0445\u0432\u043e\u0441\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0448\u0435\u0441\u0442\u044c, \u0435\u0441\u043b\u0438 \u041f\u043e\u043a\u0435\u043c\u043e\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043b\u044e\u0431\u0438\u043c\u0446\u0435\u043c \u0441\u0432\u043e\u0435\u0433\u043e \u0442\u0440\u0435\u043d\u0435\u0440\u0430. \u0428\u0435\u0441\u0442\u044c \u0445\u0432\u043e\u0441\u0442\u043e\u0432 \u0432\u0435\u043b\u0438\u043a\u043e\u043b\u0435\u043f\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u044f\u0442\u0441\u044f \u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u0441\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f.",height:"0.6 \u043c",weight:"9.9 \u043a\u0433",type:"Fox"}];c(42);var N=function(e){var t=e.pokemonsList,c=Object(l.g)().name,n=t.filter((function(e){return e.name===c}))[0];return Object(j.jsx)(m,{children:Object(j.jsxs)("section",{className:"pokemon",children:[Object(j.jsx)("img",{className:"pokemon__image",src:n.picture,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430"}),Object(j.jsxs)("div",{className:"pokemon__group",children:[Object(j.jsx)("h2",{className:"pokemon__heading",children:n.name}),Object(j.jsx)("p",{className:"pokemon__text",children:"\u0442\u0438\u043f: ".concat(n.type)}),Object(j.jsx)("p",{className:"pokemon__text",children:"\u0432\u044b\u0441\u043e\u0442\u0430: ".concat(n.height)}),Object(j.jsx)("p",{className:"pokemon__text",children:"\u0432\u0435\u0441: ".concat(n.weight)}),Object(j.jsx)("p",{className:"pokemon__text",children:n.description})]})]})})};var k=function(){Object(n.useEffect)((function(){localStorage.clear()}),[]);var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];function s(e){var t=localStorage.getItem("favorites");if(t&&0!==t.length)if((t=JSON.parse(t)).some((function(t){return t.name===e.name}))){var c=t.filter((function(t){return t.name!==e.name}));localStorage.setItem("favorites",JSON.stringify(c)),a(c)}else t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),a(t);else localStorage.setItem("favorites",JSON.stringify([e])),a([e])}return Object(j.jsx)("div",{className:"page",children:Object(j.jsxs)("main",{className:"content",children:[Object(j.jsx)(_,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{favorites:c,pokemonsList:v,onSelectButtonClick:function(e){return s(e)}})}),Object(j.jsx)(l.a,{path:"/my-collection",children:Object(j.jsx)(x,{cards:c,onSelectButtonClick:function(e){return s(e)}})}),Object(j.jsx)(l.a,{path:"/pokemons/:name",children:Object(j.jsx)(N,{pokemonsList:v})}),Object(j.jsx)(l.a,{path:"*",children:Object(j.jsx)(g,{})})]}),Object(j.jsx)(f,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(k,{})})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.d89b023e.chunk.js.map