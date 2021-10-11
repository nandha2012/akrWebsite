import React from 'react'
import Layout from '../components/UI/Layout'
import Seo from '../components/Seo'
import ProductHero from '../components/ProductHero'
import ProductValues from '../components/ProductValues'
import CompanyClients from '../components/CompanyClients'
import ProductHowItWorks from '../components/ProductHowItWorks'
import ProductCTA from '../components/ProductCTA'
import ProductSmokingHero from '../components/ProductSmokingHero'

export default function Home() {
    return (
        <Layout>
            <Seo title="Home" />
            <ProductHero dynamic />
            <ProductValues />
            <CompanyClients />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
        </Layout>
    )
}
