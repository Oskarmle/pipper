const URL = "http://127.0.0.1:8000";

export async function fetchPips() { //vi har skrevet async for at fortaelle at det er en asynkron funktion
    const response = await fetch(URL, { //da det er et object skal den have {}
        
    });
    const body = await response.json(); 
    //await er aksynkron (hente noget et andet sted, samtidig med det der foregaar her)
    console.log(body);
    
    return body;
    }