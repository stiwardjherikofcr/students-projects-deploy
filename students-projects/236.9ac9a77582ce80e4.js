"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[236],{7236:(I,p,l)=>{l.r(p),l.d(p,{SubjectPeriodModule:()=>H});var u=l(6895),s=l(433),d=l(5675),e=l(8256),m=l(5347),b=l(2340),Z=l(529);let g=(()=>{class o{constructor(t){this.http=t,this.url=`${b.N.baseUrlAcademic}`}getSubjectsPeriod(){return this.http.get(`${this.url}/${m.S.subjects_Period}/`)}createSubjectPeriod(t){return this.http.post(`${this.url}/${m.S.subjects_Period}/`,t)}deleteSubjectPeriod(t){return this.http.delete(`${this.url}/${m.S.subjects_Period}/${t}/`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Z.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var x=l(9358),c=l(2506);function w(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14),e._uU(5,"Subir Archivos"),e.qZA()(),e.TgZ(6,"div",15)(7,"div",16)(8,"div",17)(9,"h4"),e._uU(10,"Archivo de materias de ejemplo (.xlsx)"),e.qZA()(),e.TgZ(11,"div",17)(12,"a",18),e._UZ(13,"i",19),e.TgZ(14,"span",20),e._uU(15," Descargar plantilla"),e.qZA()()()(),e.TgZ(16,"div",16)(17,"div",21)(18,"form",22)(19,"div",23)(20,"div",24),e._UZ(21,"i",25),e.qZA(),e.TgZ(22,"h4",26)(23,"strong"),e._uU(24,"Cargar archivo"),e.qZA()(),e.TgZ(25,"span",27),e._uU(26,"Archivos compatibles: xlsx"),e.qZA()(),e.TgZ(27,"div",28)(28,"input",29),e.NdJ("change",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.onFileChange(r))}),e.qZA(),e.TgZ(29,"label",30),e._uU(30,"Cargar Archivo"),e.qZA()()()()(),e.TgZ(31,"div",16)(32,"div",17)(33,"h4"),e._uU(34,"Paginaci\xf3n"),e.qZA()(),e.TgZ(35,"div",31)(36,"div",32)(37,"select",33),e.NdJ("change",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.onLimitChange(r))}),e.TgZ(38,"option",34),e._uU(39,"10"),e.qZA(),e.TgZ(40,"option",35),e._uU(41,"25"),e.qZA(),e.TgZ(42,"option",36),e._uU(43,"50"),e.qZA(),e.TgZ(44,"option",37),e._uU(45,"100"),e.qZA()()()()()(),e.TgZ(46,"div",38)(47,"button",39),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onUpload())}),e._uU(48,"Cargar"),e.qZA()()()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(47),e.Q6J("disabled",!t.isFileSelected())}}function v(o,n){1&o&&e._uU(0),2&o&&e.hij(" ",n.rowIndex+1," ")}function T(o,n){if(1&o&&e._uU(0),2&o){const t=n.row;e.hij(" ",null==t?null:t.id_subject," ")}}function A(o,n){if(1&o&&e._uU(0),2&o){const t=n.row;e.hij(" ",null==t?null:t.id_teacher," ")}}function C(o,n){if(1&o&&e._uU(0),2&o){const t=n.row;e.hij(" ",null==t?null:t.group," ")}}function U(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",40)(2,"div",12)(3,"div",13)(4,"div",14),e._uU(5,"Lista de Materias por Periodo"),e.qZA()(),e.TgZ(6,"div",15)(7,"ngx-datatable",41)(8,"ngx-datatable-column",42),e.YNc(9,v,1,1,"ng-template",43),e.qZA(),e.TgZ(10,"ngx-datatable-column",44),e.YNc(11,T,1,1,"ng-template",43),e.qZA(),e.TgZ(12,"ngx-datatable-column",45),e.YNc(13,A,1,1,"ng-template",43),e.qZA(),e.TgZ(14,"ngx-datatable-column",46),e.YNc(15,C,1,1,"ng-template",43),e.qZA()()(),e.TgZ(16,"div",38)(17,"button",47),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onSubmit())}),e._uU(18,"Guardar"),e.qZA(),e.TgZ(19,"button",48),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onCancel())}),e._uU(20,"Cancelar"),e.qZA()()()(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(7),e.Q6J("columnMode","flex")("headerHeight",50)("footerHeight",50)("rows",t.rows)("limit",t.limit),e.xp6(1),e.Q6J("flexGrow",.5),e.xp6(2),e.Q6J("flexGrow",2),e.xp6(2),e.Q6J("flexGrow",2),e.xp6(2),e.Q6J("flexGrow",2)}}const j=function(){return["/dashboard"]},S=function(){return["/academics/subject-period"]};let _=(()=>{class o{constructor(t,i){this.subjectPeriodService=t,this.convertFileService=i,this.show=!1,this.rows=[],this.limit=10}ngOnInit(){}onFileChange(t){this.file=t.target.files[0],this.xlsxToJson()}onLimitChange(t){this.limit=Number(t.target.value)}onUpload(){this.show=!0}onReset(){this.show=!1,this.file=void 0,this.rows=[],this.limit=10}onSubmit(){this.subjectPeriodService.createSubjectPeriod(this.rows).subscribe(t=>{this.onReset()})}onCancel(){this.onReset()}isFileSelected(){return void 0!==this.file}xlsxToJson(){this.convertFileService.convertToJson(this.file).then(t=>this.rows=t).catch(t=>console.log(t))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g),e.Y36(x._h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add"]],decls:25,vars:6,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row","mx-5"],[4,"ngIf"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row","align-items-center","mb-3"],[1,"col-2"],["href","students-projects/assets/files/subject-period.xlsx","download","subject-period.xlsx"],[1,"fas","fa-file-excel","fa-2x"],[1,"sub-item"],[1,"col","text-center"],[1,"dropzone"],["data-dz-message","",1,"dz-message","mb-3"],[1,"icon"],[1,"flaticon-file"],[1,"message"],[1,"note"],[1,"fallback"],["type","file","hidden","","id","input-custom-file","accept",".xls, .xlsx",1,"form-control-file",2,"display","none",3,"change"],["for","input-custom-file",1,"btn","btn-primary","text-white"],[1,"col-1"],[1,"form-group"],["id","limit",1,"form-control",3,"change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"card-action","text-center"],[1,"btn","btn-primary",3,"disabled","click"],[1,"col-md-12","mb-3"],["rowHeight","auto",1,"material","striped",3,"columnMode","headerHeight","footerHeight","rows","limit"],["name","#",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","C\xf3digo Materia",3,"flexGrow"],["name","C\xf3digo Docente",3,"flexGrow"],["name","Grupo",3,"flexGrow"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-default",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Carge de Materias por Periodo"),e.qZA(),e.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),e._UZ(6,"i",5),e.qZA()(),e.TgZ(7,"li",6),e._UZ(8,"i",7),e.qZA(),e.TgZ(9,"li",8)(10,"a"),e._uU(11,"Academico"),e.qZA()(),e.TgZ(12,"li",6),e._UZ(13,"i",7),e.qZA(),e.TgZ(14,"li",8)(15,"a",4),e._uU(16,"Materia Periodo"),e.qZA()(),e.TgZ(17,"li",6),e._UZ(18,"i",7),e.qZA(),e.TgZ(19,"li",8)(20,"a"),e._uU(21,"Agregar"),e.qZA()()()(),e.TgZ(22,"div",9),e.YNc(23,w,49,1,"ng-container",10),e.YNc(24,U,21,9,"ng-container",10),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(4,j)),e.xp6(10),e.Q6J("routerLink",e.DdM(5,S)),e.xp6(8),e.Q6J("ngIf",!i.show),e.xp6(1),e.Q6J("ngIf",i.show))},dependencies:[u.O5,s._Y,s.YN,s.Kr,s.JL,d.yS,c.nE,c.UC,c.vq],styles:[".text-white[_ngcontent-%COMP%]{color:#fff}button[_ngcontent-%COMP%]{margin-right:10px}i[_ngcontent-%COMP%]{color:#aa1916}span[_ngcontent-%COMP%]{color:#575962;font-weight:700;margin-left:.5px}a[_ngcontent-%COMP%]{text-decoration:none}"]}),o})(),f=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-detail"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"detail subject period"),e.qZA())}}),o})();function P(o,n){if(1&o&&e._uU(0),2&o){const t=n.row;e.hij(" ",null==t?null:t.id," ")}}function q(o,n){1&o&&e._uU(0),2&o&&e.hij(" ",n.row.id_subject.code," ")}function M(o,n){1&o&&(e._uU(0),e.ALo(1,"titlecase")),2&o&&e.hij(" ",e.lcZ(1,1,n.row.id_subject.name)," ")}function L(o,n){1&o&&e._uU(0),2&o&&e.hij(" ",n.row.id_teacher," ")}function y(o,n){1&o&&e._uU(0),2&o&&e.hij(" ",n.row.group," ")}function J(o,n){1&o&&e._uU(0),2&o&&e.hij(" ",n.row.year," ")}function G(o,n){1&o&&e._uU(0),2&o&&e.hij(" ",n.row.period," ")}function N(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",40)(1,"button",41),e.NdJ("click",function(){const a=e.CHM(t).row,E=e.oxw();return e.KtG(E.deleteSubjectPeriod(a.id))}),e._UZ(2,"i",42),e.qZA()()}}const Q=function(){return["/dashboard"]},z=function(){return["/academics/subjects"]},O=function(){return["/academics/subject-period"]};let h=(()=>{class o{constructor(t,i){this.subjectPeriodService=t,this.router=i,this.course={},this.rows=[],this.temp=[],this.limit=10}ngOnInit(){this.getSubjectsPeriod()}getSubjectsPeriod(){this.subjectPeriodService.getSubjectsPeriod().subscribe(t=>{this.rows=t,this.temp=[...t]})}onLimitChange(t){this.limit=Number(t.target.value),this.table.limit=this.limit}filterSubjects(t){const i=t.target.value.toLowerCase(),r=this.temp.filter(a=>!(-1===a.id_subject.id.toString().toLowerCase().indexOf(i)&&i&&-1===a.id_subject.code.toLowerCase().indexOf(i)&&i&&-1===a.id_subject.name.toLowerCase().indexOf(i)&&i&&-1===a.id_teacher.toString().toLowerCase().indexOf(i)&&i&&-1===a.group.toLowerCase().indexOf(i)&&i&&-1===a.year.toLowerCase().indexOf(i)&&i&&-1===a.period.toLowerCase().indexOf(i)&&i));this.rows=r,this.table.offset=0}createSubjectPeriod(){this.router.navigate(["/academics/subject-period/new"])}deleteSubjectPeriod(t){this.subjectPeriodService.deleteSubjectPeriod(t).subscribe(()=>{this.getSubjectsPeriod()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(c.nE,5),2&t){let r;e.iGM(r=e.CRH())&&(i.table=r.first)}},decls:74,vars:28,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"d-flex","align-items-center"],[1,"card-title"],[1,"btn","btn-primary","btn-round","ml-auto",3,"click"],[1,"fa","fa-plus"],[1,"card-body"],[1,"row","justify-content-between"],[1,"col-sm-12","col-md-6"],[1,"form-group",2,"width","20%"],["for","pageSize"],["id","pageSize",1,"form-control",3,"change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"form-group",2,"width","40%"],["for","search"],["type","text","placeholder","Buscar","id","search",1,"form-control",3,"keyup"],["rowHeight","auto",1,"material","striped",3,"columnMode","headerHeight","footerHeight","rows","limit"],["name","ID",3,"flexGrow","resizeable"],["ngx-datatable-cell-template",""],["name","C\xf3digo Materia",3,"flexGrow","resizeable"],["name","Nombre Materia",3,"flexGrow","resizeable"],["name","C\xf3digo Docente",3,"flexGrow","resizeable"],["name","Grupo",3,"flexGrow","resizeable"],["name","A\xf1o",3,"flexGrow","resizeable"],["name","Periodo",3,"flexGrow","resizeable"],["name","Acciones",3,"flexGrow","resizeable","sortable"],[1,"form-button-action"],["type","button","data-toggle","tooltip","title","Eliminar","data-original-title","Eliminar Materia Periodo",1,"btn","btn-link","btn-default",3,"click"],[1,"fa","fa-times"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Lista de Materia Periodo"),e.qZA(),e.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),e._UZ(6,"i",5),e.qZA()(),e.TgZ(7,"li",6),e._UZ(8,"i",7),e.qZA(),e.TgZ(9,"li",8)(10,"a"),e._uU(11,"Academico"),e.qZA()(),e.TgZ(12,"li",6),e._UZ(13,"i",7),e.qZA(),e.TgZ(14,"li",8)(15,"a",4),e._uU(16,"Materias"),e.qZA()(),e.TgZ(17,"li",6),e._UZ(18,"i",7),e.qZA(),e.TgZ(19,"li",8)(20,"a",4),e._uU(21,"Periodos"),e.qZA()(),e.TgZ(22,"li",6),e._UZ(23,"i",7),e.qZA(),e.TgZ(24,"li",8)(25,"a"),e._uU(26,"Lista"),e.qZA()()()(),e.TgZ(27,"div",9)(28,"div",10)(29,"div",11)(30,"div",12)(31,"div",13)(32,"div",14),e._uU(33,"Lista de Materia Periodo"),e.qZA(),e.TgZ(34,"button",15),e.NdJ("click",function(){return i.createSubjectPeriod()}),e._UZ(35,"i",16),e._uU(36," Adicionar Materias Periodo "),e.qZA()()(),e.TgZ(37,"div",17)(38,"div",18)(39,"div",19)(40,"div",20)(41,"label",21),e._uU(42,"Mostrar"),e.qZA(),e.TgZ(43,"select",22),e.NdJ("change",function(a){return i.onLimitChange(a)}),e.TgZ(44,"option",23),e._uU(45,"10"),e.qZA(),e.TgZ(46,"option",24),e._uU(47,"25"),e.qZA(),e.TgZ(48,"option",25),e._uU(49,"50"),e.qZA(),e.TgZ(50,"option",26),e._uU(51,"100"),e.qZA()()()(),e.TgZ(52,"div",19)(53,"div",27)(54,"label",28),e._uU(55,"Buscar"),e.qZA(),e.TgZ(56,"input",29),e.NdJ("keyup",function(a){return i.filterSubjects(a)}),e.qZA()()()(),e.TgZ(57,"ngx-datatable",30)(58,"ngx-datatable-column",31),e.YNc(59,P,1,1,"ng-template",32),e.qZA(),e.TgZ(60,"ngx-datatable-column",33),e.YNc(61,q,1,1,"ng-template",32),e.qZA(),e.TgZ(62,"ngx-datatable-column",34),e.YNc(63,M,2,3,"ng-template",32),e.qZA(),e.TgZ(64,"ngx-datatable-column",35),e.YNc(65,L,1,1,"ng-template",32),e.qZA(),e.TgZ(66,"ngx-datatable-column",36),e.YNc(67,y,1,1,"ng-template",32),e.qZA(),e.TgZ(68,"ngx-datatable-column",37),e.YNc(69,J,1,1,"ng-template",32),e.qZA(),e.TgZ(70,"ngx-datatable-column",38),e.YNc(71,G,1,1,"ng-template",32),e.qZA(),e.TgZ(72,"ngx-datatable-column",39),e.YNc(73,N,3,0,"ng-template",32),e.qZA()()()()()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(25,Q)),e.xp6(10),e.Q6J("routerLink",e.DdM(26,z)),e.xp6(5),e.Q6J("routerLink",e.DdM(27,O)),e.xp6(37),e.Q6J("columnMode","flex")("headerHeight",50)("footerHeight",50)("rows",i.rows)("limit",i.limit),e.xp6(1),e.Q6J("flexGrow",1)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",2)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",3)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",2)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",1)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",1)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",1)("resizeable",!1),e.xp6(2),e.Q6J("flexGrow",2)("resizeable",!1)("sortable",!1))},dependencies:[s.YN,s.Kr,d.yS,c.nE,c.UC,c.vq,u.rS],styles:[".form-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:1rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0;margin-right:1rem}"]}),o})();const F=[{path:"",component:l(115).p,children:[{path:"",component:h,pathMatch:"full",title:"Lista de Materias Periodo"},{path:"new",component:_,title:"Nuevo Materia Periodo"},{path:":id",component:f,title:"Detalle de la Materia Periodo"}]}],D=[u.ez,s.UX,(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(F),d.Bz]}),o})(),c.xD];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[D]}),o})()}}]);