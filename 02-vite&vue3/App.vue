<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

const count = ref(10);
</script>

<template>
	<Counter :count="count" @increment="val => count = val" @decrement="val => count = val" />
</template>