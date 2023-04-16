<script setup>
import { ref } from 'vue';

// 通过 defineProps 定义 props
const props = defineProps({
	count: {
		type: Number,
		default: 0,
	},
});

// 通过 defineEmits 定义 emits
const emits = defineEmits(['increment']);

// 加
const increment = () => {
	emits('increment', props.count + 1);
};

// 减
const decrement = () => {
	emits('increment', props.count - 1);
};
</script>

<template>
	<div>
		<h1>{{ count }}</h1>
		<button @click="increment" style="margin-right: 10px;">+</button>
		<button @click="decrement">-</button>
	</div>
</template>