import { LargeButtonProps } from "@ui/buttons";

declare module 'lumina-ux' {
	export { LargeButtonProps };
	export const LargeButton: React.FC<LargeButtonProps>;
}