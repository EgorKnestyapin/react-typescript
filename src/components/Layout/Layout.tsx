import {
  Footer,
  Header,
  LayoutWrapper,
  Main,
  NavContainer,
  StyledLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  // const location = useLocation();

  return (
    <LayoutWrapper>
      <Header>
        Logo
        <NavContainer>
          <StyledLink
            to={"/"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            Home
          </StyledLink>
          <StyledLink
            to={"/users"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            Users
          </StyledLink>
          <StyledLink
            to={"/about"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            About
          </StyledLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </LayoutWrapper>
  );
}

export default Layout;
