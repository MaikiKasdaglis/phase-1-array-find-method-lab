const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ]
  
  
 // THIS CODE KINDA WORKS  
//   function superbowlWin(array) {
//     let result = array.find(game => game.result == "W")
//     return result['year'] 
// }


function superbowlWin(array) {
    let result = array.find(game => game.result == "W")
    console.log(result)
    return result ? result.year : undefined
}
superbowlWin(record)
