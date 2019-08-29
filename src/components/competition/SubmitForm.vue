<template lang="pug">
  el-card( shadow="hover" )
    div( slot="header" )
      el-steps(
        v-bind:active="currentStep"
        simple
      )
        el-step(
          title="Register an account"
          description=""
          icon="el-icon-s-custom"
        )
        el-step(
          title="Select the render mode"
          description="You can select the mode to watch the competition process with terminal-like rendering or graphic rendering."
          icon="el-icon-s-platform"
        )
        el-step(
          title="Upload C++ code"
          description="Upload the C++ code without any compression."
          icon="el-icon-upload"
        )
    transition( name="fade" )
      el-row( v-show="currentStep === 0" )
        el-col( v-bind:span="24" )
          el-row
            el-col( v-bind:span="24" )
              p( style="color: rgba(0, 0, 0, 0.36);" ) Register an account with username and authCode.<br />
                | The pair of the username and authCode must be unique.
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="12" )
              el-form(
                v-bind:rules="userRules"
                v-bind:model="form"
                ref="userForm"
              )
                el-form-item(
                  label="Username"
                  prop="username"
                )
                  el-input( v-model="username" )
                el-form-item(
                  label="AuthCode"
                  prop="authCode"
                )
                  el-input(
                    v-model="authCode"
                    show-password
                  )
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row(
            type="flex"
            justify="end"
            align="middle"
          )
            el-col( v-bind:span="2" )
              el-button(
                type="primary"
                v-on:click="setStep(currentStep + 1)"
              ) Next
    transition( name="fade" )
      el-row(
        v-show="currentStep === 1"
        type="flex"
        justify="center"
        align="middle"
      )
        el-col( v-bind:span="24" )
          el-row
            el-col( v-bind:span="24" )
              p( style="color: rgba(0, 0, 0, 0.36);" ) Select the render mode to watch the competition process. <br />
                | terminal-like mode: display the movement and shoot information in text on the screen. <br />
                | graphic mode: display the information with graphics rendering on the screen.
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="24" )
              button(
                class="terminal_like_mode_container"
                v-on:click="chooseMode(0)"
                v-bind:class="{ 'selected_mode': mode === 0 }"
              )
              button(
                class="graphic_mode_container"
                v-on:click="chooseMode(1)"
                v-bind:class="{ 'selected_mode': mode === 1 }"
              )
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row(
            type="flex"
            justify="end"
            align="middle"
          )
            el-col( v-bind:span="2" )
              el-link(
                type="primary"
                v-on:click="setStep(currentStep - 1)"
              ) Prev
            el-col( v-bind:span="2" )
              el-button(
                type="primary"
                v-on:click="setStep(currentStep + 1)"
              ) Next
    transition( name="fade" )
      el-row(
        type="flex"
        justify="center"
        align="middle"
        v-show="currentStep === 2"
      )
        el-col( v-bind:span="24" )
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="14" )
              el-upload(
                action="http://localhost:3000/api/upload"
                ref="upload"
                drag
                v-bind:multiple="false"
                v-bind:limit="1"
                v-bind:auto-upload="false"
                v-bind:data="{ username: $store.getters['competition/getUsername'] }"
              )
                i( class="el-icon-upload" )
                div Drop file here or <em>click to upload</em>
                div(
                  style="color: rgba(0, 0, 0, 0.36);"
                  slot="tip"
                ) cpp files with a size less than 500kb
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row(
            type="flex"
            justify="end"
            align="middle"
          )
            el-col( v-bind:span="2" )
              el-link(
                type="primary"
                v-on:click="setStep(currentStep - 1)"
              ) Prev
            el-col( v-bind:span="2" )
              el-button(
                style="width: 100%;"
                type="primary"
                v-on:click="submitApplication"
              ) Submit
</template>

<script>
export default {
  data: function () {
    return {
      currentStep: 0,
      form: {
        username: '',
        authCode: '',
        mode: -1
      },
      code: [],
      userRules: {
        username: [{
          required: true,
          message: 'Please input non-empty Username.',
          trigger: 'blur'
        }, {
          max: 50,
          message: 'Length shout be not longer than 50',
          trigger: 'blur'
        }],
        authCode: [{
          required: true,
          message: 'Please input non-empty AuthCode.',
          trigger: 'blur'
        }, {
          max: 50,
          message: 'Length shout be not longer than 50',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    username: {
      get: function () {
        return this.$store.state.competition.username
      },
      set: function (value) {
        this.$store.commit('competition/SET_USERNAME', value)
        this.form.username = value
      }
    },
    authCode: {
      get: function () {
        return this.$store.state.competition.authCode
      },
      set: function (value) {
        this.$store.commit('competition/SET_AUTHCODE', value)
        this.form.authCode = value
      }
    },
    mode: {
      get: function () {
        return this.$store.state.competition.mode
      },
      set: function (value) {
        this.$store.commit('competition/SET_MODE', value)
        this.form.mode = value
      }
    }
  },
  mounted: function () {
    this.$store.commit('competition/SET_USERNAME', '')
    this.$store.commit('competition/SET_AUTHCODE', '')
    this.$store.commit('competition/SET_MODE', -1)
    this.$store.commit('competition/SET_CODE', null)
  },
  methods: {
    setStep: async function (step) {
      if (step === this.currentStep) {
        return
      }
      let validation;
      switch (this.currentStep) {
        case 0:
          validation = await this.userFormCheck()
          break
        case 1:
          validation = (this.mode !== -1)
          break
        case 2:
          validation = true
          break
      }
      if (validation) {
        this.currentStep = step
      }
    },
    chooseMode: function (mode) {
      this.mode = mode
    },
    userFormCheck: async function () {
      const result = await this.$refs.userForm.validate()
      if (result) {
        return true
      }
      console.error('There exists some errros, please check the error messages.')
      this.$message.error('There exists some errros, please check the error messages.')
      return false
    },
    checkFile: function (file) {
      this.$store.commit('competition/SET_CODE', file)
    },
    submitApplication: async function () {
      try {
        await this.$store.dispatch('competition/register')
        await this.$refs.upload.submit()
        await this.$store.dispatch('competition/compileCode')
        await this.$store.dispatch('competition/establishSimulationConnection')
      } catch (error) {
        this.$message.error(error.response.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .submit_form_root {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .fade-leave-active {
    position: absolute;
  }
  .terminal_like_mode_container, .graphic_mode_container {
    position: relative;
    border: none;

    background-color: transparent;

    width: 240px;
    height: 240px;
    margin: 24px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);
    border-radius: 3%;
    cursor: pointer;


    &:hover {
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.18);
    }
  }
  .terminal_like_mode_container:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #409EFF;
    mask-image: url("../../assets/icons/Terminal.svg");
    mask-position: 50% 50%;
    mask-size: 60%;
    mask-repeat: no-repeat;
    width: 240px;
    height: 240px;
    z-index: 999;
  }

  .graphic_mode_container {
    background-color: transparent;
    background-image: url("../../assets/icons/Graphics.svg");
    background-position: 50% 50%;
    background-size: 150%;
    background-repeat: no-repeat;
  }

  .selected_mode {
    border: 2px solid #409EFF;
  }

</style>