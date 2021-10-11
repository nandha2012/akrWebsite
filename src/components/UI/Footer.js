import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MuiLink from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '../Utils/Typography'
import TextField from '../Utils/TextField'
import FacebookIcon from '../../assets/images/facebookIcon.png'
import TwitterIcon from '../../assets/images/twitterIcon.png'
import { Box, Divider } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMapMarkedAlt,
    faEnvelopeOpenText,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <MuiLink color="inherit" href="https://snappywebdesign.net/">
                Your Website
            </MuiLink>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
    },
    iconsWrapper: {
        // height: 120,
        paddingTop: theme.spacing(1),
    },
    icons: {
        display: 'flex',
    },
    icon: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.warning.main,
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.warning.dark,
        },
    },
    list: {
        margin: 0,
        listStyle: 'none',
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
    powerby: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(7),
    },
    contentWrapper: {
        display: 'flex',
        padding: theme.spacing(1),
    },
    contentText: {
        paddingLeft: theme.spacing(2),
    },
    footerHeading: {
        '& .Typography-markedH6Left-37': {
            width: '30%',
            color: theme.palette.grey[500],
        },
    },
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography
                            variant="h6"
                            marked="left"
                            gutterBottom
                            className={classes.footerHeading}
                        >
                            contact Details
                        </Typography>
                        <Grid
                            container
                            className={classes.iconsWrapper}
                            spacing={1}
                        >
                            <Grid item className={classes.icons} xs={12}>
                                <Box className={classes.contentWrapper}>
                                    <FontAwesomeIcon icon={faPhone} size="1x" />
                                    <Typography className={classes.contentText}>
                                        0421-6647777
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className={classes.contentWrapper}>
                                    <FontAwesomeIcon
                                        icon={faEnvelopeOpenText}
                                        size="1x"
                                    />
                                    <Typography className={classes.contentText}>
                                        info@akrind.com
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className={classes.contentWrapper}>
                                    <FontAwesomeIcon
                                        icon={faMapMarkedAlt}
                                        size="1x"
                                    />
                                    <Typography className={classes.contentText}>
                                        AKR Industries <br /> 2/385 G,
                                        Mummoorthy Nagar,P.N.Road, <br />
                                        Tirupur - 641 602
                                        <br />
                                        Tamilnadu, India
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography
                            variant="h6"
                            marked="left"
                            gutterBottom
                            className={classes.footerHeading}
                        >
                            Legal
                        </Typography>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>
                                <MuiLink component={Link} to="/vission">
                                    Vission &amp; Mission
                                </MuiLink>
                            </li>
                            <li className={classes.listItem}>
                                <MuiLink component={Link} to="/privacy">
                                    Privacy &amp; policy
                                </MuiLink>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Typography
                            variant="h6"
                            marked="left"
                            gutterBottom
                            className={classes.footerHeading}
                        >
                            Others
                        </Typography>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>
                                <MuiLink component={Link} to="/careers">
                                    Careers
                                </MuiLink>
                            </li>
                            <li className={classes.listItem}>
                                <MuiLink component={Link} to="/brands">
                                    Brands
                                </MuiLink>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                        <Box className={classes.powerby}>
                            <Typography variant="subtitle1">
                                {'Site ported by '}
                                <MuiLink
                                    rel="tag"
                                    title="Snappy Web Design"
                                    target="_blank"
                                >
                                    AkR IT Department
                                </MuiLink>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    )
}
