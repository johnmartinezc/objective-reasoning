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


let ciUser ={
    firstName: 'John',
    lastName: 'Martinez'
}


console.log(getEmail(ciUser))










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