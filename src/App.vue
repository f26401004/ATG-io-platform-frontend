<template lang="pug">
  div( id="app" )
    custom-header
    vue-page-transition( name="overlay-down-full" )
      router-view
    custom-footer
        
</template>

<script>
import GeneralLayout from '@/layouts/General.vue'
import CustomHeader from '@/components/Header.vue'
import CustomFooter from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    GeneralLayout,
    CustomHeader,
    CustomFooter
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

  :root {
    --overlay-bg: linear-gradient(180deg, rgba(64,158,255,1) 0%, rgba(0,212,255,1) 100%) !important;
    --transition-duration: .3s !important;
  }
  .overlay-top, .overlay-bottom, .overlay-left, .overlay-right {
    background: url("./assets/icons/BrainWhiteTransition.svg"), var(--overlay-bg) !important;
    background-position: 50% 50% !important;
    background-size: 18vh, cover !important;
    background-repeat: no-repeat !important;
    z-index: 1999;
  }
  .overlay-top {
    transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1) !important;
  }

  .overlay-bottom {
    transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1) !important;
  }

  .el-dialog__wrapper {
    width: 100vw !important;
    height: 100vh !important;
  }
  .v-modal {
    width: 100vw !important;
    height: 100vh !important;
  }

  html, body {
    position: relative;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Noto Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  .el-main {
    padding: 0 !important;
  }
  
  .brain_icon {
    background-image: url("./assets/icons/BrainWhite.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .el-drawer__header {
    margin: 0 !important;
    padding: 20px !important;
    background-color: #409EFF;
  }
  .el-drawer__close-btn {
    color: white !important;
  }
  .el-drawer__body {
    padding: 20px;
    box-sizing: border-box;
  }
</style>
