<template lang="pug">
  el-row
    el-col( v-bind:span="24" )
      el-row
        el-col( v-bind:span="24" )
          h1 <i class="rank_loser_icon"/> Loser Ranking
          p( style="opacity: 0.54;" )  Our bot beat you fast!
      el-row(
        type="flex"
        justify="center"
        align="middle"
      )
        el-col( v-bind:span="24" )
          div( class="rank_entry_type_container" )
            label <b>username</b>
            label <b>elasped time</b>
          div(
            v-for="(iter, index) of rankLoser"
            v-bind:key="`rank-${index}-${iter.Username}`"
            class="rank_entry_container"
          )
              
            h3 {{ iter.Username }}
            label {{ (iter.ElapsedTime / 1000).toFixed(2) }} (s)
      el-row
        el-pagination(
          background
          layout="prev, pager, next"
          v-bind:total="rankLoser.length"
        )
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'lose',
  data: function () {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState('rank', {
      rankLoser: state => state.rankLoser
    })
  }
}
</script>

<style lang="scss" scoped>
  .rank_entry_type_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    justify-content: flex-start;
    justify-items: flex-start;
    align-content: center;
    align-items: center;

    height: 36px;
    background-color: #2c3e50;
    color: white;

    margin: 16px 0;
    padding: 0 24px;
    box-sizing: border-box;
    border-radius: 6px;
  }
  .rank_entry_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    justify-content: flex-start;
    justify-items: flex-start;
    align-content: center;
    align-items: center;
    height: 63px;

    margin: 16px 0;
    padding: 0 24px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);

    transition: .2s background-color ease-in-out;
    & > h3 {
      display: inline-flex;
      align-content: center;
      align-items: center;
      margin: 0;

      & > i {
        position: relative;
        font-size: 2rem;
        margin-right: 12px;
        & > span {
          position: absolute;
          font-size: 14px;
          font-weight: 900;
          top: 13px;
          left: 13px;
        }
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }
  h1 {
    display: inline;
  }
  .rank_loser_icon {
    display: inline-block;
    background: #2c3e50;
    mask-position: 50% 50%;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-image: url("../../assets/icons/EmotionExcited.svg");

    width: 32px;
    height: 32px;
  }
</style>