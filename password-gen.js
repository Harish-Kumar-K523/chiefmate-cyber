
let pass = document.getElementById("password")
pass.addEventListener("click", Gen); 
function Gen(){
    var char = "ABCDEFGHIJKLMNOPQURSTUVXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()"
    var passlen = 19
    var passwdd=""
    for (let i=0; i<=passlen; i++){
        var ranpass=Math.floor(Math.random()*char.length)
        passwdd+=char.substring(ranpass,ranpass+1) 
    }
    document.getElementById("password").value=passwdd
}

let cp = document.getElementById("copy")
cp.addEventListener("click", copyPassword); 
function copyPassword() {
    var Text = document.getElementById("password");
    Text.select();
    navigator.clipboard.writeText(Text.value);
}

//<----------------!---------------->

    