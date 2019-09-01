<template lang="pug">
  general-layout
    el-row(
      slot="main_content"
      type="flex"
      justify="start"
      align="start"
      class="rule_page_root"
    )
      el-col(
        v-bind:offset="2"
        v-bind:xs="{ span: 20 }"
        v-bind:sm="{ span: 16 }"
      )
        game-pattern
        rule
        flow
        message-format
        debuger


      el-col(
        class="hidden-xs-only"
        v-bind:span="4"
      )
        ul( class="rule_anchor_root" )
          li
            el-link( herf="#game_pattern" v-smooth-scroll="{ offset: -60 }" ) Game Pattern
          li
            el-link( herf="#rules" v-smooth-scroll="{ offset: -60 }" ) Rules
            ul
              li
                el-link( href="#game_rules" v-smooth-scroll="{ offset: -60 }" ) Game Rules
              li
                el-link( href="#competition_rules" v-smooth-scroll="{ offset: -60 }" ) Competition Rules
          li
            el-link( herf="#flow" v-smooth-scroll="{ offset: -60 }" ) Flow
          li
            el-link( herf="#message_format" v-smooth-scroll="{ offset: -60 }" ) Message Format
            ul
              li
                el-link( href="#io_message_format" v-smooth-scroll="{ offset: -60 }" ) Input/Output Message Format
              li
                el-link( href="#io_message_example" v-smooth-scroll="{ offset: -60 }" ) Input/Output Message Format
          li
            el-link( herf="#message_format" v-smooth-scroll="{ offset: -60 }" ) Debuger
</template>

<script>
import GeneralLayout from '@/layouts/General.vue'
import GamePattern from '@/components/rule/GamePattern.vue'
import Rule from '@/components/rule/Rule.vue'
import Flow from '@/components/rule/Flow.vue'
import MessageFormat from '@/components/rule/MessageFormat.vue'
import Debuger from '@/components/rule/Debuger.vue'

export default {
  components: {
    GeneralLayout,
    GamePattern,
    Rule,
    Flow,
    MessageFormat,
    Debuger
  }
}
</script>

<style lang="scss" scoped>
  .rule_page_root {
    min-height: calc(100vh - 240px);
    padding: 64px 0;
    box-sizing: border-box;
  }

  

  .rule_anchor_root {
    position: fixed;
    text-align: left;
    & > li {
      margin: 16px 0;
      padding: 0;
    }
    & ul {
      & > li {
        margin: 4px 0;
        padding: 0
      }
    }
  }

  .el-row {
    margin: 12px 0;
    &:last-child {
      margin: 0;
    }
  }


</style>