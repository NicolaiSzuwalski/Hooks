import { useState } from "react";


export const Greeting = () => {
    const [name, setName] = useState('');
    return(
        <div>
            <div>Send en hilsen til {name}</div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
    )
}