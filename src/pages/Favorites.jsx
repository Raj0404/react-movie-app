import '../css/Favorites.css'
import MovieCard from '../components/MovieCard.jsx';
import { useMovieContext } from '../contexts/MovieContext'
function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites.length !== 0){
        return(
            <div>
                <h2 className='favorite'>Your Favorites</h2>
                <div className='movies-grid'>{
                
                favorites.map((m)=>(
                   
                    <MovieCard movie={m} />
                
                ))
                }
                </div>
            </div>
            
        )
    }

    
    return(
        <div className = 'favorites-empty'>
        <h1>This is Favorites Page</h1>
        <p>All your favorite movies will appear here</p>
        </ div>
    )
}

export default Favorites