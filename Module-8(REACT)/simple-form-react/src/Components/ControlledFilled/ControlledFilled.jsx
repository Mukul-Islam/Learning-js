import React, { useState } from 'react';

const handleSubmit= (e)=>{
    e.preventDefault();
    console.log('fasdf')
}


const ControlledFilled = () => {
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleOnChageFunction = (e)=>{
    console.log(e.target.value);
    setPassword(e.target.value);

    if(password.length<6)
    {
        setError('password are under 6 charecter')
    }
    else{
        setError('')
    }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' required/>
                <br />
                <input type="password" onChange={handleOnChageFunction}  name="password" defaultValue={password} placeholder='password' required/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledFilled;