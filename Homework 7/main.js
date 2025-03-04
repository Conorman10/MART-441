var myArtworkArray = newArray();
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
        return 'This painting is called The ${this.title}. <br /> <br /> ${this.image}. <br /> This painting is ${this.description}. It was created by ${this.author} in ${this.year}'
    }

    get theTitle()
    { 
        return this.title;
    }

    get theImage()
    {
        return this.image;
    }
}



function initializeArray() {

    var myArtwork = 
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
        new Artwork (
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
        )
        new Artwork (
            "Girl with a Peal Earring",
            "images/pearlEarring.webp",
            "A portrait of a young girl wearing a Pearl earring.",
            "johannes Vermeer",
            1665
        )
            
}

function accessInformation() {
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}