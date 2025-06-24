import { Store } from "./Store";
import {Provider} from 'react-redux';

export function Reduxprovider({children}){
    return(
    <Provider store={Store}>
        {children}
    </Provider>);
}
