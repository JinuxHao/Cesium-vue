<!-- 模板1 -->
<template>
    <!-- 模板1 -->
     <!-- 整个视窗 -->
     <div class="content bg">
       <!-- 全屏容器 -->
       <dv-full-screen-container>
   
         <!------------------------------ 标题 ------------------------------>
         <div class="module_box" style="height: 7vh;">
           <div style="flex:0 1 30%;">
             <dv-decoration-3 style="width:100%;height:30px;" />
             <dv-decoration-12 style="width:100%;height:5px;" />
           </div>
           <div style="flex:0 1 40%;">
             <div style="display: flex;width: 100%;">
                 <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
                 <dv-decoration-11 style="width:480px;height:60px; font-size: 24px; font-weight: bold;color:#0a0a77">基于Cesium的武汉大学宿舍管理系统</dv-decoration-11>
                 <dv-decoration-8 style="width:300px;height:50px;" />
             </div>
           </div>
           <div style="flex:0 1 30%;">
             <dv-decoration-3 style="width:100%;height:30px;" />
             <dv-decoration-12 style="width:100%;height:5px;" />
           </div>
         </div>
   
         <!-------------------------- 中间内容 --------------------------->
         <div class="module_box" style="height:60vh; ">
           <!-- 左边内容 -->
           <div style="flex: 0 1 25%; ">
             <div style="width:100%; height:50%; ">
               <dv-border-box-1>
                 
               </dv-border-box-1>
             </div>
             <div style="width:100%; height:50%; ">
               <dv-border-box-13>
                 
               </dv-border-box-13>
             </div>
           </div>
           <!-- 中间内容 -->
          <!-- <div style="flex: 0 1 50%; ">
             <div style="width:100%; height:100%;">
               <dv-border-box-6 :color="['blue','green']">
                 
               </dv-border-box-6>
             </div>
           </div>-->
           <!-- 右边内容 -->
           <div style="flex: 0 1 25%; ">
             <div style="width:100%; height:40%;">
               <dv-border-box-1>
                 右边第一个图
               </dv-border-box-1>
             </div>
             <div style="width:100%; height:60%; ">
               <dv-border-box-13>
                 右边第二个图
               </dv-border-box-13>
             </div>
           </div>
         </div>
         
         <!-------------------------- 底下内容 --------------------------->
         <div class="module_box" style="height:30vh; ">
           <div style="flex: 0 1 30%; ">
             <dv-border-box-9>
               左边内容
             </dv-border-box-9>
           </div>
           <div style="flex: 0 1 40%; ">
             <dv-border-box-10>
               中间内容
             </dv-border-box-10>
           </div>
           <div style="flex: 0 1 30%; ">
             <dv-border-box-9>
               右边内容
             </dv-border-box-9>
           </div>
         </div>
       </dv-full-screen-container>
       <!-- 全屏容器 -->
     </div>
     <!-- 整个视窗 -->
   </template>
   <style>
 * {
     margin: 0;
     padding: 0;
 }
     /* 主体 */
 .content {
     color: #0a0a77;
     background: #000;
     width: 100vw;
     height: 100vh;
 }
 .bg {
     background: url(./../css/bg2.gif) no-repeat center center;
     background-size: cover;
 }
 .module_box {
     display: flex;
     justify-content: space-between;
     margin: 0px;
 }
 .border-box-content {
     display: flex;
     justify-content: center;
     align-items: center;
 }
  .full-screen-container {
     display: flex;
     width: 100%; 
     height: 100%; 
     position: absolute;
 } 
 </style>