import './Results.css'
export default function Results(props){
    // console.log(props.items.initial);
    var {initial , saving, interest, tenure} = props.items;
    initial=Number(initial)
    saving=Number(saving)
    interest=Number(interest)
    tenure=Number(tenure)
    // console.log(initial,saving,interest,tenure);
    const data = [];
    for(var i= 1;i<=props.items.tenure;i++){
        var interestValue =(initial*interest/100)
        // interestValue=interestValue.toFixed(2);
        data.push(
            {
                key:i,
                interest: interestValue.toFixed(2),
                investment: (initial+interestValue+saving).toFixed(2)
            }
        )
        initial=initial+interestValue+saving
    }
    

    return (
        <div className='show-results'>
            <div className="results-title">
                <div className='title'>Year</div>
                <div className='title'>Interest</div>
                <div className='title'>Total Saving</div>
            </div>
            {data.map((d)=>{
                return(
                <div className='results' key={d.key}>
                        <div className='entry'>{d.key}</div>
                        <div className='entry'>{d.interest}</div>
                        <div className='entry'>{d.investment}</div>
                </div>)
            })}
            
        </div>
    );
}