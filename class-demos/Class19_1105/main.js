async function getData() {
    let url = 'http://localhost:6001/get-data';

    let response = await fetch(url)
    let json = await response.json();
    //what to do with the data
    console.log(json);
}

getData();