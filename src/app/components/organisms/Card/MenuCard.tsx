import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type MenuCardType = {
  thumbneil: string;
  title: string;
  text: string;
};

const MenuCard = ({ thumbneil, title, text }: MenuCardType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbneil}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuCard;
