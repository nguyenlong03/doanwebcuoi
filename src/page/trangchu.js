import React from 'react'
import "../page/trangchu.scss"
import Footer from '../component/footer/footer';
import Header from '../component/header/header';

 function Trangchu() {
  return (
    <div className="app">
        <div className="banner">
          <img className='banner-img' src="https://salt.tikicdn.com/cache/w500/ts/tmp/24/b8/61/632e5eb432e0277b7897d58a56dbb310.jpg" alt="" />
        </div>
        <div className="header">
            <Header/>
        </div>
        <div className="content">
           
           
        </div>
        <div className="footer">
      <Footer/>
        </div>
    </div>
  )

}
export default Trangchu;