<script lang="ts">
	export let techIndex;
</script>

<li
	class="w-20 h-20 border-[1px] border-white rounded-full flex items-center justify-center"
	data-techIndex={techIndex}
>
	<slot />
</li>
