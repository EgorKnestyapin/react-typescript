import {
  Footer,
  Header,
  LayoutWrapper,
  Main,
  NavContainer,
  NavContainerCol,
  StyledLink,
  StyledNavLink,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  // const location = useLocation();

  return (
    <LayoutWrapper>
      <Header>
        <StyledNavLink to={"/"}>Logo</StyledNavLink>
        <NavContainer>
          <StyledNavLink
            to={"/"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to={"/users"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to={"/about"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to={"/clients"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "white" })}
          >
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <NavContainerCol>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/users"}>Users</StyledLink>
          <StyledLink to={"/about"}>About</StyledLink>
          <StyledLink to={"/clients"}>Clients</StyledLink>
        </NavContainerCol>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
