<template>
  <!-- <div class="lang-switch" v-bind:class="[isAlt ? 'switch-alt' : '']" @click="isAlt= !isAlt"> -->
  <div class="lang-switch" v-bind:class="{'switch-alt': isAlt}" @click="altSwitch">
    <nuxt-link v-for="lang in $i18n.locales.filter(i => i.code !== this.$i18n.locale)" :key="lang.code" :to="switchLocalePath(lang.code)">
      <span>Ａ</span>
      <span>あ</span>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {isAlt: true}
    },
    methods: {
      altSwitch () {
        this.isAlt= !this.isAlt
      }
    }
  }
</script>

<style>

.lang-switch {
  position: relative;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  font-family: 'Helvetica Neu', Helvetica, Arial, sans-serif;
  line-height: 1.23;
  font-size: 1.4rem;
}

.lang-switch::before {
  position: absolute;
  content: '';
  bottom: .1em;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: var(--outline);
  transform-origin: center bottom;
  transform: rotate(0deg);
  transition: transform .2s ease-in, width .3s, bottom .3s, left .3s, opacity .4s ease-in;
}

.lang-switch:hover::before {
  bottom: .64em;
  left: .27em;
  width: 65%;
  transform: rotate(-68deg);
  transition: transform .18s ease-out, width .3s, bottom .3s, left .32s, opacity .1s;
}

.lang-switch:active::before {
  bottom: .62em;
  left: -.5em;
  transform: rotate(-68deg);
  transition: transform .18s ease-out, width .3s, bottom .3s, left .15s, opacity .2s;
  opacity: 0;
}

.lang-switch span {
  display: block;
  width: 100%;
}

/* First and Second languages */

.lang-switch span:first-child{
  clip-path: polygon(0 0, -200% 0, -200% 100%, 0 100%, 100% 100%, 100% 0);
  transition: clip-path 0s, text-indent .3s;
}

.lang-switch span:last-child{
  margin-top: -1.22em;
  opacity: 0.5;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 100% 100%);
  transition: clip-path 0s, text-indent .3s;
}

.lang-switch:hover span:first-child{
  clip-path: polygon(0 0, -200% 0, -200% 100%, 0 200%, 100% -100%, 100% -100%);
  text-indent: 0;
  transition: clip-path .3s, text-indent .3s;
}

.lang-switch:hover span:last-child{
  clip-path: polygon(0 200%, 100% -100%, 100% 0, 100% 100%);
  text-indent: .4em;
  transition: clip-path .3s, text-indent .3s;
}

.lang-switch:active span:first-child{
  clip-path: polygon(0 0, -200% 0, -200% 100%, -200% 200%, -100% -100%, -100% -100%);
  text-indent: 0;
  transition: clip-path .3s, text-indent .2s;
}

.lang-switch:active span:last-child{
  clip-path: polygon(-200% 200%, -100% -100%, 100% 0, 100% 100%);
  text-indent: 0;
  opacity: 1;
  transition: clip-path .3s, text-indent .2s;
}

/* Other Direction */

.lang-switch.switch-alt {
  top: 16px;
}

.lang-switch.switch-alt:hover::before {
  bottom: .64em;
  left: .23em;
  width: 65%;
  transform: rotate(112deg);
  transition: transform .18s ease-out, width .3s, bottom .3s, left .32s, opacity .1s;
}

.lang-switch.switch-alt:active::before {
  bottom: .62em;
  left: .65em;
  transform: rotate(112deg);
  transition: transform .18s ease-out, width .3s, bottom .3s, left .15s, opacity .2s;
  opacity: 0;
}

/* First and Second languages */
.lang-switch.switch-alt span:last-child{
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 100% 0, 0 0);
  transition: clip-path 0s, text-indent .3s;
}

.lang-switch.switch-alt span:first-child{
  margin-top: -1.22em;
  opacity: 0.5;
  clip-path: polygon(-100% 100%, -100% 100%, 100% 100%, 0 100%);
  transition: clip-path 0s, text-indent .3s;
}

.lang-switch.switch-alt:hover span:last-child{
  clip-path: polygon(100% -100%, 0 200%, 100% 100%, 100% 0, 0 0);
  text-indent: .4em;
  transition: clip-path .3s, text-indent .3s;
}

.lang-switch.switch-alt:hover span:first-child{
  clip-path: polygon(-100% 0, -100% 100%, 0 200%, 100% -100%);
  text-indent: 0;
  transition: clip-path .3s, text-indent .3s;
}

.lang-switch.switch-alt:active span:last-child{
  clip-path: polygon(300% -100%, 200% 200%, 100% 100%, 100% 0, 0 0);
  text-indent: 0;
  transition: clip-path .3s, text-indent .2s;
}

.lang-switch.switch-alt:active span:first-child{
  opacity: 1;
  clip-path: polygon(-100% 0, -100% 100%, 200% 200%, 300% -100%);
  text-indent: 0;
  transition: clip-path .3s, text-indent .2s;
}

/* Remove <a> styling */
.lang-switch a {
  font-weight: normal;
  text-decoration: none;
  color: var(--emphasis);
}

.lang-switch a:hover {
  font-style: normal;
  text-decoration: none;
}

.lang-switch a:active{
  opacity: 1;
}
</style>
