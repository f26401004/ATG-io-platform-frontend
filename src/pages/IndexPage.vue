<template lang="pug">
  general-layout
    div( slot="main_content" class="index_page_root" )
      banner
      howitworks
      feature
      rule

</template>

<script>
import GeneralLayout from '@/layouts/General.vue'
import Banner from '@/components/index/Banner.vue'
import Howitworks from '@/components/index/HowItWorks.vue'
import Feature from '@/components/index/Feature.vue'
import Rule from '@/components/index/Rule.vue'

export default {
  name: 'index',
  components: {
    GeneralLayout,
    Banner,
    Howitworks,
    Feature,
    Rule
  }
}
</script>

<style lang="scss" scoped>
  .index_page_root {
    min-height: calc(100vh - 240px);
    padding: 64px 0;
    box-sizing: border-box;
  }
</style>
