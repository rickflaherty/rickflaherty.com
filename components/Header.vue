<template>
  <header>
    <h1 class="site-title" v-if="getRouteBaseName()!=='index'">
      <nuxt-link :to="localePath('/')">{{ $t('title') }}</nuxt-link>
    </h1>
    <h1 class="site-title" else>{{ $t('title') }}</h1>
    <div class="header-right">
      <LangSwitch />
    </div>

  </header>
</template>

<style>
  header {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: .5rem 0 .25rem 0;
    z-index: 1; /* To fix animating exclamation to go over the header. */
    background-color: var(--bkg);
    border-bottom: 3px solid var(--outline);
    color: var(--emphasis);
    transition: padding .3s ease-out;
  }

  header h1 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1.site-title {
    text-transform: uppercase;
    font-stretch: condensed;
    transform-origin: left;
    transition: transform .3s ease-out;
  }

  :lang(ja) body {
    font-size: 0.8em;
  }

  :lang(ja) h1.site-title {
    letter-spacing: -0.1em;
  }

  header li {
    display: list-item;
  }

  .minimalHeader {
    padding: .125rem 0 .125rem 0;
  }

  .minimalHeader h1.site-title {
    transform: scale(0.75);
  }

  .minimalHeader ul {
    margin: auto 0;
  }

  .minimalHeader li {
    display: inline;
  }


  .header-right{
    width: 2rem;
    height: fit-content;
    margin: auto 0;
  }
</style>
