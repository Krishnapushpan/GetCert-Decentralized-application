import React ,{useState} from 'react'
import {ethers} from 'ethers';
import {Link,useNavigate} from 'react-router-dom'
import Logo from '../assets/images/course.png'
import ABI from '../assets/Cert.json'
import address from '../assets/deployed_addresses.json'
const frontpage = () => {
        const [certid, setCertid] = useState('');
        const navigate = useNavigate();
    
        // Update certid directly as a string
        function handlechange(e) {
            setCertid(e.target.value);
            console.log("Certificate ID:", e.target.value);
        }
    
        // Navigate to the certificate view page
        const getCertificate = () => {
            if (!certid.trim()) {
                alert("Please enter a certificate ID");
                return;
            }
            navigate(`/viewcertificate/${certid}`);
        };
        async function connectToMetamask(){
                //get the provider [metamask]
                  const provider = new ethers.BrowserProvider(window.ethereum);
                  //getsigner is function to getthe current open account 
                  const signer = await provider.getSigner()
                  console.log(signer);
                  alert(`${signer.address} is logged in`)
                }
                // async function getCertificate(){
                //         const id=document.getElementById('ID').value;
                //         console.log(id);
                //         const provider = new ethers.BrowserProvider(window.ethereum);
                //         const signer = await provider.getSigner();
                //         const cAbi = ABI.abi;
                //         const cAddress=address['CertModule#Cert'];
                //         console.log(cAddress);
                //         const certiInstance = new ethers.Contract(cAddress,cAbi,signer)
                //         const txValue = await certiInstance.certificates(id);
                //         console.log("trying",txValue);
                //         Setoutput(`Name:${txValue[0]} course:${txValue[1]} Grade:${txValue[2]} Date:${txValue[3]}`);
                       
                //               navigate(`/viewcertificate`);
                //       }
  return (
    <div>
        <div className="flex justify-end  p-2 ">
                <button className="bg-sky-500 rounded w-[200px] h-10 p-2 pl-6 mr-4 text-justify text-slate-100" onClick={connectToMetamask} >Connect to MetaMask</button>
                <Link to="issuecerti" className="rounded w-40 h-10 p-2 pl-6 text-justify ">Issue certificate</Link>
        </div>
        <div className="text-center text-4xl font-extrabold">
                <p>Certificate Dapp</p>
        </div>
        <div className=" ">
                <div className=" flex justify-center items-center mt-12 " >
                    <img className="w-40 h-40" src={Logo} alt=""/>
                </div>
        </div>
        <div className="flex justify-center items-center  mt-12 ">
                <input className="border border-sky-500" value={certid} onChange={handlechange} id='ID'name='ID' type="number"  placeholder="enter certificate ID to View"/>
                <button className="border border-sky-500 bg-sky-500 rounded w-[200px] text-slate-100 ml-4" type="button" name="" value="search" onClick={getCertificate}>Get Certificate</button>
        </div>
</div>
  )
}

export default frontpage