import {React ,useState,useEffect} from 'react'
import { ethers } from 'ethers';
import axios from 'axios';

const ConnectWallet = () => {
    const [account, setAccount]=useState()
    const [isUserAuth, setIsUserAuth] = useState()
    // https://eth-rinkeby.alchemyapi.io/v2/FhS1q5xiyxfcaIyz2NUua-IpyOIYh-vO/getNFTs/?owner=0x2B099F96eaAd16A76127aEe391A301ec2782e3A9&contractAddresses[]=0x53DF582b2AedB60Ad80187Cd946736e31A884D06
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
        if(account){
            axios.get(`https://eth-rinkeby.alchemyapi.io/v2/FhS1q5xiyxfcaIyz2NUua-IpyOIYh-vO/getNFTs/?owner=${account}&contractAddresses[]=0x53DF582b2AedB60Ad80187Cd946736e31A884D06`).then((res)=>{
               console.log("response by api",res)
            //    console.log("response by api",parseInt(res.data.ownedNfts[0].id.tokenId,16))
               let tokenId;
               if(res.data.ownedNfts.length>0){
                    tokenId=parseInt(res.data.ownedNfts[0].id.tokenId,16)
               }
               if(tokenId && tokenId>0){
                setIsUserAuth(true)
               }
               else{
                setIsUserAuth(false)
               }
            })
        }
       }, [account])
             
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
        <button onClick={()=>connect()} style={{width:"200px"}}>Connect wallet</button>
        <h1>{account}</h1>
        {isUserAuth?<h1>Access Granted</h1>:""}
        {isUserAuth===false?<h1>Access Denied</h1>:""}
    </div>
  )
}

export default ConnectWallet