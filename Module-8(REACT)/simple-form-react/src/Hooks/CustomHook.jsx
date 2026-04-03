import React, { useState } from 'react';

const CustomHook = (defaultValue)=>{
    const [fieldValue,setFieldValue] = useState(defaultValue);

    const handleFieldOnChage = e =>{
        setFieldValue(e.target.value);
    }

    return [fieldValue,handleFieldOnChage];
}
export default CustomHook;