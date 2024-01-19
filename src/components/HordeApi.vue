<template>
    <div>
        <div v-if="HordeClient.api_key == '0000000000'">
            <a href="https://stablehorde.net/register" class="btn btn-success" target="_blank">{{ $t('horde_api.getKey') }}</a> 
           
                
                <RouterLink to="/about"><IconQuestionIcon /></RouterLink>
 
            <br>
            {{ $t('horde_api.accelerate') }} 
            <input id="api_input" :placeholder="$t('horde_api.keyPlaceholder')" v-model="newHordeApi" autocomplete="off"
                @change="changeApi" />
            <!-- type="password" -->

        </div>
        <div v-else>
            {{ $t('horde_api.keyActive') }} 
            <button class="btn btn-secondary btn-sm" @click="reinitApi">{{ $t('horde_api.keyInit') }} </button>
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