(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f4b744f"],{2958:function(e,t,s){},5369:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",e._g(e._b({staticClass:"draggable-dialog",attrs:{title:e.title,fullscreen:e.fullscreen,top:"60px","close-on-click-modal":!1}},"el-dialog",e.$attrs,!1),e.$listeners),[s("div",{staticClass:"el-icon-full-screen",on:{click:e.fullScreenHandle}}),e._t("default"),s("div",{attrs:{slot:"footer"},slot:"footer"},[e._t("footer")],2)],2)},o=[],r={props:{title:{type:[String],default:""}},data:function(){return{fullscreen:!1,drag:!0,mouseX:0,mouseY:0,isDragging:!1,wrapperX:0,wrapperY:0}},watch:{wrapperY:function(e){this.wrapper.style.top=this.wrapperY+"px"},wrapperX:function(e){this.wrapper.style.left=this.wrapperX+"px"},"$attrs.visible":function(e){e&&(this.wrapperY=0,this.wrapperX=0)}},mounted:function(){this.drag&&(this.header=this.$el.querySelector(".el-dialog__header"),this.wrapper=this.$el.querySelector(".el-dialog"),this.header.style.cursor="move",this.header.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove))},beforeDestroy:function(){this.drag&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))},methods:{fullScreenHandle:function(){this.fullscreen=!this.fullscreen},onMouseDown:function(e){this.isDragging=!0,this.mouseX=e.clientX,this.mouseY=e.clientY,this.wrapperX=parseInt(getComputedStyle(this.wrapper).left)||0,this.wrapperY=parseInt(getComputedStyle(this.wrapper).top)||0},onMouseUp:function(){this.isDragging=!1},onMouseMove:function(e){if(this.isDragging){var t=e.clientX-this.mouseX,s=e.clientY-this.mouseY;this.wrapperX+=t,this.wrapperY+=s,this.mouseX=e.clientX,this.mouseY=e.clientY}}}},n=r,l=(s("f3c9"),s("2877")),u=Object(l["a"])(n,i,o,!1,null,"dc1870e8",null);t["default"]=u.exports},f3c9:function(e,t,s){"use strict";s("2958")}}]);