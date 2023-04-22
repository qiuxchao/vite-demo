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
	<div class="p-10">
		<button class="px-5 bg-pink-400 rounded-md text-white text-[20px]" @click="decrement">-</button>
		<span class="mx-10 font-medium text-[30px]">{{count}}</span>
		<button class="px-5 bg-blue-400 rounded-md text-white text-[20px]" @click="increment">+</button>
	</div>
</template>