import styled from "styled-components";

const Container = styled.div`
	/* width: 100%; */
`;

const FirstInner = styled.div`
	background-color: navy;
`;

function App() {
	return (
		<Container>
			<FirstInner>안녕</FirstInner>
		</Container>
	);
}

export default App;
