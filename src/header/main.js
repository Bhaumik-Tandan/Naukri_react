import {useTabSet,useTab} from '../UpperTabHook/tabHook';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
function Head() {
    const TabSet=useTabSet();
    const tab=useTab();
    return (
        <div>
            <Tabs style={{backgroundColor: "#9cd598", color:"#10230e", fontSize: "2vw"}} centered>
                <center>
                    <Tab label="Add Jobs" onClick={()=>TabSet(0)} style={tab==0?{backgroundColor: "#58b851"}:{}}/>
                    <Tab label="View Jobs" onClick={()=>TabSet(1)} style={tab==1?{backgroundColor: "#58b851"}:{}}/>
                    <Tab label="View Application" onClick={()=>TabSet(2)}style={tab==2?{backgroundColor: "#58b851"}:{}}/>
                </center>
            </Tabs>
        </div>
    )
}

export default Head;
