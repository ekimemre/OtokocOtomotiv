import React, { useState } from 'react'
import Styles from './styles.module.css'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Store from '../../components/Store'
import ExtendedBar from '../../components/ExtendedBar';
import TransparentBox from '../../components/TransparentBox';

const Dashboard = () => {

  const [isExtend, setIsExtend] = useState(false); //Sidebar'ın büyütülüp küçültülmesi için gerekli olan kontrol state'i.
 
  return (
    <div>
      <Navbar />
      <hr style={{border: "1px solid #000000"}}/>
      
      {isExtend && <TransparentBox />}
      <div className={Styles.container}>
        <div className={Styles.main}>
          <Store />
        </div>
        {!isExtend && <hr style={{border: "1px solid #000000"}}/>}
        {!isExtend && <Sidebar zoomIn={setIsExtend}/> }
        {isExtend && <ExtendedBar zoomOut={setIsExtend}/>}
      </div>
      
    </div>
  )
}

export default Dashboard
