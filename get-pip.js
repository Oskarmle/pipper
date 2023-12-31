const URL = "http://127.0.0.1:8000/pip";

// her eksporterer vi den asynkrone funktion
export async function fetchPips() {
  //vi har skrevet async for at fortaelle at det er en asynkron funktion
  const response = await fetch(URL, {
    //da det er et object skal den have {}
  });
  const body = await response.json();
  //await er aksynkron (hente noget et andet sted, samtidig med det der foregaar her)
  //   console.log(body);

  return body;
}


  // her fortæller vi at det vi skal have tilbage efter et post skal være JSON
export async function postPip(data) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });


  const body = await response.json();

  return body;
}
