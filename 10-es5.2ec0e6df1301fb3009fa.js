!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Aukf:function(n,o,a){"use strict";a.r(o),a.d(o,"ModalsModule",(function(){return J}));var i=a("ofXK"),c=a("fXoL"),l=a("0IaG"),r=a("bTqV");function m(t,n){1&t&&(c.ac(0,"button",4),c.lc(),c.ac(1,"svg",5),c.Vb(2,"path",6),c.Zb(),c.Zb())}function s(t,n){if(1&t&&(c.ac(0,"h1",7),c.Mc(1),c.Zb()),2&t){var e=c.mc();c.Jb(1),c.Nc(e.data.title)}}function u(t,n){1&t&&c.Wb(0)}function p(t,n){if(1&t&&(c.ac(0,"div",8),c.Kc(1,u,1,0,"ng-container",9),c.Zb()),2&t){var e=c.mc();c.Jb(1),c.sc("ngTemplateOutlet",e.data.template)("ngTemplateOutletContext",e.data.context)}}function d(t,n){1&t&&c.Wb(0)}function f(t,n){if(1&t&&(c.ac(0,"div",8),c.Kc(1,d,1,0,"ng-container",10),c.Zb()),2&t){var e=c.mc();c.Jb(1),c.sc("ngComponentOutlet",e.data.component)}}var b,g,h=((g=function(){function n(e,o){t(this,n),this.dialogRef=e,this.data=o}return e(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||g)(c.Ub(l.h),c.Ub(l.a))},g.\u0275cmp=c.Ob({type:g,selectors:[["app-template-modal"]],decls:5,vars:4,consts:[[1,"template-modal"],["class","template-modal__close-button","mat-dialog-close","","mat-icon-button","",4,"ngIf"],["class","template-modal__title",4,"ngIf"],["class","template-modal__content",4,"ngIf"],["mat-dialog-close","","mat-icon-button","",1,"template-modal__close-button"],["height","24","viewBox","0 0 24 24","width","24","xmlns","http://www.w3.org/2000/svg",1,"template-modal__close-button__icon"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"],[1,"template-modal__title"],[1,"template-modal__content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngComponentOutlet"]],template:function(t,n){1&t&&(c.ac(0,"div",0),c.Kc(1,m,3,0,"button",1),c.Kc(2,s,2,1,"h1",2),c.Kc(3,p,2,2,"div",3),c.Kc(4,f,2,1,"div",3),c.Zb()),2&t&&(c.Jb(1),c.sc("ngIf",!n.data.hideCloseButton),c.Jb(1),c.sc("ngIf",n.data.title),c.Jb(1),c.sc("ngIf",n.data.template),c.Jb(1),c.sc("ngIf",n.data.component))},directives:[i.t,r.b,l.d,i.A,i.r],styles:[".template-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%}.template-modal__close-button[_ngcontent-%COMP%]{position:absolute;right:16px;top:16px;background:#e9e9e9;border:none;width:34px;height:34px}.template-modal__close-button[_ngcontent-%COMP%]:focus{outline:none}.template-modal__close-button__icon[_ngcontent-%COMP%]{width:16px;height:16px;vertical-align:baseline!important}.template-modal__title[_ngcontent-%COMP%]{width:90%;margin-top:16px;margin-bottom:24px}.template-modal__content[_ngcontent-%COMP%]{flex:1;width:100%}  .mat-dialog-container{position:relative;border-radius:8px;box-shadow:0 3px 6px rgba(0,0,0,.16);padding:16px}"]}),g),_=((b=function(){function n(e){t(this,n),this.dialog=e}return e(n,[{key:"open",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:"auto",minWidth:0,height:"auto",minHeight:0,disableClose:!0,panelClass:"custom-panel"};return this.dialog.open(h,Object.assign(Object.assign({},n.fetchOptions(e)),{data:t}))}}],[{key:"fetchOptions",value:function(t){var n=t.width,e=t.minWidth,o=t.minHeight,a=t.height;return{minWidth:e+"px",width:"auto"===n?"auto":n+"px",minHeight:o+"px",height:"auto"===a?"auto":a+"px",disableClose:t.disableClose,panelClass:[t.panelClass,"opercoll-popup-panel"]}}}]),n}()).\u0275fac=function(t){return new(t||b)(c.ec(l.b))},b.\u0275prov=c.Qb({token:b,factory:b.\u0275fac,providedIn:"root"}),b),v=a("XiUz");function x(t,n){if(1&t&&(c.ac(0,"p",6),c.Mc(1),c.Zb()),2&t){var e=c.mc();c.Jb(1),c.Nc(e.message)}}var y,w,C=((w=function(){function n(e){t(this,n),this.modal=e}return e(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||w)(c.Ub(l.h))},w.\u0275cmp=c.Ob({type:w,selectors:[["app-template-confirmation-modal"]],decls:9,vars:2,consts:[["fxLayout","column","fxLayoutAlign","space-between","fxLayoutGap","1rem",1,"template-confirmation-modal"],[1,"template-confirmation-modal__title"],["class","template-confirmation-modal__message",4,"ngIf"],[1,"template-confirmation-modal__actions"],["color","primary","mat-stroked-button","",1,"template-confirmation-modal__actions__button",3,"click"],["color","primary","mat-flat-button","",1,"template-confirmation-modal__actions__button",3,"click"],[1,"template-confirmation-modal__message"]],template:function(t,n){1&t&&(c.ac(0,"div",0),c.ac(1,"h2",1),c.Mc(2),c.Zb(),c.Kc(3,x,2,1,"p",2),c.ac(4,"div",3),c.ac(5,"button",4),c.ic("click",(function(){return n.modal.close(!1)})),c.Mc(6,"No "),c.Zb(),c.ac(7,"button",5),c.ic("click",(function(){return n.modal.close(!0)})),c.Mc(8,"Si "),c.Zb(),c.Zb(),c.Zb()),2&t&&(c.Jb(2),c.Nc(n.title),c.Jb(1),c.sc("ngIf",n.message))},directives:[v.f,v.e,v.g,i.t,r.b],styles:[".template-confirmation-modal[_ngcontent-%COMP%]{width:100%;height:100%}.template-confirmation-modal__message[_ngcontent-%COMP%], .template-confirmation-modal__title[_ngcontent-%COMP%]{text-align:center}.template-confirmation-modal__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.template-confirmation-modal__actions__button[_ngcontent-%COMP%]{width:45%;border-radius:4px;font-family:Hebbo,sans-serif;font-weight:700}.template-confirmation-modal__actions__button[_ngcontent-%COMP%]:first-child{margin-right:20px}  .template-confirmation-modal-panel .mat-dialog-container{border-radius:8px;box-shadow:0 3px 6px rgba(0,0,0,.16);padding:32px}"]}),w),M=((y=function(){function n(e){t(this,n),this.dialog=e}return e(n,[{key:"confirmationPopup",value:function(t,n){var e,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"auto";return(e=this.dialog.open(C,{disableClose:!0,width:"auto"===o?o:o+"px",height:"auto"===a?a:a+"px",autoFocus:!1,panelClass:"template-confirmation-modal-panel"})).componentInstance.title=t,e.componentInstance.message=n&&n,e.afterClosed()}}]),n}()).\u0275fac=function(t){return new(t||y)(c.ec(l.b))},y.\u0275prov=c.Qb({token:y,factory:y.\u0275fac,providedIn:"root"}),y),O=["modal"];function k(t,n){if(1&t){var e=c.bc();c.ac(0,"div",4),c.ac(1,"h3"),c.Mc(2,"This is a modal"),c.Zb(),c.ac(3,"p"),c.Mc(4,"Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."),c.Zb(),c.ac(5,"button",2),c.ic("click",(function(){return c.Bc(e),c.mc().modalRef.close()})),c.Mc(6,"Ok"),c.Zb(),c.Zb()}}var Z,I=((Z=function(){function n(e,o){t(this,n),this.modalService=e,this.confirmationModalService=o}return e(n,[{key:"ngOnInit",value:function(){}},{key:"openModal",value:function(){this.modalRef=this.modalService.open({template:this.modal,hideCloseButton:!1,title:"Modal example"},{width:400,height:"auto",disableClose:!0,panelClass:"test-modal-panel"})}},{key:"openConfirmModal",value:function(){this.confirmationModalService.confirmationPopup("Confirmation modal","Are you sure?").subscribe()}}]),n}()).\u0275fac=function(t){return new(t||Z)(c.Ub(_),c.Ub(M))},Z.\u0275cmp=c.Ob({type:Z,selectors:[["app-modals"]],viewQuery:function(t,n){var e;1&t&&c.Qc(O,!0),2&t&&c.yc(e=c.jc())&&(n.modal=e.first)},decls:12,vars:0,consts:[["fxLayout","column","fxLayoutGap","1rem",1,"modals"],["fxLayout","row","fxLayout.lt-sm","column","fxLayoutGap","2rem"],["color","primary","mat-flat-button","",3,"click"],["modal",""],["fxLayout","column","fxLayoutGap","1rem"]],template:function(t,n){1&t&&(c.ac(0,"div",0),c.ac(1,"h1"),c.Mc(2,"Modals"),c.Zb(),c.ac(3,"h3"),c.Mc(4,"Click to open modal"),c.Zb(),c.ac(5,"div",1),c.ac(6,"button",2),c.ic("click",(function(){return n.openModal()})),c.Mc(7,"Open modal"),c.Zb(),c.ac(8,"button",2),c.ic("click",(function(){return n.openConfirmModal()})),c.Mc(9,"Open confirmation modal"),c.Zb(),c.Zb(),c.Zb(),c.Kc(10,k,7,0,"ng-template",null,3,c.Lc))},directives:[v.f,v.g,r.b],styles:[""]}),Z),P=a("tyNb"),L=[{path:"",component:I}],J=function n(){t(this,n)};J.\u0275mod=c.Sb({type:J}),J.\u0275inj=c.Rb({factory:function(t){return new(t||J)},imports:[[i.c,P.e.forChild(L),v.i,r.c]]})}}])}();