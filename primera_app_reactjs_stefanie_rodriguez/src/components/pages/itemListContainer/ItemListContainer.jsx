import { Greeting } from "../../common/greeting/Greeting";
import ItemListPresentacional  from "./itemListPresentacional";

export const ItemListContainer = () => {
    return( <div>
        <Greeting />
        <ItemListPresentacional />
    </div>
    );
}
