import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import Typography from './Utils/Typography'
import TextField from './Utils/TextField'
import Snackbar from './Utils/Snackbar'
import Button from './Utils/Button'
import Image from '../components/Utils/images.js'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(10),
        marginBottom: 0,
        display: 'flex',
    },
    cardWrapper: {
        zIndex: 1,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.warning.main,
        padding: theme.spacing(8, 3),
    },
    cardContent: {
        maxWidth: 400,
    },
    textField: {
        width: '100%',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    button: {
        width: '100%',
    },
    imagesWrapper: {
        position: 'relative',
    },
    // imageDots: {
    //   position: "absolute",
    //   top: -67,
    //   left: -67,
    //   right: 0,
    //   bottom: 0,
    //   width: "100%",
    //   background: "url(/static/onepirate/productCTAImageDots.png)",
    // },
    image: {
        position: 'absolute',
        top: -28,
        left: -28,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: 600,
    },
})

function ProductCTA(props) {
    const { classes } = props
    const [open, setOpen] = React.useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Container className={classes.root} component="section">
            <Grid container>
                <Grid item xs={12} md={6} className={classes.cardWrapper}>
                    <div className={classes.card}>
                        <form
                            onSubmit={handleSubmit}
                            className={classes.cardContent}
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom
                            >
                                Send Us a Note{' '}
                            </Typography>
                            <Typography variant="h5">
                                We are happy to receive messages ...
                            </Typography>
                            <TextField
                                noBorder
                                className={classes.textField}
                                placeholder="Your email"
                            />
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.button}
                            >
                                Keep me updated
                            </Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.imagesWrapper}>
                    <Hidden smDown>
                        {/* @ TODO - REPLACE IMAGE DOTS */}
                        {/* <div className={classes.imageDots} />  */}
                        <Image
                            src="printing_1.jpg"
                            alt="call to action"
                            className={classes.image}
                        />
                    </Hidden>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                onClose={handleClose}
                message="Thank you for your support , will reach out soon ."
            />
        </Container>
    )
}

ProductCTA.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCTA)
