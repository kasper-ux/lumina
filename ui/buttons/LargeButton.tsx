import styled from 'styled-components';

export type LargeButtonProps = {
	children?: any;
}

export const LargeButton = ({ children }: LargeButtonProps) => {
	return (
		<Button>
			{children}
		</Button>
	);
}

const Button = styled.button`
	
`
