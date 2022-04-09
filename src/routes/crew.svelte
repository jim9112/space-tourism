<script lang="ts">
	import Main from '../components/Main.svelte';
	import { crew } from '../lib/data';
	let crewIndex = 0;
	console.log(crew);
</script>

<Main pageType="crew">
	<div class="flex flex-col">
		<h1 class="text-white">02 Meet The Crew</h1>

		<div class="grid grid-cols-2 w-screen">
			<div class="flex flex-col items-center">
				<div class="flex flex-col max-w-md">
					<h3>{crew[crewIndex].role}</h3>
					<h2>{crew[crewIndex].name}</h2>
					<p>{crew[crewIndex].bio}</p>
				</div>
				<ul class="flex gap-4">
					<li>0</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</div>
			<div class="flex flex-col items-center">
				<img src={crew[crewIndex].images.webp} alt={crew[crewIndex].name} />
			</div>
		</div>
	</div>
</Main>
