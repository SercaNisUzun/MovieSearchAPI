const baseURL = "https://api.themoviedb.org/3/search/movie?api_key=9d52ff0fa14979246f97db0885d4b667&query=";
const searchForm = document.querySelector("#searchForm");
const section = document.querySelector("section");
const genre = document.querySelector("select");

searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    const divs = document.querySelectorAll('div');
    for (let div of divs) {
        div.remove();
    }
    const userSearch = searchForm.elements.input.value;
    const genreValue = genre.value;
    const res = await axios.get(`${baseURL}${userSearch}&with_genres=${genreValue}`);
    makeRes(res.data.results)
    searchForm.elements.input.value = "";
})

const makeRes = (createDiv) => {
    for (let result of createDiv) {
        if (`https://image.tmdb.org/t/p/w500/${result.poster_path}`) {
            const newDiv = document.createElement("DIV");
            const newIMG = document.createElement("IMG");
            const newTitle = document.createElement("P");
            const newPoint = document.createElement("P");
            const newDate = document.createElement("P");
            newIMG.src = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
            newTitle.innerHTML = `Title : ${result.title}`;
            newPoint.innerHTML = `Popularity : ${(Math.floor(result.vote_average)) * 10}/100`;
            newDate.innerHTML = `Release Date : (${result.release_date})`;
            console.log(newTitle)
            section.append(newDiv);
            newDiv.append(newIMG);
            newDiv.append(newTitle);
            newDiv.append(newPoint);
            newDiv.append(newDate);
        }

    }
}