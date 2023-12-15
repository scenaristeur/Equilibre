<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Une Femme Attirante pour le Sexe</template>
    Cette femme représente la dimension physique et sexuelle de la vie. 
    Elle peut satisfaire les besoins de désir et de passion, offrant une connexion charnelle qui est importante pour de nombreuses personnes.
    <!-- <a href="https://vuejs.org/" target="_blank" rel="noopener">Discuter avec une femme attirante / Voir les photos de femmes attirantes.</a> -->
    <nav>
      <RouterLink to="/chatbox">Discuter avec une femme attirante.</RouterLink>
    </nav>


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Une Femme Maternelle pour le Réconfort</template>
    Cette femme offre un soutien émotionnel et un sentiment de sécurité. Elle peut jouer le rôle de la mère, fournissant un refuge contre les pressions extérieures et les moments difficiles.
    <nav>
      <RouterLink to="/femme-maternelle">Discuter avec une femme maternelle.</RouterLink>
    </nav>
    <!-- This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>. -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Une Femme Créative pour Stimuler l'Esprit</template>
    Cette femme incarne l'aspect intellectuel et créatif de la vie. Elle peut inspirer, encourager la croissance personnelle et nourrir l'esprit par le partage d'idées et d'expériences intellectuelles.
    
    <nav>
      <RouterLink to="/femme-creative">Discuter avec une femme créative.</RouterLink>
    </nav>
    
    <!-- Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit. -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Une Femme Partageant des Croyances Philosophiques </template>
    Cette femme partage les valeurs, les croyances et la vision du monde de l'individu. Elle offre une connexion profonde sur le plan philosophique et spirituel.

<nav>
  <RouterLink to="/femme-spirituelle">Discuter avec une femme spirituelle.</RouterLink>
</nav>



    <!-- Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world. -->
  </WelcomeItem>

  <!-- <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem> -->
</template>
