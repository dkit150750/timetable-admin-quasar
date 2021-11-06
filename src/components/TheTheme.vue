<template>
  <q-btn outline dense round color="white" :icon="icon" @click="changeTheme" />
</template>

<script setup lang="ts">
import { useQuasar, LocalStorage } from 'quasar';
import { computed } from 'vue';

const $q = useQuasar();

const theme = LocalStorage.getItem('theme') || 'light';

if (theme === 'light') {
  $q.dark.set(false);
} else {
  $q.dark.set(true);
}

const changeTheme = () => {
  $q.dark.set(!$q.dark.isActive);
  LocalStorage.set('theme', $q.dark.isActive ? 'dark' : 'light');
};

const icon = computed(() => ($q.dark.isActive ? 'dark_mode' : 'light_mode'));
</script>
