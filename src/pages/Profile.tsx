import { Container, Typography, Avatar, Box } from "@mui/material";
import styled from "styled-components";
import { useStore } from "../zustandStore";

// Create a styled component for the profile info
const StyledProfileInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

function Profile() {
  const { username, description } = useStore();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 5,
        }}
      >
        <Avatar sx={{ width: 56, height: 56 }} />
        <StyledProfileInfo>
          <Typography variant="h4" component="div" sx={{ pt: 2 }}>
            {username}
          </Typography>
          <Typography variant="body1" component="div" sx={{ pt: 2 }}>
            {description}
          </Typography>
        </StyledProfileInfo>
      </Box>
    </Container>
  );
}

export default Profile;
