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
                <dv-decoration-11 style="width:480px;height:60px; font-size: 24px; font-weight: bold;color:#fff"></dv-decoration-11>
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
          <div style="flex: 0 1 25%; z-index: 2;position: relative;">
            <div style="width:100%; height:50%; ">
              <dv-border-box-1 style="z-index: 4">
                <echarts1 style="width:100%;height:109%;top:20px;right:1px;z-index: 5"></echarts1>
              </dv-border-box-1>
            </div>
            <div style="width:100%; height:50%; ">
              <dv-border-box-13>
     <dataTransmission style="margin-top: 27px;"></dataTransmission>
              </dv-border-box-13>
            </div>
          </div>
          <!-- 中间内容 -->
          <div style="display: flex; justify-content: center; align-items: center; height: 90vh; flex: 0 1 50%; z-index: 0;">
  <div style="width: 100%; height: 100%;overflow: hidden;">
    <dv-border-box-6 :color="['blue','green']">
      <Cesium style="max-height: 100%;"></Cesium>
    </dv-border-box-6>
  </div>
</div>

          <!-- 右边内容 -->
          <div style="flex: 0 1 25%;z-index: 100px; ">
            <div style="width:100%; height:40%;">
              <dv-border-box-1>
                <echarts2 style="width:100%;height:109%;top:20px;right:1px;z-index: 5"></echarts2>
              </dv-border-box-1>
            </div>
            <div style="width:100%; height:60%; ">
              <dv-border-box-13>
                 <div
                      style="
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        width: 100%;
                        letter-spacing: 2px;
                        text-align: center;
                        margin-left: 40px;
                      "
                    >
                      <waterLevel></waterLevel>
                      <myLight></myLight>
                    </div>
              </dv-border-box-13>
            </div>
          </div>
        </div>
        
        <!-------------------------- 底下内容 --------------------------->
        <div class="module_box" style="height:30vh; ">
          <div style="flex: 0 1 30%; ">
            <dv-border-box-9>
               <div style="
                        padding: 10px;
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        width: 100%;
                      ">
              <rankNumber></rankNumber></div>
            </dv-border-box-9>
          </div>
          <div style="flex: 0 1 40%; ">
            <dv-border-box-10>
              <LineTable></LineTable>
            </dv-border-box-10>
          </div>
          <div style="flex: 0 1 30%; ">
            <dv-border-box-9>
               待后续开发
            </dv-border-box-9>
          </div>
        </div>
      </dv-full-screen-container>
      <!-- 全屏容器 -->
    </div>
    <!-- 整个视窗 -->
  </template>
<script>
import { ref } from 'vue'
import echarts1 from '../components/Echarts1.vue'
import echarts2 from '../components/Echarts2.vue'
import Cesium from './Cesium/cesium.vue'
import LineTable from '../components/lineTable.vue'
import rankNumber from '../components/rankNumber.vue'
import dataTransmission from '../components/dataTransmission.vue'
import myLight from '../components/myLight.vue'
import waterLevel from '../components/waterLevel.vue'

export default {
  name: 'App',
  components: {
    echarts1,
    Cesium,
    echarts2,
    LineTable,
    rankNumber,
    dataTransmission,
    myLight,
    waterLevel
  }
}

</script>

  <style>
* {
    margin: 0;
    padding: 0;
}
    /* 主体 */
.content {
    color: #fff;
    background: #000;
    width: 100vw;
    height: 100vh;
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