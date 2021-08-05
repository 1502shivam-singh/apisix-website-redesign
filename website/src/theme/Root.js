import React, { useEffect} from 'react';

function Root({children}) {
    
    useEffect(() => {
        console.log("Hello customization");
        return () => {
            
        }
    }, []);

    return (<>
        {children}
    </>);
}

export default Root;