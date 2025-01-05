<template>
  <!--第二个 -->
  <div class="boxnav paim">
    <ul class="h100">
      <li>
        <span>1</span>
        <div class="pmnav">
          <p>空调维修</p>
          <div class="pmbar"><span id="one"></span><i>500</i></div>
        </div>
      </li>
      <li>
        <span>2</span>
        <div class="pmnav">
          <p>电路维修</p>
          <div class="pmbar"><span id="two"></span><i>400</i></div>
        </div>
      </li>
      <li>
        <span>3</span>
        <div class="pmnav">
          <p>照明系统维修</p>
          <div class="pmbar"><span  id="three"></span><i>180</i></div>
        </div>
      </li>
      <li>
        <span>4</span>
        <div class="pmnav">
          <p>门窗维修</p>
          <div class="pmbar"><span  id="four"></span><i>160</i></div>
        </div>
      </li>
      <li>
        <span>5</span>
        <div class="pmnav">
          <p>排水系统维修</p>
          <div class="pmbar"><span  id="five"></span><i>140</i></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style  scoped>
.boxnav {
  height: 290px;
  margin-left: 3px;
  width: 100%;
}


.paim li > span {
  width: 50px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #878787;
  border-radius: 10px;
  margin-right: 15px;
  margin-top:6px;
  font-size: 18px;
}

.paim li:nth-child(1) > span {
  background: #ed405d;
}
.paim li:nth-child(2) > span {
  background: #f78c44;
}
.paim li:nth-child(3) > span {
  background: #49bcf7;
}

.paim li {
  display: flex;
  align-items: center;
  height: 60px;
}

.pmbar {
  position: relative;
  display: flex;
}


.pmbar span {
  background: linear-gradient(to right, #14b6ff, #9cefff);
  display: inline-block;
  vertical-align: middle;
  height: 12px;
  border-radius: 30px;
  margin-top: -3px;
}


.pmbar i {
  line-height: -0px;
  font-style: normal;
  padding-left: 10px;
  color: #49bcf7;
  margin-top: -5px;
}

.pmnav {
  width: 100%;
}


.pmnav p {
  color: #fff;
  opacity: 0.8;
  font-size: 13px;
  padding-bottom: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0px;
}
</style>



<script setup lang="ts">
import { ref, onMounted, toRef } from "vue";

async function initRank() {
  // 获取 div 元素
  var div = document.getElementById("one");
  div.style.width = "100%";

  var div = document.getElementById("two");
  div.style.width = "90%";
  
  var div = document.getElementById("three");
  div.style.width = "80%";

  var div = document.getElementById("four");
  div.style.width = "70%";

  var div = document.getElementById("five");
  div.style.width = "60%";

}

onMounted(async () => {
  await initRank();
});
</script>

