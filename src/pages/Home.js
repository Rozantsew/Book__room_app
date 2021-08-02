import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/services/Services'


export default function Home() {
    return (
        <>
            <Hero>
                <Banner
                    title="Luxurious rooms"
                    subtitle="rooms starts at $299"
                >
                    <Link to='/rooms' className="btn-primary">
                        Check out
                    </Link>
                </ Banner>

            </ Hero>
            <Services />
        </>
    )
}