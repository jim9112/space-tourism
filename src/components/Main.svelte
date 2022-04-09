<script lang="ts">
	export let pageType: 'destination' | 'crew' | 'technology' | 'home';
</script>

<main class={`bg-${pageType}-desktop min-h-screen flex items-end text-white`}>
	<slot />
</main>
