import axios from "axios";


const movieDB =  axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '3b01e43e69522e9dc64983fc0dda7331',
        language: 'es-ES'
    }
});

export default movieDB; 