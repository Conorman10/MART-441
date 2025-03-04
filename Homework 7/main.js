
var myViewArray = newArray();

class viewFinder {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }    

    get theTitle () {
        return this.title;
    }
    toString() {
        return this.title;
    }    

}

function initializeArray() {
    var myViewFinder = new viewFinder("A really funny Pug");
}