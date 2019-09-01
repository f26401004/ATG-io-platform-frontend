<template lang="pug">
  el-row(
    justify="start"
    align="middle"
    class="index_howitworks_root"
  )
    el-col(
      v-bind:offset="2"
      v-bind:span="20"
    )
      el-row(
        type="flex"
        justify="center"
        align="middle"
      )
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 4 }"
          class="howitwork_section_header"
        )
          h2(
            v-scroll-reveal
            style="display: inline-block; text-align: left;"
          ) How it works?
            
      el-row
        el-col(
          v-bind:xs="{ offset: 2, span: 20 }"
          v-bind:sm="{ span: 8 }"
        )
          el-row
            el-col(
              v-bind:span="24"
              v-scroll-reveal
            )
              h2 Step 1: Upload
              p Upload your C++ code to remote server.
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            div( class="howitwork_upload_icon" )
        el-col(
          v-bind:xs="{ offset: 2, span: 20 }"
          v-bind:sm="{ span: 8 }"
        )
          el-row
            el-col(
              v-bind:span="24"
              v-scroll-reveal
            )
              h2 Step 2: Compile
              p Compile your C++ code with remote <br/> server, and check if it qualified with our rule.
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            div( class="howitwork_compile_icon" )
        el-col(
          v-bind:xs="{ offset: 2, span: 20 }"
          v-bind:sm="{ span: 8 }"
        )
          el-row
            el-col(
              v-bind:span="24"
              v-scroll-reveal
            )
              h2 Step 3: Battle
              p Start battling with our bot, and save <br/> your result to remote server.
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            div( class="howitwork_battle_icon" )

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    .index_howitworks_root {
      margin-top: 24px;
      padding: 16px 24px;
      box-sizing: border-box;
    }
  }
  @media screen and (min-width: 768px) {
    .index_howitworks_root {
      padding-bottom: 48px;
    }
    .howitwork_section_header {
      margin-bottom: 48px;
    }
  }
  .howitwork_section_header {
    background-color: rgba(0, 0, 0, 0.09);
  }

  .howitwork_upload_icon, .howitwork_compile_icon, .howitwork_battle_icon {
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    width: 36vh;
    height: 36vh;
    max-width: 360px;
    max-height: 360px;
  }
  .howitwork_upload_icon {
    background-image: url("../../assets/graphics/Upload.svg");
  }

  .howitwork_compile_icon {
    background-image: url("../../assets/graphics/Compile.svg");
  }

  .howitwork_battle_icon {
    background-image: url("../../assets/graphics/Battle.svg");
  }
</style>
