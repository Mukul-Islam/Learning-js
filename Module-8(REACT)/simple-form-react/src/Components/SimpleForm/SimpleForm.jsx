import React from 'react';

const handleForm = (e)=>{
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    
}
const SimpleForm = () => {
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name='name' placeholder='name'/>
                <br />
                <input type="email" name='email' placeholder='email'/>
                <br />
                <input type="submit" value="submit" />
              
            </form>
            
        </div>
    );
};

export default SimpleForm;