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
const emits = defineEmits(['increment', 'decrement']);

// 加
const increment = () => {
	emits('increment', props.count + 1);
};

// 减
const decrement = () => {
	emits('decrement', props.count - 1);
};
</script>

<template>
	<div>
		<h1 class="font-bold text-3xl my-2">{{ count }}</h1>
		<button class="px-2 bg-slate-400 rounded-sm" @click="increment" style="margin-right: 10px;">+</button>
		<button class="px-2 bg-slate-400 rounded-sm" @click="decrement">-</button>
	</div>
</template>