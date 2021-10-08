import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import productHeroWonder from '../assets/images/productHeroWonder.png'
import productHeroArrowDown from '../assets/images/productHeroArrowDown.png'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',

        backgroundColor: theme.palette.common.black,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#002e48',
        opacity: 0.5,
        zIndex: -1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
    },
    arrowDown: {
        position: 'absolute',
        bottom: theme.spacing(4),
    },
})

function ProductHeroLayout(props) {
    const { backgroundClassName, children, classes } = props

    return (
        <section className={classes.root}>
            <Box className={classes.container}>{children}</Box>
        </section>
    )
}

ProductHeroLayout.propTypes = {
    backgroundClassName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHeroLayout)
