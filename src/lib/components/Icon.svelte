<script lang="ts">
  import {type Icon, icons} from "$lib/icon";

  interface Props {
    icon: Icon;
    alt: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }

  const { icon: iconName, alt, size = 'md' }: Props = $props();

  const { viewBox, d } = icons[iconName];

  const rem = {
    xs: 1,
    sm: 1.5,
    md: 2,
    lg: 3,
    xl: 4,
  }[size];

</script>

<!-- TODO: colors -->
<svg xmlns="http://www.w3.org/2000/svg" height="{rem}rem" width="{rem}rem" {viewBox} fill="white">
  <title>{alt}</title>
  <path {d} />
</svg>

<style>
  /*svg {*/
  /*  stroke: white;*/
  /*}*/
</style>