var books = [
{
	title: "wool",
	author: "Hugh Howey",
	image: "img/silo.jpg"
},
{
	title: "beowulf",
	author: "Anonymous",
	image: "img/beowulf.jpg"
},
{
	title: "frankenstein",
	author: "Mary Shelley",
	image: "img/frankenstein.jpg"
}
]

function getTitle() {
//if you use toLowerCase, be sure to include the parentheses. Also,
//write the property in all lower-case letters, even thought the string
//is in quotation marks. Remember, this is not MS Word. Also, remember that
//if you don't do this, your program will not read the if code block at all.
//it will go on to else.
	var title = document.getElementById("title").value.toLowerCase()
		console.log(title)

	for(i = 0; i < books.length; i++) {
		if(title === books[i].title) {
			document.getElementById("author").innerHTML = books[i].author
			document.getElementById("image").src = books[i].image
			return
		} else {
			document.getElementById("author").innerHTML = "Try again!"
		}
	}
}