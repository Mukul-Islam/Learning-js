import React from 'react';

const handlformAction = (formData) => {
   console.log(formData.get('name'));
}
const FormAction = () => {
    return (
        <div>
            <form action={handlformAction}>
                <input type="text" name="name" placeholder='name' />
                <br />
                <input type="email" name="email" placeholder='email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;