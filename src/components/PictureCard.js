import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import { getBackground } from "../img";

export default function PictureCard(props) {
  return (
    <Card
      sx={{
        width: "350px",
        height: "350px",
        color: "primary",
        backgroundColor: brown[50],
      }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height={195}
        image={getBackground(props.backgroundID)}
      />
      <CardContent sx={{ whiteSpace: "normal" }}>
        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">学习</Button>
        <Button variant="outlined">文库</Button>
      </CardActions>
    </Card>
  );
}
