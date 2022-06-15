<template>
    <div class="v-element-of-market">
        <div class="product row">
            <div class="product__content d-flex justify-content-around">
                <div class="product__img-container col-3">
                    <img :src="'/uploads/img/'+img" :alt=title class="product__img"/>
                </div>
                <div class="product__info d-flex flex-column  col-5">
                    <router-link :to="'/product/'+ encodeURIComponent(title.toLowerCase())"
                                 class="product__title mb-4 text-center">
                        {{ title }}
                    </router-link>
                    <p class="product__short-info"> {{ short_text }}</p>
                </div>
                <div class="product__price-and-buy-button d-flex flex-column col-4 align-items-end">
                    <strong class="product__price mb-auto">{{ price }} руб</strong>
                    <div class="product__available" v-if="Number(isAvailable) > 0">
                        Есть в наличии
                    </div>
                    <div class="product__not-available" v-else>
                        Нет в наличии
                    </div>
                    <router-link :to="'/product/'+ encodeURIComponent(title.toLowerCase())">
                        <button class="product__buy-button btn">Купить</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="horizontal-line"></div>
    </div>

</template>

<script>

export default {
    name: "v-element-of-market",
    props: ['title', 'img', 'price', 'short_text', 'isAvailable']
}
</script>

<style lang="scss">
.horizontal-line {
    filter: drop-shadow(0px 3px 3px rgb(0, 0, 0, 0.45));
    content: "";
    width: 100%;
    height: 3px;
    background-color: $add-color;
    display: block;
    border-radius: 3px;
    z-index: 0;
}

.v-element-of-market {
    margin: 10px;
    padding: 0;
}

.product {
    border-radius: 5px;

    &__available {
        color: $add-color;
    }

    &__not-available {
        color: #ff0000
    }

    &__content {
        margin-bottom: 20px;
    }

    &__price-and-buy-button {
        right: 0;
    }

    &__img {
        filter: drop-shadow(12px 5px 4px rgb(0, 0, 0, 0.25));
        -webkit-filter: drop-shadow(12px 5px 4px rgb(0, 0, 0, 0.25));
        height: 250px;
        width: auto !important;
    }

    &__short-info, &__available, &__not-available {
        font-size: 20px;
    }

    &__title {
        color: $black;

        &:hover {
            color: $add-color;
        }
    }

}

</style>
