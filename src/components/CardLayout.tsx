import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CardLayout = (props: any) => {
  const { style } = props;

  return (
    <Card style={style} className="card">
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CardLayout;
