import styled from 'styled-components';

export interface LargeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const LargeButton: React.FC<LargeButtonProps> = (props: LargeButtonProps) => {
	return (
		<Button {...props} />
	);
}

const Button = styled.button`
	
`
