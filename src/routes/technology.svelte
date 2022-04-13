<script lang="ts">
	import BodyText from '../components/BodyText.svelte';
	import Main from '../components/Main.svelte';
	import RoundedLink from '../components/technology/RoundedLink.svelte';
	import { technology } from '../lib/data';
	let techIndex = 0;
</script>

<Main pageType="technology">
	<div class="flex flex-col pt-52">
		<h1 class="text-white font-barlow text-[28px] uppercase">
			<span class="text-grey">03</span> Space Launch 101
		</h1>

		<div class="flex w-screen justify-end gap-20">
			<div class="flex gap-20">
				<ul class="flex flex-col gap-8">
					<RoundedLink>1</RoundedLink>
					<RoundedLink>2</RoundedLink>
					<RoundedLink>3</RoundedLink>
				</ul>
				<div class="max-w-lg">
					<p class="font-barlow text-text-primary text-base">The Terminology</p>
					<h2 class="font-bellefair text-[56px] uppercase">{technology[techIndex].name}</h2>
					<BodyText>{technology[techIndex].description}</BodyText>
				</div>
			</div>
			<div>
				<img src={technology[techIndex].images.portrait} alt={technology[techIndex].name} />
			</div>
		</div>
	</div>
</Main>
