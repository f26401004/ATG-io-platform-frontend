<template lang="pug">
  el-row( 
    type="flex"
    justify="center"
    align="middle"
    class="simulation_page_root"
  )
    el-col(
      v-bind:offset="1"
      v-bind:span="mode === 1 ? 22 : 12"
      v-bind:class="{'non_start_style': !start}"
    )
      v-stage(
        v-if="mode === 1"
        v-bind:config="stageConfig"
      )
        v-layer
          v-rect( v-bind:config="backgroundConfig" )
        v-layer
          v-circle( v-bind:config="playerUserConfig" )
          v-text( v-bind:config="playerUserTextConfig" )
          v-text( v-bind:config="playerUserHPConfig" )
        v-layer
          v-circle( v-bind:config="playerOpponentConfig" )
          v-text( v-bind:config="playerOpponentTextConfig" )
          v-text( v-bind:config="playerOpponentHPConfig" )
        v-layer
          v-circle(
            v-for="(iter, index) of Object.values(socketMessage.stuffs)"
            v-bind:key="`stuff-${iter.id}-${index}`"
            v-bind:config="stuffsConfig[index]"
          )
        v-layer
          v-circle(
            v-for="(iter, index) of Object.values(socketMessage.bullets)"
            v-bind:key="`bullet-${iter.id}-${index}`"
            v-bind:config="bulletsConfig[index]"
          )
      div(
        v-if="mode === 0"
        class="terminal_window_style"
      )
        p( class="terminal_text" ) {{ terminalMessage }}


</template>

<script>
import { mapState } from 'vuex'
import decode from '@/plugins/decode'

