import React from 'react'
import Layout from '../components/UI/Layout'
import MuiLink from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import { Box, Toolbar } from '@material-ui/core'
import Typography from '../components/Utils/Typography'

export default function VissionPage() {
    return (
        <Layout>
            <Toolbar />
            <Container>
                <Box mt={7} mb={12}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        marked="center"
                        align="center"
                    >
                        vission page
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        align="center"
                        style={{ height: '30vh' }}
                    >
                        Theme Ported by <MuiLink href="#">Akr</MuiLink>
                    </Typography>
                </Box>
            </Container>
        </Layout>
    )
}
