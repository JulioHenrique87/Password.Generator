const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertcontainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=>{
    createPassword()
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
 if(inputEl.value) {
    alertcontainerEl.classList.remove("active");
    setTimeout(()=>{
    alertcontainerEl.classList.add("active");
    }, 2000);
 }
});

function createPassword(){
     const chars = "0123456789abcdefghijklmnopqrstuvxzwç!@#$%¨&*()_+{}[]^~?:_ABCDEFGHIJKLMNOPQRSTUVXZWYKÇ";
     const passwordLength = 8;
     let password = "";
     for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
        
     }
     inputEl.value = password;
     alertcontainerEl.innerText = password + " copiado!";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
    

