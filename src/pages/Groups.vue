<template>
<p>s</p>
</template>

<script async setup lang="ts">import GroupService from 'src/services/GroupService';
import {computed} from 'vue';

const groupsAll = await GroupService.getItems();
// const groupsFirst = computed(() => groupsAll);
console.log(groupsAll);

</script>

