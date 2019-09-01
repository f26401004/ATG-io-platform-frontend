<template lang="pug">
  general-layout
    div( slot="main_content" class="competition_page_root" )
      div( class="competition_graphic_container" )
      el-row( class="competition_submit_row" )
        el-col(
          v-bind:offset="5"
          v-bind:span="14"
        )
          submit-form
      
</template>

<script>
import GeneralLayout from '@/layouts/General.vue'
import SubmitForm from '@/components/competition/SubmitForm.vue'

export default {
  components: {
    GeneralLayout,
    SubmitForm
  }
}
</script>

<style lang="scss" scoped>
  .competition_page_root {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 240px);
    padding: 64px 0 0 0;
    box-sizing: border-box;

    overflow: hidden;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: -25%;
      background-image: url("../assets/graphics/Polyline.svg");
      background-position: 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      opacity: 0.36;
      z-index: -1;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 25%;
      background-image: url("../assets/graphics/Polyline.svg");
      background-position: 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      opacity: 0.36;
      transform: scaleX(-1) scaleY(-1);
      z-index: -1;
    }
  }
  .competition_graphic_container {
    background-color: #409EFF;
    mask-image: url("../assets/icons/BrainWhiteTransition.svg");
    mask-position: 50% 50%;
    mask-size: contain;
    mask-repeat: no-repeat;

    width: 36vh;
    height: 36vh;
    max-width: 240px;
    max-height: 240px;
    margin: 64px;
  }
  .competition_submit_row {
    position: relative !important;
    width: 100%;
    margin-bottom: 64px;
    transition: all 0.3s;
  }
</style>