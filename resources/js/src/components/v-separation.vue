<template>
  <div class="separation ">
    <div class="horizontal-line"></div>
    <div class="title text-center">
      {{title}}
    </div>
  </div>


</template>

<script>
export default {
  name: 'vSeparation',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.separation{
  text-align: center;
  margin: 25px 0 0 0;
}
.title{
  filter: drop-shadow(0px 3px 3px rgb(0, 0, 0, 0.45));
  display: inline-block;
  position: relative;
  height: 35px;
  padding: 0 5px;
  border: 3px solid $add-color;
  border-radius:50px;
  top:-17px;
  z-index: 1;
  background-color: $main-color;
}
.horizontal-line{
  filter: drop-shadow(0px 3px 3px rgb(0, 0, 0, 0.45));
  content:"";
  width:100%;
  height: 3px;
  background-color: $add-color;
  display: block;
  border-radius:3px;
  z-index: 0;
}
</style>
