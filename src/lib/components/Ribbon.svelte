<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		hidden?: Snippet;
		children: Snippet;
		second?: boolean;
		color?: 'red' | 'blue' | 'green' | 'yellow' | 'orange';
	}

	let { hidden, children, second, color }: Props = $props();
</script>

<!-- TODO: figure out why tabindex isn't working -->
<div class="ribbon {color}" class:second={second}>
	{#if hidden}
		<div class="hidden">
			{@render hidden?.()}
		</div>
	{/if}

	<div class="main">
		{@render children()}
	</div>
</div>

<style>
	.ribbon {
		position: absolute;
		/*padding: 0.5em .75em;*/
		padding-block: 0.3rem;
		/*background: purple;*/
		right: -0.75em;

		display: inline-flex;
		align-items: center;
		overflow: hidden;
		max-width: 4rem;
		transition: max-width 0.3s ease;
	}

	.main {
		flex-shrink: 0;
		/*background-color: purple;*/
		z-index: 2;

		padding-inline: 0.5em;
	}

	.hidden {
		z-index: 1;
		max-width: 0;
		overflow: hidden;
		padding: 0;

		transition:
			transform 0.3s ease,
			max-width 0.3s ease,
			padding 0.3s ease;

		transform: translateX(20px);
		white-space: nowrap;
	}

	.ribbon:hover {
		max-width: 200px;
	}

	.ribbon:where(:focus-within, :hover) .hidden {
		max-width: 20rem;
		padding-left: 0.75rem;

		transform: translateX(0);
	}

	.second {
		top: 3rem;
	}

	.blue {
		background: #104db9;
	}

	.orange {
		background: #b95e10;
	}

	.red {
		background: #560808;
	}

	.green {
		background: #0b4f0b;
	}

	.yellow {
		background: #b0831a;
	}
</style>
