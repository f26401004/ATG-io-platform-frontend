<template lang="pug">
  el-row
    el-col( v-bind:span="24" )
      el-row( class="hidden-sm-and-up" )
        el-col( v-bind:span="24" )
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col( v-bind:span="24" )
              h1(
                style="text-align: left;"
              ) <i class="el-icon-s-help"/> Flow
          el-row
            el-col( v-bind:span="24" )
              el-steps( simple)
                el-step(
                  icon="el-icon-upload"
                  status="finish"
                  description=""
                )
                el-step(
                  icon="el-icon-s-comment"
                  status="finish"
                  description=""
                )
                el-step(
                  icon="el-icon-s-promotion"
                  status="finish"
                  description=""
                )
                el-step(
                  icon="el-icon-s-flag"
                  status="finish"
                  description=""
                )
          el-row
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              h3( v-scroll-reveal ) Upload your C++ code.
              ul( class="rule_list_root" )
                li( v-scroll-reveal ) You need to config a username and authCode to represent yourself first.
                li( v-scroll-reveal ) You can use username and authCode to compete again without reconfiging identity.
                li( v-scroll-reveal ) Server will first compile the code you uploaded, if success, then continue.
                li( v-scroll-reveal ) If the compile result of your code show fail, please confirm all above rule met. 
          el-row
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              h3( v-scroll-reveal ) Execute your code.
              ul( class="rule_list_root" )
                li( v-scroll-reveal ) When a game has started, server will execute your code as a process.
                li( v-scroll-reveal ) The server sends map information per frame to your process by standard input.
                li( v-scroll-reveal ) <b> Make sure that your code can use standard input normally. </b>
          el-row
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              h3( v-scroll-reveal ) Respond with action message.
              ul( class="rule_list_root" )
                li( v-scroll-reveal ) You need to use standard output to output the action message within 1s.
                li( v-scroll-reveal ) <b> Make sure that your code can use standard output normally. </b>
                li( v-scroll-reveal ) <b> If the output interval exceeds 1s, the server will treat you as disconnected.  </b>
          el-row
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              h3( v-scroll-reveal ) Close the room.
              ul( class="rule_list_root" )
                li( v-scroll-reveal ) If one of the player's HP is 0, then the game over.
                li( v-scroll-reveal ) Since server will open a sandbox-mode room for competition, server will not save any log data during the competition.
                li( v-scroll-reveal ) However, server will save the result to database, you can check more information through <el-link href="/rank"> here </el-link>
                li( v-scroll-reveal ) You can use the same username and authCode to compete with our bot.
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row
            el-col( v-bind:span="24" )
              h2( style="text-align: left;" ) Remarks
          el-row
            el-col( v-bind:span="24" )
              ul( class="rule_list_root" )
                li( v-scroll-reveal ) We can not retrive one's authCode, you need to keep in mind with your authCode.
                li( v-scroll-reveal ) You can choose to display the terminal-like screen rather than render screen to see the competition process.
                li( v-scroll-reveal ) For terminal-like mode, it display the text message rather than graphic render information.
                li( v-scroll-reveal ) We do not provide version control feature, please treat your code carefully.


      el-row( class="hidden-xs-only" )
        el-col( v-bind:span="24" )
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col( v-bind:span="24" )
              h1(
                id="flow"
                style="text-align: left;"
              ) <i class="el-icon-s-help"/> Flow
          el-row
            el-col( v-bind:span="24" )
              el-steps( simple )
                el-step(
                  icon="el-icon-upload"
                  status="finish"
                  title="Step 1"
                  description=""
                )
                el-step(
                  icon="el-icon-s-comment"
                  status="finish"
                  title="Step 2"
                  description=""
                )
                el-step(
                  icon="el-icon-s-promotion"
                  status="finish"
                  title="Step 3"
                  description=""
                )
                el-step(
                  icon="el-icon-s-flag"
                  status="finish"
                  title="Step 4"
                  description=""
                )
          el-row
            el-col( v-bind:span="6" )
              h3( v-scroll-reveal ) Upload your C++ code.
              ul( class="rule_list_root" )
                li( v-scroll-reveal={ delay: 100 } ) You need to config a username and authCode to represent yourself first.
                li( v-scroll-reveal={ delay: 200 } ) You can use username and authCode to compete again without reconfiging identity.
                li( v-scroll-reveal={ delay: 300 } ) Server will first compile the code you uploaded, if success, then continue.
                li( v-scroll-reveal={ delay: 400 } ) If the compile result of your code show fail, please confirm all above rule met. 
            el-col( v-bind:span="6" )
              h3( v-scroll-reveal={ delay: 100 } ) Execute your code.
              ul( class="rule_list_root" )
                li( v-scroll-reveal={ delay: 200 } ) When a game has started, server will execute your code as a process.
                li( v-scroll-reveal={ delay: 300 } ) The server sends map information per frame to your process by standard input.
                li( v-scroll-reveal={ delay: 400 } ) <b> Make sure that your code can use standard input normally. </b>
            el-col( v-bind:span="6" )
              h3( v-scroll-reveal={ delay: 200 } ) Respond with action message.
              ul( class="rule_list_root" )
                li( v-scroll-reveal={ delay: 300 } ) You need to use standard output to output the action message within 1s.
                li( v-scroll-reveal={ delay: 400 } ) <b> Make sure that your code can use standard output normally. </b>
                li( v-scroll-reveal={ delay: 500 } ) <b> If the output interval exceeds 1s, the server will treat you as disconnected.  </b>
            el-col( v-bind:span="6" )
              h3( v-scroll-reveal={ delay: 300 } ) Close the room.
              ul( class="rule_list_root" )
                li( v-scroll-reveal={ delay: 400 } ) If one of the player's HP is 0, then the game over.
                li( v-scroll-reveal={ delay: 500 } ) Since server will open a sandbox-mode room for competition, server will not save any log data during the competition.
                li( v-scroll-reveal={ delay: 600 } ) However, server will save the result to database, you can check more information through <el-link href="/rank"> here </el-link>
                li( v-scroll-reveal={ delay: 700 } ) You can use the same username and authCode to compete with our bot.
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row
            el-col( v-bind:span="24" )
              h2( style="text-align: left;" ) Remarks
          el-row
            el-col( v-bind:span="24" )
              ul( class="rule_list_root" )
                li( v-scroll-reveal ) We can not retrive one's authCode, you need to keep in mind with your authCode.
                li( v-scroll-reveal={ delay: 100 } ) You can choose to display the terminal-like screen rather than render screen to see the competition process.
                li( v-scroll-reveal={ delay: 200 } ) For terminal-like mode, it display the text message rather than graphic render information.
                li( v-scroll-reveal={ delay: 300 } ) We do not provide version control feature, please treat your code carefully.


</template>

<script>
export default {
  name: 'flow'
}
</script>

<style lang="scss" scoped>

  .rule_list_root {
    margin: 0;
    padding: 0;
    text-align: left;
    list-style-type: none;
    & > li {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: flex-start;
      justify-items: flex-start;
      align-content: center;
      align-items: center;
      margin: 6px 0px;
      padding: 8px 12px;

      &:before {
        content: "";
        display: inline-flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        width: 8px;
        height: 8px;
        margin-right: 12px;

        background-color: #409EFF;
        border-radius: 4px;
      }
    }
  }
  h1 {
    padding: 12px 16px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }
</style>