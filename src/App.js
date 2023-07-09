import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { BsLaptop, BsPhoneFlip } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

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
	padding-top: 5%;
	padding-bottom: 9%;
	background-color: #323051;
	color: white;
	font-size: 150%;
	position: sticky;
`;

const Logo = styled.img``;

const StyledUl = styled.ul`
	list-style-type: none;
`;

const StyledSidebar = styled.div`
	display: flex;
`;

const StyledLi = styled.li`
	padding-bottom: 40%;
	font-weight: bold;
	margin-left: 10px;
`;

const StyledMain = styled.main`
	background-color: #f1f0f7;
`;

const Footer = styled.footer`
	background-color: #323051;
	font-size: 3rem;
	font-weight: bold;
	color: white;
	padding: 1%;
	position: sticky;
	width: 100%;
`;

function App() {
	return (
		<Container>
			<Header>HONG YUN SU</Header>
			<StyledBody>
				<Nav>
					<Logo />
					<StyledUl>
						<StyledSidebar>
							<BiUser />
							<StyledLi>PROFILE</StyledLi>
						</StyledSidebar>
						<StyledSidebar>
							<BsLaptop />
							<StyledLi>SKILL</StyledLi>
						</StyledSidebar>
						<StyledSidebar>
							<AiOutlineFundProjectionScreen />
							<StyledLi>PROJECT</StyledLi>
						</StyledSidebar>
						<StyledSidebar>
							<BsPhoneFlip />
							<StyledLi>CONNECT</StyledLi>
						</StyledSidebar>
					</StyledUl>
				</Nav>
				<StyledMain>
					<div>
						메인이다adkfjladjfklaㅁㅇㄹㅁㅇㄹㅁㅇㄹㅁㅇㄹdjsfklajdfklajdklfjalkdjflkajdsflkj
					</div>
				</StyledMain>
			</StyledBody>
			<Footer>안녕</Footer>
		</Container>
	);
}

export default App;
