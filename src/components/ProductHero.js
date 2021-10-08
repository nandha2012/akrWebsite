import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import Typography from './Utils/Typography'
import ProductHeroLayout from './ProductHeroLayout'
import { Carousel } from 'react-bootstrap'
import AkrHoImage from '../assets/images/AKR_HO_Photo.jpg'
import AkrDying from '../assets/images/akr_dying.jpg'
import AKRGarment from '../assets/images/garment1.jpg'
const backgroundImage =
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80'

const styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },

    more: {
        marginTop: theme.spacing(2),
    },
    dynamicBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#03a9f4',
        mixBlendMode: 'overlay',
    },
    dynamicVideo: {
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.8,
    },
    carosalItem: {
        backgroundSize: 'COVER',
        height: '100Vh',
        width: '100VW',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carousalContent: {
        width: '50%',
    },
    carousalText: {
        fontSize: '24px',
    },
})

function ProductHero(props) {
    const { classes, dynamic } = props
    const [initiated, setInitiated] = React.useState(false)

    useEffect(() => {
        setInitiated(true)
    }, [])

    return (
        <ProductHeroLayout
            backgroundClassName={
                dynamic ? classes.dynamicBackground : classes.background
            }
        >
            <Carousel>
                <Carousel.Item>
                    <div
                        className={classes.carosalItem}
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.1) 0%,
                                rgba(0, 0, 0, 2) 100%
                              ), url(${AkrHoImage})`,
                        }}
                    >
                        <div className={classes.carousalContent}>
                            <Typography
                                variant="subtitle2"
                                className={classes.carousalText}
                            >
                                AKR Export and clothing established in 1995, is
                                engaged in the business of exporting knitted
                                garments to various countries across the globe
                                and inside India.{' '}
                            </Typography>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className={classes.carosalItem}
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.1) 0%,
                                rgba(0, 0, 0, 2) 100%
                              ),url(${AkrDying})`,
                        }}
                    >
                        <div className={classes.carousalContent}>
                            <Typography
                                variant="subtitle2"
                                className={classes.carousalText}
                            >
                                One of the South Asia’s largest dyeing plant.
                                Fully computerized and automatic color
                                dispensing system for accurate shade matching.{' '}
                            </Typography>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className={classes.carosalItem}
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.1) 0%,
                                rgba(0, 0, 0,20.5) 100%
                              ),url(${AKRGarment})`,
                        }}
                    >
                        <div className={classes.carousalContent}>
                            <Typography
                                variant="subtitle2"
                                className={classes.carousalText}
                            >
                                We follow national and international laws on
                                labour employment. We provide healthy, secure
                                and dirt free environment with best remuneration
                                as their earnings.{' '}
                            </Typography>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </ProductHeroLayout>
    )
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(ProductHero)
