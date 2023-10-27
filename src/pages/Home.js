import { makeStyles } from "@mui/styles";
import Center from "../components/Center";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { logos } from "../img";
import PictureCard from "../components/PictureCard";

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      height: "100hv",
      minHeight: "100hv",
    },
  };
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Center>
        <img width={600} alt="*" src={logos[1]} />
        <Divider />
        <Typography variant="body">
          {"中国各地的英文书法爱好者的云集之地"}
        </Typography>
      </Center>
      <Grid
        mt="100vh"
        pt={4}
        container
        sx={{ ...classes.gird }}
        rowSpacing={"3rem"}
      >
        <Grid item xs={4}>
          <PictureCard
            backgroundID={0}
            title="English Roundhand"
            subheader="英国圆手"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>

        <Grid item xs={4}>
          <PictureCard
            backgroundID={3}
            title="Engrosser's Script"
            subheader="雕刻师手稿"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>
        <Grid item xs={4}>
          <PictureCard
            backgroundID={9}
            title="Italian Hand"
            subheader="意大利手稿"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>
        <Grid item xs={4}>
          <PictureCard
            backgroundID={5}
            title="Spencerian Script"
            subheader="斯宾塞体"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>
        <Grid item xs={4}>
          <PictureCard
            backgroundID={6}
            title="Ornamental Penmanship"
            subheader="装饰性书法"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>
        <Grid item xs={4}>
          <PictureCard
            backgroundID={4}
            title="Offhand Flourish"
            subheader="随手繁华"
          >
            繁华就是繁华
          </PictureCard>
        </Grid>
        <Grid item xs={4}>
          <PictureCard
            backgroundID={7}
            title="Business Penmanship"
            subheader="斯宾塞体"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>
        <Grid item xs={4}>
          <PictureCard
            backgroundID={8}
            title="Advanced ES"
            subheader="装饰性书法"
          >
            圆手就是圆手
          </PictureCard>
        </Grid>
      </Grid>
    </Container>
  );
}
