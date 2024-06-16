const getvalue=document.querySelector('#selector')

const increment =()=>
    {
        let value=parseInt(getvalue.innerText);
        value=value+1;
        getvalue.innerText=value;

    };
    const decrement =()=>
        {
            let value=parseInt(getvalue.innerText);
            value=value-1;
            getvalue.innerText=value;
    
        };