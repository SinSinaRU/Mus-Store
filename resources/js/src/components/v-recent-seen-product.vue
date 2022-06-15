<template>

    <router-link class="v-RecentSeenProduct" :to="'/product/'+ encodeURIComponent(title.toLowerCase())">
      <div class="content-category">
        <img class="img-category" :src="'/uploads/img/'+img" :alt=title />
        <p class="text-category">{{ title }}</p>
      </div>
    </router-link>


</template>

<script>
export default {
  name: 'vRecentSeenProduct',
    props: ['title', 'img']
}
</script>


<style lang="scss">
.v-RecentSeenProduct {
  & div:hover {
    & p {
      color: $add-color;
    }
  }
}

.content-category {
  position: relative;
  width: 220px;
  height: 230px;
  margin-bottom: 30px;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 3;
  background: #E4E4E4;
  text-align: center;
}

.img-category {
  z-index: 3;
  width: auto;
  height: 150px;
  filter: drop-shadow(12px 9px 4px rgb(0, 0, 0, 0.25));
  -webkit-filter: drop-shadow(12px 9px 4px rgb(0, 0, 0, 0.25));
  position: relative;
  margin: 20px 10px 0 10px;
}

.text-category {
  z-index: 3;
  color: $font-color;
  margin: 0;
  position: relative;
  top: 2px;
}
</style>
