import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from './Utils/Button'
import Typography from './Utils/Typography'
import ProductCurvyLines from '../assets/images/productCurvyLines.png'
import ProductHowItWorks1 from '../assets/images/pr1.jpg'
import ProductHowItWorks2 from '../assets/images/pr2.jpg'
import ProductHowItWorks3 from '../assets/images/printng.jpg'
import Image from '../components/Utils/images.js'

const styles = theme => ({
    root: {
        display: 'flex',
        // backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
        width: '400px',
        height: '300px',
    },
    title: {
        marginBottom: theme.spacing(14),
    },
    number: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
        width: '100%',
        height: '100%',
        margin: theme.spacing(0.5),
    },

    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
        opacity: 0.7,
    },
    button: {
        marginTop: theme.spacing(8),
    },
})
const images = [
    { src: 'pr2.jpg', alt: 'production_1', description: 'Production' },
    { src: 'ga3.jpg', alt: 'garment_3', description: 'Garment' },
    { src: 'ga4.jpg', alt: 'garment_4', description: 'Garment' },
    { src: 'ga5.jpg', alt: 'garment_5', description: 'Garment' },
    { src: 'kn2.jpg', alt: 'knitting_2', description: 'Knitting' },
    { src: 'kn3.jpg', alt: 'knitting_3', description: 'Knitting' },
]
function ProductHowItWorks(props) {
    const { classes } = props

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src={ProductCurvyLines}
                    className={classes.curvyLines}
                    alt="curvy lines"
                />
                <Typography
                    variant="h4"
                    marked="center"
                    className={classes.title}
                    component="h2"
                >
                    infrastructure
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        {images.map(image => (
                            <Grid item xs={12} md={4}>
                                <div className={classes.item}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className={classes.image}
                                    />
                                    <Typography variant="h5" align="center">
                                        {image.description}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}

                        {/* <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <Image
                                    src="kn3.jpg"
                                    alt="graph"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    First come, first served. Our offers are in
                                    limited quantities, so be quick.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <Image
                                    src="kn2.jpg"
                                    alt="clock"
                                    className={classes.image}
                                />
                                <Typography variant="h5" align="center">
                                    {
                                        'New offers every week. New experiences, new surprises. '
                                    }
                                    {'Your Sundays will no longer be alike.'}
                                </Typography>
                            </div>
                        </Grid> */}
                    </Grid>
                </div>
            </Container>
        </section>
    )
}

ProductHowItWorks.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHowItWorks)
