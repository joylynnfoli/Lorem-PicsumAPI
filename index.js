        const baseUrl = "https://picsum.photos/v2/list?page=2&limit=27";
        const htmlBodyDiv = document.querySelector(".picsum");
        
        fetch(baseUrl)
            .then((result) => { 
                return result.json(); 
            })
        
            .then((json) => { 
               
                display(json);
            })


       
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