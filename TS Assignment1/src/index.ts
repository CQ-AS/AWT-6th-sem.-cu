const inputPassword = document.getElementById("password") as HTMLInputElement
const button = document.getElementById("button") as HTMLButtonElement

button.addEventListener('click',()=>{
    if(inputPassword.type === "password"){
        console.log("view button click...")
        inputPassword.type="text";
        button.textContent = "🙈"
    }else {
        console.log("hide button click...")
        inputPassword.type="password";
        button.textContent = "👁️"
    }
})
