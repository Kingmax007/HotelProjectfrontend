import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
export default function Error() {
  return <Hero hero="defaultHero">
      <Banner title='404' subtitle="Page not found">
        <Link to='/' className='btn-primary'>Go back home</Link>
      </Banner>
    </Hero>
  
}
