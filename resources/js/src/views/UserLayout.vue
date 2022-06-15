<template>
  <v-logged-in-header/>
  <router-view :key="$route.path"/>
  <v-footer/>
</template>

<script>
import vLoggedInHeader from "@/components/v-logged-in-header"
import vFooter from "@/components/v-footer";

export default {
  name: 'UserLayout',
  components: {
    vLoggedInHeader,
    vFooter,
  }

}

</script>

<style lang="scss">

</style>
