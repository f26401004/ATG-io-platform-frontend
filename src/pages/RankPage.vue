<template lang="pug">
  general-layout
    el-row(
      slot="main_content"
      type="flex"
      justify="start"
      align="middle"
      class="rank_page_root"
    )
      el-col(
        v-bind:offset="2"
        v-bind:span="20"
      )
        el-row
          el-col(
            v-bind:span="24"
          )
            div( class="rank_banner_container" )
            h1( class="rank_title" ) <i class="el-icon-trophy"/> Ranking
        el-row( class="hidden-sm-and-up" )
          el-col( v-bind:span="24" )
            el-row
              el-col( v-bind:span="24" )
                winner
            el-row
              el-col( v-bind:span="24" )
                loser
        el-row(
          class="hidden-xs-only"
          v-bind:gutter="48"
        )
          el-col( v-bind:span="16" )
            winner
          el-col( v-bind:span="8" )
            loser
      

</template>

<script>
import Winner from '@/components/rank/Win.vue'
import Loser from '@/components/rank/Lose.vue'

export default {
  name: 'rank',
  components: {
    Winner,
    Loser
  }
}
</script>

<style lang="scss" scoped>
  .rank_page_root {
    min-height: calc(100vh - 240px);
    padding: 64px 0;
  }
  .rank_banner_container {
    background-image: url("../assets/graphics/Ranking.svg");
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    height: 360px;

    margin: 36px;
  }
  .rank_title {
    display: inline-block;
    padding: 16px 24px;
    background-color: #409EFF;
    border-radius: 8px;
    color: white;
  }
  
</style>
