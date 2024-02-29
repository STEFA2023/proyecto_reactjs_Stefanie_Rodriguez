import { useState } from "react"
import ItemCountPresentacional from "./ItemCountPresentacional";

export const ItemCountContainer= ({Stock}) => {
        const [counter, setCounter ] = useState (0);
        
        const sumar = () =>{
            if(counter < Stock ){
                setCounter(counter + 1)
                }
        };

        const restar = ()=>{
            if(counter>0){
        setCounter(counter - 1);
        }
    };
    return(
        <div>
            <ItemCountPresentacional sumar={sumar} restar={restar} counter={counter} />
        </div>
    );    
};

export default ItemCountContainer;