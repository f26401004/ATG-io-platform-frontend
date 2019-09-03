<template lang="pug">
  el-row( class="simulation_result_page_root" )
    el-col( v-bind:span="24" )
      el-row(
        type="flex"
        justify="center"
        align="middle"
      )
        div(
          v-scroll-reveal="{ delay: 600 }"
          v-bind:class="{'winner_graphic_container': result, 'loser_graphic_container': !result }"
        )
      el-row(
        type="flex"
        justify="center"
        align="middle"
      )
        el-col( v-bind:span="12" )
          h1( v-scroll-reveal="{ delay: 600 }" ) {{ username }}
      el-row(
        type="flex"
        justify="center"
        align="middle"
      )
        el-col(
          v-bind:span="8"
          class="result_information_container"
          v-scroll-reveal="{ delay: 600 }"
        )
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="24" )
              p You {{ result ? 'win' : 'lose to' }} our bot!
              p Elpased Time: {{ (elapsedTime / 1000).toFixed(2) }}
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="24" )
              router-link(
                tag="span"
                to="/rank"
              )
                el-button( type="primary" ) Check Ranking
              p( style="margin: 8px;" ) or
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="24" )
              router-link(
                tag="span"
                to="/competition"
              )
                el-link Challenge again
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      elapsedTime: -1,
      result: false
    }
  },
  computed: {
  },
  mounted: async function () {
    try {
      // record the data
      await this.$store.dispatch('rank/upsertRank', {
        authCode: this.$store.getters['competition/getAuthCode'],
        elapsedTime: this.$store.getters['competition/getSimulationElapsedTime'],
        score: this.$store.getters['competition/getSimulationScore'],
        result: this.$store.getters['competition/getSimulationResult']
      })
      // copy the data from store
      this.username = this.$store.getters['competition/getUsername']
      this.elapsedTime = this.$store.getters['competition/getSimulationElapsedTime']
      this.result = this.$store.getters['competition/getSimulationResult']
      // send close message to server
      this.$store.commit('competition/SEND_MESSAGE', 'Close')
      // erase all simualtion data
      this.$store.commit('competition/SET_SIMULATION_ACTIVE', false)
      this.$store.commit('competition/SET_SIMULATION_RESULT', false)
      this.$store.commit('competition/SET_SIMULATION_SCORE', -1)
      this.$store.commit('competition/SET_SIMULATION_ELAPSED_TIME', -1)
      this.$store.commit('competition/CLOSE_SOCKET')
      // erase all competition data
      this.$store.commit('competition/SET_USERNAME', '')
      this.$store.commit('competition/SET_AUTHCODE', '')
      this.$store.commit('competition/SET_MODE', -1)
      this.$store.commit('competition/SET_CODE', null)
    } catch (error) {
      this.$message.error(error.response.data)
    }
  }
}
</script>

<style lang="scss" scoped>
  .simulation_result_page_root {
    position: relative;
    min-height: calc(100vh);
    padding: 128px 0 64px 0;
    box-sizing: border-box;

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

  .winner_graphic_container {
    background-image: url("../assets/graphics/Trophy.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;

    width: 240px;
    height: 240px;
  }

  .loser_graphic_container {
    background-image: url("../assets/graphics/Laugh.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 100%;

    width: 36vh;
    height: 36vh;
    max-width: 240px;
    max-height: 240px;
  }

  .result_information_container {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 12px;

    padding: 24px 32px;
  }
</style>