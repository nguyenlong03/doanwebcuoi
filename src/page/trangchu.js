import React from 'react'
import "../page/trangchu.scss"
import Contentleft from '../component/content/contentleft/contentleft';
import Contentmid from '../component/content/contentmid/contentmid';
import Contentright from '../component/content/contentright/contentright';
import { Outlet } from 'react-router';
 function Trangchu() {
  return (
    <div className='Trangchu'>
      <div className='trangchu_left'>
        <Contentleft/>
      </div>
      
      <div className='trangchu_mid'>
        <Outlet/>
      </div>
      <div className='trangchu_right'>
        <Contentright/>
      </div>

    </div>
  )

}
export default Trangchu;