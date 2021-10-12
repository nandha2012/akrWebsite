import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import Typography from './Utils/Typography'
// import ProductBuoy from '../assets/images/printing_1.jpg'
import Image from '../components/Utils/images'
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(9),
    },
    button: {
        border: '4px solid currentColor',
        borderRadius: 0,
        height: 'auto',
        padding: theme.spacing(2, 5),
    },
    link: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    buoy: {
        width: 60,
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            height: '40%',
        },
        width: '70%',
        height: '50%',
        margin: theme.spacing(0.5),
    },
})

function ProductSmokingHero(props) {
    const { classes } = props

    return (
        <Container className={classes.root} component="section">
            <Button className={classes.button}>
                <Typography variant="h4" component="span">
                    Our Journey
                </Typography>
            </Button>
            <Typography
                variant="subtitle1"
                className={classes.link}
            ></Typography>
            <Image
                src="miles.png"
                alt="Sunset Image"
                className={classes.image}
            />
        </Container>
    )
}

ProductSmokingHero.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
