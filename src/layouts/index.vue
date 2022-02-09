<template>
  <div>
    <appHeader></appHeader>
    <appMain></appMain>
    <appFooter></appFooter>
    <appGnb v-if="!isMobile"></appGnb>
  </div>
</template>

<script>
import {Header, Gnb, AppMain, Footer} from "@/components/gnb";
import {mapMutations, mapGetters} from 'vuex';
export default {
  name: "Layout",
  computed: {
    ...mapGetters(['isMobile']),
  },
  components: {
    appHeader: Header,
    appMain: AppMain,
    appGnb: Gnb,
    appFooter: Footer
  },
  methods: {
    ...mapMutations([
        'setMediaPoint'
    ])
  }
}
</script>

<style scoped>

</style>