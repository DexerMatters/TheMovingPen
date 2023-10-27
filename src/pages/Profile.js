import {
  Avatar,
  Container,
  Divider,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import centerProps from "../utils/layout";
import AmountCard from "../layouts/AmountCard";

const profilePaperWidth = "80%";
const profileAvatarSize = 234;

export default function ProfilePage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "2000vh",
        mt: 1,
      }}
    >
      <Paper sx={{ width: profilePaperWidth, bgcolor: brown[50], p: 2 }}>
        <Grid container rowSpacing={3}>
          <Grid item xs={4} {...centerProps}>
            <Avatar
              sx={{
                scale: "0.9",
                width: profileAvatarSize,
                height: profileAvatarSize,
                fontSize: profileAvatarSize / 2,
              }}
            >
              H
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            ws
          </Grid>
          <Grid item xs={4} {...centerProps}>
            <Typography variant="h5">Dexer_Matters</Typography>
            <Typography variant="body">dexermatters@gmail.com</Typography>
            <AmountCard labels={["粉丝", "关注", "作品"]} amounts={[0, 0, 0]} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
