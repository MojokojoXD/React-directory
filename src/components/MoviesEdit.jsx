import {useRef,useState,useEffect} from 'react'

export default function MovieEdit({movieList,getMovies}){
    const [movieArr, setMovieArr] = useState(movieList)
    const newMovieRef = useRef(null);

    function handleClick(e,movie){
        e.preventDefault();
        setMovieArr(state => {
            const tempArr = [...state]
            return tempArr.filter(m => m !== movie)
        })
    }

    function handleAdd(e){
        e.preventDefault();

        if(!newMovieRef.current.value || movieArr.includes(newMovieRef.current.value))return;

        setMovieArr(state => {
            return [...state,newMovieRef.current.value]
        })
        

    }

    useEffect(()=>{
        getMovies(movieArr)
    },[movieArr])

    return(
        <>
            <label htmlFor="movies">Favorite movies </label>
            <div id="movies">
                {movieArr.map(m => {
                    return(
                        <div key={m}>
                            <p style={movie}>{m}</p>
                            <button style={movieButton} onClick={(e) => handleClick(e,m)}>&times;</button>
                        </div>
                    )
                })}
                <div style={addMovie_div}>
                    <input ref={newMovieRef} type={'text'}/>
                    <button onClick={handleAdd} style={addButton}>Add movie</button>
                </div>
            </div>
        </>
    )
}

const moviesStyle = {
  movie: {
    display: "inline-block",
    marginRight: "2px",
  },
  movieButton: {
    display: "inline-block",
    fontWeight: "bold",
    borderRadius: "50%",
    backgroundColor: "#34A5DA",
    cursor: "pointer",
  },
  addButton: {
    backgroundColor: "#34A5DA",
    color: "white",
    fontSize: "1.1em",
    fontWeight: 'bold',
    borderRadius: '10px',
    padding: '4px 7px',
    cursor: 'pointer',
    border: 'none',
  },
  addMovie_div:{
      marginTop: '5px'
  }
};


const {movie,movieButton,addButton,addMovie_div} = moviesStyle