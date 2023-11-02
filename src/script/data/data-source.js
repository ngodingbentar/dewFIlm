class DataSource {
    static searchClub(keyword) {
        // return fetch(`http://www.omdbapi.com/?apikey=2567cbc3&s=${keyword}`)
        return fetch(`https://ngodingbentar-be-v3.vercel.app/api/v1/film?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
                
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;