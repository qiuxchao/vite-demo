<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

const count = ref(10);
</script>

<template>
	<div>
		<div style="border: 1px solid goldenrod; padding: 10px; margin-bottom: 10px;">
			<h1 class="text-4xl font-bold text-[red]">App Page</h1>
			<h3 class="text-2xl">this is App page!</h3>
			<p class="text-[blue]">
				<!--使用 router-link 组件进行导航 -->
				<!--通过传递 `to` 来指定链接 -->
				<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
				<router-link to="/" class="underline" style="margin-right: 10px;">Go to Home</router-link>
				<router-link class="underline" to="/about">Go to About</router-link>
			</p>
			<Counter :count="count" @increment="val => count = val" @decrement="val => count = val" />
		</div>

		<router-view></router-view>
	</div>
</template>