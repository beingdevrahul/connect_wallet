import {React ,useState,useEffect} from 'react'
import { ethers } from 'ethers';
import axios from 'axios';
// import { useMoralis } from "react-moralis";
import '../CSS/connectwallet.css'
import connectwalletBtn from '../images/connectwalletImg.png'
import groupMLogo from '../images/groupmLogo.png'
import { useNavigate } from "react-router-dom";


// import WalletConnectProvider from "@walletconnect/web3-provider";


const ConnectWallet = () => {
    const [account, setAccount]=useState()
    const [isUserAuth, setIsUserAuth] = useState()
    let navigate = useNavigate();
    // const { authenticate, isAuthenticated, user } = useMoralis();

    // const login = async () => {
    //   if (!isAuthenticated) {

    //     await authenticate({ 
    //             provider: "walletconnect", 
    //             mobileLinks: [
    //               "rainbow",
    //               "metamask",
    //               "argent",
    //               "trust",
    //               "imtoken",
    //               "pillar",
    //             ] 
    //         })
    //       .then(function (user) {
    //         console.log(user.get("ethAddress"));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }
    // }
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
                navigate('/accessgranted')
               }
               else{
                setIsUserAuth(false)
                navigate('/accessdenied')
               }
            })
        }
       }, [account])
             
  return (
    <div className='d-flex justify-content-center align-items-center flex-column connect-wallet-main'>
      <img src={groupMLogo} height={90} className="mb-5" alt="" srcset="" />
      <div className="container d-flex justify-content-center align-items-center flex-column">
      <span className='brew-heading' style={{fontWeight:"700",fontSize:"52px"}}>BREW 2022</span>
      <p className='brew-p' style={{color:"white"}}>The deeper yo go, The more you know.</p>
      <div className='my-5'>
        <span style={{color:"#4AABE9",fontWeight:"700",fontSize:"42px"}}>#DiveIn</span>
      </div>
      <img src={connectwalletBtn} className="my-2" style={{cursor:"pointer"}} height={65} onClick={()=>connect()} alt="" srcset="" />
        <span style={{fontWeight:"700",color:"white"}}>with a valid event pass NFT.</span>
        {/* <button onClick={()=>connect()} style={{width:"200px"}}>Connect wallet</button> */}
        <h1>{account}</h1>
        {isUserAuth?<h1>Access Granted</h1>:""}
        {isUserAuth===false?<h1>Access Denied</h1>:""}
        {/* <button onClick={()=>{login()}}>
          mobile connect
        </button> */}
      </div>
    </div>
  )
}

export default ConnectWallet