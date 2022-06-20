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
    margin-top: 2rem;
    padding-top: 1rem;
    width: calc(100vw - 1rem);
    max-width: 900px;
  }

  footer p, footer a {
    opacity: 0.7;
    transition: opacity 0.3s ease-out;
  }

  footer:hover p, footer:hover a {
    opacity: 1;
  }

  footer.bottom p, footer.bottom a{
    opacity: 1;
  }

</style>
