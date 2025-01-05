
<template>
    <div id="cesiumContainer">
        
</div>
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
                <dv-decoration-11 style="width:480px;height:60px; font-size: 24px; font-weight: bold;color:#fff">赤壁中试谷智能无人测试数字孪生系统</dv-decoration-11>
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
<!--<topheader class="floating-component3"></topheader>
<echars1 class="floating-component1" ></echars1>
<echars2 class="floating-component2" ></echars2>-->
</template>

<script>
import * as Cesium from 'cesium';
import { ref, onMounted, watch } from 'vue';
import echarts1 from '../../components/Echarts1.vue'
import echarts2 from '../../components/Echarts2.vue'
import LineTable from '../../components/lineTable.vue'
import rankNumber from '../../components/rankNumber.vue'
import dataTransmission from '../../components/dataTransmission.vue'
import myLight from '../../components/myLight.vue'
import waterLevel from '../../components/waterLevel.vue'


export default{
    name:'cesium',
    setup(){
        const viewer = ref(null);
    },
  components: {
    echarts1,
    echarts2,
    LineTable,
    rankNumber,
    dataTransmission,
    myLight,
    waterLevel
  },
    async mounted(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MWRiYjJhOS1lNWU0LTQ3YmEtOTg4Ny05NDEzODhiNWRmOWEiLCJpZCI6MjU4NDEwLCJpYXQiOjE3MzMyMjUyODJ9.tniUlZN9Y9O_RBU1gYrkdKERW99u012RglGaBw6DvKo';
        this.viewer = new Cesium.Viewer('cesiumContainer',{
            animation: false, //不要速度控制器
        });
        try{
        let tileset = new Cesium.Cesium3DTileset({
            url: 'http://localhost:8080/tile/tileset.json', // 相对路径
        })
        
        this.viewer.scene.primitives.add(tileset) // 添加到球体
        this.viewer.zoomTo(tileset) //定位过去视角高度
        }catch(error){console.error(error)}
    }
}

</script>
 
<style scoped>
    #cesiumContainer {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        z-index: 0px;
    }
    .floating-component1 {
  position: absolute;
  top: 20px; /* 距离容器顶部20px */
  right: 10px; /* 距离容器右侧20px */
  z-index: 10px;
  /* 其他样式，如宽度、高度、背景色等 */
}
.floating-component3 {
  position: absolute;
  top: 0px; /* 距离容器顶部20px */
  align-items: center; /*放在中间*/ 
  z-index: 10px;
  /* 其他样式，如宽度、高度、背景色等 */
}
.floating-component2 {
  position: absolute;
  top: 20px; /* 距离容器顶部20px */
  left: 10px; /* 距离容器右侧20px */
  z-index: 10px;
  /* 其他样式，如宽度、高度、背景色等 */
}
/* 小居居 */
#info_box:after {
    content: '';
    position: absolute;
    border-width: 10px;
    border-style: solid;
    border-color: rgb(20, 63, 91) transparent transparent transparent;
    top: 190rem;
    left: 140rem;
}

</style>
 
<style>
   .cesium-viewer-bottom {
        display: none;
   }
   .cesium-viewer{
    z-index: 1px;
   }
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
    pointer-events: none;
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