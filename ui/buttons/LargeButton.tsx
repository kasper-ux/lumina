import styled from 'styled-components';

export type LargeButtonProps = {}

export const LargeButton: React.FC<LargeButtonProps> = (props: LargeButtonProps) => {
	return (
		<Button {...props} />
	);
}

const Button = styled.button`
	
`
