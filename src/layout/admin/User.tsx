import { styled } from "@mui/material/styles";
import { BreadcrumbsLayout, CardLayout } from "../../components";

const StyledRoot = styled("div")({
  background: "#fff",
});

const User = () => {
  return (
    <StyledRoot>
      <BreadcrumbsLayout title="User" />
      <CardLayout />
    </StyledRoot>
  );
};

export default User;
