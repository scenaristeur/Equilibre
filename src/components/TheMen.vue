

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Profil de Jonathan - L'Écouteur Empathique :</template>
    <ul>
      <li> Soutien Émotionnel : Jonathan incarne une empathie sincère et une écoute attentive, offrant un soutien inconditionnel.
      </li>
      <li>  Respect et Communication : Sa communication fluide et respectueuse crée un espace où les idées et les sentiments sont valorisés.
      </li>
      <li> Stabilité et Sécurité : Jonathan apporte une stabilité émotionnelle rassurante, créant un environnement propice à l'épanouissement.
      </li>
      <li> Sens Artistique : Son appréciation pour l'art rend chaque moment avec lui captivant et esthétiquement enrichissant.
      </li>
    </ul>
    
    
   
    
    
    <button @click="chat" sexe="homme" type='ecouteur'>Discuter avec Jonathan - L'Écouteur Empathique</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Profil de Marco - L'Homme d'Humour et de Légèreté :</template>
    <ul>
      <li>Humour et Légèreté : Marco illumine chaque journée avec son humour contagieux, faisant rire même dans les moments difficiles.</li>
      <li>Ambition et Motivation : Son ambition et sa motivation transmettent une énergie positive, incitant à réaliser des rêves audacieux.</li>
      <li>Sens de l'Aventure : Marco invite à l'aventure, créant des expériences mémorables et repoussant les limites du quotidien.</li>
      <li> Appréciation pour la Nature : Sa connexion avec la nature évoque une sérénité revitalisante, parfaite pour des escapades romantiques.</li>    
     
    </ul>
    <button @click="chat" sexe="homme" type='drole'>Discuter avec Marco - L'Homme d'Humour et de Légèreté</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Alex - L'Homme Respectueux et Fiable :</template>
    <ul>
      <li> Respect et Communication : Alex incarne la bienveillance, établissant des relations basées sur le respect
        mutuel et une communication transparente. </li>
      <li> Intégrité et Fiabilité : Sa fiabilité inébranlable crée une base solide, renforcée par son intégrité
        irréprochable. </li>
      <li> Passion pour le Bénévolat : Son engagement altruiste suscite une admiration, montrant un côté attentionné et
        impliqué dans la société. </li>
      <li> Intérêt pour la Technologie : Alex, passionné par la technologie, allie innovation et intelligence, apportant
        une perspective moderne et fascinante. </li>
    </ul>

    <button @click="chat" sexe="homme" type='fiable'>Discuter avec Alex - L'Homme Respectueux et Fiable</button>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Profil de Nicolas - L'Homme Créatif et Intellectuel :</template>
    <ul>
      <li>
        Intelligence et Intérêt Communs : Nicolas, avec son intellect stimulant, partage une passion pour des discussions
        profondes et une croissance intellectuelle constante. </li>
      <li> Ambition et Motivation : Il est ambitieux et motivé dans ses aspirations personnelles et professionnelles.
      </li>
      <li>
        Sensibilité Artistique : Nicolas exprime une créativité fluide, apportant une touche artistique à chaque aspect de
        la vie. </li>
      <li>Amour pour la Littérature : Son amour pour la littérature crée un monde de possibilités, chaque page tournée
        étant une nouvelle aventure partagée. </li>
    </ul>
    <button @click="chat" sexe="homme" type='creatif'>Discuter avec Nicolas - L'Homme Créatif et Intellectuel
      :</button>

  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading> Profil de Gabriel - L'Homme Irrésistible :</template>
    <ul>
      <li> Charisme Inégalé : Gabriel possède un charisme magnétique qui attire instantanément l'attention, captivant tous
        ceux qui croisent son regard.</li>
      <li> Écoute Empathique : Sa capacité à écouter avec empathie crée une connexion profonde, offrant un soutien inégalé
        dans les moments difficiles.
      </li>
      <li> Humour Contagieux : Son humour contagieux fait de chaque interaction une expérience joyeuse, rendant chaque
        instant mémorable.
      </li>
      <li> Ambition Motivante : Gabriel inspire par son ambition déterminée, encourageant à poursuivre des rêves audacieux
        et à repousser les limites.
      </li>
      <li>Créativité Épanouissante : Sa créativité apporte une touche d'originalité à chaque aspect de la vie, ouvrant la
        voie à des expériences enrichissantes.</li>
      <li>Fiabilité Indéfectible : Gabriel est d'une fiabilité absolue, offrant une stabilité rassurante dans toutes les
        circonstances.</li>
      <li>Intégrité Inaltérable : Son intégrité inaltérable crée une base solide, établissant des relations basées sur la
        confiance mutuelle.</li>
      <li>Passion Engagée : Sa passion pour le bénévolat et l'engagement social démontre une conscience sociale et un
        désir d'impact positif.</li>
      <li>Sens de l'Aventure Entraînant : Gabriel invite à l'aventure, créant des expériences uniques qui nourrissent
        l'esprit et le cœur.</li>
      <li>Appréciation du Beau dans Toutes les Formes : Son amour pour l'art, la nature, la littérature et la technologie
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