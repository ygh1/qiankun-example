<template>
  <div class="about-new">
    <div ref="container"></div>
  </div>
</template>
<script>
import { loadMicroApp } from 'qiankun';

export default {
  mounted() {
    console.log(this.$refs['container'])
    this.microApp = loadMicroApp({
      name: 'app-manual',
      entry: '//localhost:8085',
      container: this.$refs['container'],
      props: { brand: 'qiankun' },
    })
  },
  beforeDestroy () {
    this.microApp.unmount()
  }
}
</script>
<style>

</style>