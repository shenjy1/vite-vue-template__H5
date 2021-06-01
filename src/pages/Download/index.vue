<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-06-01 20:00:49
 * @LastEditTime: 2021-06-01 21:50:06
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /vite-vue-template__H5/src/pages/download/index.vue
-->

<template>
  <div class="page">
    <!-- 内容区域 -->
    <div class="wrap">
      <img src="./images/icon_logo.png" class="icon-70x70" />
      <div class="platform">
        <img
          v-if="state.platform === 'android'"
          src="./images/icon_android.png"
          class="system-type"
        />
        <img
          v-if="state.platform === 'ios'"
          src="./images/icon_ios.png"
          class="system-type"
        />
        <span class="app-name">多多汇宝</span>
      </div>
      <div class="download-button" @click="onDownload">下载安装</div>
      <div class="open-tips" @click="onOpenApp">已安装?立即打开</div>
    </div>
    <!-- 微信环境文案提示 -->
    <img
      :class="`tips ${state.platform !== 'weixin' ? 'show' : ''} ${state.ani}`"
      src="./images/tips.png"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import Validator from "lg-validator";

interface StateProps {
  platform: string;
  ani: string;
}
export default defineComponent({
  setup() {
    const state = reactive<StateProps>({
      platform: "",
      ani: ""
    });

    // methods
    const getDeviceType = () => {
      if (Validator.weixin()) {
        state.platform = "weixin";
      } else if (Validator.ios()) {
        state.platform = "ios";
      } else if (Validator.android()) {
        state.platform = "android";
      }
    };
    // events
    const onDownload = () => {
      // 微信环境
      switch (state.platform) {
        case "ios":
          state.ani = "ani";
          setTimeout(() => {
            state.ani = "";
          }, 1000);
          break;
      }
    };
    const onOpenApp = () => {
      console.log("点击打开app");
    };

    // life-circle
    onMounted(() => {
      getDeviceType();
    });

    return {
      state,
      onDownload,
      onOpenApp,
    };
  },
});
</script>

<style lang="less" scoped>
.page {
  background: #fdc401 url("./images/bg.png") no-repeat top left;
  background-size: contain;
  .wrap {
    padding-bottom: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .platform {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .system-type {
    width: 12px;
    height: 15px;
    margin-right: 5px;
  }
  .app-name {
    font-size: 16px;
    font-weight: 800;
    line-height: 22px;
    color: #ffffff;
  }
  .download-button {
    width: 211px;
    height: 40px;
    background: #ffffff;
    margin-top: 17px;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    border-radius: 22px;
    color: #333333;
    font-size: 15px;
  }
  .open-tips {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    line-height: 21px;
    color: #fb4545;
  }
  .tips {
    display: none;
    width: 160px;
    position: absolute;
    right: 6px;
    top: 0;
    &.show {
      display: block;
    }
    &.ani {
      animation: debounce 1s;
    }
  }
}
</style>

