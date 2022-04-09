<script lang="ts">
	import Main from '../components/Main.svelte';
</script>

<Main pageType="home">
	<div class="container mx-auto flex gap-80">
		<div>
			<h1 class="text-[28px] text-text-primary">SO, YOU WANT TO TRAVEL TO</h1>
			<h2 class="text-[150px] text-white">Space</h2>
			<p class="text-[32px] text-text-primary">
				Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
				not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
				out of this world experience!
			</p>
		</div>
		<div class="flex items-end">
			<a href="/destination">
				<div class="bg-white h-64 w-64 flex justify-center items-center rounded-full">
					<span>EXPLORE</span>
				</div>
			</a>
		</div>
	</div>
</Main>
