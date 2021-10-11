import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'
import Image from '../components/Utils/images.js'
import { Container, ImageList, ImageListItem } from '@material-ui/core'
import Typography from './Utils/Typography'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    imagesContainer: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexWrap: 'wrap',
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            height: '40%',
        },
        width: '20%',
        height: '20%',
        margin: theme.spacing(0.5),
    },

    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageList: {
        width: '100VW',
        height: '100VH',
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
})

function CompanyClients(props) {
    const { classes, data } = props
    console.log(data)
    const images = [
        {
            url: 'client_Ck.jpg',
            title: 'Snorkeling',
            width: '40%',
        },
        {
            url: 'client_digual.jpg',
            title: 'Massage',
            width: '20%',
        },
        {
            url: 'client_jj.jpg',
            title: 'Hiking',
            width: '40%',
        },
        {
            url: 'client_Om.jpg',
            title: 'Tour',
            width: '38%',
        },
        {
            url: 'client_ovs.jpg',
            title: 'Gastronomy',
            width: '38%',
        },
        {
            url: 'client_timb.jpg',
            title: 'Shopping',
            width: '24%',
        },
        {
            url: 'client_Tm.jpg',
            title: 'Walking',
            width: '40%',
        },
        {
            url: 'client_tt.jpg',
            title: 'Fitness',
            width: '20%',
        },
        {
            url: 'client_wrlanger.jpg',
            title: 'Reading',
            width: '40%',
        },
    ]

    return (
        <Container className={classes.root} component="section">
            <Typography
                variant="h4"
                marked="center"
                align="center"
                component="h2"
            >
                Clients
            </Typography>
            <div className={classes.imagesContainer}>
                {images.map((image, idx) => (
                    // <div className={classes.imageWrapper}>
                    <Image
                        src={image.url}
                        alt="Sunset Image"
                        className={classes.image}
                    />
                    // </div>
                ))}
            </div>
        </Container>
    )
}

export const query = graphql`
    {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(layout: FIXED)
                    }
                }
            }
        }
    }
`

CompanyClients.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CompanyClients)
