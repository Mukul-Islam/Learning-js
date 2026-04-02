import React, { use } from 'react';

const User2 = ({urlPromiseData}) => {
    const data=use(urlPromiseData);
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default User2;