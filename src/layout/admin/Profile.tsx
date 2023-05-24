import { styled } from "@mui/material/styles";
import { BreadcrumbsLayout, CardLayout } from "../../components";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";

const StyledRoot = styled("div")({
  position: "relative",
});

const Profile = () => {
  const userProfile = useSelector((state: any) => state.authentication.user);
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
        <Grid item xs={3}>
          <CardLayout>
            <Box
              component="img"
              sx={{
                height: 233,
                width: "100%",
                maxHeight: { xs: 233, md: 167 },
              }}
              alt={userProfile.email}
              src={userProfile.avatar}
            />
          </CardLayout>
        </Grid>
      </Grid>
    </StyledRoot>
  );
};

export default Profile;
