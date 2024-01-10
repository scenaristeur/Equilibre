<template>
    <div>

    </div>
</template>

<script>

    export default {
        name: "HordeVue",
        created() {
           
            console.log("HORDE-VUE", this.$store.state.core.HordeClient)
            this.$store.state.core.HordeClient.log()
        }
    }
</script>

<style scoped>

</style>