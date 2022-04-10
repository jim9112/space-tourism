<script lang="ts">
	import BodyText from '../components/BodyText.svelte';
	import Main from '../components/Main.svelte';
	import { crew } from '../lib/data';
	let crewIndex = 0;

	const handleClick = (e) => {
		if (e.target.nodeName === 'LI') {
			crewIndex = parseInt(e.target.dataset.index);
		}
	};
</script>

<Main pageType="crew">
	<div class="flex flex-col">
		<h1 class="text-white font-barlow text-[28px] uppercase">
			<span class="text-grey">02</span> Meet The Crew
		</h1>

		<div class="grid grid-cols-2 w-screen">
			<div class="flex flex-col items-center">
				<div class="flex flex-col max-w-lg">
					<h3 class="font-bellefair text-[32px] text-grey uppercase">{crew[crewIndex].role}</h3>
					<h2 class="font-bellefair text-[56px] uppercase">{crew[crewIndex].name}</h2>
					<BodyText>{crew[crewIndex].bio}</BodyText>
				</div>
				<ul class="flex gap-4" on:click={handleClick}>
					<li class="h-4 w-4 rounded-full bg-grey cursor-pointer" data-index="0" />
					<li class="h-4 w-4 rounded-full bg-grey cursor-pointer" data-index="1" />
					<li class="h-4 w-4 rounded-full bg-grey cursor-pointer" data-index="2" />
					<li class="h-4 w-4 rounded-full bg-grey cursor-pointer" data-index="3" />
				</ul>
			</div>
			<div class="flex flex-col items-center">
				<img src={crew[crewIndex].images.webp} alt={crew[crewIndex].name} />
			</div>
		</div>
	</div>
</Main>
