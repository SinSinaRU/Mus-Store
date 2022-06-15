<template>
    <div class="v-element-of-orders">
        <div class="row">
            <div class="d-flex justify-content-around text-center align-items-center">
                <div class="col-3">
                    {{ number }}
                </div>
                <div class="col-3">
                    <div v-for="product in product_parsed">{{product.name}}</div>

                </div>
                <div class="col-3">
                    {{ price }}
                </div>
                <div class="col-3">
                    {{ status }}
                </div>
            </div>
        </div>
        <div class="horizontal-line"></div>
    </div>

</template>

<script>

export default {
    name: "v-element-of-orders",
    data() {
        return {
            product_parsed:[]
        }
    },
    props: ['status', 'product', 'price', 'number'],
    mounted() {

        this.product_parsed = JSON.parse(this.product)
    }
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

.v-element-of-orders {
    margin: 15px 0 5px 0;
    padding: 0;
}


</style>
