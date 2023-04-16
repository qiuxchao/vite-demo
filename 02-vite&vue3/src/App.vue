<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

const count = ref(10);
</script>

<template>
	<div>
		<div style="border: 1px solid goldenrod; padding: 10px; margin-bottom: 10px;">
			<h1 class="text-green">App Page</h1>
			<h3>this is App page!</h3>
			<p>
				<!--使用 router-link 组件进行导航 -->
				<!--通过传递 `to` 来指定链接 -->
				<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
				<router-link to="/" style="margin-right: 10px;">Go to Home</router-link>
				<router-link to="/about">Go to About</router-link>
			</p>
			<Counter :count="count" @increment="val => count = val" @decrement="val => count = val" />
		</div>

		<router-view></router-view>
	</div>
</template>