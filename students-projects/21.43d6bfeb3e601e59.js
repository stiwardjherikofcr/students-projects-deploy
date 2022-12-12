"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[21],{4021:(N,c,n)=>{n.r(c),n.d(c,{DatabasesModule:()=>z});var u=n(6895),r=n(5675),t=n(8256),m=n(4004),p=n(5347),f=n(2340),b=n(529);let g=(()=>{class e{constructor(a){this.http=a,this.url=`${f.N.baseUrlUsers}`}getDatabases(a){return this.http.get(`${this.url}/${p.S.database_List}/`).pipe((0,m.U)(l=>l.filter(d=>d.id_user===a)))}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(b.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=n(2506);let Z=(()=>{class e{constructor(){}ngOnInit(){this.openModal("show")}openModal(a){$("#addRowModal").modal(a)}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add"]],decls:29,vars:0,consts:[["id","addRowModal","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header","no-bd"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"small"],[1,"row"],[1,"col-sm-12"],[1,"form-group","form-group-default"],["type","text","name","username","value","root","disabled","",1,"form-control"],[1,"col-md-12"],["type","text","name","password",1,"form-control"],[1,"modal-footer","no-bd"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-default"]],template:function(a,l){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Credenciales"),t.qZA(),t.TgZ(6,"button",5)(7,"span",6),t._uU(8,"\xd7"),t.qZA()()(),t.TgZ(9,"div",7)(10,"p",8),t._uU(11," Recuerde guardar los credenciales de la base de datos. De lo contrario no podr\xe1 acceder a ella. "),t.qZA(),t.TgZ(12,"form")(13,"div",9)(14,"div",10)(15,"div",11)(16,"label"),t._uU(17,"Usuario"),t.qZA(),t._UZ(18,"input",12),t.qZA()(),t.TgZ(19,"div",13)(20,"div",11)(21,"label"),t._uU(22,"Contrase\xf1a"),t.qZA(),t._UZ(23,"input",14),t.qZA()()()()(),t.TgZ(24,"div",15)(25,"button",16),t._uU(26,"Guardar"),t.qZA(),t.TgZ(27,"button",17),t._uU(28,"Cancelar"),t.qZA()()()()())}}),e})();function h(e,o){1&e&&(t.ynx(0),t._UZ(1,"app-add"),t.BQk())}function v(e,o){if(1&e&&t._uU(0),2&e){const a=o.row;t.hij(" ",null==a?null:a.id," ")}}function x(e,o){if(1&e&&t._uU(0),2&e){const a=o.row;t.hij(" ",null==a?null:a.context," ")}}function T(e,o){if(1&e&&t._uU(0),2&e){const a=o.row;t.hij(" ",null==a?null:a.count," ")}}function A(e,o){if(1&e&&t._uU(0),2&e){const a=o.row;t.hij(" ",null==a?null:a.type.type," ")}}function D(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",27)(1,"button",28),t.NdJ("click",function(){const G=t.CHM(a).row,J=t.oxw();return t.KtG(J.deleteDatabase(G.id))}),t._UZ(2,"i",29),t.qZA()()}}const w=function(){return["/dashboard"]},U=function(){return["/databases"]};let C=(()=>{class e{constructor(a){this.databaseService=a,this.limit=10,this.showModal=!1}ngOnInit(){this.getDatabases()}getDatabases(){this.databaseService.getDatabases(1).subscribe(a=>{this.rows=a})}createDatabase(){this.showModal=!0}deleteDatabase(a){console.log(a)}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:41,vars:21,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"ml-auto"],["type","button",1,"btn","btn-primary","ml-auto",3,"click"],[1,"fa","fa-plus"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[4,"ngIf"],["rowHeight","auto",1,"material","striped",3,"columnMode","headerHeight","footerHeight","rows","limit"],["table",""],["name","ID",3,"flexGrow","resizeable"],["ngx-datatable-cell-template",""],["name","Nombre Base de Datos",3,"flexGrow","resizeable"],["name","Cantidad Tablas",3,"flexGrow","resizeable"],["name","SGBD",3,"flexGrow","resizeable"],["name","Acciones",3,"flexGrow","resizeable","sortable"],[1,"form-button-action"],["type","button","data-toggle","tooltip","title","Eliminar","data-original-title","Eliminar Base de Datos",1,"btn","btn-link","btn-default",3,"click"],[1,"fa","fa-times"]],template:function(a,l){1&a&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Lista Bases de Datos"),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),t._UZ(6,"i",5),t.qZA()(),t.TgZ(7,"li",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"li",8)(10,"a",4),t._uU(11,"Bases de Datos"),t.qZA()(),t.TgZ(12,"li",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"li",8)(15,"a"),t._uU(16,"Lista"),t.qZA()()(),t.TgZ(17,"div",9)(18,"button",10),t.NdJ("click",function(){return l.createDatabase()}),t._UZ(19,"i",11),t._uU(20," Crear Usuario "),t.qZA()()(),t.TgZ(21,"div",12)(22,"div",13)(23,"div",14)(24,"div",15)(25,"div",16),t._uU(26,"Lista de Bases de Datos"),t.qZA()(),t.TgZ(27,"div",17),t.YNc(28,h,2,0,"ng-container",18),t.TgZ(29,"ngx-datatable",19,20)(31,"ngx-datatable-column",21),t.YNc(32,v,1,1,"ng-template",22),t.qZA(),t.TgZ(33,"ngx-datatable-column",23),t.YNc(34,x,1,1,"ng-template",22),t.qZA(),t.TgZ(35,"ngx-datatable-column",24),t.YNc(36,T,1,1,"ng-template",22),t.qZA(),t.TgZ(37,"ngx-datatable-column",25),t.YNc(38,A,1,1,"ng-template",22),t.qZA(),t.TgZ(39,"ngx-datatable-column",26),t.YNc(40,D,3,0,"ng-template",22),t.qZA()()()()()()),2&a&&(t.xp6(5),t.Q6J("routerLink",t.DdM(19,w)),t.xp6(5),t.Q6J("routerLink",t.DdM(20,U)),t.xp6(18),t.Q6J("ngIf",l.showModal),t.xp6(1),t.Q6J("columnMode","flex")("headerHeight",50)("footerHeight",50)("rows",l.rows)("limit",l.limit),t.xp6(2),t.Q6J("flexGrow",1)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",2)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",2)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",2)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",1)("resizeable",!1)("sortable",!1))},dependencies:[u.O5,r.yS,s.nE,s.UC,s.vq,Z]}),e})();var y=n(115),_=n(9753),i=n(4488);const L=[{path:"",component:y.p,children:[{path:"",component:C,pathMatch:"full",title:"Lista de Bases de Datos",canActivate:[_.pb],data:{roles:[i.H.ADMIN,i.H.SUPPORT,i.H.TEACHER,i.H.STUDENT]}}]}];let M=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(L),r.Bz]}),e})(),z=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,M,s.xD]}),e})()}}]);