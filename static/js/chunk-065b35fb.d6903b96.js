(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-065b35fb"],{2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var o=i("6b75");function n(t){if(Array.isArray(t))return Object(o["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return n(t)||a(t)||Object(r["a"])(t)||l()}},3225:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("Page",{ref:"page",attrs:{config:t.config}}),i("drag-dialog",{attrs:{title:t.opt_config.title,visible:t.opt_config.visible},on:{"update:visible":function(e){return t.$set(t.opt_config,"visible",e)}}},[i("Page",{ref:"opt_page",attrs:{config:t.opt_config},on:{save:t.saveRow}}),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.opt_config.visible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:t.save}},[t._v("保 存")])],1)],1)],1)},n=[],a=i("2909"),r={data:function(){var t=this;return{config:{columns:[{type:"input",label:"类型",prop:"type",rules:{required:!0}},{type:"input",label:"描述",prop:"remark"}],form:{url:"/vue-admin-simple/dict/save"},table:{url:"/vue-admin-simple/dict/list",url_del:"/vue-admin-simple/dict/del",sortable:!1,actionColumn:{label:"操作",fixed:"right",width:150,buttons:[{label:"键值",type:"text",click:function(e,i){t.editOpt(e,i)}},{label:"修改",type:"text",auth:"edit",act:"edit"},{label:"删除",type:"text",auth:"del",act:"del"}]}}},opt_config:{visible:!1,columns:[{type:"input",label:"标签",prop:"label",rules:{required:!0}},{type:"input",label:"键值",prop:"value",rules:{required:!0}},{type:"input",label:"排序",prop:"sort"}],table:{height:"auto",data:[]},operation:{columns:[]}}}},created:function(){},methods:{editOpt:function(t){this.opt_config.visible=!0,this.opt_config.title="字典："+t.type,this.current_row=t,this.opt_config.table.data=Object(a["a"])(t.options)||[]},saveRow:function(t,e){void 0!==e?Object.assign(this.opt_config.table.data[e],t):this.opt_config.table.data.push(t)},save:function(){var t=this;this.current_row.options=this.opt_config.table.data,this.$http.post("/vue-admin-simple/dict/save",this.current_row).then((function(){t.$store.dispatch("app/getDict"),t.opt_config.visible=!1,t.refresh()}))},refresh:function(){this.$refs.page.$refs.table.refresh()}}},l=r,s=i("2877"),c=Object(s["a"])(l,o,n,!1,null,null,null);e["default"]=c.exports}}]);