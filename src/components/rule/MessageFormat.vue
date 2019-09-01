<template lang="pug">
  el-row
    el-col( v-bind:span="24" )
      el-row(
        type="flex"
        justify="start"
        align="middle"
      )
        el-col( v-bind:span="24" )
          h1(
            id="message_format"                            
            style="text-align: left;"
          ) <i class="el-icon-s-comment"/> Message Format
      el-row( v-bind:gutter="48" )
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 12 }"
        )
          el-row
            el-col( v-bind:span="24" )
              h2(
                id="io_message_format"
                class="rule_io_label"
              ) Input Message Format
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) <b>map</b>: multiple strings that represent object information.   <br />
              ul( class="rule_type_root" )
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col(
                      v-bind:xs="{ span: 7 }"
                      v-bind:sm="{ span: 4 }"
                    ) <i class="rule_code_style">'P x y'</i>:
                    el-col(
                      v-bind:xs="{ span: 17 }"
                      v-bind:sm="{ span: 20 }"
                    )
                      span you are now at location (x, y).
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col(
                      v-bind:xs="{ span: 7 }"
                      v-bind:sm="{ span: 4 }"
                    ) <i class="rule_code_style">'B x y'</i>:
                    el-col(
                      v-bind:xs="{ span: 17 }"
                      v-bind:sm="{ span: 20 }"
                    )
                      span your opponent is now at location (x, y).
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col(
                      v-bind:xs="{ span: 7 }"
                      v-bind:sm="{ span: 4 }"
                    ) <i class="rule_code_style">'O x y'</i>:
                    el-col(
                      v-bind:xs="{ span: 17 }"
                      v-bind:sm="{ span: 20 }"
                    )
                      span a bullet you shoot is now at location (x, y).
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col(
                      v-bind:xs="{ span: 7 }"
                      v-bind:sm="{ span: 4 }"
                    ) <i class="rule_code_style">'b x y'</i>:
                    el-col(
                      v-bind:xs="{ span: 17 }"
                      v-bind:sm="{ span: 20 }"
                    )
                      span a bullet your opponnet shoot now at location (x, y).
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col(
                      v-bind:xs="{ span: 7 }"
                      v-bind:sm="{ span: 4 }"
                    ) <i class="rule_code_style">'S x y'</i>:
                    el-col(
                      v-bind:xs="{ span: 17 }"
                      v-bind:sm="{ span: 20 }"
                    )
                      span the location (x, y) is occupied by one stuff whose HP is over 50.
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col(
                      v-bind:xs="{ span: 7 }"
                      v-bind:sm="{ span: 4 }"
                    ) <i class="rule_code_style">'s x y'</i>:
                    el-col(
                      v-bind:xs="{ span: 17 }"
                      v-bind:sm="{ span: 20 }"
                    )
                      span the location (x, y) is occupied by one stuff whose HP is lower than 50.
            el-row
              el-col( v-bind:span="24" )
                p(
                  style="text-align: left;"
                  v-scroll-reveal
                ) The map information must be read using <b>stdin</b>, and each object information seperates by newline.
                p(
                  style="text-align: left;"
                  v-scroll-reveal
                ) <b>The map information will be end with "end" string.</b>




        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 12 }"
        ) 
          el-row
            el-col( v-bind:span="24" )
              h2( class="rule_io_label" ) Output Message Format
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) <b>action</b>: a one string with 6 float data representing action information. <br />
                | Here use array to explain the order of the float in string.
              ul( class="rule_type_root" )
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col( v-bind:span="6" ) <i class="rule_code_style">action[0] = 1.0</i>:
                    el-col( v-bind:span="18" )
                      span the shoot flag. <b> You need to set shoot flag to shoot. </b>
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col( v-bind:span="10" ) <i class="rule_code_style">action[1] = 1.0471975512</i>:
                    el-col( v-bind:span="16" )
                      span the shoot angle. The formula is: &nbsp<i class="rule_code_style"> 2 * pi / 360 * angle </i>
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col( v-bind:span="6" ) <i class="rule_code_style">action[2] = 0.0</i>:
                    el-col( v-bind:span="18" )
                      span the move up flag.
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col( v-bind:span="6" ) <i class="rule_code_style">action[3] = 1.0</i>:
                    el-col( v-bind:span="18" )
                      span the move down flag.
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col( v-bind:span="6" ) <i class="rule_code_style">action[4] = 1.0</i>:
                    el-col( v-bind:span="18" )
                      span the move left flag.
                li( v-scroll-reveal )
                  el-row(
                    type="flex"
                    justify="start"
                    align="start"
                    v-bind:gutter="8"
                    style="width: 100%;"
                  )
                    el-col( v-bind:span="6" ) <i class="rule_code_style">action[5] = 1.0</i>:
                    el-col( v-bind:span="18" )
                      span the move right flag.
            el-row
              el-col( v-bind:span="24" )
                p(
                  style="text-align: left;"
                  v-scroll-reveal
                ) The action information must use <b>stdout</b> to communicate with our simulation process.
                p(
                  style="text-align: left;"
                  v-scroll-reveal
                ) <b>The action information will be end with '\n' symbol.</b>

      el-row
        el-col( v-bind:span="24" )
          el-divider
      el-row( v-bind:gutter="48" )      
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 12 }"
        ) 
          el-row
            el-col( v-bind:span="24" )
              h2(
                id="io_message_example"
                class="rule_io_label"
              ) Input Message Example
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) 'P 60 12\n' // you are now at location (60, 12).<br />
                | 'O 88 32\n' // your opponent are now at location (88, 32).
                | 'B 120 12\n' // a bullet you shot is now at location (120, 12).
                | 'b 88 24\n' // a bullet opponent shot is now at location (88, 24).
                | 'end\n'
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) 'P 800 120\n' // you are now at location (800, 120).<br />
                | 'O 1400 650\n' // your opponent are now at location (1400, 650).
                | 'b 1400 700\n' // a bullet opponent shot is now at location (1400, 700).
                | 'S 1400 720\n' // a stuff is now at location (1400, 720) and its hp is over 50.
                | 's 744 150\n' // a stuff is now at location (744, 150) and its hp is lower than 50.
                | 'end\n'
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) 'P 876 566\n' // you are now at location (876, 566).<br />
                | 'O 754 546\n' // your opponent are now at location (754, 546).
                | 'S 744 150\n' // a stuff is now at location (744, 150) and its hp is over 50.
                | 'S 678 127\n' // a stuff is now at location (678, 127) and its hp is over 50.
                | 'S 1452 846\n' // a stuff is now at location (1452, 846) and its hp is over 50.
                | 'end\n'
        el-col(
          v-bind:xs="{ span: 24 }"
          v-bind:sm="{ span: 12 }"
        ) 
          el-row
            el-col( v-bind:span="24" )
              h2( class="rule_io_label" ) Output Message Example
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) output message: "1.0 0.0 1.0 0.0 0.0 0.0" <br />
                | // shoot in 0 radian and move up
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) output message: "1.0 0.52359877559 0.0 1.0 0.0 0.0" <br />
                | // shoot in 30 degree and move down
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) output message: "0.0 0.52359877559 0.0 0.0 0.0 0.0" <br />
                | // since shoot flag set to 0, so you won't shoot any bullet with this action message.
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) output message: "0.0 0.0 1.0 1.0 0.0 0.0" <br />
                | // An ambiguous action with move up and down at the same time.
          el-row
            el-col( v-bind:span="24" )
              pre(
                v-scroll-reveal
                style="text-align: left;"
              ) output message: "0.0 0.0 1.0 1.0 1.0 1.0" <br />
                | // An ambiguous action with move all directions at the same time.
</template>

<script>
export default {
  name: 'message-format'
}
</script>

<style lang="scss" scoped>
  .rule_type_root {
    margin: 0;
    padding: 0;
    text-align: left;
    list-style-type: none;
    & > li {
      display: flex;
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
  
  .rule_code_style {
    color: #757575;
    background-color: rgba(0, 0, 0, 0.09);
    padding: 0 6px;
    box-sizing: border-box;
    line-height: 150%;
  }

  .rule_io_label {
    padding: 6px 9px;
    box-sizing:  border-box;
    border: 2px solid rgba(44, 62, 80, 0.54);
    border-radius: 8px;
    text-align: left;
  }

  pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }
  h1 {
    padding: 12px 16px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }
</style>