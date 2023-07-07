import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
	background-color: #323051;
	font-size: 3rem;
	font-weight: bold;
	color: white;
	padding: 1%;
	position: sticky;
	width: 100%;
`;

const StyledBody = styled.div`
	display: flex;
`;

const Nav = styled.nav`
	width: 12%;
	background-color: #323051;
	color: white;
	font-size: 150%;
	position: sticky;
`;

const Logo = styled.img``;

const StyledUl = styled.ul`
	list-style-type: none;
`;

const StyledLi = styled.li`
	padding-bottom: 10%;
`;

const StyledMain = styled.main`
	background-color: #f1f0f7;
`;

function App() {
	return (
		<Container>
			<Header>HONG YUN SU</Header>
			<StyledBody>
				<Nav>
					<Logo />
					<StyledUl>
						<StyledLi>PROFILE</StyledLi>
						<StyledLi>SKILL</StyledLi>
						<StyledLi>PROJECTS</StyledLi>
						<StyledLi>CONNECT</StyledLi>
					</StyledUl>
				</Nav>
				<StyledMain>
					<div>
						메인이다adkfjladjfklaㅁㅇㄹㅁㅇㄹㅁㅇㄹㅁㅇㄹdjsfklajdfklajdklfjalkdjflkajdsflkj
					</div>
				</StyledMain>
			</StyledBody>
			<footer></footer>
		</Container>
	);
}

export default App;
