import type { SVGAttributes } from 'svelte/elements';

export interface IconProps extends SVGAttributes<SVGElement> {
	alt?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const rem = {
	xs: 1,
	sm: 1.5,
	md: 2,
	lg: 3,
	xl: 4,
};

export function iconSize(size: IconProps['size']) {
	const rem_ = rem[size ?? 'md'] + 'rem';
	return { width: rem_, height: rem_ };
}
