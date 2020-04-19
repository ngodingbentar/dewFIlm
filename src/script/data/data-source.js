// import clubs from './clubs.js';

// class DataSource {
//     static searchClub(keyword) {
//         return new Promise((resolve, reject) => {
//             const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
//             if (filteredClubs.length) {
//                 resolve(filteredClubs);
//             } else {
//                 reject(`${keyword} is not found`);
//             }
//         });
//     }
// }

// export default DataSource;

class DataSource {
    static searchClub(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
    }
 }
  
 export default DataSource;