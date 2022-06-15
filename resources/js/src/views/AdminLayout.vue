<template>
  <v-header/>
  <router-view :key="$route.path"/>
  <v-footer/>
</template>

<script>
import vHeader from "@/components/admin/v-header"
import vFooter from "@/components/admin/v-footer";

export default {
  name: 'AdminLayout',
  components: {
    vHeader,
    vFooter,
  }

}

</script>

<style lang="scss">

</style>
