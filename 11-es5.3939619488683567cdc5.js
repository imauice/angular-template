!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var c=0;c<n.length;c++){var i=n[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6hjI":function(c,i,o){"use strict";o.r(i),o.d(i,"NotificationsModule",(function(){return m}));var e,a=o("ofXK"),r=o("fXoL"),u=o("JYVU"),s=o("XiUz"),f=o("bTqV"),l=((e=function(){function c(n){t(this,c),this.templateToastService=n}var i,o,e;return i=c,(o=[{key:"ngOnInit",value:function(){}},{key:"onClick",value:function(t){this.templateToastService.show({type:t,text:"this is a ".concat(t," message")})}}])&&n(i.prototype,o),e&&n(i,e),c}()).\u0275fac=function(t){return new(t||e)(r.Ub(u.a))},e.\u0275cmp=r.Ob({type:e,selectors:[["app-notifications"]],decls:18,vars:0,consts:[["fxLayout","column","fxLayoutGap","1rem",1,"sliders"],["fxFlexAlign","center","fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutGap.gt-xs","2rem grid","fxLayoutGap.lt-sm","1rem",1,"w-100"],["color","primary","mat-flat-button","",1,"w-100",3,"click"]],template:function(t,n){1&t&&(r.ac(0,"div",0),r.ac(1,"h1"),r.Mc(2,"Notifications"),r.Zb(),r.ac(3,"h3"),r.Mc(4,"Click to view notifications"),r.Zb(),r.ac(5,"div",1),r.ac(6,"div"),r.ac(7,"button",2),r.ic("click",(function(){return n.onClick("success")})),r.Mc(8,"Success"),r.Zb(),r.Zb(),r.ac(9,"div"),r.ac(10,"button",2),r.ic("click",(function(){return n.onClick("warning")})),r.Mc(11,"Warning"),r.Zb(),r.Zb(),r.ac(12,"div"),r.ac(13,"button",2),r.ic("click",(function(){return n.onClick("error")})),r.Mc(14,"Error"),r.Zb(),r.Zb(),r.ac(15,"div"),r.ac(16,"button",2),r.ic("click",(function(){return n.onClick("info")})),r.Mc(17,"Info"),r.Zb(),r.Zb(),r.Zb(),r.Zb())},directives:[s.f,s.g,s.a,f.b],styles:[""]}),e),b=o("tyNb"),p=[{path:"",component:l}],m=function n(){t(this,n)};m.\u0275mod=r.Sb({type:m}),m.\u0275inj=r.Rb({factory:function(t){return new(t||m)},imports:[[a.c,b.e.forChild(p),s.i,f.c]]})}}])}();