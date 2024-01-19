<template>
  <div class="about">
    <ul>
      <li>{{ $t('horde_api.explanation1') }}<a href="https://stablehorde.net/register" target="_blank">{{
        $t('horde_api.this_link') }}</a>
        {{ $t('horde_api.explanation2') }}
        <RouterLink to="/"> {{ $t('title.home') }}</RouterLink>
        <ul>
          <li>
            <a href="https://stablehorde.net/" target="_blank">{{ $t('horde_api.more_horde_info') }}</a>
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
