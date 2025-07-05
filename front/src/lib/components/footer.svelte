<script lang="ts">
const year = new Date().getFullYear();
export let copyright: string = `© ${year} Waishlist. All rights reserved.`
export let github_link = "https://github.com/alngo/waishlist";
</script>

<!-- Footer -->
<footer class="bg-white border-t border-gray-200 shadow-inner mt-8">
	<div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 space-y-2 md:space-y-0">
		<p class="text-sm text-gray-500">
			{copyright}
		</p>
		<div class="flex space-x-4">
			<a href="{github_link}" target="_blank" class="text-gray-500 hover:text-brand transition">
				GitHub
			</a>
			<a href="/privacy" class="text-gray-500 hover:text-brand transition">
				Privacy
			</a>
			<a href="/terms" class="text-gray-500 hover:text-brand transition">
				Terms
			</a>
		</div>
	</div>
</footer>

