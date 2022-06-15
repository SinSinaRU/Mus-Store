<template>
    <div class="v-element-of-profile-management">
        <div class="d-flex justify-content-around text-center align-items-center mb-2">
            <div class="col-3">
                {{ data.email }}
            </div>
            <div class="col-3">
                {{ data.date }}
            </div>
            <div class="col-3">
                {{ data.role }}
            </div>
            <router-link class="col-3" :to="'/admin/profile-management/'+data.id">
                <button class="btn check-info">Просмотр информации</button>
            </router-link>
        </div>
        <div class="horizontal-line"></div>
    </div>


</template>

<script>

export default {
    name: "v-element-of-profile-management",
    props: {data: JSON}
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
.check-info{
    padding: 0 !important;
}

</style>
