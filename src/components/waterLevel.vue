<template>
  <!-- fourStar -->

  <div style="display: flex;">
    <div class="box_water" style="margin-left: 10px;">
      <dv-water-level-pond :config="waterLevelConfig1" style="width:90px;height:90px" />
      <div class="title_font">正常比例</div>
    </div>
    <div class="box_water" >
      <dv-water-level-pond :config="waterLevelConfig2" style="width:90px;height:90px" />
      <div class="title_font">代缴费比例</div>
    </div>
    <div class="box_water" >
      <dv-water-level-pond :config="waterLevelConfig3" style="width:90px;height:90px" />
      <div class="title_font">故障比例</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const waterLevelConfig1 = ref();
const waterLevelConfig2 = ref();
const waterLevelConfig3 = ref();

waterLevelConfig1.value = {
  waveNum:1,
  waveHeight:10,
  waveOpacity:0.3,
  formatter: '{value}%',
  shape: 'round',
  fontSize: 10,
  data: [80],

}
waterLevelConfig2.value = {
  waveNum:1,
  waveHeight:10,
  waveOpacity:0.3,
  formatter: '{value}%',
  shape: 'round',
  fontSize: 10,
  data: [20],

}
waterLevelConfig3.value = {
  waveNum:1,
  waveHeight:10,
  waveOpacity:0.3,
  formatter: '{value}%',
  shape: 'round',
  fontSize: 10,
  data: [5],

}
</script>

<style lang="scss" scoped>
.title_font{
  font-size: 18px;
  margin-top: 10px;
  color: #fafafacd;
  margin-left: 8px;
}
.box_water{
  margin-right: 20px;
}
</style>


