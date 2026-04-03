import React from 'react';

const ProductForm = ({handleOnProduct}) => {

    const handleOnSubmit = e=>{
        e.preventDefault();
       const name = e.target.name.value;
       const price = e.target.price.value;
       const quantity = e.target.quantity.value;

    //    console.log(name,price,quantity)

       const newProduct = {
        name,
        price,
        quantity
       }
       handleOnProduct(newProduct);
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='name' placeholder='product name' />
                <br />
                <input type="text" name='price' placeholder='product price' />
                <br />
                <input type="text" name='quantity' placeholder='product quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProductForm;