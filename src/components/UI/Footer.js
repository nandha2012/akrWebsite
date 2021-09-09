import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import MuiLink from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import Typography from "../Utils/Typography"
import TextField from "../Utils/TextField"
import FacebookIcon from "../../assets/images/facebookIcon.png"
import TwitterIcon from "../../assets/images/twitterIcon.png"

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <MuiLink color="inherit" href="https://snappywebdesign.net/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}))

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
]

export default function Footer() {
  const classes = useStyles()

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://snappywebdesign.net/" className={classes.icon}>
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
                <a
                  href="https://twitter.com/snappy_web"
                  className={classes.icon}
                >
                  <img src={TwitterIcon} alt="Twitter" />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <MuiLink component={Link} to="/terms">
                  Terms
                </MuiLink>
              </li>
              <li className={classes.listItem}>
                <MuiLink component={Link} to="/privacy">
                  Privacy
                </MuiLink>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption">
              {"Site ported by "}
              <MuiLink
                href="https://snappywebdesign.net"
                rel="tag"
                title="Snappy Web Design"
                target="_blank"
              >
                AkR ERP Department
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
