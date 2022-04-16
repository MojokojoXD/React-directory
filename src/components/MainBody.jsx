// @ts-nocheck
import directory from '../data';
import DisplayData from './DisplayData';
import { useReducer,useState } from 'react';
import Options from './Options';
import initial from './directoryReducer';

function MainBody(){
    const [contact, dispatch] = useReducer(initial, {...directory[0],dataSize: directory.length});
    const [directoryAction, setDirectoryAction] = useState('');

    //function to pass to button  to set "Edit" or "New"
    function setAction(action){
        setDirectoryAction(action)
    }

    return (
        <div id="main-body" style={mainBody}>
            <div >
                <DisplayData contact={contact} directoryAction={directoryAction} setAction={setAction} dispatch={dispatch}/>
                <Options dispatch={contact && !directoryAction?dispatch: null} setAction={setAction}/>
            </div>
        </div>
    )
}


const mainBody={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
}


export default MainBody;