<template>
  <v-header/>
  <router-view :key="$route.path"/>
  <v-footer/>
</template>

<script>
import vHeader from "@/components/v-header"
import vFooter from "@/components/v-footer";

export default {
  name: 'GuestLayout',
  components: {
    vHeader,
    vFooter,
  }

}

</script>

<style lang="scss">

</style>
