// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user){
    return user.userRole === 'ADMIN'
}

let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith'
}

let user2 = {
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
}


function getEmail(user){
   let emailUser = user.firstName +"."+ user.lastName+"@codeimmersives.com"

  return emailUser.toLowerCase()
}


function getPlaylistLength(playList){
    return playList.songs.length
}
// console.log(getPlaylistLength({
//     name: 'my jamz',
//     songs:['Linkin park', 'Black eye pea']
// }))




function getHardestHomework(homeWorkArray){
    if(homeWorkArray.length === 0){
        return ''
    }
  
  
    let lowestHw = homeWorkArray[0].avarageScore
    let lowestHwName = homeWorkArray[0].name
  
    for(let i = 0; i < homeWorkArray.length; i++){
        if(homeWorkArray[i].avarageScore < lowestHw.avarageScore){
            lowestHw = homeWorkArray[i].avarageScore
            lowestHwName = homeWorkArray[i].name
        }
    }
    return lowestHw.name
  }
  
  console.log(getHardestHomework([]))
  


  function createPhonebook(nameArray, numberArray){
    let phoneBook ={}

    for(let i = 0; i < nameArray.length; i++){
        phoneBook[nameArray[i]] = numberArray[i]
    }
    return phoneBook
  }
  
  console.log(createPhonebook(['melissa', 'Ander'],['206-111-1234', '123-543-9876']))

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};