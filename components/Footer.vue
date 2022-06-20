<template>
  <footer>
    <p v-if="this.$route.path === '/me'">
      Learn about <a href="https://rickflaherty.tumblr.com">what&nbspI've&nbspdone</a> or <a href="mailto:contactme@rickflaherty.com">email&nbspme</a>!
    </p>
    <p v-else>Learn <nuxt-link :to="localePath('me')">about&nbspme</nuxt-link> and <a href="https://rickflaherty.tumblr.com">what&nbspI've&nbspdone</a> or <a href="mailto:contactme@rickflaherty.com">email&nbspme</a>!
    </p>
  </footer>
</template>

<style>
  footer {
    background-color: var(--bkg);
    border-top: 3px solid var(--outline);
    margin-top: 1.5rem;
    padding-top: 0.5rem;
    width: calc(100vw - 1rem);
    max-width: 900px;
  }

  footer p, footer a {
    opacity: 0.7;
    transition: opacity 0.3s ease-out;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }

  footer:hover p, footer:hover a {
    opacity: 1;
  }

  footer.bottom p, footer.bottom a{
    opacity: 1;
  }

</style>
