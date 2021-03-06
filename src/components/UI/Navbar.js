import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { AppBar, Box, Typography } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import clsx from 'clsx'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MuiLink from '@material-ui/core/Link'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import logoBorder from '../../assets/images/akr_logo.png'
import { NavbarBrand } from 'react-bootstrap'
const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.common.white,
    },
    AppBar: {
        boxShadow: 'none',
        background: theme.palette.grey[900],
        opacity: 0.5,
        paddingBottom: theme.spacing(2),
    },
    appbarSolid: {
        background: theme.palette.black[900],
        opacity: 1,
    },
    appbartransparent: {
        background: 'transparent',
        opacity: 1,
    },
    title: {
        fontSize: '1.4rem',
        color: theme.palette.secondary.main,
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '2.25em',
        },
    },
    left: {
        // flex: 1,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    tabContainer: {
        marginLeft: 'auto',
        marginRight: '.5em',
    },
    drawerIconCtr: {
        marginLeft: 'auto',
    },
    tab: {
        minWidth: 10,
        fontSize: '1rem',
        opacity: 1,
        '& .MuiTab-Root': {
            minWidth: 10,
        },
        '&:hover': {
            color: theme.palette.warning[100],
        },
    },
    tabRoot: {
        minWidth: 10,
        color: theme.palette.common.white,
    },
    tabSecondary: {
        fontSize: '1rem',
        color: theme.palette.common.white,
    },
    drawer: {
        backgroundColor: theme.palette.primary.white,
        ...theme.typography.h6,
    },
    drawerItem: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
        fontSize: '1rem',
        fontWeight: 500,
        opacity: 0.9,
        padding: '.25em 1em',
    },
    drawerItemSecondary: {
        color: theme.palette.secondary.dark,
        textTransform: 'uppercase',
        fontSize: '1rem',
        fontWeight: 900,
        opacity: 0.95,
        padding: '.25em 1em',
    },
    CompanyName: {
        color: theme.palette.success.light,
        fontFamily: 'Arial Helvetica sans-serif',
        fontSize: '35px',
        letterSpacing: '3px',
    },
    logoBorder: {
        height: '35px',
        [theme.breakpoints.up('md')]: {
            height: '50px',
        },
    },
    logoContainer: {
        display: 'flex',
        position: 'absolute',
        left: '0',
        top: '0',
    },
    logoText: {
        position: 'absolute',
        height: '20px',
        top: '2px',
        left: '130px',
        [theme.breakpoints.up('md')]: {
            position: 'relative',

            left: '-100px',
            top: '5px',
            height: '30px',
        },
        color: theme.palette.success.light,
    },
}))

export default function Navbar() {
    const [navBackGround, setNavBackground] = useState()

    const classes = useStyles()
    const theme = useTheme()
    let navRef = React.useRef(null)
    navRef = NavbarBrand
    useEffect(() => {
        const handleScroll = () => {
            let show = window.scrollY > 310
            if (show) {
                setNavBackground('appbarSolid')
            } else {
                if (window.location.pathname !== '/') {
                    setNavBackground('appbarSolid')
                } else {
                    setNavBackground('appbartransparent')
                }
            }
        }
        document.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const iOS =
        typeof navigator !== 'undefined' &&
        /iPad|iPhone|iPod/.test(navigator.userAgent)

    const [openDrawer, setOpenDrawer] = React.useState(false)

    const drawer = (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{
                    paper: classes.drawer,
                }}
            >
                <List disablePadding>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/"
                        title="Link to Home Page"
                        onClick={() => {
                            setOpenDrawer(false)
                        }}
                    >
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                        >
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/"
                        title="Link to Home Page"
                        style={{ display: 'block' }}
                        onClick={() => {
                            setOpenDrawer(false)
                        }}
                    >
                        <ListItemText
                            className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
                            disableTypography
                        >
                            our Vission
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/"
                        title="Link to Home Page"
                        style={{ display: 'block' }}
                        onClick={() => {
                            setOpenDrawer(false)
                        }}
                    >
                        <ListItemText
                            className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
                            disableTypography
                        >
                            Clients
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to="/"
                        title="Link to Home Page"
                        style={{ display: 'block' }}
                        onClick={() => {
                            setOpenDrawer(false)
                        }}
                    >
                        <ListItemText
                            className={`${classes.drawerItem}, ${classes.drawerItemSecondary}`}
                            disableTypography
                        >
                            Careers
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <div className={classes.right}>
                <IconButton
                    aria-label="navigation menu"
                    className={classes.drawerIconCtr}
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple
                >
                    <MenuIcon
                        style={{ color: theme.palette.primary.light }}
                        fontSize="large"
                    />
                </IconButton>
            </div>
        </>
    )

    const tabs = (
        <>
            <div className={classes.right}>
                <Tabs
                    value={1}
                    className={classes.tabContainer}
                    TabIndicatorProps={{
                        style: {
                            display: 'none',
                        },
                    }}
                >
                    <Tab
                        className={`${classes.tab}`}
                        component={Link}
                        to="/"
                        label="Home"
                        aria-label="Sign In Button"
                        variant="h6"
                        underline="none"
                        disableRipple
                        classes={{ root: classes.tabRoot }}
                    />{' '}
                    <Tab
                        className={`${classes.tab}`}
                        component={Link}
                        to="/vission"
                        label="our Vission"
                        aria-label="Sign In Button"
                        variant="h6"
                        underline="none"
                        disableRipple
                        classes={{ root: classes.tabRoot }}
                    />
                    <Tab
                        className={`${classes.tab}`}
                        component={Link}
                        to="/"
                        label="Clients"
                        aria-label="Sign In Button"
                        variant="h6"
                        underline="none"
                        disableRipple
                        classes={{ root: classes.tabRoot }}
                    />
                    <Tab
                        className={`${classes.tab}`}
                        component={Link}
                        to="/careers"
                        label="Careers"
                        aria-label="Sign In Button"
                        variant="h6"
                        underline="none"
                        disableRipple
                        classes={{ root: classes.tabRoot }}
                    />
                    {/* <Tab
                        className={`${classes.tab}, ${classes.tabSecondary}`}
                        classes={{ root: classes.tabRoot }}
                        component={Link}
                        to="/register"
                        label="Sign Up"
                        aria-label="Sign Up Button"
                        variant="h6"
                        underline="none"
                        disableRipple
                    /> */}
                </Tabs>
            </div>
        </>
    )

    return (
        <>
            {/* <CssBaseline /> */}
            <AppBar
                className={clsx(classes.AppBar, classes[navBackGround])}
                position="fixed"
            >
                <Toolbar>
                    <div className={classes.left} />
                    <MuiLink
                        component={Link}
                        to="/"
                        color="inherit"
                        variant="h6"
                        underline="none"
                        className={classes.title}
                    >
                        <Box className={classes.logoContainer}>
                            <img
                                src={logoBorder}
                                className={classes.logoBorder}
                            />
                            {/* <img src={logoText} className={classes.logoText} /> */}
                            <Typography
                                variant="h1"
                                className={classes.logoText}
                            >
                                AKR
                            </Typography>
                        </Box>
                    </MuiLink>
                    {matchesXS ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </>
    )
}
