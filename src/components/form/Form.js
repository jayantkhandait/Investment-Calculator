import React, { useState } from 'react'
import './Form.css'

export default function Form(props){
    const [initial, setInitial] = useState('');
    const [saving, setSaving] = useState('');
    const [interest, setInterest] = useState('');
    const [tenure, setTenure] = useState('');

    const handleValue = (e) =>{
        setInitial(e.target.value);
        // console.log(initial);
    }
    const handleSaving = (e) =>{
        setSaving(e.target.value);
    }
    const handleRate = (e) =>{
        setInterest(e.target.value);
    }
    const handleTenure = (e) =>{
        setTenure(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = {
            initial: initial,
            saving: saving,
            interest: interest,
            tenure: tenure
        }

        props.onGetData(data);

        // if(data.interest!=='' && data.saving!=='' && data.intitial!=='' && data.tenure!=='' ){
        //     return <Results items={data}/> ;
        // }
        
        setInitial("");
        setInterest("");
        setSaving("");
        setTenure("");
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <div className='flex'>
                        <span className='box-title'>Initital Investment</span>
                        <input type='number' value={initial} className="initial-investment" onChange={handleValue}/>
                    </div>
                    <div  className='flex'>
                        <span className='box-title'>Yearly Saving</span>
                        <input type='number' value={saving} className="yearly-saving" onChange={handleSaving}/>
                    </div>                
                    
                </div>
                <div className='box'>
                    <div  className='flex'>
                        <span className='box-title'>Interest Rate</span>
                        <input type='number' value={interest} className='interest' onChange={handleRate}/>
                    </div>
                    <div  className='flex'>
                        <span className='box-title'>Tenure</span>
                        <input type='number' value={tenure} className='investment-tenure' onChange={handleTenure}/>
                    </div>                     
                </div>
                
                <button className='btn' type='submit'>GET RESULTS</button>               
            </form>

        </div>
    );
}
