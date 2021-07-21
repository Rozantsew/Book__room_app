import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'

export default function Error() {
    return (
        <Hero>
            <Banner 
                title="Page 404"
                subtitle="This page does't exist"
            />
        </Hero>
    )
}
