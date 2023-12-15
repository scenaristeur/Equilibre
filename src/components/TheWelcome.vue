<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Confessions d'un Barjo</template>

    Dans
    <a
      href="https://fr.wikipedia.org/wiki/Confessions_d%27un_barjo"
      target="_blank"
      >"Confessions d'un Barjo"</a
    >, de Philip K.Dick, le personnage principal, Jack Isidore, évoque son
    besoin de quatre types de femmes pour être équilibré :
    <ul>
      <li>une femme attirante pour le sexe,</li>
      <li>une femme maternelle pour le réconfort,</li>
      <li>une femme créative pour stimuler son esprit,</li>
      <li>et une femme qui partage ses croyances philosophiques.</li>
    </ul> 
   <p>
    Cette idée illustre les complexités et les contradictions de la psychologie
    humaine qui sont souvent explorées dans les œuvres de Philip K. Dick. 
   </p> 


<!-- 
    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started. -->
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Equilibre</template>
    L'application Equilibre vous permet de discuter avec le profil de personne qui correspond à votre état d'edprit du moment.
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
    <template #heading>Avec qui souhaiteriez-vous discuter ?</template>
J'aimerais discuter avec 

<nav>
  <RouterLink to="/femme">Une Femme</RouterLink>
  <RouterLink to="/homme">Un Homme</RouterLink>
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





</template>
