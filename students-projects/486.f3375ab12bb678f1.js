"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[486],{2486:(je,u,a)=>{a.r(u),a.d(u,{DetailModule:()=>Ce});var r=a(6895),l=a(5675),e=a(8256),j=a(8354);let m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-access"]],decls:2,vars:0,consts:[["id","pills-access","role","tabpanel","aria-labelledby","pills-access-tab",1,"tab-pane","fade","show","active"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-collaborators"),e.qZA())},dependencies:[j.q]}),t})();var U=a(1798);function L(t,o){1&t&&(e.ynx(0),e._UZ(1,"app-logs",12),e.BQk()),2&t&&(e.xp6(1),e.Q6J("logType","build"))}function D(t,o){1&t&&(e.ynx(0),e._UZ(1,"app-logs",12),e.BQk()),2&t&&(e.xp6(1),e.Q6J("logType","deploy"))}const g=function(t){return{"d-none":t}};let v=(()=>{class t{constructor(){this.showLogsBuild=!1,this.showLogsDeploy=!0}ngOnInit(){}getLogs(n,i){this.showLogsBuild=n,this.showLogsDeploy=i}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-activity"]],decls:15,vars:8,consts:[["id","pills-activity","role","tabpanel","aria-labelledby","pills-activity-tab",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-md-2"],["id","v-pills-tab-with-icon","role","tablist","aria-orientation","vertical",1,"nav","flex-column","nav-pills","nav-primary","nav-pills-no-bd","nav-pills-icons"],["id","v-pills-home-tab-icons","data-toggle","pill","href","#v-pills-home-icons","role","tab","aria-controls","v-pills-home-icons","aria-selected","true",1,"nav-link","active",3,"click"],[1,"flaticon-settings"],["id","v-pills-profile-tab-icons","data-toggle","pill","href","#v-pills-profile-icons","role","tab","aria-controls","v-pills-profile-icons","aria-selected","false",1,"nav-link",3,"click"],[1,"flaticon-interface-3"],[1,"col-md-10"],["id","v-pills-home-icons","role","tabpanel","aria-labelledby","v-pills-home-tab-icons",1,"tab-pane","fade","show","active",3,"ngClass"],[4,"ngIf"],["id","v-pills-profile-icons","role","tabpanel","aria-labelledby","v-pills-profile-tab-icons",1,"tab-pane","fade",3,"ngClass"],[3,"logType"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),e.NdJ("click",function(){return i.getLogs(!1,!0)}),e._UZ(5,"i",5),e._uU(6," Build Logs "),e.qZA(),e.TgZ(7,"a",6),e.NdJ("click",function(){return i.getLogs(!0,!1)}),e._UZ(8,"i",7),e._uU(9," Deployment Logs "),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9),e.YNc(12,L,2,1,"ng-container",10),e.qZA(),e.TgZ(13,"div",11),e.YNc(14,D,2,1,"ng-container",10),e.qZA()()()()),2&n&&(e.xp6(11),e.Q6J("ngClass",e.VKq(4,g,i.showLogsBuild)),e.xp6(1),e.Q6J("ngIf",!i.showLogsBuild),e.xp6(1),e.Q6J("ngClass",e.VKq(6,g,i.showLogsDeploy)),e.xp6(1),e.Q6J("ngIf",!i.showLogsDeploy))},dependencies:[r.mk,r.O5,U.x]}),t})();var k=a(9358),f=a(8944),w=a(2344);function M(t,o){if(1&t&&(e.ynx(0),e._UZ(1,"img",15),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("src",n.collaborators[n.project.id_user].picture,e.LSH)("alt",n.collaborators[n.project.id_user].first_name)}}function Q(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"small",16)(2,"strong"),e._uU(3),e.ALo(4,"titlecase"),e.qZA()(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(3),e.hij(" ",e.lcZ(4,1,n.collaborators[n.project.id_user].first_name),"")}}function q(t,o){if(1&t&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.tag.name," ")}}function O(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",17),e.YNc(2,q,2,1,"span",18),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",n.project.tags)}}function P(t,o){if(1&t&&(e.TgZ(0,"div",23)(1,"div",6),e._UZ(2,"img",15),e.qZA(),e.TgZ(3,"div",7)(4,"h6",24),e._uU(5),e.qZA(),e.TgZ(6,"small",25),e._uU(7,"Colaborador"),e.qZA()()()),2&t){const n=o.$implicit,i=e.oxw(3);e.xp6(2),e.Q6J("src",i.collaborators[n].picture,e.LSH)("alt",i.collaborators[n].first_name),e.xp6(3),e.AsE("",i.collaborators[n].first_name," ",i.collaborators[n].last_name,"")}}function J(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"h4",20),e._uU(2,"Colaboradores "),e.TgZ(3,"span",21),e._uU(4),e.qZA()(),e.YNc(5,P,8,4,"div",22),e.BQk()),2&t){const n=e.oxw(2);e.xp6(4),e.hij(" ",n.project.collaborators.length," "),e.xp6(1),e.Q6J("ngForOf",n.project.collaborators)}}function S(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",2)(2,"div",3),e._UZ(3,"img",4),e.TgZ(4,"div",5)(5,"div",6),e.YNc(6,M,2,2,"ng-container",1),e.qZA(),e.TgZ(7,"div",7)(8,"span",8),e._uU(9),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"small",9),e._uU(12,"by"),e.qZA(),e.YNc(13,Q,5,3,"ng-container",1),e.TgZ(14,"span",10),e._uU(15," | "),e.qZA(),e.TgZ(16,"small",11),e._uU(17),e.ALo(18,"date"),e.qZA()()()(),e.TgZ(19,"div",12)(20,"h3",13),e._uU(21),e.qZA(),e.YNc(22,O,3,1,"ng-container",1),e.TgZ(23,"p",14),e._uU(24),e.qZA(),e.YNc(25,J,6,2,"ng-container",1),e.qZA()(),e.BQk()),2&t){const n=e.oxw();e.xp6(3),e.Q6J("src",n.project.image,e.LSH)("alt",n.project.context),e.xp6(3),e.Q6J("ngIf",!n.isContributorsEmpty()),e.xp6(3),e.hij(" ",n.course.id_subject.name," "),e.xp6(4),e.Q6J("ngIf",n.getContributorsLength()>0),e.xp6(4),e.Oqu(e.lcZ(18,10,n.project.created_at)),e.xp6(4),e.Oqu(n.project.name),e.xp6(1),e.Q6J("ngIf",n.project.tags&&n.project.tags.length>0),e.xp6(2),e.Oqu(n.project.description),e.xp6(1),e.Q6J("ngIf",n.getContributorsLength()>1)}}let b=(()=>{class t{constructor(n,i,s){this.collaboratorsService=n,this.currentProjectService=i,this.courseService=s,this.project={},this.collaborators={},this.course={}}ngOnInit(){this.getProject()}getProject(){this.currentProjectService.currentProjectValue.subscribe(n=>{this.project=n,this.setCourse(),this.getContributors()})}setCourse(){this.courseService.currentCourse.subscribe(n=>{this.course=n})}getContributors(){this.collaboratorsService.currentContributors.subscribe(n=>{this.collaborators=n})}isContributorsEmpty(){return!this.getContributorsLength()}getContributorsLength(){return Object.keys(this.collaborators).length}isCourseEmpty(){return 0===Object.keys(this.course).length}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(k.th),e.Y36(f.Rx),e.Y36(w.N))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-overview"]],decls:2,vars:1,consts:[["id","pills-overview","role","tabpanel","aria-labelledby","pills-overview-tab",1,"tab-pane","fade","show","active"],[4,"ngIf"],[1,"row"],[1,"col-md-4"],[1,"img-fluid","rounded","img-project",3,"src","alt"],[1,"d-flex","mt-3"],[1,"avatar"],[1,"ml-2"],[1,"badge","badge-danger"],[1,"text-muted","mr-25"],[1,"text-muted","ml-50","mr-25"],[1,"date","text-muted"],[1,"col-md-8"],[1,"page-title","mb-3"],[1,"text-justify"],[1,"avatar-img","rounded-circle",3,"src","alt"],[1,"username"],[1,"tags"],["class","badge",4,"ngFor","ngForOf"],[1,"badge"],[1,"font-weight-bold"],[1,"badge","badge-count","badge-danger"],["class","d-flex align-items-center mb-2",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","mb-2"],[1,"mb-0"],[1,"text-muted"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,S,26,12,"ng-container",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngIf",!i.isCourseEmpty()&&i.getContributorsLength()>0))},dependencies:[r.sg,r.O5,r.rS,r.uU],styles:[".img-project[_ngcontent-%COMP%]{width:100%;height:400px;object-fit:fill}.tags[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background-color:#000;color:#fff;border-radius:5px;margin-right:10px;margin-bottom:10px}"]}),t})();var N=a(8497),d=a(4344);function Y(t,o){1&t&&(e.TgZ(0,"button",3),e._UZ(1,"i",4),e._uU(2," Nueva Fase "),e.qZA())}const F=function(){return["write"]};let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-phases"]],decls:4,vars:2,consts:[["id","pills-phases","role","tabpanel","aria-labelledby","pills-phases-tab",1,"tab-pane","fade","show","active"],[1,"d-flex","justify-content-end"],["class","btn btn-primary",4,"appPermissions"],[1,"btn","btn-primary"],[1,"fa","fa-plus"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Y,3,0,"button",2),e.qZA(),e._UZ(3,"app-phase"),e.qZA()),2&n&&(e.xp6(2),e.Q6J("appPermissions",e.DdM(1,F)))},dependencies:[N.q,d.$]}),t})();var I=a(4004),B=a(5347),R=a(2340),E=a(529);let X=(()=>{class t{constructor(n){this.http=n,this.info=[{id:1,type:"PostgreSQL",image:"https://oneclickapps.caprover.com/v4/logos/postgres.png",description:"PostgreSQL, tambi\xe9n conocido como Postgres, es un sistema de administraci\xf3n de bases de datos relacionales gratuito y de c\xf3digo abierto que enfatiza la extensibilidad y el cumplimiento de SQL.",link:"https://becl.me/pgadmin4/"},{id:2,type:"MySQL",image:"https://oneclickapps.caprover.com/v4/logos/mariadb.png",description:"MariaDB es una bifurcaci\xf3n desarrollada por la comunidad del sistema de administraci\xf3n de bases de datos relacionales MySQL que pretende permanecer libre bajo la GPL de GNU.",link:"https://becl.me/phpmyadmin/index.php"}],this.url=`${R.N.baseUrlUsers}`}getDatabaseTypes(){return this.http.get(`${this.url}/${B.S.database_Types_List}/`).pipe((0,I.U)(n=>n.map(i=>(i.image=this.info.find(s=>s.id===i.id)?.image||"",i.description=this.info.find(s=>s.id===i.id)?.description||"",i.link=this.info.find(s=>s.id===i.id)?.link||"",i))))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(E.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var $=a(5854);function z(t,o){if(1&t&&(e.TgZ(0,"div",3),e._UZ(1,"app-card-database",4),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("database",n)}}let _=(()=>{class t{constructor(n){this.databaseTypesService=n,this.databases=[]}ngOnInit(){this.getDatabaseTypes()}getDatabaseTypes(){this.databaseTypesService.getDatabaseTypes().subscribe(n=>{this.databases=n})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(X))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-resources"]],decls:3,vars:1,consts:[["id","pills-resources","role","tabpanel","aria-labelledby","pills-resources-tab",1,"tab-pane","fade","show","active"],[1,"row","row-projects"],["class","col-sm-12 col-md-5 col-lg-5 col-xl-3 col-xxl-3",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-5","col-lg-5","col-xl-3","col-xxl-3"],[3,"database"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,z,2,1,"div",2),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",i.databases))},dependencies:[r.sg,$.D]}),t})();var G=a(5060);let Z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-metrics"]],decls:2,vars:0,consts:[["id","pills-access","role","tabpanel","aria-labelledby","pills-access-tab",1,"tab-pane","fade","show","active"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-metric"),e.qZA())},dependencies:[G.p]}),t})();var H=a(7265);let y=(()=>{class t{constructor(){this.deployments=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-deployments"]],decls:2,vars:0,consts:[["id","pills-deployments","role","tabpanel","aria-labelledby","pills-deployments-tab",1,"tab-pane","fade","show","active"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-deploy"),e.qZA())},dependencies:[H.K],styles:["a[_ngcontent-%COMP%]{color:#aa1916}"]}),t})();var V=a(5345),K=a(6502),W=a(5583),ee=a(1406);function te(t,o){1&t&&(e.TgZ(0,"section",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"h4",10),e._uU(5,"Environment Variables"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Environment variables are used to configure the environment in which your application runs. They are key-value pairs that are available to your application as environment variables. "),e.qZA()(),e.TgZ(8,"div",11),e._UZ(9,"app-vars"),e.qZA()()()())}function ne(t,o){1&t&&(e.TgZ(0,"section",12)(1,"div",7)(2,"div",8)(3,"div",9)(4,"h4",10),e._uU(5,"Tags"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Tags are used to categorize your project. You can add tags to your project by entering their name. "),e.qZA()(),e.TgZ(8,"div",13),e._UZ(9,"app-tags"),e.qZA()()()())}function oe(t,o){1&t&&(e.TgZ(0,"section",14)(1,"div",7)(2,"div",8)(3,"div",9)(4,"h4",10),e._uU(5,"Maintenance Mode"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Maintenance mode allows you to disable your project while you are making changes to it. When maintenance mode is enabled, your project will return a 503 status code. "),e.qZA()(),e.TgZ(8,"div",13),e._UZ(9,"app-maintenance-mode"),e.qZA()()()())}function ie(t,o){1&t&&(e.TgZ(0,"section",15)(1,"div",7)(2,"div",8)(3,"div",9)(4,"h4",10),e._uU(5,"Delete Project"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Deleting a project will remove all of its files and data. This action cannot be undone. "),e.qZA()(),e.TgZ(8,"div",13),e._UZ(9,"app-delete-project"),e.qZA()()()())}const p=function(){return["write"]},ae=function(){return["maintainer"]};function se(t,o){1&t&&(e.TgZ(0,"div",1),e.YNc(1,te,10,0,"section",2),e._UZ(2,"hr"),e.YNc(3,ne,10,0,"section",3),e._UZ(4,"hr"),e.YNc(5,oe,10,0,"section",4),e._UZ(6,"hr"),e.YNc(7,ie,10,0,"section",5),e.qZA()),2&t&&(e.xp6(1),e.Q6J("appPermissions",e.DdM(4,p)),e.xp6(2),e.Q6J("appPermissions",e.DdM(5,p)),e.xp6(2),e.Q6J("appPermissions",e.DdM(6,p)),e.xp6(2),e.Q6J("appPermissions",e.DdM(7,ae)))}let x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-settings"]],decls:1,vars:2,consts:[["class","tab-pane fade show active","id","pills-settings","role","tabpanel","aria-labelledby","pills-settings-tab",4,"appPermissions"],["id","pills-settings","role","tabpanel","aria-labelledby","pills-settings-tab",1,"tab-pane","fade","show","active"],["id","environment-variable",4,"appPermissions"],["id","tags",4,"appPermissions"],["id","maintenance-mode",4,"appPermissions"],["id","delete-project",4,"appPermissions"],["id","environment-variable"],[1,"container"],[1,"row"],[1,"col-md-4"],[1,"form-section","my-4"],[1,"col-md-8"],["id","tags"],[1,"col-md-8","align-self-center"],["id","maintenance-mode"],["id","delete-project"]],template:function(n,i){1&n&&e.YNc(0,se,8,8,"div",0),2&n&&e.Q6J("appPermissions",e.DdM(1,p))},dependencies:[V.a,K.o,W.S,ee.r,d.$]}),t})();function re(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"a"),e._uU(2),e.qZA(),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.project.context)}}function ce(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"div",15)(2,"h4",16),e._uU(3),e.qZA(),e.TgZ(4,"a",17),e._UZ(5,"i",18),e._uU(6," Open app "),e.qZA()(),e.BQk()),2&t){const n=e.oxw();e.xp6(3),e.Oqu(n.project.context),e.xp6(1),e.MGl("href","https://becl.me/",n.project.context,"",e.LSH)}}const le=function(){return["resources"]},c=function(){return["active"]};function pe(t,o){1&t&&(e.TgZ(0,"li",8)(1,"a",28),e._uU(2,"Recursos "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,le))("routerLinkActive",e.DdM(3,c)))}const de=function(){return["settings"]};function ue(t,o){1&t&&(e.TgZ(0,"li",8)(1,"a",29),e._uU(2,"Configuraci\xf3n "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,de))("routerLinkActive",e.DdM(3,c)))}const me=function(){return["overview"]},T=function(){return["write"]},ge=function(){return["metrics"]},ve=function(){return["activity"]},fe=function(){return["access"]},be=function(){return["phases"]},he=function(){return["deployments"]};function _e(t,o){1&t&&(e.ynx(0),e.TgZ(1,"ul",19)(2,"li",8)(3,"a",20),e._uU(4,"Resumen "),e.qZA()(),e.YNc(5,pe,3,4,"li",21),e.TgZ(6,"li",8)(7,"a",22),e._uU(8,"M\xe9tricas "),e.qZA()(),e.TgZ(9,"li",8)(10,"a",23),e._uU(11,"Actividad "),e.qZA()(),e.TgZ(12,"li",8)(13,"a",24),e._uU(14,"Acceso "),e.qZA()(),e.TgZ(15,"li",8)(16,"a",25),e._uU(17,"Fases "),e.qZA()(),e.TgZ(18,"li",8)(19,"a",26),e._uU(20,"Despliegues "),e.qZA()(),e.YNc(21,ue,3,4,"li",21),e.qZA(),e.TgZ(22,"div",27),e._UZ(23,"router-outlet"),e.qZA(),e.BQk()),2&t&&(e.xp6(3),e.Q6J("routerLink",e.DdM(14,me))("routerLinkActive",e.DdM(15,c)),e.xp6(2),e.Q6J("appPermissions",e.DdM(16,T)),e.xp6(2),e.Q6J("routerLink",e.DdM(17,ge))("routerLinkActive",e.DdM(18,c)),e.xp6(3),e.Q6J("routerLink",e.DdM(19,ve))("routerLinkActive",e.DdM(20,c)),e.xp6(3),e.Q6J("routerLink",e.DdM(21,fe))("routerLinkActive",e.DdM(22,c)),e.xp6(3),e.Q6J("routerLink",e.DdM(23,be))("routerLinkActive",e.DdM(24,c)),e.xp6(3),e.Q6J("routerLink",e.DdM(25,he))("routerLinkActive",e.DdM(26,c)),e.xp6(2),e.Q6J("appPermissions",e.DdM(27,T)))}const Ze=function(){return["/dashboard"]},ye=function(){return["/projects"]};const xe=[{path:"",component:(()=>{class t{constructor(n,i,s){this.route=n,this.currentProjectService=i,this.router=s,this.id=0,this.project={}}ngOnInit(){this.id=+this.route.snapshot.params.id,this.getProject()}getProject(){this.currentProjectService.getCurrentProject(this.id).subscribe(n=>{this.project=n})}onBack(){this.router.navigate(["/projects"])}ngOnDestroy(){this.currentProjectService.clearCurrentProject()}isProjectEmpty(){return 0!==Object.keys(this.project).length}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.gz),e.Y36(f.Rx),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-project-detail"]],decls:28,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumbs"],[1,"nav-home"],[3,"routerLink"],[1,"flaticon-home"],[1,"separator"],[1,"flaticon-right-arrow"],[1,"nav-item"],[4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"d-flex","align-items-center"],[1,"card-title"],["target","_blank","rel","noopener noreferrer",1,"btn","btn-primary","btn-round","ml-auto",3,"href"],[1,"fas","fa-rocket"],["id","pills-tab","role","tablist",1,"nav","nav-pills","nav-primary"],["id","pills-overview-tab","data-toggle","pill","role","tab","aria-controls","pills-overview","aria-selected","true",1,"nav-link",3,"routerLink","routerLinkActive"],["class","nav-item",4,"appPermissions"],["id","pills-metrics-tab","data-toggle","pill","role","tab","aria-controls","pills-metrics","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"],["id","pills-activity-tab","data-toggle","pill","role","tab","aria-controls","pills-activity","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"],["id","pills-access-tab","data-toggle","pill","role","tab","aria-controls","pills-access","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"],["id","pills-phases-tab","data-toggle","pill","role","tab","aria-controls","pills-phases","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"],["id","pills-deployments-tab","data-toggle","pill","role","tab","aria-controls","pills-deployments","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"],["id","pills-tabContent",1,"tab-content","my-5"],["id","pills-resources-tab","data-toggle","pill","role","tab","aria-controls","pills-resources","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"],["id","pills-settings-tab","data-toggle","pill","role","tab","aria-controls","pills-settings","aria-selected","false",1,"nav-link",3,"routerLink","routerLinkActive"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Resumen"),e.qZA(),e.TgZ(3,"ul",2)(4,"li",3)(5,"a",4),e._UZ(6,"i",5),e.qZA()(),e.TgZ(7,"li",6),e._UZ(8,"i",7),e.qZA(),e.TgZ(9,"li",8)(10,"a",4),e._uU(11,"Proyectos"),e.qZA()(),e.TgZ(12,"li",6),e._UZ(13,"i",7),e.qZA(),e.TgZ(14,"li",8)(15,"a"),e._uU(16,"Resumen"),e.qZA()(),e.TgZ(17,"li",6),e._UZ(18,"i",7),e.qZA(),e.TgZ(19,"li",8),e.YNc(20,re,3,1,"ng-container",9),e.qZA()()(),e.TgZ(21,"div",10)(22,"div",11)(23,"div",12)(24,"div",13),e.YNc(25,ce,7,2,"ng-container",9),e.qZA(),e.TgZ(26,"div",14),e.YNc(27,_e,24,28,"ng-container",9),e.qZA()()()()),2&n&&(e.xp6(5),e.Q6J("routerLink",e.DdM(5,Ze)),e.xp6(5),e.Q6J("routerLink",e.DdM(6,ye)),e.xp6(10),e.Q6J("ngIf",i.project),e.xp6(5),e.Q6J("ngIf",i.project),e.xp6(2),e.Q6J("ngIf",i.isProjectEmpty()))},dependencies:[r.O5,l.lC,l.yS,l.Od,d.$]}),t})(),children:[{path:"overview",component:b,title:"Resumen"},{path:"resources",component:_,title:"Recursos"},{path:"phases",component:h,title:"Fases"},{path:"metrics",component:Z,title:"M\xe9tricas"},{path:"activity",component:v,title:"Actividad"},{path:"access",component:m,title:"Acceso"},{path:"deployments",component:y,title:"Despliegues"},{path:"settings",component:x,title:"Configuraci\xf3n"},{path:"",redirectTo:"overview",pathMatch:"full"}]}];let C=(()=>{class t{}return t.components=[m,v,b,h,_,Z,y,x],t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(xe),l.Bz]}),t})();var Te=a(2733);const Ae=[r.ez,C,Te.ProjectsModule];let Ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Ae]}),t})()}}]);