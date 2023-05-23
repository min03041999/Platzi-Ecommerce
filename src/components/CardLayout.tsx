import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const CardLayout = (props: any) => {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CardLayout;
