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
    <template #heading>{{ $t('title.confession_barjo') }}</template>

    {{ $t('title.Dans') }}
    <a :href="$t('title.wikipedia_link_barjo')" target="_blank">{{ $t('title.confession_barjo') }}</a> {{
      $t('title.isidore') }}
    <ul>
      <li>{{ $t('title.attirante') }}</li>
      <li>{{ $t('title.maternelle') }}</li>
      <li>{{ $t('title.creative') }}</li>
      <li>{{ $t('title.spirituelle') }}</li>
    </ul>
    <p>
      {{ $t('title.idee') }}
    </p>

  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ $t('title.equilibre') }}</template>
    {{ $t('title.appli_equi') }}

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading></template>
    {{$t('title.wouldLikeToTalkTo')}}

    <nav>
      <RouterLink to="/femme">{{ $t('title.A_Woman') }}</RouterLink>
      <RouterLink to="/homme">{{ $t('title.A_Man') }}</RouterLink>
    </nav>

  </WelcomeItem>
</template>
