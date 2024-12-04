<script lang="ts">
	import '../app.css'; // Charge les styles globaux
	import { backgroundImage } from '$lib';

	let { children } = $props();
</script>

<div
	class="min-h-screen bg-cover bg-center flex justify-center items-center"
	style="background-image: url({backgroundImage});"
>
	<!-- Contenu des enfants (les pages) -->
	<div class="w-full flex justify-center items-center">
		{@render children()}
	</div>
</div>