"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[309],{3309:(x,s,i)=>{i.r(s),i.d(s,{AccountModule:()=>q});var u=i(6895),c=i(5675),a=i(8459),t=i(8256),l=i(858),g=i(1196),Z=i(3962);function p(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&e){const r=o.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,4,r.id_subject_period.id_subject.name)),t.xp6(3),t.Oqu(r.id_subject_period.group),t.xp6(2),t.Oqu(r.id_subject_period.year),t.xp6(2),t.Oqu(r.id_subject_period.period)}}function h(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",24)(2,"div",11)(3,"div",12)(4,"div",19)(5,"div",13),t._uU(6,"Materias"),t.qZA()()(),t.TgZ(7,"div",20)(8,"div",21)(9,"table",25)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Grupo"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"A\xf1o"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Periodo"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,p,10,6,"tr",26),t.qZA()()()()()(),t.BQk()),2&e){const r=t.oxw();t.xp6(21),t.Q6J("ngForOf",r.coursesStudent)}}function f(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&e){const r=o.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,4,r.id_subject.name)),t.xp6(3),t.Oqu(r.group),t.xp6(2),t.Oqu(r.year),t.xp6(2),t.Oqu(r.period)}}function v(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",24)(2,"div",11)(3,"div",12)(4,"div",19)(5,"div",13),t._uU(6,"Cursos"),t.qZA()()(),t.TgZ(7,"div",20)(8,"div",21)(9,"table",25)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Grupo"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"A\xf1o"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Periodo"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,f,10,6,"tr",26),t.qZA()()()()()(),t.BQk()),2&e){const r=t.oxw();t.xp6(21),t.Q6J("ngForOf",r.coursesTeacher)}}const m=function(){return["/dashboard"]},A=function(){return["/account"]},T=function(e){return[e]};let d=(()=>{class e{constructor(r,n,b){this.authService=r,this.coursesService=n,this.courseStudentService=b,this.currentUser={},this.coursesStudent=[],this.coursesTeacher=[]}ngOnInit(){this.getCurrrentUser()}getCurrrentUser(){this.currentUser=this.authService.getCurrentUserSubject(),this.getShowCourses()}getShowCourses(){this.authService.isStudent()?this.getCoursesStudent():this.authService.isTeacher()&&this.getCourses()}getCoursesStudent(){this.courseStudentService.getCoursesStudent(this.currentUser.id).subscribe(r=>{this.coursesStudent=r})}getCourses(){this.coursesService.getCourses(this.currentUser.id).subscribe(r=>{this.coursesTeacher=r})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(l.e),t.Y36(g.N),t.Y36(Z.P))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],decls:55,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[1,"row"],[1,"col-md-3"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body","d-flex","justify-content-center"],[1,"demo"],[1,"avatar","avatar-xxl"],[1,"img-fluid","rounded","img-perfil",3,"src","alt"],[1,"col-md-9"],[1,"d-flex","align-items-center"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[4,"ngIf"],[1,"col-md-12"],[1,"table","table-striped","table-hover","text-center"],[4,"ngFor","ngForOf"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Perfil"),t.qZA(),t.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),t._UZ(6,"i",5),t.qZA()(),t.TgZ(7,"li",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"li",8)(10,"a",4),t._uU(11,"Cuenta"),t.qZA()(),t.TgZ(12,"li",6),t._UZ(13,"i",7),t.qZA(),t.TgZ(14,"li",8)(15,"a"),t._uU(16,"Perfil"),t.qZA()()()(),t.TgZ(17,"div",9)(18,"div",10)(19,"div",11)(20,"div",12)(21,"h4",13)(22,"b"),t._uU(23,"Perfil"),t.qZA()()(),t.TgZ(24,"div",14)(25,"div",15)(26,"div",16),t._UZ(27,"img",17),t.qZA()()()()(),t.TgZ(28,"div",18)(29,"div",11)(30,"div",12)(31,"div",19)(32,"div",13),t._uU(33,"Informaci\xf3n de la cuenta"),t.qZA()()(),t.TgZ(34,"div",20)(35,"div",21)(36,"table",22)(37,"tbody")(38,"tr")(39,"td"),t._uU(40,"Nombre"),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA()(),t.TgZ(43,"tr")(44,"td"),t._uU(45,"Apellido"),t.qZA(),t.TgZ(46,"td"),t._uU(47),t.qZA()(),t.TgZ(48,"tr")(49,"td"),t._uU(50,"Correo"),t.qZA(),t.TgZ(51,"td"),t._uU(52),t.qZA()()()()()()()(),t.YNc(53,h,22,1,"ng-container",23),t.YNc(54,v,22,1,"ng-container",23),t.qZA()),2&r&&(t.xp6(5),t.Q6J("routerLink",t.DdM(9,m)),t.xp6(5),t.Q6J("routerLink",t.DdM(10,A)),t.xp6(17),t.Q6J("src",t.VKq(11,T,n.currentUser.picture),t.LSH)("alt",n.currentUser.first_name),t.xp6(15),t.Oqu(n.currentUser.first_name),t.xp6(5),t.Oqu(n.currentUser.last_name),t.xp6(5),t.Oqu(n.currentUser.email),t.xp6(1),t.Q6J("ngIf",n.coursesStudent.length>0),t.xp6(1),t.Q6J("ngIf",n.coursesTeacher.length>0))},dependencies:[u.sg,u.O5,c.yS,u.rS],styles:[".img-perfil[_ngcontent-%COMP%]{height:100%;width:100%;max-height:500px;max-width:500px;object-fit:cover}"]}),e})();const U=[{path:"",component:a.p,children:[{path:"profile",component:d,title:"Profile"},{path:"**",redirectTo:"profile",pathMatch:"full"}]}];let _=(()=>{class e{}return e.components=[d],e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(U),c.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,_]}),e})()}}]);