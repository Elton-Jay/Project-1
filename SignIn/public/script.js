async function submitLogin(){
    const user = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    
    try{
        const response = await fetch('/api/login', {
            method: 'POST',
            header: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: user, password: pass})
        });
        const result = await response.json;
        document.getElementById('message').innerText = result.message;

        if(result.success){
            document.getElementById('message').style.color('green');
        }
        else{
            document.getElementById('message').style.color('red');
        }
    }
    catch(error){
        document.getElementById('message').innerText = "Serve is not running!";
    }
}