import React from 'react'
import HomepageLeft from '../../HomepageComponent/HomepageLeft'
import HomepageRight from '../../HomepageComponent/HomepageRight'

const Home = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex overflow-y-hidden">
            <HomepageLeft className="w-1/6"/>
            <HomepageRight className="w-5/6"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
