var myArtworkArray = [];
class Artwork {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }    

    toString()
    { 
        return `This painting is called <strong>${this.title}</strong>.<br/><br/>
                <img src="${this.image}" alt="${this.title}" style="width:100%;"><br/><br/>
                ${this.description}<br/>
                It was created by ${this.author} in ${this.year}.`;
    }
}

function initializeArray() {

    myArtworkArray = [ 
        new Artwork(
            "Mona Lisa",
            "images/monaLisa.webp",
            "A portrait of a woman with a mysterious style in front of a valley.",
            "Leonardo da Vinci",
            1503
        ),
        new Artwork(
            "Starry Night",
            "images/starryNight.webp",
            "A painting of the stars swirling in the night sky.",
            "Vincent van Gogh",
            1889
        ),
        new Artwork(
            "Last Supper",
            "images/theLastSupper.webp",
            "An artistic rendition of the last time Jesus ate before his death.",
            "Leonardo da Vinci",
            1495
        ),
        new Artwork (
            "Scream",
            "images/scream.webp",
            "A picture of a strange being standing on a bridge holding his ears and screaming.",
            "Edvard Munch",
            1893
        ),
        new Artwork (
            "Girl with a Peal Earring",
            "images/pearlEarring.webp",
            "A portrait of a young girl wearing a pearl earring.",
            "johannes Vermeer",
            1665
        )
    ];        
}

function accessInformation() {
    var randomNumber = Math.floor(Math.random() * myArtworkArray.length);
    document.getElementById("myArtwork").innerHTML = myArtworkArray[randomNumber].toString();
}

window.onload = function() {
    initializeArray();
    document.getElementById("random-btn").addEventListener("click", accessInformation);
}