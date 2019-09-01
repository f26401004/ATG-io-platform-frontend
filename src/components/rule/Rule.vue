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
              ) <i class="el-icon-warning"/> Rules
          el-row(
            type="flex"
            justify="center"
            align="middle"
          )
            el-col( v-bind:span="23" )
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                div(
                  v-scroll-reveal
                  class="rule_game_graphic_container"
                )
            
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              h2(
                v-scroll-reveal
                style="text-align: left;"
              ) Game Rules
              ul( class="rule_entry_root" )
                li(
                  v-scroll-reveal
                  data-index="1"
                )
                  span Use arrow key
                    | <i class="el-icon-top rule_button_icon" />
                    | <i class="el-icon-bottom rule_button_icon" />
                    | <i class="el-icon-back rule_button_icon" />
                    | <i class="el-icon-right rule_button_icon" />
                    | to move the diep.
                li(
                  v-scroll-reveal
                  data-index="2"
                )
                  span Use space key
                    | <i class="rule_button_icon"> space </i>
                    | to shoot bullet.
                li(
                  v-scroll-reveal
                  data-index="3"
                )
                  span The shoot direction will be the direction of the cursor and the diep.
                li(
                  v-scroll-reveal
                  data-index="4"
                )
                  span Diep can be damaged by any collision with any object on the field. (includes stuffs and opponents)
                li(
                  v-scroll-reveal
                  data-index="5"
                )
                  span Get the score by eliminate stuffs or beat up other player.
                li(
                  v-scroll-reveal
                  data-index="6"
                )
                  span You will be forced to quit the game when your HP is zero.
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              el-row(
                type="flex"
                justify="center"
                align="middle"
              )
                div(
                  v-scroll-reveal
                  class="rule_competition_graphic_container"
                )
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col(
              v-bind:offset="1"
              v-bind:span="22"
            )
              h2(
                v-scroll-reveal           
                style="text-align: left;"
              ) Competition Rules
              ul( class="rule_entry_root" )
                li(
                  v-scroll-reveal
                  data-index="1"
                )
                  span Based on the Game Rules, please check Game Rules first.
                li(
                  v-scroll-reveal
                  data-index="2"
                )
                  span You use C++ code to control your diep. The final goal is to make opponent's HP to zero.
                li(
                  v-scroll-reveal
                  data-index="3"
                )
                  span When the HP of one of the player on field is zero, then the competition is over.
                li(
                  v-scroll-reveal
                  data-index="4"
                )
                  span The competition lasts 3 minutes. If you don't beat your opponent within 3 minutes, you can win or lose according to the HP and score you get.
                li(
                  v-scroll-reveal
                  data-index="5"
                )
                  span We are now only support C++ code. You are not allow to upload any non-C++ code to compete with our bot.
                li(
                  v-scroll-reveal
                  data-index="6"
                )
                  span The C++ must meet the C++11 standard, and we have only backward compatible the previous version.
                li(
                  v-scroll-reveal
                  data-index="7"
                )
                  span Your code is not allowed to include any third-party packages. (<b>iostream or STL or math pacakge is accepted.</b>)
                li(
                  v-scroll-reveal
                  data-index="8"
                )
                  span You have only 1s latency time to compute the next movement. In other words, your bot can not be stocked by any infinite loop or logic error.
                li(
                  v-scroll-reveal
                  data-index="9"
                )
                  span The output message must meet our format. Our system will automatically ignore every useless message.
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col(
              v-bind:span="24"
            )
              el-row(
                type="flex"
                justify="start"
                align="middle"
              )
                el-col( v-bind:span="24" )
                  h3(
                    v-scroll-reveal
                    style="text-align: left;"
                    class="third_party_label"
                  ) Third-Party Packages
                  p(
                    v-scroll-reveal
                    style="text-align: left; opacity: 0.54;"
                  ) Here are all third-party packages you can use.
              el-row(
                type="flex"
                justify="start"
                align="middle"
              )
                el-col( v-bind:span="24" )
                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) cstring
                    el-tag( type="sccuess" ) cmath
                    el-tag( type="sccuess" ) iostream

                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) cstdio
                    el-tag( type="sccuess" ) vector
                    el-tag( type="sccuess" ) list

                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) string
                    el-tag( type="sccuess" ) forward_list
                    el-tag( type="sccuess" ) deque
                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) array
                    el-tag( type="sccuess" ) map
                    el-tag( type="sccuess" ) set
                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) unordered_set
                    el-tag( type="sccuess" ) unordered_map
      el-row( class="hidden-xs-only" )
        el-col( v-bind:span="24" )
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col( v-bind:span="24" )
              h1(
                id="rules"
                style="text-align: left;"
              ) <i class="el-icon-warning"/> Rules
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col(
              v-bind:offset="1"
              v-bind:span="15"
            )
              h2(
                v-scroll-reveal
                id="game_rules"
                style="text-align: left;"
              ) Game Rules
              ul( class="rule_entry_root" )
                li(
                  v-scroll-reveal
                  data-index="1"
                )
                  span Use arrow key
                    | <i class="el-icon-top rule_button_icon" />
                    | <i class="el-icon-bottom rule_button_icon" />
                    | <i class="el-icon-back rule_button_icon" />
                    | <i class="el-icon-right rule_button_icon" />
                    | to move the diep.
                li(
                  v-scroll-reveal
                  data-index="2"
                )
                  span Use space key
                    | <i class="rule_button_icon"> space </i>
                    | to shoot bullet.
                li(
                  v-scroll-reveal
                  data-index="3"
                )
                  span The shoot direction will be the direction of the cursor and the diep.
                li(
                  v-scroll-reveal
                  data-index="4"
                )
                  span Diep can be damaged by any collision with any object on the field. (includes stuffs and opponents)
                li(
                  v-scroll-reveal
                  data-index="5"
                )
                  span Get the score by eliminate stuffs or beat up other player.
                li(
                  v-scroll-reveal
                  data-index="6"
                )
                  span You will be forced to quit the game when your HP is zero.
            el-col( v-bind:span="7" )
              div(
                v-scroll-reveal
                class="rule_game_graphic_container"
              )
          el-row
            el-col( v-bind:span="24" )
              el-divider
          el-row(
            type="flex"
            justify="start"
            align="middle"
          )
            el-col(
              v-bind:offset="1"
              v-bind:span="7"
            )
              div(
                v-scroll-reveal
                class="rule_competition_graphic_container"
              )
            el-col( v-bind:span="15" )
              h2(
                v-scroll-reveal
                id="competition_rules"              
                style="text-align: left;"
              ) Competition Rules
              ul( class="rule_entry_root" )
                li(
                  v-scroll-reveal
                  data-index="1"
                )
                  span Based on the Game Rules, please check Game Rules first.
                li(
                  v-scroll-reveal
                  data-index="2"
                )
                  span You use C++ code to control your diep. The final goal is to make opponent's HP to zero.
                li(
                  v-scroll-reveal
                  data-index="3"
                )
                  span When the HP of one of the player on field is zero, then the competition is over.
                li(
                  v-scroll-reveal
                  data-index="4"
                )
                  span The competition lasts 3 minutes. If you don't beat your opponent within 3 minutes, you can win or lose according to the HP and score you get.
                li(
                  v-scroll-reveal
                  data-index="5"
                )
                  span We are now only support C++ code. You are not allow to upload any non-C++ code to compete with our bot.
                li(
                  v-scroll-reveal
                  data-index="6"
                )
                  span The C++ must meet the C++11 standard, and we have only backward compatible the previous version.
                li(
                  v-scroll-reveal
                  data-index="7"
                )
                  span Your code is not allowed to include any third-party packages. (<b>iostream or STL or math pacakge is accepted.</b>)
                li(
                  v-scroll-reveal
                  data-index="8"
                )
                  span You have only 1s latency time to compute the next movement. In other words, your bot can not be stocked by any infinite loop or logic error.
                li(
                  v-scroll-reveal
                  data-index="9"
                )
                  span The output message must meet our format. Our system will automatically ignore every useless message.
          el-row(
            type="flex"
            justify="end"
            align="middle"
          )
            el-col( v-bind:span="16" )
              el-row(
                type="flex"
                justify="start"
                align="middle"
              )
                el-col( v-bind:span="24" )
                  h3(
                    v-scroll-reveal
                    style="text-align: left;"
                    class="third_party_label"
                  ) Third-Party Packages
                  p(
                    v-scroll-reveal
                    style="text-align: left; opacity: 0.54;"
                  ) Here are all third-party packages you can use.
              el-row(
                type="flex"
                justify="start"
                align="middle"
              )
                el-col( v-bind:span="24" )
                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) cstring
                    el-tag( type="sccuess" ) cmath
                    el-tag( type="sccuess" ) iostream
                    el-tag( type="sccuess" ) cstdio
                    el-tag( type="sccuess" ) vector
                    el-tag( type="sccuess" ) list
                    el-tag( type="sccuess" ) forward_list
                  el-row(
                    type="flex"
                    justify="start"
                    v-scroll-reveal
                  )
                    el-tag( type="sccuess" ) string
                    el-tag( type="sccuess" ) deque
                    el-tag( type="sccuess" ) array
                    el-tag( type="sccuess" ) map
                    el-tag( type="sccuess" ) set
                    el-tag( type="sccuess" ) unordered_set
                    el-tag( type="sccuess" ) unordered_map

