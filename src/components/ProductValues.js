import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Dot from '@material-ui/icons/FiberManualRecordSharp'
import { Container, List, ListItem } from '@material-ui/core'
import Typography from './Utils/Typography'
import ProductCurvyLines from '../assets/images/productCurvyLines.png'
import ProductValues1 from '../assets/images/m.jpg'
import ProductValues2 from '../assets/images/w.jpg'
import ProductValues3 from '../assets/images/k.jpg'

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        // backgroundColor: theme.palette.secondary.light,
    },
    listRoot: {},
    container: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    subHeading: {
        marginBottom: theme.spacing(8),
        color: theme.palette.black[600],
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 150,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
})

function ProductValues(props) {
    const { classes } = props

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Typography
                    variant="h3"
                    marked="center"
                    align="center"
                    component="h2"
                    className={classes.subHeading}
                >
                    Products
                </Typography>

                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                className={classes.image}
                                src={ProductValues1}
                                alt="suitcase"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Mens Collections
                            </Typography>
                            <Grid container>
                                <Grid item xs={6}>
                                    <List className={classes.listRoot}>
                                        {[
                                            'Bermudas',
                                            'Casual Wear',
                                            'Jackets',
                                            'Lounge Wear',
                                            'Mens Basics',
                                            'Mens Boxer',
                                            'Mens Hooded Jacket',
                                        ].map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                alignItems="start"
                                            >
                                                <Dot
                                                    style={{
                                                        fontSize: '15px',
                                                        paddingRight: '8px',
                                                    }}
                                                />{' '}
                                                <Typography>{item}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                <Grid item xs={6}>
                                    <List className={classes.listRoot}>
                                        {[
                                            'Mens Long Sleeve',
                                            ' Mens Polo Shirts',
                                            'Pajamas sets',
                                            ' Sleep wear',
                                            'Sports wear',
                                            'Under wear',
                                        ].map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                alignItems="start"
                                            >
                                                <Dot
                                                    style={{
                                                        fontSize: '15px',
                                                        paddingRight: '8px',
                                                    }}
                                                />{' '}
                                                <Typography>{item}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                className={classes.image}
                                src={ProductValues2}
                                alt="graph"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Womens Collections
                            </Typography>
                            <Grid container>
                                <Grid item xs={12}>
                                    <List className={classes.listRoot}>
                                        {[
                                            ' Casual Wear',
                                            ' Pajamas sets',
                                            ' Polo Shirts',
                                            'Lounge Wear',
                                            ' Sleep wear',
                                            'Sports wear',
                                        ].map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                alignItems="start"
                                            >
                                                <Dot
                                                    style={{
                                                        fontSize: '15px',
                                                        paddingRight: '8px',
                                                    }}
                                                />{' '}
                                                <Typography>{item}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                {/* <Grid item xs={6}>
                                    <List className={classes.listRoot}>
                                        {[
                                            'Mens Long Sleeve',
                                            ' Mens Polo Shirts',
                                            'Pajamas sets',
                                            ' Sleep wear',
                                            'Sports wear',
                                            'Under wear',
                                        ].map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                alignItems="start"
                                            >
                                                <Dot
                                                    style={{
                                                        fontSize: '15px',
                                                        paddingRight: '8px',
                                                    }}
                                                />{' '}
                                                <Typography>{item}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid> */}
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.item}>
                            <img
                                className={classes.image}
                                src={ProductValues3}
                                alt="clock"
                            />
                            <Typography variant="h6" className={classes.title}>
                                Kids Collections
                            </Typography>
                            <Grid container>
                                <Grid item xs={12}>
                                    <List className={classes.listRoot}>
                                        {[
                                            'Bermudas',
                                            'Casual Wear',
                                            'Jackets',
                                            'Lounge Wear',
                                            'Mens Basics',
                                            'Mens Boxer',
                                            'Mens Hooded Jacket',
                                        ].map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                alignItems="start"
                                            >
                                                <Dot
                                                    style={{
                                                        fontSize: '15px',
                                                        paddingRight: '8px',
                                                    }}
                                                />{' '}
                                                <Typography>{item}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                                {/* <Grid item xs={6}>
                                    <List className={classes.listRoot}>
                                        {[
                                            'Mens Long Sleeve',
                                            ' Mens Polo Shirts',
                                            'Pajamas sets',
                                            ' Sleep wear',
                                            'Sports wear',
                                            'Under wear',
                                        ].map((item, idx) => (
                                            <ListItem
                                                key={idx}
                                                alignItems="start"
                                            >
                                                <Dot
                                                    style={{
                                                        fontSize: '15px',
                                                        paddingRight: '8px',
                                                    }}
                                                />{' '}
                                                <Typography>{item}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid> */}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

ProductValues.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductValues)
