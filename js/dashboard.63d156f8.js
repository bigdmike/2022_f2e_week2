"use strict";(self["webpackChunkf2e_week2"]=self["webpackChunkf2e_week2"]||[]).push([[966],{970:function(t,e,s){s.d(e,{Z:function(){return n}});var a=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",[e("path",{attrs:{d:"M15 18.5L9 12.5L15 6.5",stroke:"CurrentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},i=[],r=s(1001),l={},o=(0,r.Z)(l,a,i,!1,null,null,null),n=o.exports},4999:function(t,e,s){s.d(e,{Z:function(){return n}});var a=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",[e("path",{attrs:{d:"M9 18.5L15 12.5L9 6.5",stroke:"CurrentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},i=[],r=s(1001),l={},o=(0,r.Z)(l,a,i,!1,null,null,null),n=o.exports},2298:function(t,e,s){s.r(e),s.d(e,{default:function(){return mt}});var a=function(){var t=this,e=t._self._c;return e("main",{staticClass:"w-full relative z-10 bg-primary_blue_dark pt-24 min-h-screen flex md:flex-col"},[e("div",{staticClass:"w-full max-w-screen-xl md:flex-row flex-col mx-auto xl:px-0 md:px-5 flex md:items-stretch md:flex-1"},[e("NavTabs",{staticClass:"md:w-1/4 w-full relative z-0",attrs:{tab_list:t.tab_list,active_tab:t.active_tab,task_list:t.task_list},on:{"update-action":function(e){t.active_tab=e}}}),e("TaskList",{attrs:{task_data:t.task_data,show_type:t.show_type},on:{"update-type":function(e){t.show_type=e}}})],1)])},i=[],r=(s(7658),function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"absolute top-0 left-2/3 right-0 bottom-0 z-10 pointer-events-none tab_cover md:hidden block"}),e("div",{staticClass:"lg:pr-14 pr-5 mb-10 md:block hidden"},[e("div",{staticClass:"relative w-full"},[t._m(0),e("button",{staticClass:"block bg-primary_blue_light rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-white py-4 lg:pl-24 pl-20 text-left w-full",on:{click:function(e){return t.$router.push("/prepare_doc")}}},[t._v(" 新增文件 ")])])]),e("div",{ref:"MainTab",staticClass:"w-full scrollbar-hide relative z-0 md:block flex items-stretch md:whitespace-normal whitespace-nowrap md:overflow-x-hidden overflow-x-auto md:pr-0 pr-20"},[e("ol",{staticClass:"md:block flex items-stretch md:mb-10"},[t._l(t.tab_list,(function(s){return e("li",{key:s.title,staticClass:"md:w-full"},["free"==s.type?e("button",{staticClass:"md:p-5 md:h-auto h-full px-5 pt-2 pb-5 md:w-full w-auto flex items-center justify-between text-left md:rounded-l-2xl rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl font-bold md:text-base text-sm transition-colors duration-200 hover:text-primary_blue_light",class:t.active_tab==s.title?"bg-primary_white text-primary_blue":" bg-transparent text-white",on:{click:function(e){return t.$emit("update-action",s.title)}}},[t._v(" "+t._s(s.title)+" "),e("span",{staticClass:"font-any-body md:ml-0 ml-3"},[t._v(t._s(t.GetTabCount(s.title)))])]):e("button",{staticClass:"md:p-5 px-5 pt-2 pb-5 w-full md:text-base text-sm flex items-center text-left rounded-l-2xl font-bold text-primary_white text-opacity-50"},[t._v(" "+t._s(s.title)+" "),t._m(1,!0)])])})),e("li",{staticClass:"md:w-full md:border-t border-primary_blue_light md:pt-5 md:mt-5"},[e("button",{staticClass:"md:p-5 md:h-auto h-full px-5 pt-2 pb-5 md:w-full w-auto flex items-center justify-between text-left md:rounded-l-2xl rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl font-bold md:text-base text-sm transition-colors duration-200 hover:text-primary_blue_light",class:"已封存"==t.active_tab?"bg-primary_white text-primary_blue":" bg-transparent text-white",on:{click:function(e){return t.$emit("update-action","已封存")}}},[t._v(" 已封存 "),e("span",{staticClass:"font-any-body md:ml-0 ml-3"},[t._v(t._s(t.GetTabCount("已封存")))])])]),e("li",{staticClass:"md:w-full"},[e("button",{staticClass:"md:p-5 md:h-auto h-full px-5 pt-2 pb-5 md:w-full w-auto flex items-center justify-between text-left md:rounded-l-2xl rounded-tl-2xl md:rounded-tr-none rounded-tr-2xl font-bold md:text-base text-sm transition-colors duration-200 hover:text-primary_blue_light",class:"垃圾桶"==t.active_tab?"bg-primary_white text-primary_blue":" bg-transparent text-white",on:{click:function(e){return t.$emit("update-action","垃圾桶")}}},[t._v(" 垃圾桶 "),e("span",{staticClass:"font-any-body md:ml-0 ml-3"},[t._v(t._s(t.GetTabCount("垃圾桶")))])])])],2)])])}),l=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"w-14 h-14 rounded-full md:bg-primary_blue_dark bg-primary_blue_light flex items-center justify-center absolute left-4 top-0 transform -translate-y-1/2"},[e("img",{staticClass:"w-6",attrs:{src:"/2022_f2e_week2/img/icon/icon_plus.svg"}})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-xs rounded-full md:ml-4 ml-3 border flex-shrink-0 border-primary_white text-white py-1 font-semibold md:px-2 px-1 flex items-center"},[e("img",{staticClass:"md:w-4 w-3 md:mr-1 block",attrs:{src:"/2022_f2e_week2/img/icon/icon_pro.svg"}}),e("p",{staticClass:"md:block hidden"},[t._v("立即升級")])])}],o={name:"NavTabs",props:{tab_list:{require:!0,type:Array},active_tab:{require:!0,type:String},task_list:{require:!0,type:Array}},data(){return{tab_pos:{top:0,left:0,x:0,y:0}}},methods:{GetTabCount(t){return"已加星號"==t?this.task_list.filter((t=>1==t.favorite)).length:"已封存"==t?this.$store.state.archive_task_list.length:"垃圾桶"==t?this.$store.state.removed_task_list.length:this.task_list.filter((e=>e.status==t)).length},mouseDownHandler(t){this.tab_pos={left:this.$refs.MainTab.scrollLeft,top:this.$refs.MainTab.scrollTop,x:t.clientX,y:t.clientY},this.$refs.MainTab.addEventListener("mousemove",this.mouseMoveHandler),this.$refs.MainTab.addEventListener("mouseup",this.mouseUpHandler)},mouseMoveHandler(t){const e=t.clientX-this.tab_pos.x,s=t.clientY-this.tab_pos.y;this.$refs.MainTab.scrollTop=this.tab_pos.top-s,this.$refs.MainTab.scrollLeft=this.tab_pos.left-e},mouseUpHandler(){this.$refs.MainTab.removeEventListener("mousemove",this.mouseMoveHandler),this.$refs.MainTab.removeEventListener("mouseup",this.mouseUpHandler),this.$refs.MainTab.style.cursor="grab",this.$refs.MainTab.style.removeProperty("user-select")}},mounted(){this.$refs.MainTab.addEventListener("mousedown",this.mouseDownHandler)}},n=o,c=s(1001),d=(0,c.Z)(n,r,l,!1,null,"91713856",null),u=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:w-3/4 w-full flex flex-col relative z-10 lg:p-14 p-7 md:rounded-tl-3xl rounded-tr-3xl bg-primary_white md:flex-auto flex-1"},[e("button",{staticClass:"w-14 h-14 rounded-full transition-colors duration-200 hover:bg-primary_blue bg-primary_blue_light flex items-center justify-center sm:absolute fixed right-10 sm:top-0 sm:bottom-auto bottom-0 z-10 transform -translate-y-1/2 md:hidden",on:{click:function(e){return t.$router.push("/prepare_doc")}}},[e("img",{staticClass:"w-6",attrs:{src:"/2022_f2e_week2/img/icon/icon_plus.svg"}})]),e("div",{staticClass:"pb-4 border-b border-zinc-300 w-full flex items-center justify-between md:mb-0 mb-5"},[t._m(0),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex items-stretch sm:mr-5 mr-2"},[e("button",{staticClass:"p-2 rounded-l-md",class:"grid"==t.show_type?"text-white bg-primary_blue_dark":"text-black bg-white",on:{click:function(e){return t.$emit("update-type","grid")}}},[e("IconGridShow",{staticClass:"w-4 h-4"})],1),e("button",{staticClass:"p-2 rounded-r-md",class:"list"==t.show_type?"text-white bg-primary_blue_dark":"text-black bg-white",on:{click:function(e){return t.$emit("update-type","list")}}},[e("IconListShow",{staticClass:"w-4 h-4"})],1)]),e("button",{staticClass:"p-2 sm:mr-5 mr-0 rounded-md bg-white text-black transition-colors duration-200 hover:bg-primary_blue_dark hover:text-white"},[e("IconRefresh",{staticClass:"w-4 h-4"})],1),e("div",{staticClass:"md:flex hidden items-stretch bg-white py-1 px-1"},[e("button",{staticClass:"text-black text-opacity-20"},[e("IconArrowLeft",{staticClass:"w-6"})],1),e("p",{staticClass:"mx-5 font-any-body font-semibold"},[t._v("01/01")]),e("button",{staticClass:"text-black text-opacity-20"},[e("IconArrowRight",{staticClass:"w-6"})],1)])])]),e("div",{staticClass:"w-full flex justify-end md:hidden"},[e("div",{staticClass:"flex items-stretch py-1 px-1"},[e("button",{staticClass:"text-black text-opacity-20"},[e("IconArrowLeft",{staticClass:"w-6"})],1),e("p",{staticClass:"mx-5 font-any-body font-semibold"},[t._v("01/01")]),e("button",{staticClass:"text-black text-opacity-20"},[e("IconArrowRight",{staticClass:"w-6"})],1)])]),e("div",{staticClass:"w-full flex-1 relative pt-10"},[t.task_data.length<=0?e("div",{staticClass:"absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 text-center"},[e("img",{staticClass:"w-28 mx-auto block mb-5",attrs:{src:"/2022_f2e_week2/img/icon/icon_empty_file.svg"}}),e("p",{staticClass:"font-bold text-primary_black opacity-40"},[t._v(" 目前尚無待簽署的文件 ")])]):e("div",["grid"==t.show_type?e("ol",{staticClass:"-mx-3 flex items-stretch flex-wrap"},t._l(t.task_data,(function(t,s){return e("li",{key:`task_${s}`,staticClass:"px-3 xl:w-1/3 sm:w-1/2 w-full mb-6"},[e("TaskCard",{attrs:{task_data:t,task_index:s}})],1)})),0):t._e(),"list"==t.show_type?e("ol",t._l(t.task_data,(function(t,s){return e("li",{key:`task_${s}`,staticClass:"px-3 w-full mb-6"},[e("TaskListCard",{attrs:{task_data:t,task_index:s}})],1)})),0):t._e()])])])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative w-44"},[e("img",{staticClass:"absolute top-1/2 right-5 transform -translate-y-1/2 z-10 pointer-events-none",attrs:{src:"/2022_f2e_week2/img/icon/icon_arrow_down.svg"}}),e("select",{staticClass:"relative z-0 appearance-none px-5 py-2 bg-white rounded-lg w-full font-bold"},[e("option",[t._v("全部類別")])])])}],_=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"1.25",y:"1.25",width:"5.20968",height:"5.20968",stroke:"CurrentColor","stroke-width":"1.5"}}),e("rect",{attrs:{x:"1.25",y:"10.5403",width:"5.20968",height:"5.20968",stroke:"CurrentColor","stroke-width":"1.5"}}),e("rect",{attrs:{x:"10.5405",y:"1.25",width:"5.20968",height:"5.20968",stroke:"CurrentColor","stroke-width":"1.5"}}),e("rect",{attrs:{x:"10.5405",y:"10.5403",width:"5.20968",height:"5.20968",stroke:"CurrentColor","stroke-width":"1.5"}})])},h=[],b={},f=(0,c.Z)(b,_,h,!1,null,null,null),x=f.exports,k=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"21",height:"15",viewBox:"0 0 21 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.69971 1.5H20.0997",stroke:"CurrentColor","stroke-width":"1.5"}}),e("path",{attrs:{d:"M5.69971 7.5H20.0997",stroke:"CurrentColor","stroke-width":"1.5"}}),e("path",{attrs:{d:"M5.69971 13.5H20.0997",stroke:"CurrentColor","stroke-width":"1.5"}}),e("path",{attrs:{d:"M0.899902 1.5H3.2999",stroke:"CurrentColor","stroke-width":"1.5"}}),e("path",{attrs:{d:"M0.899902 7.5H3.2999",stroke:"CurrentColor","stroke-width":"1.5"}}),e("path",{attrs:{d:"M0.899902 13.5H3.2999",stroke:"CurrentColor","stroke-width":"1.5"}})])},w=[],v={},y=(0,c.Z)(v,k,w,!1,null,null,null),g=y.exports,C=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M17.5 2.66187V7.85129H12.3105",stroke:"CurrentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M15.1141 10.8341C14.608 12.2666 13.65 13.4959 12.3845 14.3365C11.119 15.1772 9.6146 15.5839 8.09792 15.4951C6.58123 15.4064 5.13447 14.8271 3.97565 13.8446C2.81682 12.8621 2.00872 11.5296 1.67311 10.0478C1.3375 8.56608 1.49257 7.0154 2.11494 5.62945C2.73732 4.2435 3.79329 3.09737 5.12373 2.36379C6.45416 1.6302 7.98698 1.34889 9.4912 1.56225C10.9954 1.77561 12.3896 2.47208 13.4635 3.54672L17.0683 6.94129",stroke:"CurrentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])},D=[],S={},T=(0,c.Z)(S,C,D,!1,null,null,null),M=T.exports,$=s(970),O=s(4999),L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col p-5 h-full bg-white rounded-xl relative"},[e("RenameDialog",{ref:"RenameDialog",on:{"update-action":t.RenameTask}}),e("div",{staticClass:"flex items-center absolute top-5 right-5 z-10"},[e("button",{staticClass:"mr-3",class:t.task_data.favorite?"text-yellow-300":"text-disable_gray",on:{click:t.TriggerFavorite}},[e("IconStar")],1),e("button",{ref:"MoreBtn",staticClass:"text-disable_gray relative"},[e("IconMore"),e("ol",{ref:"Menu",staticClass:"absolute right-0 top-full w-[200px] bg-white text-sm rounded-md drop-shadow-xl",class:t.menu_open?"block":"hidden"},[e("li",{staticClass:"border-b border-zinc-300"},[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.OpenRenameDialog}},[t._v(" 重新命名 ")])]),e("li",{staticClass:"border-b border-zinc-300"},[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.DownloadFile}},[t._v(" 下載檔案 ")])]),e("li",{staticClass:"border-b border-zinc-300"},[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.ArchiveData}},[t._v(" 封存 ")])]),e("li",[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.RemoveData}},[t._v(" 移至垃圾桶 ")])])])],1)]),e("router-link",{staticClass:"flex pb-5 border-b border-zinc-300 relative z-0 mb-5 flex-1",attrs:{to:`/sign_and_send?type=task&id=${t.task_data.task_id}`}},[e("div",{staticClass:"w-14 mr-5"},[e("img",{staticClass:"w-full block border border-zinc-300",attrs:{src:t.task_data.cover_image}})]),e("div",{staticClass:"flex-1"},[e("div",{staticClass:"flex items-center justify-between mb-2 pr-12"},["已完成"!=t.task_data.status?e("p",{staticClass:"text-xs font-medium",class:t.days_between<=3?"text-primary_red":""},[t._v(" 到期日 "),t.days_between<=3?e("span",[t._v(t._s(`${t.GetDateText(t.task_data.end_date)}天後`))]):e("span",[t._v(t._s(t.task_data.end_date))])]):e("p",{staticClass:"text-xs font-medium text-green-500"},[t._v(" 完成日期 "+t._s(t.task_data.end_date)+" ")])]),e("h4",{staticClass:"truncate text-xl font-bold mb-1"},[t._v(" "+t._s(t.task_data.title)+" ")]),e("p",{staticClass:"text-xs font-medium text-primary_black opacity-40 font-any-body"},[t._v(" "+t._s(t.task_data.created_date)+" ")])])]),e("div",[e("div",{staticClass:"flex items-center justify-between mb-2"},[e("p",{staticClass:"text-xs font-bold text-primary_black opacity-40"},[t._v("已傳送")]),e("p",{staticClass:"text-xs font-bold",class:t.status_colors[t.GetStatus(t.task_data.status)]},[t._v(" "+t._s(t.GetStatus(t.task_data.status))+" ")])]),t._m(0),t._m(1)])],1)},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center mb-2"},[e("span",{staticClass:"flex items-center justify-center w-10 h-10 rounded-full text-2xl font-bold text-white bg-primary_blue_light"},[t._v(" F ")]),e("span",{staticClass:"flex-1 h-[1.5px] bg-primary_blue"}),e("span",{staticClass:"flex items-center justify-center w-10 h-10 rounded-full text-2xl font-bold text-white bg-primary_blue_light"},[t._v(" F ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-between"},[e("p",{staticClass:"text-sm w-10 text-center font-bold font-any-body text-primary_black opacity-40 mb-3"},[t._v(" Me ")]),e("p",{staticClass:"text-sm w-10 text-center font-bold font-any-body text-primary_black mb-3"},[t._v(" Me ")])])}],J=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M7.5 0.5L9.48378 5.26957L14.6329 5.68237L10.7098 9.04293L11.9084 14.0676L7.5 11.375L3.09161 14.0676L4.29018 9.04293L0.367076 5.68237L5.51622 5.26957L7.5 0.5Z",fill:"CurrentColor"}})])},R=[],j={},z=(0,c.Z)(j,J,R,!1,null,null,null),I=z.exports,A=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"3.5",cy:"10",r:"1.75",fill:"CurrentColor"}}),e("circle",{attrs:{cx:"10",cy:"10",r:"1.75",fill:"CurrentColor"}}),e("circle",{attrs:{cx:"16.5",cy:"10",r:"1.75",fill:"CurrentColor"}})])},B=[],G={},Z=(0,c.Z)(G,A,B,!1,null,null,null),E=Z.exports,H=function(){var t=this,e=t._self._c;return e("div",{ref:"MainContent",staticClass:"fixed top-0 left-full w-screen bottom-0 z-30 flex items-center justify-center"},[e("div",{staticClass:"w-[480px] max-w-full p-10 rounded-3xl bg-white relative z-10 text-center",attrs:{"data-dialog-box":""}},[e("button",{staticClass:"absolute top-5 left-5 z-10 p-2",on:{click:t.Close}},[e("img",{staticClass:"w-3 h-3",attrs:{src:"/2022_f2e_week2/img/icon/icon_close.svg"}})]),e("h4",{staticClass:"text-2xl font-bold mb-5 text-center"},[t._v("重新命名文件")]),e("div",{staticClass:"w-full mb-5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"py-3 px-5 border border-black rounded-md w-full",attrs:{type:"text",placeholder:"請輸入文件標題"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t.GetError("title")?e("p",{staticClass:"text-xs text-primary_red"},[t._v(" 請輸入文件標題 ")]):t._e()]),e("div",{staticClass:"flex items-center justify-center"},[e("button",{staticClass:"px-4 py-2 mr-2 text-sm rounded-full bg-primary_blue text-white transition-colors duration-200 hover:bg-primary_blue_light",on:{click:t.Validate}},[t._v(" 儲存 ")])])]),e("div",{staticClass:"absolute top-0 left-0 right-0 bottom-0 z-0 bg-primary_white bg-opacity-80",attrs:{"data-dialog-bg":""}})])},F=[],q=s(8901),U={name:"RenameDialog",data(){return{dialog_animation:null,status:!1,title:"",errors:[]}},methods:{Validate(){this.errors=[],""==this.title&&this.errors.push("title"),this.errors.length<=0&&(this.$emit("update-action",this.title),this.Close())},GetError(t){return-1!=this.errors.indexOf(t)},Open(t){this.title=t,this.status=!0},Close(){this.status=!1}},watch:{status(){this.status?this.dialog_animation.open():this.dialog_animation.close()}},mounted(){this.dialog_animation=new q.L(this.$refs.MainContent)}},P=U,V=(0,c.Z)(P,H,F,!1,null,null,null),Y=V.exports,X={name:"TaskCard",components:{IconStar:I,IconMore:E,RenameDialog:Y},props:{task_data:{require:!0,type:Object},task_index:{require:!0,type:Number}},data(){return{status_colors:{"已完成":"text-green-500","已取消":"text-red-500","處理中":"text-primary_blue"},menu_open:!1}},methods:{OpenRenameDialog(){this.$refs.RenameDialog.Open(this.task_data.title)},RenameTask(t){let e=JSON.parse(JSON.stringify(this.task_data));e.title=t,this.UpdateData(e)},GetStatus(t){return"已完成"==t?"已完成":"已取消"==t?"已取消":"處理中"},GetDateText(t){let e=Math.abs(new Date(t)-new Date),s=e/864e5;return Math.ceil(s)},TriggerFavorite(){let t=JSON.parse(JSON.stringify(this.task_data));t.favorite=!t.favorite,this.UpdateData(t)},UpdateData(t){let e=JSON.parse(JSON.stringify(this.task_list));e.forEach(((s,a)=>{s.task_id==t.task_id&&(e[a]=t)})),this.$store.commit("SetTaskData",e)},StopBubble(t){t&&t.stopPropagatioin?t.stopPropagatioin():window.event.cancelBubble=!0},DownloadFile(){var t=document.createElement("a");t.setAttribute("href",window.location.origin+this.task_data.file),t.setAttribute("download",this.task_data.title+".pdf"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},ArchiveData(){const t=JSON.parse(JSON.stringify(this.task_data));this.$store.commit("SetArchiveTaskData",t);let e=JSON.parse(JSON.stringify(this.task_list));e.forEach(((t,s)=>{t.task_id==this.task_data.task_id&&e.splice(s,1)})),this.$store.commit("SetTaskData",e),this.menu_open=!1},RemoveData(){const t=JSON.parse(JSON.stringify(this.task_data));this.$store.commit("SetRemoveTaskData",t);let e=JSON.parse(JSON.stringify(this.task_list));e.forEach(((t,s)=>{t.task_id==this.task_data.task_id&&e.splice(s,1)})),this.$store.commit("SetTaskData",e),this.menu_open=!1}},mounted(){this.$refs.MoreBtn.onclick=t=>{this.menu_open=!0,this.StopBubble(t),document.onclick=()=>{this.menu_open=!1,document.onclick=null}},this.$refs.Menu.onclick=t=>{this.StopBubble(t)}},computed:{task_list(){return this.$store.state.task_list},days_between(){let t=Math.abs(new Date(this.task_data.end_date)-new Date),e=t/864e5;return Math.ceil(e)}},filters:{status(t){return"已完成"==t?"已完成":"已取消"==t?"已取消":"處理中"}}},K=X,Q=(0,c.Z)(K,L,N,!1,null,null,null),W=Q.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5 bg-white rounded-xl relative"},[e("RenameDialog",{ref:"RenameDialog",on:{"update-action":t.RenameTask}}),e("div",{staticClass:"flex items-center justify-end"},[e("div",{staticClass:"flex items-center"},[e("button",{staticClass:"mr-3",class:t.task_data.favorite?"text-yellow-300":"text-disable_gray",on:{click:t.TriggerFavorite}},[e("IconStar")],1),e("button",{ref:"MoreBtn",staticClass:"text-disable_gray relative"},[e("IconMore"),e("ol",{ref:"Menu",staticClass:"absolute right-0 top-full w-[200px] bg-white text-sm rounded-md drop-shadow-xl",class:t.menu_open?"block":"hidden"},[e("li",{staticClass:"border-b border-zinc-300"},[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.OpenRenameDialog}},[t._v(" 重新命名 ")])]),e("li",{staticClass:"border-b border-zinc-300"},[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.DownloadFile}},[t._v(" 下載檔案 ")])]),e("li",{staticClass:"border-b border-zinc-300"},[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.ArchiveData}},[t._v(" 封存 ")])]),e("li",[e("button",{staticClass:"block w-full text-left text-primary_black text-opacity-60 px-4 py-2 transition-colors duration-200 hover:text-primary_blue",on:{click:t.RemoveData}},[t._v(" 移至垃圾桶 ")])])])],1)])]),e("div",{staticClass:"flex items-start justify-between pt-4"},[e("router-link",{staticClass:"relative z-0",attrs:{to:`/sign_and_send?type=task&id=${t.task_data.task_id}`}},[e("h4",{staticClass:"truncate text-xl font-bold mb-1"},[t._v(" "+t._s(t.task_data.title)+" ")]),e("div",{staticClass:"flex-1"},[e("div",{staticClass:"flex items-center justify-between mb-2 pr-12"},["已完成"!=t.task_data.status?e("p",{staticClass:"text-xs font-medium",class:t.days_between<=3?"text-primary_red":""},[t._v(" 到期日 "),t.days_between<=3?e("span",[t._v(t._s(`${t.GetDateText(t.task_data.end_date)}天後`))]):e("span",[t._v(t._s(t.task_data.end_date))])]):e("p",{staticClass:"text-xs font-medium text-green-500"},[t._v(" 完成日期 "+t._s(t.task_data.end_date)+" ")])]),e("p",{staticClass:"text-xs font-medium text-primary_black opacity-40 font-any-body"},[t._v(" "+t._s(t.task_data.created_date)+" ")])])]),e("div",{staticClass:"w-1/3"},[e("div",{staticClass:"flex items-center justify-between mb-2"},[e("p",{staticClass:"text-xs font-bold text-primary_black opacity-40"},[t._v("已傳送")]),e("p",{staticClass:"text-xs font-bold",class:t.status_colors[t.GetStatus(t.task_data.status)]},[t._v(" "+t._s(t.GetStatus(t.task_data.status))+" ")])]),t._m(0),t._m(1)])],1)],1)},et=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center mb-2"},[e("span",{staticClass:"flex items-center justify-center w-10 h-10 rounded-full text-2xl font-bold text-white bg-primary_blue_light"},[t._v(" F ")]),e("span",{staticClass:"flex-1 h-[1.5px] bg-primary_blue"}),e("span",{staticClass:"flex items-center justify-center w-10 h-10 rounded-full text-2xl font-bold text-white bg-primary_blue_light"},[t._v(" F ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-between"},[e("p",{staticClass:"text-sm w-10 text-center font-bold font-any-body text-primary_black opacity-40 mb-3"},[t._v(" Me ")]),e("p",{staticClass:"text-sm w-10 text-center font-bold font-any-body text-primary_black mb-3"},[t._v(" Me ")])])}],st={name:"TaskCard",components:{IconStar:I,IconMore:E,RenameDialog:Y},props:{task_data:{require:!0,type:Object},task_index:{require:!0,type:Number}},data(){return{status_colors:{"已完成":"text-green-500","已取消":"text-red-500","處理中":"text-primary_blue"},menu_open:!1}},methods:{OpenRenameDialog(){this.$refs.RenameDialog.Open(this.task_data.title)},RenameTask(t){let e=JSON.parse(JSON.stringify(this.task_data));e.title=t,this.UpdateData(e)},GetStatus(t){return"已完成"==t?"已完成":"已取消"==t?"已取消":"處理中"},GetDateText(t){let e=Math.abs(new Date(t)-new Date),s=e/864e5;return Math.ceil(s)},TriggerFavorite(){let t=JSON.parse(JSON.stringify(this.task_data));t.favorite=!t.favorite,this.UpdateData(t)},UpdateData(t){let e=JSON.parse(JSON.stringify(this.task_list));e.forEach(((s,a)=>{s.task_id==t.task_id&&(e[a]=t)})),this.$store.commit("SetTaskData",e)},StopBubble(t){t&&t.stopPropagatioin?t.stopPropagatioin():window.event.cancelBubble=!0},DownloadFile(){var t=document.createElement("a");t.setAttribute("href",window.location.origin+this.task_data.file),t.setAttribute("download",this.task_data.title+".pdf"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},ArchiveData(){const t=JSON.parse(JSON.stringify(this.task_data));this.$store.commit("SetArchiveTaskData",t);let e=JSON.parse(JSON.stringify(this.task_list));e.forEach(((t,s)=>{t.task_id==this.task_data.task_id&&e.splice(s,1)})),this.$store.commit("SetTaskData",e),this.menu_open=!1},RemoveData(){const t=JSON.parse(JSON.stringify(this.task_data));this.$store.commit("SetRemoveTaskData",t);let e=JSON.parse(JSON.stringify(this.task_list));e.forEach(((t,s)=>{t.task_id==this.task_data.task_id&&e.splice(s,1)})),this.$store.commit("SetTaskData",e),this.menu_open=!1}},mounted(){this.$refs.MoreBtn.onclick=t=>{this.menu_open=!0,this.StopBubble(t),document.onclick=()=>{this.menu_open=!1,document.onclick=null}},this.$refs.Menu.onclick=t=>{this.StopBubble(t)}},computed:{task_list(){return this.$store.state.task_list},days_between(){let t=Math.abs(new Date(this.task_data.end_date)-new Date),e=t/864e5;return Math.ceil(e)}},filters:{status(t){return"已完成"==t?"已完成":"已取消"==t?"已取消":"處理中"}}},at=st,it=(0,c.Z)(at,tt,et,!1,null,null,null),rt=it.exports,lt={name:"TaskList",props:{task_data:{require:!0,type:Array},show_type:{require:!0,type:String}},components:{IconGridShow:x,IconListShow:g,IconRefresh:M,IconArrowLeft:$.Z,IconArrowRight:O.Z,TaskCard:W,TaskListCard:rt},methods:{}},ot=lt,nt=(0,c.Z)(ot,p,m,!1,null,null,null),ct=nt.exports,dt={name:"DashboardView",components:{NavTabs:u,TaskList:ct},data(){return{active_tab:"待自己簽署",tab_list:[{title:"待自己簽署",type:"free"},{title:"待他人簽署",type:"pro"},{title:"已加星號",type:"free"},{title:"已完成",type:"free"},{title:"已取消",type:"free"}],show_type:"grid"}},methods:{InitTaskList(){let t=JSON.parse(JSON.stringify(this.task_list));t[0].end_date=this.getLaterDate(7),t[1].end_date=this.getLaterDate(2),t[2].end_date=this.getLaterDate(1),this.$store.commit("SetTaskData",t)},getLaterDate(t){let e=+new Date;10==e.toString().length&&(e*=1e3);const s=+new Date(Number(e)),a=864e5,i=t*a+s,r=new Date(i),l=t=>t<10?t="0"+t:t,o=l(r.getMonth()+1),n=l(r.getDate()),c=`${r.getFullYear()}/${o}/${n}`;return c}},computed:{task_list(){return this.$store.state.task_list},task_data(){return"已加星號"==this.active_tab?this.task_list.filter((t=>1==t.favorite)):"已封存"==this.active_tab?this.$store.state.archive_task_list:"垃圾桶"==this.active_tab?this.$store.state.removed_task_list:this.task_list.filter((t=>t.status==this.active_tab))}},created(){this.InitTaskList()}},ut=dt,pt=(0,c.Z)(ut,a,i,!1,null,null,null),mt=pt.exports}}]);
//# sourceMappingURL=dashboard.63d156f8.js.map