<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold"> DKIT </q-toolbar-title>

        <TheThemeWrapper />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheThemeWrapper from 'components/TheThemeWrapper.vue';
</script>
