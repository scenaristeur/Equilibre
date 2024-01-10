<template>
  <div class="about">
    <ul>
      <li>pour obtenir une clé API Horde, en cliquant sur <a href="https://stablehorde.net/register" target="_blank">ce lien</a> 
        qui vous permettra d'être prioritaire et de générer le texte et les images plus rapidement. Pour l'API, il n'est pas nécessaire de se connecter sur l'un des providers indiqués.
        Vous avez juste à indiquer un nom d'utilisateur (Display Name) et à noter le code qui sera généré dans le bandeau orange, copiez-le. 
        Garder ce code dans un coin et insérez le dans le champ de saisie "clé d'API" de la page <RouterLink to="/"> Accueil</RouterLink>
        <ul>
          <li>
            <a href="https://stablehorde.net/" target="_blank">plus d'infos sur le fonctionnement de la horde</a>
          </li>
          <!-- <li>

          </li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
