import React from 'react';
import Apply from './candidate/apply';
import Company from "./company/company";
import AppMain from './application/main';
import {useTab} from '../UpperTabHook/tabHook';
import ApplicationHook from './application/dataHook';
function Main() {
    const tab=useTab();
    return (
        <div>
            {tab==0?<Company/>:tab==1?<Apply/>:<ApplicationHook><AppMain/></ApplicationHook>}
        </div>
    )
}

export default Main;
