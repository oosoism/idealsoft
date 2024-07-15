import React from 'react'
import Breadcrumb from '../components/about/Breadcrumb'
import ChooseUs from '../components/about/ChooseUs'
import CtaSection from '../components/about/CtaSection'
import TeamSection from '../components/about/TeamSection'
import FaqSection from '../components/about/FaqSection'
import GrowthSection from '../components/about/GrowthSection'
import ServiceProductiveSection from '../components/about/ServiceProductiveSection'

const About = () => {
  return (
    <>
        <Breadcrumb/>
        <ChooseUs/>
        <CtaSection/>
        <TeamSection/>
        <FaqSection/>
        <GrowthSection/>
        <ServiceProductiveSection/>
    </>
  )
}

export default About