<template lang="pug">
  el-row(
    type="flex"
    justify="start"
    align="middle"
    class="index_feature_root"
  )
    el-col(
      v-bind:offset="2"
      v-bind:span="20"
    )
      el-row(
        justify="start"
        align="middle"
        v-bind:gutter="48"
      )
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 8 }"
          v-scroll-reveal
          v-bind:style="{ marginTop: featureMargin }"
        )
          div( class="feature_border_container" )
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col(v-bind:span="24" )
                div( class="feature_c_plus_icon" )
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="24" )
                h2 Friendly To C++ Developer
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="16" )
                p( style="text-align: left;" ) Use C++ code to control the bot. <br> Compile with remote compiler to check if qualified.
                p( style="text-align: left;" ) Click <el-link href="/rule#competition_rules">here</el-link> to confirm all rules before uploading the code.
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 8 }"
          v-scroll-reveal="{ delay: 100 }"
        )
          div( class="feature_border_container" )
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="24" )
                div( class="feature_rank_icon" )
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="24" )
                h2 Score Ranking
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="16" )
                p( style="text-align: left;" ) Record all score at the end of the battle, ranking with all other competitors.
                p( style="text-align: left;" ) Click <el-link href="/rank">here</el-link> to browse all battle ranking.
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 8 }"
          v-scroll-reveal="{ delay: 200 }"
        )
          div( class="feature_border_container" )
            el-row(
              type="flex"
              justify="center"  
              align="middle"
            )
              el-col( v-bind:span="24" )
                div( class="feature_ai_icon" )
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="24" )
                h2 Learning Simultaneously
            el-row(
              type="flex"
              justify="center"
              align="middle"
            )
              el-col( v-bind:span="16" )
                p( style="text-align: left;" ) Learning while having a battle with other competitor, and the bot will be smartter after each competition.
                p( style="text-align: left;" ) Click here to get detail information.
</template>

<script>
export default {
  computed: {
    featureMargin: function () {
      return document.body.clientWidth < 768 ? '32px' : '0';
    }
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    .index_feature_root {
      background-color: rgba(0, 0, 0, 0.09);
    }
    .feature_border_container {
      margin-bottom: 36px;
    }
  }
  @media screen and (min-width: 768px) {
    .index_feature_root {
      background-color: rgba(0, 0, 0, 0.09);
    }
    .feature_border_container {
      height: 520px;
      margin: 48px 0;
    }
  }
  .feature_section_header {
    background-color: rgba(64, 158, 255, 0.72);
    color: white;

  }

  .feature_border_container {
    background-color: white;
    padding: 36px;
    box-sizing: border-box;
    border: 1px solid rgba(44, 62, 80, 0.18);
    border-radius: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);
  }

  .feature_c_plus_icon {
    background-image: url("../../assets/icons/CPlus.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    height: 12rem;
  }
  .feature_rank_icon {
    background-image: url("../../assets/icons/Ranking.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    height: 12rem;
  }
  .feature_ai_icon {
    background-image: url("../../assets/icons/BrainColor.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    height: 12rem;
  }
</style>
