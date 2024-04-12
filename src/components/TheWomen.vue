<template>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      {{ $t('woman.spirituelle.titre') }}
      <button @click="chat" sexe="femme" type='spirituelle'>{{ $t('woman.spirituelle.action') }}</button>
    </template>
    {{ $t('woman.spirituelle.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      {{ $t('woman.creative.titre') }}
      <button @click="chat" sexe="femme" type='creative'>{{ $t('woman.creative.action') }}</button>
    </template>
    {{ $t('woman.creative.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      {{ $t('woman.maternelle.titre') }}
      <button @click="chat" sexe="femme" type='maternelle'>{{ $t('woman.maternelle.action') }}</button>
    </template>
    {{ $t('woman.maternelle.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      {{ $t('woman.attirante.titre') }}
      <button @click="chat" sexe="femme" type='attirante'>{{ $t('woman.attirante.action') }}</button>
    </template>
    {{ $t('woman.attirante.description') }}

  </WelcomeItem>
</template>


<script>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'

export default {
  name: 'TheWomen',
  components: {
    WelcomeItem,
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon
  },
  methods: {
    chat(e) {
      let sexe = e.target.getAttribute('sexe')
      let type = e.target.getAttribute('type')
      console.log('chat', sexe, type);
      this.$store.commit('core/initChat', { sexe, type })
      this.$router.push('/chatbox')
    }
  }
}
// import SupportIcon from './icons/IconSupport.vue'
</script>