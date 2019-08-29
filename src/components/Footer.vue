<template lang="pug">
  footer( class="diep_footer_container" )
    el-row( class="hidden-sm-and-up" )
      el-col( v-bind:span="24" )
        el-row
          el-col(
            v-bind:offset="2"
            v-bind:span="20"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
              v-bind:gutter="16"
            )
              el-col( v-bind:span="6" )
                div( class="footer_icon brain_icon" )
              el-col( v-bind:span="18" )
                h1( class="diep_footer_title" ) ATG.io
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              p( class="diep_footer_subtitle" ) an AI tank game
        el-row
          el-col( v-bind:span="24" )
            el-divider
        el-row
          el-col(
            v-bind:offset="2"
            v-bind:span="20"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              label( class="diep_footer_tag" ) Product
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) Github
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) Document
        el-row
          el-col( v-bind:span="24" )
            el-divider
        el-row
          el-col(
            v-bind:offset="2"
            v-bind:span="20"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              label( class="diep_footer_tag" ) About
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) FAQ
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) Contact
        el-row
          el-col( v-bind:span="24" )
            el-divider
        el-row
          el-col(
            v-bind:offset="2"
            v-bind:span="20"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              label( class="diep_footer_tag" ) Resource
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://vuejs.org/"
                target="_blank"
              ) Vue
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://element.eleme.io/#/"
                target="_blank"
              ) Element-UI
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://www.tensorflow.org/"
                target="_blank"
              ) Tensorflow
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://cloud.google.com/free/docs/gcp-free-tier?hl=zh-tw"
                target="_blank"
              ) Googla Cloud Platform
            
            

    el-row( class="hidden-xs-only" )
      el-col( v-bind:span="24" )
        el-row
          el-col(
            v-bind:offset="2"
            v-bind:span="5"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
              v-bind:gutter="16"
            )
              el-col( v-bind:span="3" )
                div( class="footer_icon brain_icon" )
              el-col( v-bind:span="21" )
                h1( class="diep_footer_title" ) ATG.io
          el-col( v-bind:span="5" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              label( class="diep_footer_tag" ) Product
          el-col( v-bind:span="5" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              label( class="diep_footer_tag" ) About
          el-col( v-bind:span="5" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              label( class="diep_footer_tag" ) Resource
        el-row
          el-col(
            v-bind:offset="2"
            v-bind:span="5"
          )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              p( class="diep_footer_subtitle" ) an AI tank game
          el-col( v-bind:span="5" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) Github
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) Document
          el-col( v-bind:span="5" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) FAQ
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link( class="diep_footer_link" ) Contact
          el-col( v-bind:span="5" )
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://vuejs.org/"
                target="_blank"
              ) Vue
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://element.eleme.io/#/"
                target="_blank"
              ) Element-UI
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://www.tensorflow.org/"
                target="_blank"
              ) Tensorflow
            el-row(
              type="flex"
              justify="start"
              align="middle"
            )
              el-link(
                class="diep_footer_link"
                href="https://cloud.google.com/free/docs/gcp-free-tier?hl=zh-tw"
                target="_blank"
              ) Googla Cloud Platform
</template>

<script>
export default {
  name: 'custom-footer'
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 768px) {}
  @media screen and (min-width: 768px) {
    .diep_footer_container {
      height: 240px;
    }
  }
  .diep_footer_container {
    background-color: #409EFF;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);

    padding: 32px 48px !important;
  }

  .diep_footer_title {
    height: 100%;
    margin: 0;
    padding: 0;

    text-align: left;
    color: white;
  }
  .diep_footer_subtitle {
    margin: 12px;
    padding: 0;
    text-align: left;

    color: rgba(255, 255, 255, 0.72);
  }

  .diep_footer_tag {
    font-weight: 600;
    color: white;
    margin: 16px 0;
  }
  .diep_footer_link {
    margin: 8px;
    color: rgba(255, 255, 255, 0.72) !important;

    cursor: pointer;
    transition: .2s color ease-in-out;
  }
  .diep_footer_link:hover {
    color: white !important;
  }

  .footer_icon {
    width: 40px;
    height: 40px;
  }

</style>
