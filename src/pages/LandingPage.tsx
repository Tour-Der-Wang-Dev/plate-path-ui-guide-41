
import React from 'react';
import AppHeader from '@/components/common/AppHeader';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import AppPromotion from '@/components/landing/AppPromotion';
import RestaurantSignup from '@/components/landing/RestaurantSignup';
import DriverSignup from '@/components/landing/DriverSignup';
import Testimonials from '@/components/landing/Testimonials';
import CallToAction from '@/components/landing/CallToAction';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader transparent={true} />
      <main>
        <Hero />
        <Features />
        <AppPromotion />
        <RestaurantSignup />
        <DriverSignup />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
