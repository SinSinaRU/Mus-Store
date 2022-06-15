<template>
    <div class="v-listing">
        <div class="listing row row-cols-5 w-100 align-items-center">
            <div class="col">
                <button class="listing__to-first-page" @click="change_page(1)">
                    <span class="material-icons">first_page</span>
                </button>
            </div>
            <div class="col">
                <button class="listing__to-perv-page" @click="change_page(current_page - 1)">
                    <span class="material-icons">navigate_before</span>
                </button>
            </div>
            <div class="col">
                <p class="listing__page-number">{{ current_page }}</p>
            </div>
            <div class="col">
                <button class="listing__to-next-page" @click="change_page(current_page + 1)">
                    <span class="material-icons">navigate_next</span>
                </button>
            </div>
            <div class="col">
                <button class="listing__to-last-page" @click="change_page(max_page)">
                    <span class="material-icons">last_page</span>
                </button>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "v-listing",
    props: ['max_page'],
    data() {
        return {
            current_page: 1
        }
    },
    methods: {
        change_page(number) {
            if (number >= 1 && number <= this.max_page)
                this.current_page = number;

            this.$emit("current_page", this.current_page);
        }
    }
}
</script>

<style lang="scss">
.v-listing {
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
}

.listing {
    margin: 0 !important;

    p {
        margin: 0 auto;
        padding: 0 10px;
        font-size: 1.4rem;
    }


    button {
        height: 2rem;
        width: auto;
        border-radius: 100%;
        background-color: $add-color;
        color: $white;

        span {
            text-align: center;
            font-size: 2rem;
        }

        &:hover {
            box-shadow: 0 0 10px $shadow-color;
        }
    }
}
</style>
