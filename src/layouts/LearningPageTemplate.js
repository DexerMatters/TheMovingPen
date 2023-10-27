import { Fragment, useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import readArticles from "../utils/dataHandler";
import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { brown } from "@mui/material/colors";
import { Rectangle } from "@mui/icons-material";
import { smoothScroll } from "../utils/layout";

export function PageHeader(props) {
  return <Fragment></Fragment>;
}
export function PageIndex() {}

export default function LearningPageTemplate({ source, backgroundImage_ }) {
  let [content, setContent] = useState("");
  let [index, setIndex] = useState([]);

  const titleRefs = useRef([]);
  const subtitleRefs = useRef([]);

  const scrollToTitle = (e, id) => {
    e.preventDefault();
    titleRefs.current[id].scrollIntoView();
  };
  const scrollToSubtitle = (e, id) => {
    e.preventDefault();
    subtitleRefs.current[id].scrollIntoView();
  };

  /*Dyn template spawn */
  let i_ = 0;
  let i_sub = 0;
  readArticles(source).then((text) => {
    let lines = text.split("\n");
    let eles = [];

    lines.forEach((line) => {
      if (line.trim().startsWith("###")) {
        let j = i_sub++;
        eles.push(
          <ListItemButton
            onClick={(e) => scrollToSubtitle(e, j)}
            divider
            sx={{ pl: 3 }}
          >
            <ListItemText secondary={line.trim().substring(3).trim()} />
          </ListItemButton>
        );
      } else if (line.trim().startsWith("##")) {
        let j = i_++;
        eles.push(
          <ListItemButton onClick={(e) => scrollToTitle(e, j)} divider>
            <ListItemText primary={line.trim().substring(2).trim()} />
          </ListItemButton>
        );
      }
    });
    setIndex(eles);
    setContent(text);
  });

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Paper
        square
        style={{
          position: "fixed",
          width: 225,
          height: "100vh",
          backgroundColor: brown[300],
          marginRight: 40,
        }}
      >
        <Typography p={2} variant="h5" color="secondary">
          目录
        </Typography>
        <List>{index}</List>
      </Paper>
      <Container
        style={{
          paddingLeft: "275px",
          width: "100vw",
          minWidth: "100vw",
          background: `linear-gradient(rgba(255,255,255,0.5), white 255px), url(${backgroundImage_})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "200px 0px",
          backgroundSize: "cover",
        }}
      >
        <Markdown
          components={{
            h1({ node, ...rest }) {
              return <Typography variant="h3" {...rest} pt={18} pb={2} />;
            },
            h2({ node, ...rest }) {
              return (
                <Box
                  ref={(el) => titleRefs.current.push(el)}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    pb: 1,
                    pt: 1,
                  }}
                >
                  <Rectangle
                    color="primary"
                    sx={{ transform: "rotate(90deg)", mr: 1 }}
                  />
                  <Typography variant="h5" {...rest} />
                  <Box
                    sx={{
                      flex: 1,
                      ml: 1,
                      height: "1.5px",
                      width: "100%",
                      backgroundColor: brown[200],
                    }}
                  />
                </Box>
              );
            },
            h3({ node, ...rest }) {
              return (
                <Typography
                  ref={(el) => subtitleRefs.current.push(el)}
                  variant="h6"
                  {...rest}
                  pb={1}
                  pt={1}
                  pl={4}
                />
              );
            },
            p({ node, ...rest }) {
              return <Typography variant="body" {...rest} pl={4} />;
            },
            span({ node, ...rest }) {
              return <Typography variant="body" {...rest} pl={4} />;
            },
          }}
        >
          {content}
        </Markdown>
      </Container>
    </div>
  );
}
