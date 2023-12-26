<template>
    <div>
<input type="text" v-model="input" placeholder="saisissez ici vos pensées" @keyup.enter="send" />    
<div>{{  graph }}</div>
    </div>
</template>

<script>
    export default {
        name: "EmbedGraph",
        data(){
            return {
                input: '',
                graph: null
            }
        },
        methods: {
            send(){
                console.log(this.input)
                this.input=""
            }
        }
    }
</script>

<style scoped>

</style>