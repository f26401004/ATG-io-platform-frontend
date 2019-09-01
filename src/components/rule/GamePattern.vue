<template lang="pug">
  el-row
    el-col( v-bind:span="24" )
      el-row
        el-col( v-bind:span="24" )
          el-row
            el-col( v-bind:span="24" )
              h1(
                id="game_pattern"
                style="text-align: left;"
              ) <i class="el-icon-menu"/> Game Pattern
          el-row(
            v-bind:gutter="24"
          )
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 6 }"
            )
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                div(
                  v-scroll-reveal
                  class="pattern_move_anime_container"
                ) move gif here
            el-col(
              v-scroll-reveal="{ delay: 100 }"
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 6 }"
            )
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                p( style="text-align: left;" ) Move the diep with arrow keys.
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                div( class="pattern_move_key_container" )
                
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 6 }"
            )
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                div(
                  v-scroll-reveal="{ delay: 200 }"
                  class="pattern_shoot_anime_container"
                ) shoot gif here
            el-col(
              v-scroll-reveal="{ delay: 300 }"
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 6 }"
            )
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                p( style="text-align: left;" ) Click left buuton to shoot bullet.
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                div( class="pattern_shoot_mouse_container" )
</template>

<script>
export default {
  name: 'pattern'  
}
</script>

<style lang="scss" scoped>
  h1 {
    padding: 12px 16px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }
  .pattern_move_anime_container, .pattern_shoot_anime_container {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 80vw;
    max-width: 320px;
    max-height: 320px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 3%;
    font-size: 24px;
  }
  .pattern_move_key_container, .pattern_shoot_mouse_container {
    background-position: 50% 50%;
    background-size: 100%;
    background-repeat: no-repeat;

    width: 100%;
    height: 80vw;
    max-width: 200px;
    max-height: 200px;
  }
  .pattern_move_key_container {
    background-image: url("../../assets/graphics/ArrowKey.png");

  }
  .pattern_shoot_mouse_container {
    background-image: url("../../assets/graphics/Mouse.svg");
  }

</style>