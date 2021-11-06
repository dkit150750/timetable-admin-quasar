<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold"> DKIT </q-toolbar-title>

        <TheThemeWrapper />
      </q-toolbar>
    </q-header>

    <q-drawer :width="250" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list padding>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import TheThemeWrapper from 'components/TheThemeWrapper.vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Группы',
    icon: 'school',
    link: '/groups',
  },
    {
    title: 'Изменения',
    icon: 'change_circle',
    link: '/changes',
  },
  {
    title: 'Преподаватели',
    icon: 'person_outline ',
    link: '/teachers',
  },
  {
    title: 'Дисциплины',
    icon: 'architecture',
    link: '/disciplines',
  },
  {
    title: 'Кабинеты',
    icon: 'filter_1',
    link: '/cabinets',
  },
  {
    title: 'Время',
    icon: 'schedule',
    link: '/times',
  },
];

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    TheThemeWrapper,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
