import styled from 'styled-components';

type Props = {
	children: any;
}

export const BaseLayout: React.FC<Props> = ({ children }: Props) => {

	return (
		<Section>
			{children}
		</Section>
	);
}

const Section = styled.section`
	display: flex;
`