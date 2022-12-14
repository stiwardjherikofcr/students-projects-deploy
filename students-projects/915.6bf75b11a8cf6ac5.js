"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[915],{2915:(K,l,i)=>{i.r(l),i.d(l,{CoursesModule:()=>H});var a=i(6895),c=i(5675),t=i(8256),d=i(2344),Z=i(9358),p=i(421);function f(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11)(2,"div",12)(3,"div",13)(4,"div",14),t._uU(5,"Subir Archivos"),t.qZA()(),t.TgZ(6,"div",15)(7,"div",16)(8,"div",17)(9,"h4"),t._uU(10,"Archivo de prueba (.txt)"),t.qZA()(),t.TgZ(11,"div",17)(12,"a",18),t._UZ(13,"i",19),t.TgZ(14,"span",20),t._uU(15," Descargar plantilla"),t.qZA()()()(),t.TgZ(16,"div",16)(17,"div",21)(18,"form",22)(19,"div",23)(20,"div",24),t._UZ(21,"i",25),t.qZA(),t.TgZ(22,"h4",26)(23,"strong"),t._uU(24,"Cargar archivo"),t.qZA()(),t.TgZ(25,"span",27),t._uU(26,"Archivos compatibles: txt"),t.qZA()(),t.TgZ(27,"div",28)(28,"input",29),t.NdJ("change",function(r){t.CHM(e);const u=t.oxw();return t.KtG(u.onFileChange(r))}),t.qZA(),t.TgZ(29,"label",30),t._uU(30,"Cargar Archivo"),t.qZA()()()()()(),t.TgZ(31,"div",31)(32,"button",32),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onUpload())}),t._uU(33,"Cargar"),t.qZA()()()(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(32),t.Q6J("disabled",!e.isFileSelected())}}function C(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"th",40),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&o){const e=s.$implicit,n=s.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e)}}function v(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33)(2,"div",12)(3,"div",13)(4,"div",14),t._uU(5,"Lista de Correos"),t.qZA()(),t.TgZ(6,"div",15)(7,"div",34)(8,"table",35)(9,"thead")(10,"tr")(11,"th",36),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",36),t._uU(14,"Correo"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,C,5,2,"tr",37),t.qZA()()()(),t.TgZ(17,"div",31)(18,"button",38),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSubmit())}),t._uU(19,"Guardar"),t.qZA(),t.TgZ(20,"button",39),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onCancel())}),t._uU(21,"Cancelar"),t.qZA()()()(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.rows)}}const x=function(){return["/dashboard"]},T=function(){return["/academics/courses"]};let g=(()=>{class o{constructor(e,n,r,u){this.coursesService=e,this.convertFileService=n,this.usersService=r,this.router=u,this.show=!1,this.rows=[],this.students=[]}ngOnInit(){}onFileChange(e){this.file=e.target.files[0],this.txtToJson()}onUpload(){this.show=!0}onReset(){this.show=!1,this.file=void 0,this.rows=[]}onSubmit(){this.usersService.getUserByEmails(this.rows).subscribe(e=>{this.students=e.students,this.setEnrollStudentCourse(),this.onReset()})}onCancel(){this.onReset()}isFileSelected(){return void 0!==this.file}txtToJson(){this.convertFileService.convertTxtToJson(this.file).then(e=>this.rows=e).catch(e=>console.log(e))}setEnrollStudentCourse(){const e=this.coursesService.currentCourseSubjectValue.id;this.coursesService.setEnrollStudentCourse(e,this.students).subscribe(()=>this.onNavigate(e))}onNavigate(e){this.router.navigate(["/academics/courses/",e])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.N),t.Y36(Z._h),t.Y36(p.f),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add"]],decls:30,vars:6,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row","mx-5"],[4,"ngIf"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row","align-items-center","mb-3"],[1,"col-2"],["href","assets/files/emails.txt","download",""],[1,"fas","fa-file-alt","fa-2x"],[1,"sub-item"],[1,"col","text-center"],[1,"dropzone"],["data-dz-message","",1,"dz-message","mb-3"],[1,"icon"],[1,"flaticon-file"],[1,"message"],[1,"note"],[1,"fallback"],["type","file","hidden","","id","input-custom-file","accept",".txt",1,"form-control-file",2,"display","none",3,"change"],["for","input-custom-file",1,"btn","btn-primary","text-white"],[1,"card-action","text-center"],[1,"btn","btn-primary",3,"disabled","click"],[1,"col-md-12","mb-3"],[1,"table-responsive"],[1,"table","table-head-bg-primary","table-striped","table-hover","text-center"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-default",3,"click"],["scope","row"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Carge de Estudiantes"),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),t._UZ(6,"i",5),t.qZA()(),t.TgZ(7,"li",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"li",8)(10,"a"),t._uU(11,"Academico"),t.qZA()(),t.TgZ(12,"li",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"li",8)(15,"a",4),t._uU(16,"Cursos"),t.qZA()(),t.TgZ(17,"li",6),t._UZ(18,"i",7),t.qZA(),t.TgZ(19,"li",8)(20,"a"),t._uU(21,"Estudiantes"),t.qZA()(),t.TgZ(22,"li",6),t._UZ(23,"i",7),t.qZA(),t.TgZ(24,"li",8)(25,"a"),t._uU(26,"Agregar"),t.qZA()()()(),t.TgZ(27,"div",9),t.YNc(28,f,34,1,"ng-container",10),t.YNc(29,v,22,1,"ng-container",10),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(4,x)),t.xp6(10),t.Q6J("routerLink",t.DdM(5,T)),t.xp6(13),t.Q6J("ngIf",!n.show),t.xp6(1),t.Q6J("ngIf",n.show))},dependencies:[a.sg,a.O5,c.yS],styles:[".text-white[_ngcontent-%COMP%]{color:#fff}button[_ngcontent-%COMP%]{margin-right:10px}i[_ngcontent-%COMP%]{color:#aa1916}span[_ngcontent-%COMP%]{color:#575962;font-weight:700;margin-left:.5px}a[_ngcontent-%COMP%]{text-decoration:none}"]}),o})();var A=i(8944),b=i(2213);let U=(()=>{class o{constructor(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["card-user"]],inputs:{user:"user"},decls:6,vars:4,consts:[[1,"card"],[1,"p-2"],[1,"card-img-top","rounded",3,"src","alt"],[1,"card-body"],[1,"card-title"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h5",4),t._uU(5),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("src",n.user.picture.split("=")[0],t.LSH)("alt",n.user.first_name),t.xp6(3),t.AsE(" ",n.user.first_name," ",n.user.last_name," "))},styles:[".card[_ngcontent-%COMP%]{box-shadow:#0e1e251f 0 2px 4px,#0e1e2552 0 2px 16px;width:100%;height:95%}img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}"]}),o})();function w(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"h4",16),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.course.id_subject.name)}}function y(o,s){if(1&o&&(t.ynx(0),t.TgZ(1,"li",8)(2,"a"),t._uU(3),t.qZA()(),t.BQk()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.course.id_subject.name)}}function q(o,s){if(1&o&&(t.TgZ(0,"div",18),t._UZ(1,"card-user",19),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("user",e)}}function S(o,s){if(1&o&&(t.ynx(0),t.YNc(1,q,2,1,"div",17),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.students)}}function J(o,s){if(1&o&&(t.TgZ(0,"div",21),t._UZ(1,"card-project",22),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("project",e)}}function j(o,s){if(1&o&&(t.ynx(0),t.YNc(1,J,2,1,"div",20),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.projects)}}const M=function(){return["/dashboard"]},O=function(){return["/academics/courses"]},Q=function(){return["/academics/courses/new"]};let m=(()=>{class o{constructor(e,n,r,u){this.coursesService=e,this.projectsService=n,this.usersService=r,this.route=u,this.course={},this.projects=[],this.students=[],this.showStudents=!1,this.showProjects=!0}ngOnInit(){this.idCourse=+this.route.snapshot.params.id,this.getCurrenCourse()}getCurrenCourse(){this.coursesService.getCourseById(this.idCourse).subscribe(e=>{this.course=e,this.getProjectsByCourse(this.idCourse),this.getStudentsEnrolledCourse(this.idCourse)})}getProjectsByCourse(e=this.idCourse){this.projectsService.getProjectsByCourse(this.idCourse).subscribe(n=>{this.projects=n})}getStudentsEnrolledCourse(e=this.idCourse){this.coursesService.getStudentsEnrolledCourse(this.idCourse).subscribe(n=>{this.getStudentsByIds(n.students)})}getStudentsByIds(e){this.usersService.getUsersByIds(e).subscribe(n=>{this.students=n})}isCourseEmpty(){return this.course&&0===Object.keys(this.course).length}manageShow(e,n){this.showStudents=e,this.showProjects=n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.N),t.Y36(A.m9),t.Y36(p.f),t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detail"]],decls:34,vars:10,consts:[[1,"page-header"],[4,"ngIf"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"ml-auto"],["type","button","data-toggle","dropdown",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"routerLink"],[1,"dropdown-divider"],[1,"dropdown-item",3,"click"],[1,"row","row-projects"],[1,"page-title"],["class","col-sm-12 col-md-6 col-lg-6 col-xl-2 col-xxl-4",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-6","col-lg-6","col-xl-2","col-xxl-4"],[3,"user"],["class","col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-6","col-lg-6","col-xl-4","col-xxl-4"],[3,"project"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,w,3,1,"ng-container",1),t.TgZ(2,"ul",2)(3,"li",3)(4,"a",4),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"li",6),t._UZ(7,"i",7),t.qZA(),t.TgZ(8,"li",8)(9,"a"),t._uU(10,"Academico"),t.qZA()(),t.TgZ(11,"li",6),t._UZ(12,"i",7),t.qZA(),t.TgZ(13,"li",8)(14,"a",4),t._uU(15,"Cursos"),t.qZA()(),t.TgZ(16,"li",6),t._UZ(17,"i",7),t.qZA(),t.YNc(18,y,4,1,"ng-container",1),t.qZA(),t.TgZ(19,"div",9)(20,"button",10),t._uU(21," Acciones "),t.qZA(),t.TgZ(22,"div",11)(23,"a",12),t._uU(24,"Matricular Alumnos"),t.qZA(),t._UZ(25,"div",13),t.TgZ(26,"a",14),t.NdJ("click",function(){return n.manageShow(!1,!0)}),t._uU(27," Estudiantes "),t.qZA(),t._UZ(28,"div",13),t.TgZ(29,"a",14),t.NdJ("click",function(){return n.manageShow(!0,!1)}),t._uU(30," Proyectos "),t.qZA()()()(),t.TgZ(31,"div",15),t.YNc(32,S,2,1,"ng-container",1),t.YNc(33,j,2,1,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!n.isCourseEmpty()),t.xp6(3),t.Q6J("routerLink",t.DdM(7,M)),t.xp6(10),t.Q6J("routerLink",t.DdM(8,O)),t.xp6(4),t.Q6J("ngIf",!n.isCourseEmpty()),t.xp6(5),t.Q6J("routerLink",t.DdM(9,Q)),t.xp6(9),t.Q6J("ngIf",!n.showStudents),t.xp6(1),t.Q6J("ngIf",!n.showProjects))},dependencies:[a.sg,a.O5,c.yS,b.b,U]}),o})();var k=i(9722);const h=function(o){return["/academics/courses",o]};let F=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["card-course"]],inputs:{course:"course"},decls:11,vars:12,consts:[[1,"card"],[1,"p-2"],[1,"text-dark",3,"routerLink"],[1,"card-img-top","rounded",3,"src","alt"],[1,"card-body","pt-2"],[1,"badge","badge-danger","float-right"],[1,"card-title","mb-1","fw-bold"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA()(),t.TgZ(4,"div",4)(5,"span",5),t._uU(6),t.qZA(),t.TgZ(7,"h4",6)(8,"a",2),t._uU(9),t.ALo(10,"titlecase"),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("routerLink",t.VKq(8,h,n.course.id)),t.xp6(1),t.Q6J("src",n.course.image,t.LSH)("alt",n.course.id_subject.name+" - "+n.course.group),t.xp6(3),t.hij(" ",n.course.year+" - "+n.course.period," "),t.xp6(2),t.Q6J("routerLink",t.VKq(10,h,n.course.id)),t.xp6(1),t.hij(" ",t.lcZ(10,6,n.course.id_subject.name+" - "+n.course.group)," "))},dependencies:[c.yS,a.rS],styles:[".card[_ngcontent-%COMP%]{box-shadow:#0e1e251f 0 2px 4px,#0e1e2552 0 2px 16px;width:100%;height:95%}img[_ngcontent-%COMP%]{width:100%;height:150px;object-fit:cover}"]}),o})();function L(o,s){if(1&o&&(t.TgZ(0,"div",11),t._UZ(1,"card-course",12),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("course",e)}}const N=function(){return["/dashboard"]},D=function(){return["/academics/courses"]};let _=(()=>{class o{constructor(e,n){this.authService=e,this.coursesService=n,this.courses=[]}ngOnInit(){this.getCourses()}getCourses(){const e=this.authService.getCurrentUserSubject().id;this.coursesService.getCourses(e).subscribe(n=>{this.courses=n})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(k.e),t.Y36(d.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:24,vars:5,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row","row-projects"],["class","col-sm-6 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-lg-3"],[3,"course"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Lista Cursos"),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),t._UZ(6,"i",5),t.qZA()(),t.TgZ(7,"li",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"li",8)(10,"a"),t._uU(11,"Academico"),t.qZA()(),t.TgZ(12,"li",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"li",8)(15,"a",4),t._uU(16,"Cursos"),t.qZA()(),t.TgZ(17,"li",6),t._UZ(18,"i",7),t.qZA(),t.TgZ(19,"li",8)(20,"a"),t._uU(21,"Lista"),t.qZA()()()(),t.TgZ(22,"div",9),t.YNc(23,L,2,1,"div",10),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(3,N)),t.xp6(10),t.Q6J("routerLink",t.DdM(4,D)),t.xp6(8),t.Q6J("ngForOf",n.courses))},dependencies:[a.sg,c.yS,F]}),o})();const B=[{path:"",component:i(115).p,children:[{path:"",component:_,pathMatch:"full",title:"Lista de Cursos"},{path:"new",component:g,title:"Nuevo Curso"},{path:":id",component:m,title:"Detalles del Curso"}]}];let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(B),c.Bz]}),o})();var P=i(8982),I=i(2506);const z=[a.ez,E,I.xD,P.m];let H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[z]}),o})()}}]);