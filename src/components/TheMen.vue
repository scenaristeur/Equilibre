<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> {{ $t('man.ecouteur.titre') }}
      <button @click="chat" sexe="homme" type='ecouteur'>{{ $t('man.ecouteur.action') }}</button>
    </template>
    {{ $t('man.ecouteur.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading> {{ $t('man.drole.titre') }}
      <button @click="chat" sexe="homme" type='drole'>{{ $t('man.drole.action') }}</button>
    </template>

    {{ $t('man.drole.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading> {{ $t('man.fiable.titre') }}
      <button @click="chat" sexe="homme" type='fiable'>{{ $t('man.fiable.action') }}</button>
    </template>
    {{ $t('man.fiable.description') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading> {{ $t('man.creatif.titre') }}
      <button @click="chat" sexe="homme" type='creatif'>{{ $t('man.creatif.action') }}</button>
    </template>
    {{ $t('man.creatif.description') }}

  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading> Profil de Gabriel - L'Homme Irrésistible :</template>
    <ul>
      <li> Charisme Inégalé : Gabriel possède un charisme magnétique qui attire instantanément l'attention, captivant
        tous
        ceux qui croisent son regard.</li>
      <li> Écoute Empathique : Sa capacité à écouter avec empathie crée une connexion profonde, offrant un soutien
        inégalé
        dans les moments difficiles.
      </li>
      <li> Humour Contagieux : Son humour contagieux fait de chaque interaction une expérience joyeuse, rendant chaque
        instant mémorable.
      </li>
      <li> Ambition Motivante : Gabriel inspire par son ambition déterminée, encourageant à poursuivre des rêves
        audacieux
        et à repousser les limites.
      </li>
      <li>Créativité Épanouissante : Sa créativité apporte une touche d'originalité à chaque aspect de la vie, ouvrant
        la
        voie à des expériences enrichissantes.</li>
      <li>Fiabilité Indéfectible : Gabriel est d'une fiabilité absolue, offrant une stabilité rassurante dans toutes les
        circonstances.</li>
      <li>Intégrité Inaltérable : Son intégrité inaltérable crée une base solide, établissant des relations basées sur
        la
        confiance mutuelle.</li>
      <li>Passion Engagée : Sa passion pour le bénévolat et l'engagement social démontre une conscience sociale et un
        désir d'impact positif.</li>
      <li>Sens de l'Aventure Entraînant : Gabriel invite à l'aventure, créant des expériences uniques qui nourrissent
        l'esprit et le cœur.</li>
      <li>Appréciation du Beau dans Toutes les Formes : Son amour pour l'art, la nature, la littérature et la
        technologie
        montre une appréciation complète pour la beauté sous toutes ses formes.</li>
      <li>Attirance Magnétique : Gabriel incarne l'attirance puissante du premier type de femmes, ajoutant un élément de
        séduction irrésistible.</li>
      <li>Maîtrise Sensuelle : Il est une bête de sexe, maîtrisant l'art de l'intimité pour créer des expériences
        sensuelles inoubliables.</li>


    </ul>
    <button @click="chat" sexe="homme" type='irresistible'>Discuter avec Gabriel - L'Homme Irrésistible
      :</button>

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