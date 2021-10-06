
export interface MovieProps {
    name: string
    url: string
    next: string
}

type resultsResponse = {
    data: Array<MovieProps> | undefined
}

const axios = require('axios');


const getAllMovies = async () => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=4ec327e462149c3710d63be84b81cf4f');

        return data
    } catch (error) {
        console.error(error)

    }
}



export { getAllMovies }
