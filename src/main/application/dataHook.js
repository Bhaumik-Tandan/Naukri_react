import React, { useState,useContext} from 'react'



const Application=React.createContext();
const CurrentlySelected=React.createContext();

export function useApplication()
{
    return useContext(Application);
}

export function useCurrentlySelected()
{
    return useContext(CurrentlySelected);
}

const ApplicationSet=React.createContext();
const CurrentlySelectedSet=React.createContext(0);

export function useApplicationSet() {
    return useContext(ApplicationSet);   
}

export function useCurrentlySelectedSet(){
    return useContext(CurrentlySelectedSet);
}

function ApplicationHook({children}){
    const [application, setApplication] = useState();
    const [selected,setSelected]=useState("0");

    function toggleApplication(setVal)
    {
        setApplication(setVal);  
    }

    function changeSelected(val)
    {
        setSelected(val);
    }


    return (
        <CurrentlySelectedSet.Provider value={changeSelected}>
        <CurrentlySelected.Provider value={selected}>
        <ApplicationSet.Provider value={toggleApplication} >
        <Application.Provider value={application} >
            {children}
        </Application.Provider>
        </ApplicationSet.Provider>
        </CurrentlySelected.Provider>
        </CurrentlySelectedSet.Provider>
    )
}

export default ApplicationHook;
