<template>
  <div id='main'>
    <h2>
      {{ $t('mainpage.title') }}<span class="animating-exclamation">!</span>
    </h2>
    <img src="../assets/images/dandelion.png" />
    <p v-html="$t('mainpage.introduction')"></p>
    <p v-html="$t('mainpage.study')"></p>
    <p v-html="$t('mainpage.skills')"></p>
    <p v-html="$t('mainpage.achievements')"></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
@import '../assets/styles/animating-exclamation'
</style>
