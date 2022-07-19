import {React ,useState,useEffect} from 'react'
import { ethers } from 'ethers';

const ConnectWallet = () => {
    const [account, setAccount]=useState()
    async function connect() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(
                window.ethereum,
                "any"
              );
              await provider.send("eth_requestAccounts", []);
              const signer = provider.getSigner();
              console.log(await signer.getAddress())
              const acc=await signer.getAddress()
              setAccount(acc)
        } else {
         console.log("No wallet");
        }
       } 
       useEffect(() => {
         console.log(account)
       }, [account])
             
  return (
    <div className='container d-flex justify-content-end'>
        <h1>{account}</h1>
        <button onClick={()=>connect()}>Connect wallet</button>
    </div>
  )
}

export default ConnectWallet