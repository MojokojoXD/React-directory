import Button from "./Button";

const buttonAction = ['< Previous','Edit','Delete','New','Next >']

function Options({dispatch,setAction}){
    return(
       <div id="options" style={options}>
         {buttonAction.map(action=>{
             return <Button key={action} action={action} dispatch={dispatch} setAction={setAction}/>
         })}
       </div>
    )
}


const options = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px'
}

export default Options;