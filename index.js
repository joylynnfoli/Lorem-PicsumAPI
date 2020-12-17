//set a const variable for your API's url string
//set a const variable for the section of the html you wish to query select to manifest your displayed elements
//begin your fetch and pass it your url 
	//create your first .then promise resolver which is going to grab results from our database
	//create the second .then that's going to pass the json/json variable object to our display function, a good place to console.log our object 
	//optional catch error on the end of the fetch
//declare a display function, (called in fetch) and passed it the json object(can give new/same variable name)
    // console.log your object variable that is passed into the display function 
	//build a forEach to display each object in the array 
		//build and create the html tags
		// set.attribute will give new elements id's or classes
		//set the elements and object paths to one another, ex set img src to objects url string
        //appendChild items to where they belong in the html or other created elements
        
        const baseUrl = "https://picsum.photos/v2/list?page=2&limit=25";
        const htmlBodyDiv = document.querySelector(".picsum");

        fetch(baseUrl)
        //.then is going to grab results from our database
            .then((result) => { //.then is a promise resolver-guaranteed exchange
                return result.json(); //json = java script object(data object we can dive into) notation(how its written)
            })
        //.then thats going to pass to pass json/ a variable for it to be passed to our display function, add in a console of json/ variable name
            .then((json) => { 
                //console.log(json);
                display(json);
            })
        //optional catch error
        //start a display function, called in fetch and passed json object
        function display(passedjson) {
            console.log("Display function working: " + passedjson);
        //    console.log(passedjson[0]); reference to be able to dive into objects 
        //    console.log(passedjson[1].author);
        //build a forEach to display each object in the array 
            passedjson.forEach((photoObject) => {
                //build and create the html tags
                let objectDiv = document.createElement('div');
                let objectImg = document.createElement('img');
                let photographer = document.createElement('h4');
                // set.attribute will give new elements id's or classes
                objectDiv.setAttribute("class", "objectDiv");  //oDiv can give margin or padding
                objectImg.setAttribute("class" , "objectImg"); //oImg Call to give it a different size
                //set image sources 
                objectImg.src = photoObject.download_url;
                objectImg.alt = photoObject.url;
                photographer.textContent = photoObject.author;
                //appendChild items to where they belong in the html
                htmlBodyDiv.appendChild(objectDiv);
                objectDiv.appendChild(objectImg);
                objectDiv.appendChild(photographer);
            })
        }