"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[707],{6707:(z,_,s)=>{s.r(_),s.d(_,{SubjectsModule:()=>H});var u=s(6895),a=s(433),d=s(5675),t=s(8256),m=s(5347),b=s(2340),h=s(529);let g=(()=>{class n{constructor(e){this.http=e,this.url=`${b.N.baseUrlAcademic}`}getSubjects(){return this.http.get(`${this.url}/${m.S.subjects}/`)}getSubject(e){return this.http.get(`${this.url}/${m.S.subjects}/${e}/`)}createSubject(e){return this.http.post(`${this.url}/${m.S.subjects}/`,e)}updateSubject(e,o){return this.http.put(`${this.url}/${m.S.subjects}/${e}/`,o)}deleteSubject(e){return this.http.delete(`${this.url}/${m.S.subjects}/${e}/`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Z=s(154),c=s(5014);function v(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14),t._uU(5,"Subir Archivos"),t.qZA()(),t.TgZ(6,"div",15)(7,"div",16)(8,"div",17)(9,"h4"),t._uU(10,"Archivo de materias de ejemplo (.xlsx)"),t.qZA()(),t.TgZ(11,"div",17)(12,"a",18),t._UZ(13,"i",19),t.TgZ(14,"span",20),t._uU(15," Descargar plantilla"),t.qZA()()()(),t.TgZ(16,"div",16)(17,"div",21)(18,"form",22)(19,"div",23)(20,"div",24),t._UZ(21,"i",25),t.qZA(),t.TgZ(22,"h4",26)(23,"strong"),t._uU(24,"Cargar archivo"),t.qZA()(),t.TgZ(25,"span",27),t._uU(26,"Archivos compatibles: xlsx"),t.qZA()(),t.TgZ(27,"div",28)(28,"input",29),t.NdJ("change",function(r){t.CHM(e);const l=t.oxw();return t.KtG(l.onFileChange(r))}),t.qZA(),t.TgZ(29,"label",30),t._uU(30,"Cargar Archivo"),t.qZA()()()()(),t.TgZ(31,"div",16)(32,"div",17)(33,"h4"),t._uU(34,"Paginaci\xf3n"),t.qZA()(),t.TgZ(35,"div",31)(36,"div",32)(37,"select",33),t.NdJ("change",function(r){t.CHM(e);const l=t.oxw();return t.KtG(l.onLimitChange(r))}),t.TgZ(38,"option",34),t._uU(39,"10"),t.qZA(),t.TgZ(40,"option",35),t._uU(41,"25"),t.qZA(),t.TgZ(42,"option",36),t._uU(43,"50"),t.qZA(),t.TgZ(44,"option",37),t._uU(45,"100"),t.qZA()()()()()(),t.TgZ(46,"div",38)(47,"button",39),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onUpload())}),t._uU(48,"Cargar"),t.qZA()()()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(47),t.Q6J("disabled",!e.isFileSelected())}}function x(n,i){1&n&&t._uU(0),2&n&&t.hij(" ",i.rowIndex+1," ")}function T(n,i){if(1&n&&t._uU(0),2&n){const e=i.row;t.hij(" ",null==e?null:e.code," ")}}function w(n,i){if(1&n&&(t._uU(0),t.ALo(1,"titlecase")),2&n){const e=i.row;t.hij(" ",t.lcZ(1,1,null==e?null:e.name)," ")}}function A(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",40)(2,"div",12)(3,"div",13)(4,"div",14),t._uU(5,"Lista de Materias"),t.qZA()(),t.TgZ(6,"div",15)(7,"ngx-datatable",41)(8,"ngx-datatable-column",42),t.YNc(9,x,1,1,"ng-template",43),t.qZA(),t.TgZ(10,"ngx-datatable-column",44),t.YNc(11,T,1,1,"ng-template",43),t.qZA(),t.TgZ(12,"ngx-datatable-column",45),t.YNc(13,w,2,3,"ng-template",43),t.qZA()()(),t.TgZ(14,"div",38)(15,"button",46),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSubmit())}),t._uU(16,"Guardar"),t.qZA(),t.TgZ(17,"button",47),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onCancel())}),t._uU(18,"Cancelar"),t.qZA()()()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("columnMode","flex")("headerHeight",50)("footerHeight",50)("rows",e.rows)("limit",e.limit),t.xp6(1),t.Q6J("flexGrow",.5),t.xp6(2),t.Q6J("flexGrow",2),t.xp6(2),t.Q6J("flexGrow",2)}}const C=function(){return["/dashboard"]},j=function(){return["/academics/subjects"]};let M=(()=>{class n{constructor(e,o){this.subjectsService=e,this.convertFileService=o,this.show=!1,this.rows=[],this.limit=10}ngOnInit(){}onFileChange(e){this.file=e.target.files[0],this.xlsxToJson()}onLimitChange(e){this.limit=Number(e.target.value)}onUpload(){this.show=!0}onReset(){this.show=!1,this.file=void 0,this.rows=[],this.limit=10}onSubmit(){this.subjectsService.createSubject(this.rows).subscribe(e=>{this.onReset()})}onCancel(){this.onReset()}isFileSelected(){return void 0!==this.file}xlsxToJson(){this.convertFileService.convertToJson(this.file).then(e=>this.rows=e).catch(e=>console.log(e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g),t.Y36(Z._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-subject-add"]],decls:25,vars:6,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row","mx-5"],[4,"ngIf"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row","align-items-center","mb-3"],[1,"col-2"],["href","assets/files/subjects.xlsx","download","subjects.xlsx"],[1,"fas","fa-file-excel","fa-2x"],[1,"sub-item"],[1,"col","text-center"],[1,"dropzone"],["data-dz-message","",1,"dz-message","mb-3"],[1,"icon"],[1,"flaticon-file"],[1,"message"],[1,"note"],[1,"fallback"],["type","file","hidden","","id","input-custom-file","accept",".xls, .xlsx",1,"form-control-file",2,"display","none",3,"change"],["for","input-custom-file",1,"btn","btn-primary","text-white"],[1,"col-1"],[1,"form-group"],["id","limit",1,"form-control",3,"change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"card-action","text-center"],[1,"btn","btn-primary",3,"disabled","click"],[1,"col-md-12","mb-3"],["rowHeight","auto",1,"material","striped",3,"columnMode","headerHeight","footerHeight","rows","limit"],["name","#",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","C\xf3digo Materia",3,"flexGrow"],["name","Nombre Materia",3,"flexGrow"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-default",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Carge de Materias"),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),t._UZ(6,"i",5),t.qZA()(),t.TgZ(7,"li",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"li",8)(10,"a"),t._uU(11,"Academico"),t.qZA()(),t.TgZ(12,"li",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"li",8)(15,"a",4),t._uU(16,"Materias"),t.qZA()(),t.TgZ(17,"li",6),t._UZ(18,"i",7),t.qZA(),t.TgZ(19,"li",8)(20,"a"),t._uU(21,"Agregar"),t.qZA()()()(),t.TgZ(22,"div",9),t.YNc(23,v,49,1,"ng-container",10),t.YNc(24,A,19,8,"ng-container",10),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(4,C)),t.xp6(10),t.Q6J("routerLink",t.DdM(5,j)),t.xp6(8),t.Q6J("ngIf",!o.show),t.xp6(1),t.Q6J("ngIf",o.show))},dependencies:[u.O5,a._Y,a.YN,a.Kr,a.JL,d.yS,c.nE,c.UC,c.vq,u.rS],styles:[".text-white[_ngcontent-%COMP%]{color:#fff}button[_ngcontent-%COMP%]{margin-right:10px}i[_ngcontent-%COMP%]{color:#aa1916}span[_ngcontent-%COMP%]{color:#575962;font-weight:700;margin-left:.5px}a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})();function S(n,i){if(1&n&&(t.TgZ(0,"div")(1,"small",22),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.message)}}function U(n,i){if(1&n&&(t.ynx(0),t.YNc(1,S,3,1,"div",21),t.BQk()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",(null==o.f||null==o.f.code?null:o.f.code.hasError(e.type))&&o.isFieldValid("code"))}}function q(n,i){if(1&n&&(t.TgZ(0,"div")(1,"small",22),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.message)}}function y(n,i){if(1&n&&(t.ynx(0),t.YNc(1,q,3,1,"div",21),t.BQk()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",(null==o.f||null==o.f.name?null:o.f.name.hasError(e.type))&&o.isFieldValid("name"))}}let f=(()=>{class n{constructor(e,o){this.fb=e,this.subjectsService=o,this.showModal=new t.vpe,this.validationMessages={code:[{type:"required",message:"Codigo es requerido"},{type:"minlength",message:"Codigo debe tener al menos 7 caracteres"},{type:"maxlength",message:"Codigo no puede tener mas de 7 caracteres"},{type:"pattern",message:"El codigo solo puede contener numeros"}],name:[{type:"required",message:"Nombre es requerido"},{type:"minlength",message:"Nombre debe tener al menos 5 caracteres"},{type:"maxlength",message:"Nombre no puede tener mas de 50 caracteres"},{type:"pattern",message:"El nombre solo puede contener letras"}]},this.formSubject=this.fb.group({id:new a.NI(""),code:new a.NI("",a.kI.compose([a.kI.required,a.kI.minLength(7),a.kI.maxLength(7),a.kI.pattern("^[0-9]*$")])),name:new a.NI("",a.kI.compose([a.kI.required,a.kI.minLength(5),a.kI.maxLength(50),a.kI.pattern("^[a-zA-Z ]*$")]))})}ngOnInit(){this.openModal("show"),this.formSubject.setValue({id:this.subject.id,code:this.subject.code,name:this.subject.name})}openModal(e){$("#editModal").modal(e)}get f(){return this.formSubject.controls}isFieldValid(e){return this.formSubject.controls[e].dirty||this.formSubject.controls[e].touched}updateSubject(){this.subjectsService.updateSubject(this.subject.id,this.subject).subscribe(e=>{this.subject=e}),this.showModal.emit(!1)}closedModal(){this.openModal("hide"),this.showModal.emit(!1)}ngOnDestroy(){this.formSubject.reset()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-subject-detail"]],inputs:{subject:"subject"},outputs:{showModal:"showModal"},decls:37,vars:4,consts:[["id","editModal","data-backdrop","static","data-keyboard","false","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header","no-bd"],[1,"modal-title"],[1,"fw-mediumbold"],[1,"fw-light"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-sm-12"],[1,"form-group","form-group-default"],["type","text","id","id","formControlName","id","readonly","",1,"form-control"],["type","text","id","code","formControlName","code",1,"form-control"],[4,"ngFor","ngForOf"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"modal-footer","no-bd"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-default",3,"click"],[4,"ngIf"],[1,"text-danger"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4)(5,"span",5),t._uU(6," Editar"),t.qZA(),t.TgZ(7,"span",6),t._uU(8," Materia "),t.qZA()(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.closedModal()}),t.TgZ(10,"span",8),t._uU(11,"\xd7"),t.qZA()()(),t.TgZ(12,"div",9)(13,"form",10),t.NdJ("ngSubmit",function(){return o.updateSubject()}),t.TgZ(14,"div",11)(15,"div",12)(16,"div",13)(17,"label"),t._uU(18,"ID"),t.qZA(),t._UZ(19,"input",14),t.qZA()(),t.TgZ(20,"div",12)(21,"div",13)(22,"label"),t._uU(23,"Codigo"),t.qZA(),t._UZ(24,"input",15),t.YNc(25,U,2,1,"ng-container",16),t.qZA()(),t.TgZ(26,"div",12)(27,"div",13)(28,"label"),t._uU(29,"Nombre"),t.qZA(),t._UZ(30,"input",17),t.YNc(31,y,2,1,"ng-container",16),t.qZA()()()()(),t.TgZ(32,"div",18)(33,"button",19),t._uU(34,"Guardar"),t.qZA(),t.TgZ(35,"button",20),t.NdJ("click",function(){return o.closedModal()}),t._uU(36,"Cancelar"),t.qZA()()()()()),2&e&&(t.xp6(13),t.Q6J("formGroup",o.formSubject),t.xp6(12),t.Q6J("ngForOf",o.validationMessages.code),t.xp6(6),t.Q6J("ngForOf",o.validationMessages.name),t.xp6(2),t.Q6J("disabled",!o.formSubject.valid))},dependencies:[u.sg,u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u]}),n})();function k(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-subject-detail",38),t.NdJ("showModal",function(r){t.CHM(e);const l=t.oxw();return t.KtG(l.showModal=r)}),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("subject",e.subject)}}function J(n,i){if(1&n&&t._uU(0),2&n){const e=i.row;t.hij(" ",null==e?null:e.id," ")}}function N(n,i){if(1&n&&t._uU(0),2&n){const e=i.row;t.hij(" ",null==e?null:e.code," ")}}function L(n,i){if(1&n&&(t._uU(0),t.ALo(1,"titlecase")),2&n){const e=i.row;t.hij(" ",t.lcZ(1,1,null==e?null:e.name)," ")}}function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",39)(1,"button",40),t.NdJ("click",function(){const l=t.CHM(e).row,p=t.oxw();return t.KtG(p.openModal(l))}),t._UZ(2,"i",41),t.qZA(),t.TgZ(3,"button",42),t.NdJ("click",function(){const l=t.CHM(e).row,p=t.oxw();return t.KtG(p.deleteSubject(l.id))}),t._UZ(4,"i",43),t.qZA()()}}const F=function(){return["/dashboard"]},G=function(){return["/academics/subjects"]};let I=(()=>{class n{constructor(e,o){this.subjectsService=e,this.router=o,this.limit=10,this.showModal=!1}ngOnInit(){this.getSubjects()}getSubjects(){this.subjectsService.getSubjects().subscribe(e=>{this.rows=e,this.temp=[...e]})}onLimitChange(e){this.limit=Number(e.target.value),this.table.limit=this.limit}filterSubjects(e){const r=e.target.value.trim().toLowerCase(),l=this.temp.filter(p=>-1!==p.name.toLowerCase().indexOf(r));this.rows=l,this.table.offset=0}createSubject(){this.router.navigate(["/academics/subjects/new"])}openModal(e){this.subject=e,this.showModal=!0}deleteSubject(e){this.subjectsService.deleteSubject(e).subscribe(o=>{this.getSubjects()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-subject-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(c.nE,5),2&e){let r;t.iGM(r=t.CRH())&&(o.table=r.first)}},decls:63,vars:19,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"d-flex","align-items-center"],[1,"card-title"],[1,"btn","btn-primary","btn-round","ml-auto",3,"click"],[1,"fa","fa-plus"],[1,"card-body"],[4,"ngIf"],[1,"row","justify-content-between"],[1,"col-sm-12","col-md-6"],[1,"form-group",2,"width","20%"],["for","pageSize"],["id","pageSize",1,"form-control",3,"change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"form-group",2,"width","40%"],["for","search"],["type","text","placeholder","Buscar","id","search",1,"form-control",3,"keyup"],["rowHeight","auto",1,"material","striped",3,"columnMode","headerHeight","footerHeight","rows","limit"],["table",""],["name","ID",3,"flexGrow","resizeable"],["ngx-datatable-cell-template",""],["name","C\xf3digo Materia",3,"flexGrow","resizeable"],["name","Nombre Materia",3,"flexGrow","resizeable"],["name","Acciones",3,"flexGrow","resizeable","sortable"],[3,"subject","showModal"],[1,"form-button-action"],["type","button","data-toggle","tooltip","title","Editar","data-original-title","Editar Materia",1,"btn","btn-link","btn-primary","btn-lg",3,"click"],[1,"fa","fa-edit"],["type","button","data-toggle","tooltip","title","Eliminar","data-original-title","Eliminar Materia",1,"btn","btn-link","btn-default",3,"click"],[1,"fa","fa-times"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Lista de Materias"),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),t._UZ(6,"i",5),t.qZA()(),t.TgZ(7,"li",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"li",8)(10,"a"),t._uU(11,"Academico"),t.qZA()(),t.TgZ(12,"li",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"li",8)(15,"a",4),t._uU(16,"Materias"),t.qZA()(),t.TgZ(17,"li",6),t._UZ(18,"i",7),t.qZA(),t.TgZ(19,"li",8)(20,"a"),t._uU(21,"Lista"),t.qZA()()()(),t.TgZ(22,"div",9)(23,"div",10)(24,"div",11)(25,"div",12)(26,"div",13)(27,"div",14),t._uU(28,"Lista de Materias"),t.qZA(),t.TgZ(29,"button",15),t.NdJ("click",function(){return o.createSubject()}),t._UZ(30,"i",16),t._uU(31," Adicionar Materia "),t.qZA()()(),t.TgZ(32,"div",17),t.YNc(33,k,2,1,"ng-container",18),t.TgZ(34,"div",19)(35,"div",20)(36,"div",21)(37,"label",22),t._uU(38,"Mostrar"),t.qZA(),t.TgZ(39,"select",23),t.NdJ("change",function(l){return o.onLimitChange(l)}),t.TgZ(40,"option",24),t._uU(41,"10"),t.qZA(),t.TgZ(42,"option",25),t._uU(43,"25"),t.qZA(),t.TgZ(44,"option",26),t._uU(45,"50"),t.qZA(),t.TgZ(46,"option",27),t._uU(47,"100"),t.qZA()()()(),t.TgZ(48,"div",20)(49,"div",28)(50,"label",29),t._uU(51,"Buscar"),t.qZA(),t.TgZ(52,"input",30),t.NdJ("keyup",function(l){return o.filterSubjects(l)}),t.qZA()()()(),t.TgZ(53,"ngx-datatable",31,32)(55,"ngx-datatable-column",33),t.YNc(56,J,1,1,"ng-template",34),t.qZA(),t.TgZ(57,"ngx-datatable-column",35),t.YNc(58,N,1,1,"ng-template",34),t.qZA(),t.TgZ(59,"ngx-datatable-column",36),t.YNc(60,L,2,3,"ng-template",34),t.qZA(),t.TgZ(61,"ngx-datatable-column",37),t.YNc(62,Q,5,0,"ng-template",34),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(17,F)),t.xp6(10),t.Q6J("routerLink",t.DdM(18,G)),t.xp6(18),t.Q6J("ngIf",o.showModal),t.xp6(20),t.Q6J("columnMode","flex")("headerHeight",50)("footerHeight",50)("rows",o.rows)("limit",o.limit),t.xp6(2),t.Q6J("flexGrow",1)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",2)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",2)("resizeable",!1),t.xp6(2),t.Q6J("flexGrow",1)("resizeable",!1)("sortable",!1))},dependencies:[u.O5,a.YN,a.Kr,d.yS,c.nE,c.UC,c.vq,f,u.rS],styles:[".form-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0;margin-right:1rem}"]}),n})();const D=[{path:"",component:s(8459).p,children:[{path:"",component:I,pathMatch:"full",title:"Lista de Materias"},{path:"new",component:M,title:"Nueva Materia"},{path:":id",component:f,title:"Detalles de la Materia"}]}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(D),d.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,a.UX,O,c.xD]}),n})()}}]);