</template>

<script>
export default {
  name: 'rule'
}
</script>

<style lang="scss" scoped>

  .rule_entry_root {
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
      margin: 12px 0px;
      padding: 8px 12px;

      &:before {
        content: attr(data-index);
        display: inline-flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        margin-right: 12px;

        background-color: #409EFF;
        border-radius: 14px;
        color: white;
      }
    }
    .rule_button_icon {
      display: inline-flex;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      min-width: 24px;
      min-height: 24px;
      margin: 0 4px;
      padding: 4px;
      box-sizing: border-box;

      border: 1px solid #2c3e50;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }

  }
  .rule_game_graphic_container {
    width: 34vh;
    height: 34vh;
    max-width: 320px;
    max-height: 320px;
    background-image: url("../../assets/graphics/Game.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
    border-radius: 100%;
  }
  .rule_competition_graphic_container {
    width: 34vh;
    height: 34vh; 
    max-width: 320px;
    max-height: 320px;
    background-image: url("../../assets/graphics/Competition.svg");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
    border-radius: 100%;
  }
  .third_party_label:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.18);
    width: 212px;
    height: 36px;
    border-radius: 24px;
  }
  .third_party_label {
    position: relative;
    padding: 8px 12px;
  }
  h1 {
    padding: 12px 16px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }
  .el-tag {
    margin: 8px;
  }
</style>