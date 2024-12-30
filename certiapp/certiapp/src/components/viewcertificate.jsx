import React from 'react'
import { useState,useEffect } from 'react'
import Logo from '../assets/images/course.png'
import { useParams } from 'react-router-dom'
import {ethers} from 'ethers'
import ABI from '../assets/Cert.json'
import address from '../assets/deployed_addresses.json'
const viewcertificate = () => {
  const {id}=useParams();
  const [output,setOutput]=useState('');
  useEffect(()=>{
      const getcertificate=async()=>{
          try{
              const provider= new ethers.BrowserProvider (window.ethereum);
              const signer =await provider.getSigner();
              const cAbi= ABI.abi;
              const cAddress=address['CertModule#Cert'];
              const certiInstance=new ethers.Contract(cAddress,cAbi,signer);
              const result= await certiInstance.certificates(id);
              setOutput({
                  certid: id,
                  name:result.name,
                  course:result.course,
                  grade:result.grade,
                  date:result.date
              })
          }
          catch(error){
              console.error('Error fetching certificate :',error);
          }
      }
      getcertificate();
  },[id]);
  return (
    <div className="border bg-slate-100 border-slate-400 w-9/12 ml-44  p-8 mt-14"> 
        
<div className="border  border-slate-400 bg-slate-100 w-9/12 ml-32  mt-10">

    <div className="text-center">
        <h2>Kerala Blockchain Academy</h2>
    </div>
    <div className=" flex justify-center items-center mt-12 ">
        <img  className="w-40 h-40" src={Logo} alt="" /> 
    </div>
    <div className="text-center mt-4">
        <p>This is certify that <b>{output.name}</b></p>
    </div>
    <div className="text-center mt-4">
        <p> has successfully completed <b>{output.course}</b></p>
    </div>
    <div  className="text-center mt-4">
    <p>with <b>{output.grade}</b> on {output.date}</p>
    </div>
</div>
    </div>

  )
}

export default viewcertificate