import { styled } from "@mui/material/styles";
import { BreadcrumbsLayout, CardLayout } from "../../components";
import { Grid, Avatar, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

const StyledRoot = styled("div")({
  position: "relative",
});

const Profile = () => {
  const userProfile = useSelector((state: any) => state.authentication.user);

  console.log(userProfile);
  return (
    <StyledRoot>
      <BreadcrumbsLayout title="Profile" />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ marginTop: "24px" }}
      >
        <Grid item xs={8}>
          <CardLayout style={{ maxWidth: "800px", padding: "0 30px" }}>
            <Avatar
              sx={{
                height: 250,
                width: 250,
                maxHeight: { xs: 200, md: 250 },
                maxWidth: { xs: 200, md: 250 },
              }}
              alt={userProfile.email}
              src={userProfile.avatar}
            />
            <Box component="div" sx={{ paddingTop: "10px" }}>
              <Typography variant="h6">
                Name:{" "}
                <span style={{ fontWeight: "400" }}> {userProfile.name}</span>
              </Typography>
              <Typography variant="h6">
                Role:{" "}
                <span style={{ fontWeight: "400" }}> {userProfile.role}</span>
              </Typography>
              <Typography variant="h6">
                Email:{" "}
                <span style={{ fontWeight: "400" }}> {userProfile.email}</span>
              </Typography>
            </Box>
          </CardLayout>
        </Grid>
      </Grid>
    </StyledRoot>
  );
};

export default Profile;
