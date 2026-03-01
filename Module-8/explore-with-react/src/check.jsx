import './App.css'
export default function Check({ isdone ,work}) {
    if (isdone) {
        return (
            <div className='check'>
                <p>alu: {work}</p>
                
            </div>
        )
    }
    else
    {
        return (
           <div>
             <p>alu: {work}</p>
                
           </div>
        )
    }
}