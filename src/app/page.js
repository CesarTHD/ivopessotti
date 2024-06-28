"use client";
import HeroSection from '../components/HeroSection'
import Specialties from '../components/Specialties'
import CallToAction from '../components/CallToAction'
import ProceduresSlider from '../components/ProceduresSlider/ProceduresSlider'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ/FAQ'
import ExitIntentModal from '../components/ExitIntentModal'
import { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import InstaFeed from '../components/InstaFeed'
import PrintComments from '../components/PrintComments'
import Testimonials from '@/components/Testimonials';

function Home() {

  const [open, setOpen] = useState(0);

  return (
    <>
      <div className='overflow-x-hidden' onMouseLeave={() => { setOpen(open + 1) }}>
        <div id='home' className='font-custom'>

          <div className="bg-background-home">
            <Header />
            <div className='max-w-[1700px] lg:px-32 mx-auto'>
              <HeroSection />
              <Specialties />

              <div id='contact'></div>
              <CallToAction />

              <div className="pb-24">
                <ProceduresSlider />
              </div>
            </div>
          </div>

          <div id='about'></div>
          <div className="my-52">
            <About />
          </div>

          <div className='flex items-center my-32 w-full justify-center'>
            <InstaFeed />
          </div>

          <div className='flex items-center my-32 w-full justify-center'>
            <PrintComments />
          </div>

          <div className="my-52">
            <Testimonials />
          </div>

          <div id="FAQ"></div>
          <div className="flex flex-col my-32 items-center">
            <FAQ />
          </div>

          <div className="my-32">
            <ExitIntentModal open={open} setOpen={setOpen} />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
