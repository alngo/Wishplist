<script lang="ts">
  export let title: string;
  export let value: number | string;
  export let icon: string = '🎁'; // default icon
</script>

<div class="flex items-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-x-4">
  <div class="text-3xl">{icon}</div>
  <div>
    <h2 class="text-sm text-gray-500">{title}</h2>
    <div class="text-2xl font-semibold text-gray-800">{value}</div>
  </div>
</div>

