import React, { useState,createContext } from 'react'
import HomepageLeft from '../../HomepageComponent/HomepageLeft'
import HomepageRight from '../../HomepageComponent/HomepageRight'

export const HandleleftItem = createContext();



const Home = () => {

  const[CollapsItem,setCollapsItem] = useState(false);

  // Handlecollapse function start here 
  const Handlecollapse = () => {
    setCollapsItem(!CollapsItem)
  };

  


  return (
    <>
      <div className="h-[100vh] overflow-y-hidden">
        <div>
          <div className="flex">
            <HandleleftItem.Provider value={CollapsItem}>
              <HomepageLeft className={`${CollapsItem ? "transition-all duration-200 w-[6%] z-0" : "transition-all duration-200  w-1/5"}`} />
            </HandleleftItem.Provider>
            <HomepageRight className={`${CollapsItem ? "w-full" : "w-full"}`} ItemCollapse={Handlecollapse} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
