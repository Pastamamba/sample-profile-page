import { Container, Box } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #3f51b5;
  color: white;
  text-align: center;
  padding: 10px 0;
`;

const StyledIcon = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledIcon>
            <Instagram />
          </StyledIcon>
          <StyledIcon>
            <Facebook />
          </StyledIcon>
        </Box>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
