<template>
<IndexHeader />


<router-view></router-view>
</template>

<script>
import IndexHeader from './components/Header.vue'



export default {
  name: 'App',
  components: {
   IndexHeader,

 
  }
}
</script>

<style>

</style>
