<script lang="ts">
	import Main from '../components/Main.svelte';
	import { destData } from '../lib/data';

	let currentDest: 'moon' | 'mars' | 'europa' | 'titan' = 'moon';

	const handleClick = (e) => {
		if (e.target.nodeName === 'LI') {
			currentDest = e.target.innerText.toLowerCase();
		}
	};
</script>

<Main pageType="destination">
	<div class="container mx-auto">
		<h1 class="text-white"><span>01</span> Pick Your Destination</h1>
		<div class="grid grid-cols-2 container m-auto">
			<div class="flex justify-center">
				<img src={destData[currentDest].image} alt={destData[currentDest].name} />
			</div>
			<div class="flex justify-center">
				<div>
					<ul class="flex gap-9" on:click={handleClick}>
						<li class="cursor-pointer">Moon</li>
						<li class="cursor-pointer">Mars</li>
						<li class="cursor-pointer">Europa</li>
						<li class="cursor-pointer">Titan</li>
					</ul>
					<h2 class="text-8xl uppercase">{destData[currentDest].name}</h2>
					<p>{destData[currentDest].desc}</p>
					<div class="grid grid-cols-2">
						<div>
							<p>AVG. DISTANCE</p>
							<p>{destData[currentDest].dist}</p>
						</div>
						<div>
							<p>Est. travel time</p>
							<p>{destData[currentDest].time}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Main>