export default {
  name: 'simulation',
  data: function () {
    return {
      socketMessage: {
        playerUser: {
          x: 0,
          y: 0,
          radius: 0,
          fill: 'transparent'
        },
        playerOpponent: {
          x: 0,
          y: 0,
          radius: 0,
          fill: 'transparent'
        },
        stuffs: [],
        bullets: []
      },
      prevSocketMessage: '',
      terminalMessage: '',
      stageConfig: {
        width: 1600,
        height: 900,
      },
      backgroundConfig: {
        width: 1600,
        height: 900,
        fill: '#4E4F50'
      },
      completed: false,
      start: false
    }
  },
  beforeRouteLeave: function (to, from, next) {
    if (this.completed) {
      next()
      return
    } else {
      const result = confirm('Are you sure you are going to leave the simulation?')
      if (result) {
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
        next()
        return
      }
      next(false)
    }
  },
  computed: {
    playerUserConfig: function () {
      return {
        x: this.socketMessage.playerUser.x,
        y: this.socketMessage.playerUser.y,
        radius: this.socketMessage.playerUser.radius,
        fill: '#409EFF',
        stroke: '#1AC1F1',
        strokeWidth: 3
      }
    },
    playerUserTextConfig: function () {
      return {
        x: this.socketMessage.playerUser.x - this.socketMessage.playerUser.radius,
        y: this.socketMessage.playerUser.y + this.socketMessage.playerUser.radius + 10,
        text: 'Player',
        fontSize: 12,
        fill: 'white'
      }
    },
    playerUserHPConfig: function () {
      return {
        x: this.socketMessage.playerUser.x - 10,
        y: this.socketMessage.playerUser.y + this.socketMessage.playerUser.radius + 28,
        text: this.socketMessage.playerUser.hp,
        fontSize: 12,
        fill: 'white'
      }
    },
    playerOpponentConfig: function () {
      return {
        x: this.socketMessage.playerOpponent.x,
        y: this.socketMessage.playerOpponent.y,
        radius: this.socketMessage.playerOpponent.radius,
        fill: '#409EFF',
        stroke: '#1AC1F1',
        strokeWidth: 3
      }
    },
    playerOpponentTextConfig: function () {
      return {
        x: this.socketMessage.playerOpponent.x - 10,
        y: this.socketMessage.playerOpponent.y + this.socketMessage.playerOpponent.radius + 10,
        text: 'Bot',
        fontSize: 12,
        fill: 'white'
      }
    },
    playerOpponentHPConfig: function () {
      return {
        x: this.socketMessage.playerOpponent.x - 10,
        y: this.socketMessage.playerOpponent.y + this.socketMessage.playerOpponent.radius + 28,
        text: this.socketMessage.playerOpponent.hp,
        fontSize: 12,
        fill: 'white'
      }
    },
    stuffsConfig: function () {
      const result = []
      Object.values(this.socketMessage.stuffs).forEach(target => {
        result.push({
          x: target.x,
          y: target.y,
          radius: target.radius,
          fill: '#68EB50'
        })
      })
      return result
    },
    bulletsConfig: function () {
      const result = []
      Object.values(this.socketMessage.bullets).forEach(target => {
        result.push({
          x: target.x,
          y: target.y,
          radius: target.radius,
          fill: '#EBE550'
        })
      })
      return result
    },
    ...mapState('competition', {
      mode: state => state.mode,
      simulation: state => state.simulation 
    })
  },
  mounted: function () {
    // config the message callback function
    this.$store.commit('competition/REGISTER_MESSAGE_CALLBACK', this.callback.bind(this))
  },
  methods: {
    callback: function (e) {
      if (!this.start) {
        this.start = true
      }
      const message = JSON.parse(decode(e.data))
      // if the message do not contain player information, then close the simulation
      if (!message.playerUser) {
        this.completed = true
        console.log(message)
        // store the result information
        this.$store.commit('competition/SET_SIMULATION_ACTIVE', false)
        this.$store.commit('competition/SET_SIMULATION_RESULT', message.status)
        this.$store.commit('competition/SET_SIMULATION_SCORE', message.score)
        this.$store.commit('competition/SET_SIMULATION_ELAPSED_TIME', message.elapsedTime)
        this.$store.commit('competition/CLOSE_SOCKET')
        // transfer to the simulation result page
        this.$router.push({
          path: '/simulationResult'
        })
      }
      this.socketMessage = message
      if (this.mode === 1) {
        return
      }
      if (this.prevSocketMessage) {
        // add terminal message
        Object.keys(this.prevSocketMessage.stuffs).forEach(key => {
          const prevStuff = this.prevSocketMessage.stuffs[key]
          const currentStuff = this.socketMessage.stuffs[key]
          if (!currentStuff) {
            this.terminalMessage += `Stuff ${key} get ${prevStuff.hp} damage.\n`
            return
          }
          if (currentStuff.x !== prevStuff.x || currentStuff.y !== prevStuff.y) {
            this.terminalMessage += `Stuff ${key} move from (${prevStuff.x}, ${prevStuff.y}) to (${currentStuff.x}, ${currentStuff.y}).\n`
          }
          if (currentStuff.hp != prevStuff.hp) {
            this.terminalMessage += `Stuff ${key} get ${prevStuff.hp - currentStuff.hp} damage.\n`
          }
        })
        Object.keys(this.prevSocketMessage.bullets).forEach(key => {
          const prevBullet = this.prevSocketMessage.bullets[key]
          const currentBullet = this.socketMessage.bullets[key]
          if (!currentBullet) {
            return
          }
          if (currentBullet.x !== prevBullet.x || currentBullet.y !== prevBullet.y) {
            this.terminalMessage += `Bullet ${key} move from (${prevBullet.x}, ${prevBullet.y}) to (${currentBullet.x}, ${currentBullet.y}).\n`
          }
        })

        const prevPlayerUser = this.prevSocketMessage.playerUser
        const prevPlayerOpponent = this.prevSocketMessage.playerOpponent
        if (prevPlayerUser.x !== this.socketMessage.playerUser.x || prevPlayerUser.y !== this.socketMessage.playerUser.y) {
          this.terminalMessage += `Player User move from (${prevPlayerUser.x}, ${prevPlayerUser.y}) to (${this.socketMessage.playerUser.x}, ${this.socketMessage.playerUser.y}).\n`
        }
        if (prevPlayerOpponent.x !== this.socketMessage.playerOpponent.x || prevPlayerOpponent.y !== this.socketMessage.playerOpponent.y) {
          this.terminalMessage += `Player Opponent move from (${prevPlayerOpponent.x}, ${prevPlayerOpponent.y}) to (${this.socketMessage.playerOpponent.x}, ${this.socketMessage.playerOpponent.y}).\n`
        }
        if (prevPlayerUser.hp !== this.socketMessage.playerUser.hp) {
          this.terminalMessage += `Player User get ${prevPlayerUser.hp - this.socketMessage.playerUser.hp} damage.\n`
        }
        if (prevPlayerOpponent.hp !== this.socketMessage.playerOpponent.hp) {
          this.terminalMessage += `Player Opponent get ${prevPlayerOpponent.hp - this.socketMessage.playerOpponent.hp} damage.\n`
        }
      } else {
        Object.keys(this.socketMessage.stuffs).forEach(key => {
          const currentStuff = this.socketMessage.stuffs[key]
          this.terminalMessage += `Stuff ${currentStuff.id} start at (${currentStuff.x}, ${currentStuff.y}).\n`
        })
        this.terminalMessage += `Player User start at (${this.socketMessage.playerUser.x}, ${this.socketMessage.playerUser.y}).\n`
        this.terminalMessage += `Player Opponent start at (${this.socketMessage.playerOpponent.x}, ${this.socketMessage.playerOpponent.y}).\n`
      }
      this.prevSocketMessage = JSON.parse(JSON.stringify(this.socketMessage))
      // fix the terminal at bottom
      const terminal = document.querySelector('.terminal_window_style')
      terminal.scrollTop = terminal.scrollHeight - terminal.clientHeight
      if (terminal.scrollTop > 0) {
        this.terminalMessage = this.terminalMessage.slice(-200)
        console.log(this.terminalMessage)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .simulation_page_root {
    min-height: calc(100vh - 240px);
    padding: 64px 0 0 0;
    box-sizing: border-box;
  }

  .non_start_style {
    position: relative;
    &:after {
      content: 'Server now is starting the simulation ...';
      position: absolute;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 1600px;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.18);
      color: white;
    }
  }

  .terminal_window_style {
    background-color: black;
    border-radius: 0 0 12px 12px;
    width: 800px;
    height: 600px;
    max-height: 600px;
    overflow: auto;
    padding: 16px;
    box-sizing: border-box;
    white-space: pre-line;
  }
  .terminal_text {
    margin: 0;
    font-size: 12px;
    font-family: "Andale Mono", AndaleMono, monospace;
    text-align: left;
    color: white;
  }

</style>