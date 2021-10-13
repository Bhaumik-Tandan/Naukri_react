import {useTabSet} from '../UpperTabHook/tabHook';
function Head() {
    const TabSet=useTabSet();
    return (
        <div>
            <center>
            <button onClick={()=>TabSet(0)}>Post Job</button>
            <button onClick={()=>TabSet(1)}>See Job</button>
            <button onClick={()=>TabSet(2)}>Applications</button>
            </center>
        </div>
    )
}

export default Head;
