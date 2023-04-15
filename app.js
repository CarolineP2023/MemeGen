

const form = document.querySelector("form");
const topInput = document.querySelector("#top-text");
const bottomInput = document.querySelector("#bottom-text");
const colorInput = document.querySelector("#color");
const fontInput = document.querySelector("#size");
const memeCanvass = document.querySelector("#meme-canvass");



form.addEventListener("submit", function(e){
    e.preventDefault();

    const topTxt = createMemeText ( topInput.value, colorInput.value, fontInput.value);
   topTxt.classList.add("top-text");

    const image = document.createElement("img");
    const urlInput = document.querySelector("#url-input");
    const div = document.createElement("div");
    div.classList.add("meme-container")
    
   
    image.className = "imageInput";
    image.src = urlInput.value;
    image.width ="300";
    image.height = "300";
    
    const bottomTxt = createMemeText ( bottomInput.value, colorInput.value, fontInput.value);
    bottomTxt.classList.add("bottom-text");


    
    div.append(topTxt);
    div.append(image);
    div.append(bottomTxt);

    memeCanvass.append(div);


    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.innerText = "X";

    removeBtn.addEventListener("click", function(event){
        event.target.parentElement.remove();
    })

    div.append(removeBtn);
    form.reset();
    

})



function createMemeText( topText, color, size){
    const meme = document.createElement("p");
    meme.innerText = topText;
    meme.style.color = color;
    meme.style.fontSize = size + 'px';
    return meme;
    
};
function createMemeText( bottomText, color, size){
    const meme = document.createElement("p");
    meme.innerText = bottomText;
    meme.style.color = color;
    meme.style.fontSize = size + 'px';
    return meme;
    
};