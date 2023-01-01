import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
`;

const ListItems = styled.li`
  display: inline-block;
  list-style: none;
  padding: 0 10px;
`;
const StyledLink = styled(Link)`
  color: #1e40af;
  font-weight: bold;
  text-decoration: none;
`;

export { Wrapper, List, ListItems, StyledLink };
