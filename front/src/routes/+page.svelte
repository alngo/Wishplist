<script lang="ts">
	import type SignalingMessage from '$lib/signaling';
	import {
		connectSignalingServer,
		sendSignalingMessage,
		onSignalingMessage,
		removeSignalingListener
	} from '$lib/signaling';

	let echo = (msg: SignalingMessage) => {
		console.log(msg);
	};

	connectSignalingServer();
	onSignalingMessage((msg) => echo(msg));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<button on:click={() => sendSignalingMessage({ type: 'offer' })}> send </button>
