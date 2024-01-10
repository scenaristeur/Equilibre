<template>
    <div>
        <div v-if="HordeClient.api_key == '0000000000'">
            <a href="https://stablehorde.net/register" class="btn btn-success" target="_blank">obtenir votre clé d'api personnelle de la horde</a> 
           
                
                <RouterLink to="/about"><IconQuestionIcon /></RouterLink>
 
            <br>
            pour accélérer la génération de texte et d'image,
            et l'enregistrez la dans votre navigateur 
            <input id="api_input" placeholder="clé d'Api" v-model="newHordeApi" autocomplete="off"
                @change="changeApi" />
            <!-- type="password" -->

        </div>
        <div v-else>
            Votre clé d'api Horde est active. 
            <button class="btn btn-secondary btn-sm" @click="reinitApi">Reinitialiser ma clé API
                horde</button>
        </div>

    </div>
</template>

<script>
import IconQuestionIcon from '@/components/icons/IconQuestion.vue'
export default {
    name: "HordeApi",
    components: {
        IconQuestionIcon
    },
    data(){
        return {
            newHordeApi: null
        }
    },
    computed: {
        HordeClient() {
            return this.$store.state.core.HordeClient
        }
    },
    methods: {
        changeApi() {
            if (this.newHordeApi.length > 0) {
                console.log("C", this.newHordeApi)
                this.$store.commit('core/changeApi', this.newHordeApi)
            }

        },
        reinitApi() {
            this.$store.commit('core/changeApi', "0000000000")
        }
    }
}
</script>

<style scoped></style>