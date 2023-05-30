import styled from 'styled-components';

type InputProps = {}

export const BaseInput: React.FC<InputProps> = (props: InputProps) => {

	return (
		<Input {...props} />
	);
}

const Input = styled.input`
	
`