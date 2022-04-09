<script lang="ts">
	export let pageType: 'destination' | 'crew' | 'technology' | 'home';

	const backGround = {
		crew: 'bg-crew-desktop',
		destination: 'bg-destination-desktop',
		technology: 'bg-technology-desktop',
		home: 'bg-home-desktop'
	};
</script>

<main class={`${backGround[pageType]} min-h-screen flex items-end text-white`}>
	<slot />
</main>
