<script lang="ts">
	import Main from '../components/Main.svelte';
	import BodyText from '../components/BodyText.svelte';
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
		<h1 class="text-white font-barlow text-[28px] uppercase">
			<span class="text-grey">01</span> Pick Your Destination
		</h1>
		<div class="grid grid-cols-2 container m-auto">
			<div class="flex justify-center">
				<img src={destData[currentDest].image} alt={destData[currentDest].name} />
			</div>
			<div class="flex justify-center">
				<div>
					<ul
						class="flex gap-9 uppercase font-barlow text-base text-text-primary"
						on:click={handleClick}
					>
						<li class="cursor-pointer hover:text-white">Moon</li>
						<li class="cursor-pointer hover:text-white">Mars</li>
						<li class="cursor-pointer hover:text-white">Europa</li>
						<li class="cursor-pointer hover:text-white">Titan</li>
					</ul>
					<h2 class="text-[100px] font-bellefair uppercase">{destData[currentDest].name}</h2>
					<BodyText>
						{destData[currentDest].desc}
					</BodyText>
					<div class="grid grid-cols-2">
						<div>
							<p class="font-barlow text-text-primary text-sm">AVG. DISTANCE</p>
							<p class="font-barlow text-[28px] uppercase">{destData[currentDest].dist}</p>
						</div>
						<div>
							<p class="font-barlow text-text-primary text-sm">Est. travel time</p>
							<p class="font-barlow text-[28px] uppercase">{destData[currentDest].time}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Main>
