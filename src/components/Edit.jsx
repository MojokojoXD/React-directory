// @ts-nocheck
import {useState} from 'react'
import MovieEdit from './MoviesEdit';

export default function Edit({contact,setAction,dispatch}){
    const [input,setInput] = useState(contact)

    function handleFocus(e){
        e.target.select();
    }

    function inputChange(e){
        let {id,value} = e.target;

        if(id === 'first'){
            setInput(state => {
                return{...state,name:{...state.name,[id]:value}}
            })
        }else if (id === "last") {
          setInput((state) => {
            return { ...state, name: { ...state.name, [id]: value } };
          });
        } else {
          setInput((state) => {
            return { ...state, [id]: value };
          });
        }
    }

    function handleClose(){
        setAction("")
    }

    function getMovieslist(list){
        setInput(state => {
            return{...state,favoriteMovies:list}
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:'Edit',edit: input})
        setAction('');
    }

    return (
        <div id='edit-div' style={displayDiv}>
            <button style={close} onClick={handleClose}>&times;</button>
            <div id='display-data' style={display_data}>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='first'>First name </label>
                        <input type={'text'} id='first' value={input.name.first} onFocus={handleFocus} onChange={inputChange}/>
                    </div>
                    <div>
                        <label htmlFor='last'>Last name </label>
                        <input type={'text'} id='last' onFocus={handleFocus} onChange={inputChange} value={input.name.last}/>
                    </div>
                    
                    <div>
                        <label htmlFor="city">City</label>
                        <input type='text' id="city" onFocus={handleFocus} value={input.city} onChange={inputChange}/>
                        <label htmlFor="country">Country </label>
                        <input type='text' id="country" onFocus={handleFocus} value={input.country} onChange={inputChange}/>
                    </div>

                    <div>
                        <label htmlFor="title">Job title </label>
                        <input type='text' id="title" onFocus={handleFocus} value={input.title} onChange={inputChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="employer">Employer </label>
                        <input type='text' id="employer" onFocus={handleFocus} value={input.employer} onChange={inputChange}/>
                    </div>

                    <div>
                        <MovieEdit movieList={input.favoriteMovies} getMovies={getMovieslist}/>
                    </div>
                    <input style={submit} type={'submit'} value='Edit contact'/>
                </form>              
            </div>
        </div>
    )
}


const displayDiv = {
  height: "auto",
  width: "600px",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "2%",

  display_data: {
    margin: "5%",
  },

  close: {
    height: "fit-content",
    fontSize: "1.3em",
    fontWeight: "bold",
    padding: "0",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    float: "right",
  },
  submit: {
      float: 'right',
      fontSize: "1.1em",
      fontWeight: "500",
      padding: "4px 7px",
      cursor: "pointer",
  }
};

const { display_data,close,submit } = displayDiv;
