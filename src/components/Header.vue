<template lang="pug">
  el-row
    el-col( v-bind:span="24" )
      el-header( class="diep_header_container hidden-sm-and-up" )
        el-row
          el-col( v-bind:span="24" )
            el-drawer(
              v-bind:visible.sync="drawerOpen"
              direction="rtl"
              custom-class="custom_drawer_style"
              size="66%"
            )
              div(
                slot="title"
                style="margin: 0;"
              )
                router-link(
                  tag="div"
                  to="/"
                  v-on:click.native="drawerOpen = false"
                )
                  i( class="el-icon-menu" style="color: white;" )
                  h2( style="display: inline-block; margin: 0 0 0 16px; color: white;" ) Menu
              el-row(
                type="flex"
                justify="center"
              )
                el-col( v-bind:span="20" )
                  el-select(
                    v-model="currentVersion"
                    placeholder="Select version ..."
                  )
                    el-option(
                      v-for="(iter, index) of versions"
                      v-bind:key="`version-${iter}-${index}`"
                      v-bind:value="iter"
                      v-bind:label="`ver. ${iter.toFixed(1)}`"
                    ) {{ `ver. ${iter.toFixed(1)}` }}
              ul( class="diep_custom_header_tab" )
                li( v-on:click="playgraoundMessage" ) Playground
                li( v-on:click="competitionHook" ) Competition
                router-link(
                  tag="li"
                  to="/rank"
                  v-on:click.native="drawerOpen = false"
                ) Ranking
                router-link(
                  tag="li"
                  to="/rule"
                  v-on:click.native="drawerOpen = false"
                ) Rules
              
        el-row( v-bind:gutter="20" )
          el-col( v-bind:span="12" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
              v-bind:gutter="16"
            )
              el-col( v-bind:offset="1" v-bind:span="8" )
                router-link(
                  tag="div"
                  class="header_icon brain_icon"
                  to="/"
                )
              el-col( v-bind:span="12" )
                router-link(
                  tag="h2"
                  class="diep_header_title"
                  to="/"
                ) ATG.io
          el-col( v-bind:span="12" )
            el-row(
              type="flex"
              justify="end"
              align="middle"
            )
              el-col( v-bind:span="8" )
                el-button(
                  circle
                  icon="el-icon-menu"
                  v-on:click="drawerOpen = true"
                )
      el-header( class="diep_header_container hidden-xs-only" )
        el-row( v-bind:gutter="20" )
          el-col(
            v-bind:offset="2"
            v-bind:span="6"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
              v-bind:gutter="16"
            )
              el-col( v-bind:offset="1" v-bind:span="3" )
                router-link(
                  tag="div"
                  class="header_icon brain_icon"
                  to="/"
                )
              el-col( v-bind:span="21" )
                router-link(
                  tag="h2"
                  class="diep_header_title"
                  to="/"
                ) ATG.io
          el-col(
            v-bind:offset="4"
            v-bind:span="8"
          )
            el-row(
              type="flex"
              justify="end"
              align="middle"
            )
              ul( class="diep_custom_header_tab" )
                li( v-on:click="playgraoundMessage" ) Playground
                li( v-on:click="competitionHook" ) Competition
                router-link(
                  tag="li"
                  to="/rank"
                ) Ranking
                router-link(
                  tag="li"
                  to="/rule"
                ) Rules
          el-col(
            v-bind:span="2"
          )
            el-row(
              type="flex"
              justify="end"
            )
              el-select(
                v-model="currentVersion"
                placeholder="Select version ..."
              )
                el-option(
                  v-for="(iter, index) of versions"
                  v-bind:key="`version-${iter}-${index}`"
                  v-bind:value="iter"
                  v-bind:label="`ver. ${iter.toFixed(1)}`"
                ) {{ `ver. ${iter.toFixed(1)}` }}
</template>

<script>
export default {
  name: 'custom-header',
  data: function () {
    return {
      currentVersion: 1.0,
      versions: [ 1.0 ],
      drawerOpen: false
    }
  },
  methods: {
    playgraoundMessage: function () {
      this.drawerOpen = false
      this.$message.error('The playground is not available now.')
    },
    competitionHook: function () {
      this.drawerOpen = false
      if (document.body.clientWidth < 768) {
        this.$message.error('You can not use mobile device to send competition request, please switch to computer.')
        return
      }
      this.$router.push('/competition')
    }
  }
}
</script>

<style lang="scss" scoped>
  .diep_header_container {
    position: fixed;
    top: 0;
    left: 0;
    line-height: 60px;

    background-color: #409EFF;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);

    z-index: 2000;
  }
  .diep_header_title {
    height: 100%;
    margin: 0;
    padding: 0;

    text-align: left;
    color: white;
    cursor: pointer;
  }
  .diep_header_subtitle {
    margin: 0;
    padding: 0;
    text-align: left;

    color: rgba(255, 255, 255, 0.72);
  }

  .header_icon {
    width: 36px;
    height: 36px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .diep_header_container {
      width: 100vw;
    }
    .diep_custom_header_tab {
      background-color: transparent;
      color: #409EFF;
      list-style: none;
      margin: 0;
      padding: 0;
      & > li {
        display: block;
        margin: 24px 0;
        padding: 0 24px;
        cursor: pointer;
        font-family: 'Noto Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: .2s background-color ease-in-out;
        &:hover {
          background-color: rgba(255, 255, 255, 0.36);  
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .diep_header_container {
      width: 100%;
    }
    .diep_custom_header_tab {
      background-color: transparent;
      color: white;
      list-style: none;
      margin: 0;
      padding: 0;
      & > li {
        display: inline-block;
        padding: 0 16px;
        cursor: pointer;
        font-family: 'Noto Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: .2s background-color ease-in-out;
        &:hover {
          background-color: rgba(255, 255, 255, 0.36);  
        }
      }
    }
  }
</style>
