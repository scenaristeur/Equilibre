<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> {{ $t('homme.ecouteur.titre') }}
      <button @click="chat" sexe="homme" type='ecouteur'>{{ $t('homme.ecouteur.action') }}</button>
    </template>
    {{ $t('homme.ecouteur.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading> {{ $t('homme.drole.titre') }}
      <button @click="chat" sexe="homme" type='drole'>{{ $t('homme.drole.action') }}</button>
    </template>

    {{ $t('homme.drole.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading> {{ $t('homme.fiable.titre') }}
      <button @click="chat" sexe="homme" type='fiable'>{{ $t('homme.fiable.action') }}</button>
    </template>
    {{ $t('homme.fiable.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading> {{ $t('homme.creatif.titre') }}
      <button @click="chat" sexe="homme" type='creatif'>{{ $t('homme.creatif.action') }}</button>
    </template>
    {{ $t('homme.creatif.description') }}

  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading> {{ $t('homme.irresistible.titre') }}
      <button @click="chat" sexe="homme" type='irresistible'>{{ $t('homme.irresistible.action') }}</button>
    </template>
    {{ $t('homme.irresistible.description') }}

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