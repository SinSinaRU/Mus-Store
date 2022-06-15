<template>

  <div class="container ">
    <v-separation title="Популярные категории"/>
    <div class="raw ">
      <div class="d-flex flex-wrap align-content-center justify-content-between ms-1">
        <v-category-element class="col-lg-3 col-6" title="Акустические гитары" url="/admin/category/acoustic-guitars" img="Acoustic Guitar.png"/>
        <v-category-element class="col-lg-3 col-6" title="Электрогитары" url="/admin/category/electric-guitars" img="Electric Guitar.png"/>
        <v-category-element class="col-lg-3 col-6" title="Студийные наушники" url="/admin/category/studio-headsets" img="Studio Headset.png"/>
        <v-category-element class="col-lg-3 col-6" title="Барабанные установки" url="/admin/category/drum-kits" img="Drum Kit.png"/>
        <v-category-element class="col-lg-3 col-6" title="Синтезаторы" url="/admin/category/synthesizers" img="Synthesizer.png"/>
        <v-category-element class="col-lg-3 col-6" title="Студийные микрофоны" url="/admin/category/studio-microphone" img="Studio Microphone.png"/>
        <v-category-element class="col-lg-3 col-6" title="Акустические системы" url="/admin/category/acoustic-systems" img="Acoustic System.png"/>
        <v-category-element class="col-lg-3 col-6" title="Усилители для гитар" url="/admin/category/guitar-amplifiers" img="Guitar Amplifiers.png"/>
      </div>
    </div>
  </div>
</template>

<script>

import vSeparation from '@/components/v-separation.vue'
import vCategoryElement from '@/components/v-category-element.vue'

export default {
  name: 'HomeView',
  components: {
    vSeparation,
    vCategoryElement
  }
}
</script>
