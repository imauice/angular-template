!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{vZ7N:function(e,i,c){"use strict";c.r(i),c.d(i,"SwitchesTabsModule",(function(){return O}));var a,o=c("ofXK"),s=c("fXoL"),l=c("XiUz"),r=c("1jcm"),f=((a=function(){function e(){t(this,e),this.disabled=!1,this.value="off",this.selectionEvent=new s.r,this.active="off"===this.value?this.off:this.on}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(t){var e;(null===(e=t.value)||void 0===e?void 0:e.firstChange)&&(this.active="off"===this.value?this.off:this.on)}},{key:"isOptionSelected",value:function(t){this.value=t,this.active="off"===t?this.off:this.on,this.selectionEvent.emit(this.active)}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=s.Pb({type:a,selectors:[["template-switch"]],inputs:{off:"off",on:"on",disabled:"disabled",value:"value"},outputs:{selectionEvent:"selectionEvent"},features:[s.Hb],decls:8,vars:10,consts:[[1,"template-switch"],[1,"template-switch__label","template-switch__off"],["checked","","name","view","type","radio",1,"template-switch__input",3,"disabled","click","keydown.enter"],[1,"template-switch__label","template-switch__on"],["name","view","type","radio",1,"template-switch__input",3,"disabled","click","keydown.enter"],[1,"template-switch__selection"]],template:function(t,e){1&t&&(s.bc(0,"div",0),s.bc(1,"label",1),s.bc(2,"input",2),s.jc("click",(function(){return e.isOptionSelected("off")}))("keydown.enter",(function(){return e.isOptionSelected("off")})),s.ac(),s.Qc(3),s.ac(),s.bc(4,"label",3),s.bc(5,"input",4),s.jc("click",(function(){return e.isOptionSelected("on")}))("keydown.enter",(function(){return e.isOptionSelected("on")})),s.ac(),s.Qc(6),s.ac(),s.Wb(7,"span",5),s.ac()),2&t&&(s.Jb(1),s.Nb("is-checked","off"===e.value),s.Jb(1),s.tc("disabled",e.disabled),s.Jb(1),s.Sc(" ",e.off.name,""),s.Jb(1),s.Nb("is-checked","on"===e.value),s.Jb(1),s.tc("disabled",e.disabled),s.Jb(1),s.Sc(" ",e.on.name,""),s.Jb(1),s.Nb("is-disabled",e.disabled))},styles:[".template-switch[_ngcontent-%COMP%]{display:flex;position:relative;width:138px;height:51px;padding:2px 0;background:#e9e9e9;border-radius:8px}.template-switch__input[_ngcontent-%COMP%]{display:none}.template-switch__label[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:67px;height:47px;z-index:2;float:left;font-size:16px;font-weight:700;cursor:pointer;color:#3e3e3e}.template-switch__label[_ngcontent-%COMP%]:first-of-type{margin-left:2px}.template-switch__label[_ngcontent-%COMP%]:last-of-type{margin-right:2px}.template-switch__label.is-checked.template-switch__on[_ngcontent-%COMP%] ~ .template-switch__selection[_ngcontent-%COMP%]{left:69px}.template-switch__label[_ngcontent-%COMP%]:not(.is-checked):hover{border-radius:8px;background:#d0d0d0}.template-switch__selection[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;z-index:1;top:50%;transform:translateY(-50%);display:block;width:67px;height:47px;left:2px;margin-top:-1px;font-size:16px;font-weight:700;border-radius:8px;background-color:#fff;color:#3e3e3e;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:left .5s ease-out}.template-switch__selection.is-disabled[_ngcontent-%COMP%]{background-color:#d2d2d2}"]}),a),b=c("wZkO"),d=["element"];function p(t,e){if(1&t){var n=s.cc();s.Zb(0),s.bc(1,"label",3,4),s.bc(3,"input",5),s.jc("click",(function(){s.Ec(n);var t=e.$implicit,i=s.Bc(2);return s.nc().isTabSelected(t,i.offsetLeft)}))("keydown.enter",(function(){s.Ec(n);var t=e.$implicit,i=s.Bc(2);return s.nc().isTabSelected(t,i.offsetLeft)})),s.ac(),s.Qc(4),s.ac(),s.Yb()}if(2&t){var i=e.$implicit,c=s.nc();s.Jb(1),s.Nb("is-checked",i.id===(null==c.active?null:c.active.id)),s.Jb(3),s.Sc(" ",i.name," ")}}var u,h,m,g,v=((h=function(){function e(){t(this,e),this.activeChange=new s.r,this.selectionEvent=new s.r,this.currentOffset=0,this.displacement=0}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.changeTabPosition()}),0)}},{key:"ngOnChanges",value:function(t){var e=this;this.tabElements&&setTimeout((function(){return e.changeTabPosition()}),0)}},{key:"changeTabPosition",value:function(){var t=this;if(this.active){var e=this.tabs.findIndex((function(e){return e.id===t.active.id})),n=this.tabElements.toArray()[e].nativeElement.offsetLeft,i=0===n?n:n-5;this.displacement=i-this.currentOffset+this.displacement,this.currentOffset=i}else this.active=this.tabs[0],this.displacement=0,this.currentOffset=0}},{key:"isTabSelected",value:function(t,e){if(this.active.id!==t.id){this.selectionEvent.emit(t);var n=0===e?e:e-5;this.displacement=n-this.currentOffset+this.displacement,this.active=t,this.currentOffset=n}}}]),e}()).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=s.Pb({type:h,selectors:[["template-tab"]],viewQuery:function(t,e){var n;1&t&&s.Uc(d,!0),2&t&&s.Ac(n=s.kc())&&(e.tabElements=n)},inputs:{tabs:"tabs",active:"active"},outputs:{activeChange:"activeChange",selectionEvent:"selectionEvent"},features:[s.Hb],decls:4,vars:4,consts:[[1,"template-tab"],[4,"ngFor","ngForOf"],[1,"template-tab__selection"],[1,"template-tab__label"],["element",""],["name","view","type","radio",1,"template-tab__input",3,"click","keydown.enter"]],template:function(t,e){1&t&&(s.bc(0,"div",0),s.Oc(1,p,5,3,"ng-container",1),s.bc(2,"span",2),s.Qc(3),s.ac(),s.ac()),2&t&&(s.Jb(1),s.tc("ngForOf",e.tabs),s.Jb(1),s.Lc("left",e.displacement,"px"),s.Jb(1),s.Rc(null==e.active?null:e.active.name))},directives:[o.s],styles:[".template-tab[_ngcontent-%COMP%]{display:flex;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:42px;padding:4px 0;background:#e9e9e9;border-radius:4px}.template-tab__input[_ngcontent-%COMP%]{display:none}.template-tab__label[_ngcontent-%COMP%]{box-sizing:border-box;min-width:78px;height:34px;margin-right:4px;padding:5px 16px;z-index:2;float:left;font-size:16px;font-weight:700;text-align:center;cursor:pointer;color:#3e3e3e}.template-tab__label[_ngcontent-%COMP%]:first-of-type{margin-left:4px}.template-tab__label[_ngcontent-%COMP%]:not(.is-checked):hover{border-radius:4px;background:#d0d0d0}.template-tab__selection[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;z-index:1;top:50%;transform:translateY(-50%);display:block;min-width:78px;height:34px;padding:5px 16px;margin-left:4px;margin-right:4px;font-size:16px;font-weight:700;border-radius:4px;background-color:#fff;color:#3e3e3e;box-shadow:0 3px 6px rgba(0,0,0,.16);text-indent:150%;white-space:nowrap;overflow:hidden;transition:all .5s ease-out}"]}),h),w=((u=function(){function e(){t(this,e),this.off={id:1,name:"OFF"},this.on={id:1,name:"ON"},this.tabs=[{id:1,name:"First"},{id:2,name:"Second"},{id:3,name:"Third"}]}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=s.Pb({type:u,selectors:[["app-switches-tabs"]],decls:50,vars:8,consts:[["fxLayout","column","fxLayoutGap","1.5rem",1,"switches-&-tabs"],["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutAlign","space-between"],["fxFlex","30%","fxLayout","row","fxLayoutGap","1rem"],["color","primary"],["checked","true","color","accent"],["disabled","tue"],["fxLayout","row wrap","fxLayout.lt-sm","column","fxLayoutAlign","space-between","fxLayoutGap.lt-sm","1rem"],["fxFlex","30%","fxLayout","column","fxLayoutGap","1rem"],[3,"off","on"],["value","on",3,"off","on"],["disabled","true",3,"off","on"],["fxFlexAlign","center","mat-align-tabs","start",1,"50%"],["label","First"],["label","Second"],["label","Third"],["fxFlexAlign","center",3,"active","tabs"]],template:function(t,e){1&t&&(s.bc(0,"div",0),s.bc(1,"h1"),s.Qc(2,"Switches"),s.ac(),s.bc(3,"h2"),s.Qc(4,"Angular Material switches"),s.ac(),s.bc(5,"div",1),s.bc(6,"div",2),s.bc(7,"h3"),s.Qc(8,"Primary color: "),s.ac(),s.bc(9,"mat-slide-toggle",3),s.Qc(10,"Switch"),s.ac(),s.ac(),s.bc(11,"div",2),s.bc(12,"h3"),s.Qc(13,"Accent color and checked: "),s.ac(),s.bc(14,"mat-slide-toggle",4),s.Qc(15,"Switch"),s.ac(),s.ac(),s.bc(16,"div",2),s.bc(17,"h3"),s.Qc(18,"Disabled: "),s.ac(),s.bc(19,"mat-slide-toggle",5),s.Qc(20,"Switch"),s.ac(),s.ac(),s.ac(),s.bc(21,"h2"),s.Qc(22,"Template switches"),s.ac(),s.bc(23,"div",6),s.bc(24,"div",7),s.bc(25,"h3"),s.Qc(26,"Off: "),s.ac(),s.Wb(27,"template-switch",8),s.ac(),s.bc(28,"div",7),s.bc(29,"h3"),s.Qc(30,"On: "),s.ac(),s.Wb(31,"template-switch",9),s.ac(),s.bc(32,"div",7),s.bc(33,"h3"),s.Qc(34,"Disabled: "),s.ac(),s.Wb(35,"template-switch",10),s.ac(),s.ac(),s.bc(36,"h1"),s.Qc(37,"Tabs"),s.ac(),s.bc(38,"h2"),s.Qc(39,"Angular Material tabs"),s.ac(),s.bc(40,"mat-tab-group",11),s.bc(41,"mat-tab",12),s.Qc(42,"Content 1"),s.ac(),s.bc(43,"mat-tab",13),s.Qc(44,"Content 2"),s.ac(),s.bc(45,"mat-tab",14),s.Qc(46,"Content 3"),s.ac(),s.ac(),s.bc(47,"h2"),s.Qc(48,"Template tabs"),s.ac(),s.Wb(49,"template-tab",15),s.ac()),2&t&&(s.Jb(27),s.tc("off",e.off)("on",e.on),s.Jb(4),s.tc("off",e.off)("on",e.on),s.Jb(4),s.tc("off",e.off)("on",e.on),s.Jb(14),s.tc("active",e.tabs[1])("tabs",e.tabs))},directives:[l.f,l.g,l.e,l.b,r.a,f,b.c,l.a,b.a,v],styles:[""]}),u),x=c("tyNb"),_=((g=function e(){t(this,e)}).\u0275mod=s.Tb({type:g}),g.\u0275inj=s.Sb({factory:function(t){return new(t||g)},imports:[[o.c]]}),g),y=((m=function e(){t(this,e)}).\u0275mod=s.Tb({type:m}),m.\u0275inj=s.Sb({factory:function(t){return new(t||m)},imports:[[o.c]]}),m),k=[{path:"",component:w}],O=function e(){t(this,e)};O.\u0275mod=s.Tb({type:O}),O.\u0275inj=s.Sb({factory:function(t){return new(t||O)},imports:[[o.c,x.e.forChild(k),l.i,r.b,b.g,_,y]]})}}])}();