import { useEffect } from "react"

const Redirector = props =>{
    useEffect(()=>{
        window.location.href = props.href;
        return null;
    }, [props.href]);

    return ('')
}

export default Redirector;