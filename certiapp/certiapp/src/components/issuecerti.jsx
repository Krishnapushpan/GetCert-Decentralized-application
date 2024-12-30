import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import {ethers} from 'ethers'
import ABI from '../assets/Cert.json'
import address from '../assets/deployed_addresses.json'
const issuecerti = () => {
    const [FormData,setFormData]=useState({
        id:0,
        name:'',
        course:'',
        grade:'',
        date:''
      })
      function handleChange(event){
        console.log(event.target)
        const {name,value}=event.target;
        console.log();

        setFormData((preState)=>({...preState,[name]:value}))
        console.log(FormData);
        
      }
    async function handleSubmit(event){
    
        event.preventDefault();
        console.log("Hi");
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const cAbi = ABI.abi;
        const cAddress=address['CertModule#Cert'];
        console.log(cAddress);
        //create an instance of the contract 
        const certiInstance = new ethers.Contract(cAddress,cAbi,signer)
        console.log(certiInstance);
        const txnReceipt= await certiInstance.issue(FormData.id,FormData.name,FormData.course,FormData.grade,FormData.date)
        console.log("print",txnReceipt);
        
      }
  return (<>
       <div className='p-8'><Link to="/" className="bg-sky-500 rounded w-[200px] h-10 p-4 mt-12 mr-4 text-justify text-slate-100">Home</Link></div>
    <div className=" bg-gray-400  border border-slate-500 h-4/5 w-4/5 ml-20 mt-8 h-4/5">

<p className="ml-12 mt-10 text-2xl">Issue New Certificate</p><br />
<form onSubmit={handleSubmit} >
        <label className='ml-16'  htmlFor="">ID:</label>
        <input type="number" id="id" name="id" onChange={handleChange}/><br /><br />
        <label htmlFor=""  className='ml-16'>name</label>
        <input type="text" id="name" name="name" onChange={handleChange}/><br /><br />
        <label htmlFor=""  className='ml-16'>course</label>
        <input type="text" id="course" name="course" onChange={handleChange}/><br /><br />
        <label htmlFor=""  className='ml-16'>grade</label>
        <input type="text" id="grade" name="grade"onChange={handleChange} /><br /><br />
        <label htmlFor=""  className='ml-16'>Date</label>
        <input type="date" id="date" name="date"onChange={handleChange} /><br /><br />
        <div className='p-8 text-justify '><input className="bg-sky-500 rounded w-[200px] h-10 p-2 pl-6 mr-4 text-justify text-slate-100" type="submit" value='Submit'/></div>
        </form>
</div>

</>
  )
}

export default issuecerti