

<template>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Une Femme Partageant des Croyances Philosophiques </template>
    Cette femme partage les valeurs, les croyances et la vision du monde de l'individu. Elle offre une connexion profonde
    sur le plan philosophique et spirituel.
    <button @click="chat" sexe="femme" type='spirituelle'>Discuter avec une femme spirituelle</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Une Femme Créative pour Stimuler l'Esprit</template>
    Cette femme incarne l'aspect intellectuel et créatif de la vie. Elle peut inspirer, encourager la croissance
    personnelle et nourrir l'esprit par le partage d'idées et d'expériences intellectuelles.
    <button @click="chat" sexe="femme" type='creative'>Discuter avec une femme créative</button>
  </WelcomeItem>



  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Une Femme Maternelle pour le Réconfort</template>
    Cette femme offre un soutien émotionnel et un sentiment de sécurité. Elle peut jouer le rôle de la mère, fournissant
    un refuge contre les pressions extérieures et les moments difficiles.
    <button @click="chat" sexe="femme" type='maternelle'>Discuter avec une femme maternelle</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Une Femme Attirante pour le Sexe</template>
    Cette femme représente la dimension physique et sexuelle de la vie.
    Elle peut satisfaire les besoins de désir et de passion, offrant une connexion charnelle qui est importante pour de
    nombreuses personnes.
    <button @click="chat" sexe="femme" type='attirante'>Discuter avec une femme attirante</button>
  </WelcomeItem>
</template>


<script >
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