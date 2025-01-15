import MovieCard from '../components/MovieCard.jsx';
import {useState} from 'react';
import '../css/Home.css'
import {getPopularMovies,searchMovies} from '../services/api.js'
import { useEffect } from 'react';
 
function Home(){
    const [SearchQuery, SetSearchQuery]=useState("")
    const [movies,setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)


    useEffect(()=>{
        async function loadPopularMovies(){
            try{
                const data = await getPopularMovies()
                setMovies(data)
            }
            catch(error){
                setError("Error in loading the data")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
    
    console.log(SearchQuery)

async function submission(e){
    e.preventDefault()
    setLoading(true)
    if(loading) return;
    setLoading(true);
try{
    const searchResults = await searchMovies(SearchQuery.trim());
    setMovies(searchResults)
    console.log(searchResults)
}catch(error){
    console.log(error)
    setError("some error in search")
}
finally{
    setLoading(false)
}


}
    return(

        <div className="Home">

            <form onSubmit={submission} className='search-form'>
                <input 
                value={SearchQuery}
                onChange={(e)=>{SetSearchQuery(e.target.value)}}
                type="text" 
                placeholder='Search for Movies...' 
                className='search-input'/>
                <button type='submit' className='search-button'>Search</button>
                
            </form>


            <div className='movies-grid'>{
                
            movies.map((m)=>(
               
                m.title.toLowerCase().includes(SearchQuery) && <MovieCard movie={m} />
            
            ))
            }
            </div>


        </div>
    )
}

export default Home;