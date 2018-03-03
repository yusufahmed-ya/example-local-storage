
var localStorageKey = "yusuf_users";
var localStorageUsers= localStorage.getItem(localStorageKey);
if(localStorageUsers !== null) {
    var usernames = localStorageUsers.split(",");
    usernames.forEach(function(username) {
        addUser(username);
    });
}

function onSubmit() {
    var username = document.getElementById("user").value;
    addUser(username);
    var localStorageUsers= localStorage.getItem(localStorageKey);
    if(localStorageUsers) {
        localStorage.setItem(localStorageKey, localStorageUsers + ',' + username);
    } else {
        localStorage.setItem(localStorageKey, username);
    }
}

function addUser (username) {
    var userlist = document.getElementById("userlist");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(username));
    userlist.appendChild(item);
}

