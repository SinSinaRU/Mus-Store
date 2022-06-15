<template>
  <div class="v-review">
    <div class="review row">
      <div class="review__name d-flex">
        {{name}}
        <span class="material-icons review__stars" v-for="n in Number(score)">star</span>
        <div class="review__date">{{date}}</div>
      </div>
          <p class="review__comment">{{text}}</p>
      </div>
    <div class="horizontal-line"></div>
  </div>

  </template>

<script>

export default {
  name: "v-review",
  props: {
    name: String,
    score: Number,
      text: String,
    date: String
  }
}
</script>

<style lang="scss">
.review__date{
  margin-left:auto;
  margin-right: 0;
}
.review__stars{
  color:$add-color !important;
}
.review__comment{
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
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
.v-review {
  margin: 10px 0;
  padding: 0;
}
</style>
