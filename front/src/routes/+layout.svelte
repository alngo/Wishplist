<script lang="ts">
import '../app.css';
import Header from '$lib/components/header.svelte';
import Footer from '$lib/components/footer.svelte';
let { children } = $props();
</script>

<Header/>
<main class="bg-green-500 p-4 space-y-4">
	{@render children()}
</main>
<Footer/>

