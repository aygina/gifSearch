function onSearch() {
    let parameter = document.getElementById('parameter').value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=yMqIMnFHaWFOrNYVN9012lXxFQa38oyk&q=` + parameter + `&limit=5&offset=0&rating=r&lang=en`)
        .then(response => response.json())
        .then(
            (element => {
                (document.querySelector('.firstGif').src = element.data[0].images.downsized_large.url),
                (document.querySelector('.secondGif').src = element.data[1].images.downsized_large.url),
                (document.querySelector('.thirdGif').src = element.data[2].images.downsized_large.url),
                (document.querySelector('.fourthGif').src = element.data[3].images.downsized_large.url),
                (document.querySelector('.fifthGif').src = element.data[4].images.downsized_large.url)
            }))
        .catch(error => console.log(error));

    document.querySelector('.hideGifs').style.display = "block";
}