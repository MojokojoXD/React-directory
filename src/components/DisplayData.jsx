import {dataSize,index} from './directoryReducer';
import Edit from './Edit';
import New from './New';


function DisplayData({contact,directoryAction,setAction,dispatch}){

  if(!contact){
    return (
    <div id='display-div' style={displayDiv}>
        <h1 style={{textAlign: 'center'}}>Empty directory</h1>
    </div>
    )
  }

  if(directoryAction){
    return (
        directoryAction === "Edit" ? <Edit contact={contact} setAction={setAction} dispatch={dispatch}/> : 
        <New setAction={setAction} dispatch={dispatch}/>
    );
  }
  

  const {name,city,country,employer,title,favoriteMovies} = contact;
  const {first,last} = name;
  
  return(
       <div id='display-div' style={displayDiv}>
            <h1 style={{float:'right'}}>{index + 1}/{dataSize}</h1>
            <div id='display-data' style={display_data}>
                <h1 style={nameTag}>{first + " " + last}</h1>
                <br/>
                <p><strong>From:</strong> {city}, {country}</p>
                <p><strong>Job title:</strong> {title}</p>
                <p><strong>Employer: </strong>{employer}</p>
                <br/>
                <p><strong>Favorite Movies:</strong></p>
                <ol>
                    {favoriteMovies.map(c => {
                        return <li key={c}>{c}</li>
                    })}
                </ol>
            </div>
        </div>
    )
}

const displayDiv = {
  height: "auto",
  width: "600px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "5px",

  display_data: {
    margin: "5%",
  },

  nameTag: {
    borderBottom: "3px solid #34A5DA",
    width: 'fit-content',
    paddingBottom: '3px'
  },
};

const {display_data, nameTag} = displayDiv

export default DisplayData;