<template>
    <div class="container">
        <form method="post" :action="'/api'+path"
              enctype="multipart/form-data">
            <input type="hidden" name="_token" :value="csrf">
            <v-separation :title="'Добавить товар в категорию ('+title+')'"/>
            <div>
                <div class="row">
                    <div class="main_info d-flex justify-content-between">
                        <div>
                            <lable for="img">Изображение товара</lable>
                            <input type="file" style="font-size: 10px; margin-top:20px;" id="img" name="img"
                                   accept='image/png' required>
                        </div>

                        <div class="col-5 card__text">
                            <label for="name">Название товара:</label>
                            <input type="text"  class="w-100 mb-2" id="name" name="name" required>
                            <lable for="short_text">Краткое описание</lable>
                            <textarea class="w-100" id="short_text" name="short_text"
                                      rows="2" required></textarea>
                        </div>
                        <div class="card__price-and-buy-button d-flex flex-column col-4 align-items-end justify-content-between">
                            <div class="row mb-5">
                                <label for="price" class="col-3">Цена:</label>
                                <div class="col-6">
                                    <input type="number" id="price" name="price" required>
                                </div>
                                <label for="price" class="col-2">руб</label>
                            </div>

                            <div class="row">
                                <label for="count" class="col-4">Количество:</label>
                                <div class="col-5">
                                    <input type="number" id="count" name="count" required>
                                </div>
                                <label for="count" class="col-1">шт</label>
                            </div>
                            <button type="submit" class="card__edit-button btn">Добавить товар</button>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <lable for="full_text">Полное описание</lable>
                    <textarea class="w-100" id="full_text" name="full_text" required></textarea>
                </div>
            </div>
            <v-separation title="Характеристики"/>
            <div class="card__specs row">
                <div class="card__name-specs col-6 d-flex flex-column">
                    <strong class="mb-2">
                        <label for="brand">Бренд</label>
                    </strong>
                    <strong class="mb-2">
                        <label for="type">Тип</label>
                    </strong>
                    <strong class="mb-2" v-for="spec_name in specs_name" :key="spec_name.id">
                        <label :for="spec_name.count_spec">{{ spec_name.name }}</label>
                    </strong>
                    <strong class="mb-2">
                        <label for="made_in">Страна производитель</label>
                    </strong>
                </div>
                <div class="card__name-specs col-6 d-flex flex-column">
                    <div class="mb-2 input">

                        <select id="brand" name="brand" v-model='selected_brand' required>
                            <option v-for="brand in brands" :value="brand">{{ brand }}</option>
                        </select>
                    </div>
                    <div class="mb-2 input">
                        <select id="type" name="type" v-model='selected_type' required>
                            <option v-for="type in types" :value=type.text>{{ type.text }}</option>
                        </select>
                    </div>
                    <div class="mb-2 input" v-for="spec_name in specs_name" :key="spec_name.id">
                        <input type="text" :id="spec_name.count_spec" :name="spec_name.count_spec" size="18" required>
                    </div>

                    <div class="mb-2 input">
                        <input type="text" id="made_in" name="made_in" size="18" required>
                    </div>
                </div>
            </div>
            <v-separation title="Звучание инструмента"/>
            <input type="file" style="font-size: 10px; margin-bottom:20px;" id="audio" name="audio"
                   accept='.mp3'>
        </form>
    </div>
</template>

<script>

import axios from "axios";
import suneditor from "suneditor";
import plugins from 'suneditor/src/plugins'
import vSeparation from '@/components/v-separation.vue'

export default {
    name: 'AddProduct',
    components: {
        vSeparation
    },
    data() {
        return {
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            title: null,
            brands: [],
            types: [],
            specs_name: [],
            path: window.location.pathname,
            selected_brand: '',
            selected_type: '',
        };
    },
    mounted() {
        let self = this;
        axios.get('/api' + window.location.pathname + '/get-info').then(function (response) {
            self.title = response.data[0];
            self.brands = response.data[1];
            self.types = response.data[2];
            self.specs_name = response.data[3];
        });
        const se = suneditor.create('full_text', {
            plugins: plugins,
            buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['paragraphStyle', 'blockquote'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['removeFormat'],
                '/', // Line break
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'lineHeight'],
                ['link', 'image', 'video'],
            ]
        });
        se.onChange = function () {
            se.save();
        }
    }
}


</script>

<style lang="scss">

.input {
    height: 25px !important;
}

input[type='number'] {
    width: 150px;
}

input[type=file]::file-selector-button {
    background-color: $add-color;
    border: 2px solid $black;
    border-radius: 5px;
}

.card__available {
    color: $add-color;
}

.card__not-available {
    color: #ff0000;
}

.review__form {
    font-size: 15px;
}

.login-redirect {
    font-size: 25px;
    display: inline;
    border-bottom: 1px solid $black;
}



.card__img-content {
    position: relative;
    width: 150px;
    height: 230px;
    margin-bottom: 30px;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    border-radius: 20px;
    z-index: 3;
    background: #E4E4E4;
    text-align: center;
}

.card__img {
    z-index: 3;
    width: auto;
    height: 95%;
    filter: drop-shadow(12px 9px 4px rgb(0, 0, 0, 0.25));
    -webkit-filter: drop-shadow(12px 9px 4px rgb(0, 0, 0, 0.25));
    position: relative;
}

.card__text {
    font-size: 15px !important;
}

.col-11 {
    padding: 0 !important;
}

.play {
    height: 40px;
    width: 40px;
    padding: 0 !important;
    margin-left: 10px;
    border-radius: 100%;
    background-color: $add-color;
    color: $white;

    span {
        text-align: center;
        font-size: 30px !important;
    }
}
</style>
