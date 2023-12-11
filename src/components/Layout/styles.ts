import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const NavContainerCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.white};
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.white};
  font-size: 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 150px;
  padding: 20px 40px;
  background-color: ${colors.primary};
  color: ${colors.white};
`;
