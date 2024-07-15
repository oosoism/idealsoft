import React from 'react'
import HeroSection from '../components/home/HeroSection'
import MarqueSection from '../components/home/MarqueSection'
import ContactUs from '../components/home/ContactUs'
import CounterSection from '../components/home/CounterSection'
import ProjectSection from '../components/home/ProjectSection'
import FeatureSection from '../components/home/FeatureSection'
import ClearPostSection from '../components/home/ClearPostSection'
import TeamSection from '../components/home/TeamSection'
import CtaSection from '../components/home/CtaSection'
import WebsiteCheckingSection from '../components/home/WebsiteCheckingSection'
import ServiceProductiveSection from '../components/home/ServiceProductiveSection'
import NewsSection from '../components/home/NewsSection'
import BrandSection from '../components/home/BrandSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <MarqueSection/>
        <ContactUs/>
        <CounterSection/>
        <ProjectSection/>
        <FeatureSection/>
        <BrandSection/>
        <ClearPostSection/>
        <TeamSection/>
        <CtaSection/>
        <WebsiteCheckingSection/>
        <ServiceProductiveSection/>
        <NewsSection/>


    </>
  )
}

export default Home