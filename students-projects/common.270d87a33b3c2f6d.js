"use strict";(self.webpackChunkstudents_projects=self.webpackChunkstudents_projects||[]).push([[592],{3962:(a,_,r)=>{r.d(_,{P:()=>u});var o=r(5347),n=r(2340),s=r(8256),c=r(529);let u=(()=>{class e{constructor(t){this.http=t,this.url=`${n.N.baseUrlAcademic}`}getCoursesStudent(t){return this.http.get(`${this.url}/${o.S.courses_Student}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(c.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8795:(a,_,r)=>{r.d(_,{m:()=>u});var o=r(5347),n=r(2340),s=r(8256),c=r(529);let u=(()=>{class e{constructor(t){this.http=t,this.url=`${n.N.baseUrlProjects}`}projectValidateContext(t){return this.http.get(`${this.url}/${o.S.project_Validate_Context}/${t}`)}getProjects(t,p){return this.http.post(`${this.url}/${o.S.project_List}/${t}`,p?{params:p}:{})}getProjectsByCourse(t){return this.http.get(`${this.url}/${o.S.project_List_By_Course}/${t}`)}createProject(t){return this.http.post(`${this.url}/${o.S.project_Create}/`,t)}deployProject(t){return this.http.post(`${this.url}/${o.S.project_Deploy}/`,t)}deleteProject(t){return this.http.post(`${this.url}/${o.S.project_Delete}`,t)}deleteWorkspace(t){return this.http.post(`${this.url}/${o.S.project_Delete_Workspace}`,t)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(c.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);