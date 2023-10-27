import { Fade, useScrollTrigger } from "@mui/material";
import { Slide } from "react-reveal";

const centerProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} in={!trigger}>
      {props.children}
    </Slide>
  );
}

export const smoothScroll = (targetY, duration) => {
  const startingY = window.scrollY;
  const diff = targetY - startingY;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

export default centerProps;
