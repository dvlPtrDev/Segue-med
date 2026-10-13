
export async function loginRequest(email, pwd, remember) {
    const resp = await fetch("/api/auth.php?action=login", {
            method: "POST",
    
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: pwd, 
                remember: remember
            })
        });
    
    return await resp.json();
}

export async function signupRequest(data) {
    const resp = await fetch("/api/auth.php?action=signup", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    });
    return await resp.json();
}