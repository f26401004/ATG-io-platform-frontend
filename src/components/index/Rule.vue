<template lang="pug">
  el-row(
    type="flex"
    justify="start"
    align="middle"
    class="index_rule_root"
  )
    el-col(
      v-bind:offset="2"
      v-bind:span="20"
    )
      el-row
        el-col( v-bind:span="24" )
          el-row
            el-col( v-bind:span="24" )
              h1 You must comply with the following points to battle with our bot!
          el-row( v-bind:gutter="24" )
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 12 }"
            )
              div(
                class="rule_card_container"
                v-scroll-reveal
              )
                h2 ❶ C++ Code
                p <b>Your code must be C++ code.</b> <br/> You are not allowed to send a non-C++ code to our remote server. We will check the code file.
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 12 }"
            )
              div(
                class="rule_card_container"
                v-scroll-reveal="{ delay: 100 }"
              )
                h2 ❷ C++11 Only
                p <b>Your code can only contain C++11 standard. (below C++11 is fine.)</b> <br/> You are not allowed to send a code in C++13 or higher standard to our remote server.
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 12 }"
            )
              div(
                class="rule_card_container"
                v-scroll-reveal="{ delay: 200 }"
              )
                h2 ❸ No Third-Party Packages
                p <b>Your code can not contain any third-party packages.</b> <br/> You are allow use only I/O-related or STL packages to compute the bot movement.
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 12 }"
            )
              div(
                class="rule_card_container"
                v-scroll-reveal="{ delay: 300 }"
              )
                h2 ❹ 1s Latency Time Only
                p <b>You have only 1s latency time.</b> <br/> Your bot need to respond within 1s, in other words, your bot can not be stucked by any infinite loop or logic error.
            el-col(
              v-bind:xs="{ span: 24 }"
              v-bind:sm="{ span: 12 }"
            )
              div(
                class="rule_card_container"
                v-scroll-reveal="{ delay: 400 }"
              )
                h2 ❺ Output Format
                p <b>Your code output message must meet our rules</b> <br/> The system will automatically ignore every useless message.
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (min-width: 768px) {
    .index_rule_root {
      height: 720px;
    }
  }
  .rule_card_container {
    border: 1px solid rgba(0, 0, 0, 0.18);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);

    padding: 16px 24px;
    box-sizing: border-box;
    margin-bottom: 16px !important;
    text-align: left;
    transition: .2s box-shadow ease-in-out;
  }
  .rule_card_container:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.36);
  }
</style>
