const form = document.querySelector("form");
// const div1 = document.querySelector(".img");
form.addEventListener("submit", async function(e){
    e.preventDefault();
    while(document.querySelector(".img").hasChildNodes()){
        document.querySelector(".img").removeChild(document.querySelector(".img").firstChild);

    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${form.elements.query.value}`)
    // div1.classList.add(".image");
    for(let i=0;i<res.data.length;i++){
        const div = document.createElement("div");
        const img= document.createElement("img");
        const p = document.createElement("p");
        img.src=res.data[i].show.image.medium;
        p.innerText=res.data[i].show.name;
        div.appendChild(img);
        div.appendChild(p);
        div.classList.add("image");
        document.querySelector(".img").appendChild(div);

    }
})