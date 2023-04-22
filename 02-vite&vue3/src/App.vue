<script setup>
import { ref } from 'vue';
import { useCounterStore } from './store';
import Counter from './components/Counter.vue';

const countStore = useCounterStore();

const count = ref(10);
</script>

<template>
	<div>
		<div style="border: 1px solid goldenrod; padding: 10px; margin-bottom: 10px;" class="text-center">
			<h1 class="text-4xl font-bold text-[#60aa80] mb-2">Vue App Page</h1>
			<h3 class="text-2xl mb-2">this is App page!</h3>
			<p class="text-[blue]">
				<!--使用 router-link 组件进行导航 -->
				<!--通过传递 `to` 来指定链接 -->
				<!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
				<router-link to="/" class="underline" style="margin-right: 10px;">Go to Home</router-link>
				<router-link class="underline" to="/about">Go to About</router-link>
			</p>
			<div class="flex mt-10">
				<div class="mr-12 flex-1 border border-solid border-red-200 p-12 rounded-md text-center">
					<h2 class="text-[20px] font-medium">Counter for Ref</h2>
					<Counter :count="count" @increment="val => count = val" @decrement="val => count = val" />
				</div>
				<div class="border flex-1 border-solid border-green-200 p-12 rounded-md text-center">
					<h2 class="text-[20px] font-medium">Counter for Pinia</h2>
					<Counter
						:count="countStore.count"
						@increment="countStore.increment"
						@decrement="countStore.decrement"
					/>
				</div>
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>