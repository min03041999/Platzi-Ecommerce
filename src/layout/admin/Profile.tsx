import { styled } from "@mui/material/styles";
import { BreadcrumbsLayout, CardLayout } from "../../components";
import { Grid, Box } from "@mui/material";
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
      <Grid container spacing={0} direction="column" alignItems="center">
        <Grid item xs={3}>
          <CardLayout>
            <Grid container spacing={2}>
              <Grid xs={4}>
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
              </Grid>
              <Grid xs={8}>fgdfgdfgfdgdfgfdgdfgdfggdfgdfgdfgdf</Grid>
            </Grid>
          </CardLayout>
        </Grid>
      </Grid>
    </StyledRoot>
  );
};

export default Profile;
