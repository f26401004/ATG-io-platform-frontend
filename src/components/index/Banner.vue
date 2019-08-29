<template lang="pug">
  el-row(
    type="flex"
    justify="start"
    align="middle"
    class="index_banner_root"
  )
    el-col( v-bind:span="24" )
      el-row(
        type="flex"
        justify="start"
        align="middle"
        class="hidden-sm-and-up"
      )
        el-col( v-bind:span="24" )
          el-row
            el-col( v-bind:span="24" )
              h1(
                style="font-size: 48px; font-weight: 500; margin: 24px 0 0 0;"
                class="focus_animation_title"
                v-scroll-reveal="{ distance: '16px' }"
              ) ATG.io
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col(
              v-bind:span="24"
              class="banner_graphic_container"
              v-scroll-reveal
            )
          el-row
            el-col(
              v-bind:offset="2"
              v-bind:span="20"
            )
              p(
                style="font-size: 24px; font-weight: 200; text-align: left;"
                v-scroll-reveal="{ delay: 100, distance: '16px' }"
              ) Play an I/O game with smart AI.
              p(
                style="font-size: 16px; font-weight: 200; text-align: left;"
                v-scroll-reveal="{ delay: 200, distance: '16px' }"
              ) use custom C++ code to control one bot and battle with our AI bot!
              span( v-scroll-reveal="{ delay: 300, distance: '16px' }" )
                router-link(
                  tag="span"
                  to="/rule"
                )
                  el-button(
                    type="primary"
                  ) Check Rule
      el-row(
        type="flex"
        justify="start"
        align="middle"
        class="hidden-xs-only"
      )
        el-col(
          v-bind:offset="4"
          v-bind:span="6"
          style="text-align: left;"
        )
          h1(
            style="font-size: 48px; font-weight: 500;"
            class="focus_animation_title"
            v-scroll-reveal="{ distance: '16px' }"
          ) ATG.io
          p(
            style="font-size: 24px; font-weight: 200;"
            v-scroll-reveal="{ delay: 100, distance: '16px' }"
          ) Play an I/O game with smart AI.
          p(
            style="font-size: 16px; font-weight: 200;"
            v-scroll-reveal="{ delay: 200, distance: '16px' }"
          ) use custom C++ code to control one bot and battle with our AI bot!
          span( v-scroll-reveal="{ delay: 300, distance: '16px' }" )
            router-link(
              tag="span"
              to="/rule"
            )
              el-button(
                type="primary"
              ) Check Rule
        el-col(
          v-bind:offset="4"
          v-bind:span="6"
          class="banner_graphic_container"
          v-scroll-reveal
        )
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes focus-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.index_banner_root {
  width: 100%;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../../assets/graphics/Polyline.svg");
    background-position: -20% 0%;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.54;
    box-shadow: 0 48px 48px -24px white inset, 0 -48px 48px -24px white inset;
    z-index: -1;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../../assets/graphics/Polyline.svg");
    background-position: -20% 0%;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.54;
    box-shadow: 0 48px 48px -24px white inset, 0 -48px 48px -24px white inset;
    transform: scaleX(-1) scaleY(-1);
    z-index: -1;
  }
}
.banner_graphic_container {
  width: 90vw;
  height: 90vw;
  max-width: 480px;
  max-height: 480px;
  background-image: url("../../assets/graphics/Banner.svg");
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.focus_animation_title {
  position: relative;
}
.focus_animation_title:after {
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  background-color: #2c3e50;

  margin-left: 16px;
  animation: focus-animation 0.6s linear infinite alternate;
}
</style>
