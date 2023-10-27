import { Grid, Typography } from "@mui/material";
import centerProps from "../utils/layout";

export default function AmountCard(props) {
  const count = 12 / props.labels.length;
  return (
    <Grid container mt={2}>
      {props.labels.map((val) => (
        <>
          <Grid item xs={count} {...centerProps}>
            <Typography variant="h6">{val}</Typography>
          </Grid>
        </>
      ))}

      {props.amounts.map((val) => (
        <Grid item xs={count} {...centerProps}>
          <Typography variant="h6">{val}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
