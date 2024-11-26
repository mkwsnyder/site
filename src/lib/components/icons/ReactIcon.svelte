<script lang="ts">
	import { type IconProps, iconSize } from '$lib/icon';

	let { alt = 'React Logo', size, ...rest }: IconProps = $props();
	const {width, height} = iconSize(size);
</script>

<svg
	{width}
	{height}
	{...rest}
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-11.5 -10.23174 23 20.46348"
>
	<title>{alt}</title>
	<circle cx="0" cy="0" r="2.05" fill="#61dafb" />
	<g stroke="#61dafb" stroke-width="1" fill="none">
		<ellipse rx="11" ry="4.2" />
		<ellipse rx="11" ry="4.2" transform="rotate(60)" />
		<ellipse rx="11" ry="4.2" transform="rotate(120)" />
	</g>
</svg>
