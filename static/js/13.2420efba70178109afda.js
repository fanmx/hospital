webpackJsonp([13],{uQqs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={_httpCache:{},handlerResponse:function(e,t,a,n){var l=void 0;switch(!0){case Boolean(t&&(l=t(e))):n(l);break;default:a(e)}},getTableDataList:function(e,t){var a=this,n=function(e){if(0==e.body.code){var a=e.body.data,n=[],l=0;if(a){l=Number(a.total);for(var i=0,o=a.list;i<o.length;i++){var r="";o[i].picSmall&&(r=-1!=o[i].picSmall.indexOf(",")?o[i].picSmall.split(",")[0]:o[i].picSmall),n.push({name:o[i].deptName,photo:r,signTime:o[i].signInTime?o[i].signInTime:"--",personneType:o[i].position,signOutTime:o[i].signBackTime?o[i].signBackTime:"--",sign:o[i].signInState,signOut:o[i].signBackState,id:o[i].uuid})}}t(n,l)}};$http.post("http://172.16.1.106:8084/meeting/meeting/findMainMeetingDetailed",e,{loading:!0}).then(function(e){return a.handlerResponse(e,null,n)})},stateChange:function(e,t,a){var n=this,l=function(e){if(1==e.body.code)return{error:5,i18n:"add_error_2",text:e.body.msg}},i=function(e){if(0==e.body.code)return t({success:1,i18n:"set_success_1",text:e.body.msg})},o=function(e){a(e)};$http.post("http://172.16.1.106:8084/meeting/meeting/updateSignState",e,{loading:!0}).then(function(e){return n.handlerResponse(e,l,i,o)})}},l={methods:{handlerConfirm:function(){var e=this,t={uuid:this.listId,signInState:null,signBackState:null};this.form.state&&("11"==this.form.state?(t.signInState="12",t.signBackState=null):(t.signBackState="12",t.signInState=null));n.stateChange(t,function(t){e.$message.success(t.text),e.dialogVisible=!1},function(t){e.$message.error(t.text)})},handleClose:function(e){e()},initTable:function(){return{tableData:[],total:100,page:1}},initSelect:function(){return{checkMode:"",checkModeOptions:[],departmentName:"",departmentNameOptions:[],attendanceType:"",attendanceTypeOptions:[]}},setHeaderClass:function(e){e.row,e.column;var t=e.rowIndex;e.columnIndex;return 0===t?" background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),linear-gradient(rgba(0,178,186,0.5),rgba(0,178,186,0.5));":""},handlerCheckModeChange:function(e){},handlerDepartmentNameChange:function(e){},handlerAttendanceTypeChange:function(e){},handlerSearchData:function(e){},handlerSign:function(e){},handlerSignOut:function(e){},handlerStatuChange:function(e){this.dialogVisible=!0,this.listId=e},handlerSearch:function(){},handleSizeChange:function(e){this.table.size=e,this.getTableData()},handleCurrentChange:function(e){this.table.page=$val,this.getTableData()},getTableData:function(){var e=this,t={size:this.table.size,page:this.table.page,meetingId:this.meetingId,deptCode:this.id};n.getTableDataList(t,function(t,a){e.table.tableData=t,e.table.total=Number(a)})}},created:function(){},mounted:function(){this.meetingId=window.localStorage.getItem("METTING_ID"),this.getTableData()},destroyed:function(){},data:function(){return{listId:null,stateOptions:[{value:"11",label:"签到"},{value:"12",label:"签退"}],form:{state:"11",msg:""},dialogVisible:!1,id:this.$route.params.id,meetingId:"",searchText:"",select:this.initSelect(),table:this.initTable()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"container-main"},[a("el-form",{ref:"form",attrs:{"label-width":"90px","label-position":"left",inline:!0}},[a("el-form-item",{attrs:{label:"签到方式"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handlerCheckModeChange},model:{value:e.select.checkMode,callback:function(t){e.$set(e.select,"checkMode",t)},expression:"select.checkMode"}},e._l(e.select.checkModeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"考勤类型"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handlerAttendanceTypeChange},model:{value:e.select.attendanceType,callback:function(t){e.$set(e.select,"attendanceType",t)},expression:"select.attendanceType"}},e._l(e.select.attendanceTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"姓名模糊查询",clearable:"","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handlerSearchData(t):null}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)],1),e._v(" "),a("el-button",{staticClass:"search-btn",attrs:{type:"primary",size:"small"},on:{click:e.handlerSearch}},[e._v("查询")]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table.tableData,"header-cell-style":e.setHeaderClass,border:"","max-height":"216"}},[a("el-table-column",{attrs:{align:"center",prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"photo",label:"照片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticClass:"img",attrs:{src:e.$v.imgSrc+t.row.photo,alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"personneType",label:"人员类型",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"signTime",align:"center",label:"签到时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"signOutTime",label:"签退时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sign",align:"center",label:"签到"}}),e._v(" "),a("el-table-column",{attrs:{prop:"signOut",align:"center",label:"签退"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"270",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.handlerStatuChange(t.row.id)}}},[e._v(" 状态修改")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.table.page,"pager-count":e.$v.paging.pagerCount,layout:e.$v.paging.layout,total:e.table.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%",center:"","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"状态修改："}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},e._l(e.stateOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handlerConfirm}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(e){a("x+2F")},"data-v-37a2fbf1",null);t.default=o.exports},"x+2F":function(e,t){}});