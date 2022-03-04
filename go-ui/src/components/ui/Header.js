import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Typography,
  Box,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Link,
} from "@material-ui/core";

const handleClick = () => {
  window[`scrollTo`]({ top: 0, behavior: "smooth" });
};

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  cursorToHandPointer: {
    cursor: "pointer",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters="true">
            <Container>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">GoUI Template</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link
                    onClick={handleClick}
                    className={classes.cursorToHandPointer}
                  >
                    <Typography variant="h6">Home</Typography>
                  </Link>
                  <Link
                    onClick={handleClick}
                    className={classes.cursorToHandPointer}
                  >
                    <Box sx={{ marginLeft: "1rem" }}>
                      <Typography variant="h6">About</Typography>
                    </Box>
                  </Link>
                  <Link
                    onClick={handleClick}
                    className={classes.cursorToHandPointer}
                  >
                    <Box sx={{ marginLeft: "1rem" }}>
                      <Typography variant="h6">Contact Me</Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
