import React from 'react'
import accessdenied from '../images/accessdeniedimg.png'
import '../CSS/accessdenied.css'
import disconnect from '../images/disconnect.png'

const AccessDenied = () => {
  return (
    <div className='accessdenied-main d-flex flex-column justify-content-center align-items-center'>
        <span style={{fontWeight:"700",color:"#001F54",fontSize:"52px", textAlign:"center"}}>Access Denied!</span>
        <div className='text-center accessdenied-phera'>
            <p style={{fontSize:"22px"}}>Sorry, access is not granted as the <span style={{fontWeight:"700"}}>wallet does not hold the required NFT pass.</span> </p>
        </div>
            <img src={accessdenied} alt="" srcset="" />
        <p style={{fontSize:"18px"}}><span style={{fontWeight:"700",textDecoration:"underline", cursor:"pointer"}}>Go back</span> <span style={{color:"#001F54"}}>
        & try connecting the wallet again. </span></p>
        <img src={disconnect} style={{cursor:"pointer"}} alt="" srcset="" />
    </div>
  )
}

export default AccessDenied