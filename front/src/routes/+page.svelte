<script lang="ts">
	import CounterCard from '$lib/components/counter_card.svelte'
</script>

<div class="flex items-center justify-between">
<CounterCard title="Total Wishes" value="0" icon="💕"/>
<CounterCard title="Realized Wishes" value="0" icon="🛒"/>
<CounterCard title="High Priority" value="0" icon="🌟"/>
<CounterCard title="Remaining Value" value="0" icon="💰"/>
</div>

<p class="h-[512px] bg-purple-500 p-4">Paragraph 1</p>
<p class="h-[512px] bg-purple-500 p-4">Paragraph 2</p>
<p class="h-[512px] bg-purple-500 p-4">Paragraph 3</p>
