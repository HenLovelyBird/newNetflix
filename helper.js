let baseUrl = "https://strive-school-testing-apis.herokuapp.com/api/movies/"
let credentials = "Basic " + btoa("user16:c9WEUxMS294hN6fF");
let headers = {
    "Authorization" : credentials,
    "Content-Type" : "application/json",
}

// in netflix homepage:
get = async () => { 
    var response = await fetch(baseUrl, {
        headers: headers
    })
    return await response.json();
}

getById = async(id) => { //in console take getByID("corresponding obj id number")
var response = await fetch(baseUrl + id, {
    headers: headers
})
return await response.json();
// 3 categories i created:
// // https://strive-school-testing-apis.herokuapp.com/api/movies/Comedy
// https://resizing.flixster.com/i_FPimp2NQkJc0ZnCPZ5dyXUcqw=/206x305/v1.bTsxMTIwODQwMjtqOzE4MzA5OzEyMDA7MTUzNjsyMDQ4    best in show m
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxAF2UmiN6EL_eQgY54EgwFY1SnTw6htbo0RGlZLN7BT4FTYrg70VyHczOmbL_mPgLMfK&s=0    some like it hot m1
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJa0DdoNIXMB6PQATc5Nv5GNxpA0RRDgfqUMbavJ5c32nETzO&s  ace ventura m3 
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxmDGQtXqQn7hJMTfbH4h-EIiKWZeeJClUKToBBjdL1v9JzVg&s    royal tennenbaums m2
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhoIj_bqRx-PqntM7v0Zr5GqK2IXQU2qyzc64HXpzASG-xvcD&s  zoolander m4
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17NBcXEp7CPhcbvcr9bhkN1OqNa19-Q64rJeh64ZpskrB1XrV&s   some mermaid movie m5

// Documentary
// https://static01.nyt.com/images/2008/07/24/arts/25wire-600.jpg man on wire d

// RomCom
// https://prod3.agileticketing.net/images/user/fsc_2553/fs_eternal_sunshine_spotless_mind_800.jpg eternal sunshine of the spotless mind r

}
// GET https://strive-school-testing-apis.herokuapp.com/api/movies/{category}
  
// return an array of movies from the given {category}

// ES
// [
//     {
//         "_id": "5d3598a3a38caa57a0272d33", //SERVER GENERATED
//         "name": "app test 1",
//         "description": "somthing longer",
//         "category": "drama",
//         "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
//         "userId": "admin",  //SERVER GENERATED
//         "createdAt": "2019-07-22T11:06:11.784Z",  //SERVER GENERATED
//         "updatedAt": "2019-07-22T11:06:11.784Z",  //SERVER GENERATED
//         "__v": 0  //SERVER GENERATED
//     }
// ]




// for the backoffice page:
create = async (movie) => {//copied brand-userid from getByID promise resolved info, 
    var response = await fetch(baseUrl, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(movie)
    })
    return await response.json();
}
// POST https://strive-school-testing-apis.herokuapp.com/api/movies/

// Creates a new movie. 
// {
//     "name": "Best in Show",
//     "description": "humans and dogs",
//     "category": "Comedy",
//     "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJa0DdoNIXMB6PQATc5Nv5GNxpA0RRDgfqUMbavJ5c32nETzO&s" ,
// }



edit = async(id, movie) => {
    var response = await fetch(baseUrl + id, {
        headers: headers,
        method: "PUT",
        body: JSON.stringify(movie)
    })
    return await response.json();
}
// PUT https://strive-school-testing-apis.herokuapp.com/api/movies/{id}

//   EDIT the movie with id = {id}



deleteMovie = async (id) => {
    var response = await fetch(baseUrl + id,{
        headers: headers,
        method: "DELETE"
    })
    return response;
}
// DELETE https://strive-school-testing-apis.herokuapp.com/api/movies/{id}

// Delete the movie with id = {id}

loadMoviesHome = async() => {
    
}

loadMoviesBackOffice = async() => {

}

// category = document.querySelector("#category");