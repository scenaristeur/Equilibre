<template>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      {{ $t('femme.spirituelle.titre') }}
      <button @click="chat" sexe="femme" type='spirituelle'>{{ $t('femme.spirituelle.action') }}</button>
    </template>
    {{ $t('femme.spirituelle.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      {{ $t('femme.creative.titre') }}
      <button @click="chat" sexe="femme" type='creative'>{{ $t('femme.creative.action') }}</button>
    </template>
    {{ $t('femme.creative.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      {{ $t('femme.maternelle.titre') }}
      <button @click="chat" sexe="femme" type='maternelle'>{{ $t('femme.maternelle.action') }}</button>
    </template>
    {{ $t('femme.maternelle.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      {{ $t('femme.attirante.titre') }}
      <button @click="chat" sexe="femme" type='attirante'>{{ $t('femme.attirante.action') }}</button>
    </template>
    {{ $t('femme.attirante.description') }}

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