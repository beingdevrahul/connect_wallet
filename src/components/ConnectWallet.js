import React from 'react'
import { ethers } from 'ethers';

const ConnectWallet = () => {
    async function connect() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(
                window.ethereum,
                "any"
              );
              await provider.send("eth_requestAccounts", []);
              const signer = provider.getSigner();
              console.log(await signer.getAddress())
        } else {
         console.log("No wallet");
        }
       }       
  return (
    <div className='container d-flex justify-content-end'>
        <button onClick={()=>connect()}>Connect wallet</button>
    </div>
  )
}

export default ConnectWallet