import React from 'react';
import CustomHook from '../../Hooks/CustomHook';

const HookForm = () => {

    const [name,nameOnChnage] = CustomHook('');
    const [email,emailOnChnage] = CustomHook('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit',name);
        console.log('submit',email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" defaultValue={name} 
            placeholder ='name' onChange={nameOnChnage}/>
            <br />
            <input type="email" name="email" defaultValue={email} onChange={emailOnChnage} placeholder='email'/>
            <br />
            <input type="submit" value="submit" />
            </form>
            
        </div>
    );
};

export default HookForm;