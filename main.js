let main = document.getElementById("temp");

let connect1 = [
       
{
	id: "link1",
	pic: "images/user-pic 1.jpg",
	name: "Arjun",
	position: "Full Stack Developer",
	company: "Techonology Solutions",
	btn:"Follow"
},						
{
	id: "link2",
	pic: "images/user-pic 1.jpg",
	name: "Kannan",
	position: "Full Stack Developer",
	company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link3",
	pic: "images/user-pic 1.jpg",
	name: "Dinesh",
	position: "Full Stack Developer",
    company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link4",
	pic: "images/user-pic 1.jpg",
	name: "Yuvan",
	position: "Full Stack Developer",
    company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link5",
	pic: "images/user-pic 1.jpg",
	name: "JaiSuriya",
	position: "Full Stack Developer",
	company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link6",
	pic: "images/user-pic 1.jpg",
	name: "Santhosh",
	position: "Full Stack Developer",
    company: "Techonology Solutions",
	btn:"Follow"
	
},
]

    connect1.forEach(function(data,i){
		let mainTag = document.createElement("div");
		let bacTag = document.createElement("div");
		let imgTag = document.createElement("div");
		let textTag = document.createElement("div");
		let namTag = document.createElement("h2");
	    let posTag = document.createElement("h3");
	    let comTag = document.createElement("h3");
	    let btnTag = document.createElement("button");
		
		let picTag = document.createElement("img");
		
		
		
		
		mainTag.setAttribute("class", "main");
		bacTag.setAttribute("class", "background");
		imgTag.setAttribute("class", "profile");
        textTag.setAttribute("class", "content");
		mainTag.setAttribute("id",data.id);
		
		
		picTag.src = data.pic;
		
		
		namTag.innerText = data.name;
		posTag.innerText = data.position;
		comTag.innerText = data.company;
		btnTag.innerText = data.btn;
         
         
        		 
		textTag.append(namTag, posTag, comTag, btnTag);
		imgTag.appendChild(picTag);
		mainTag.append(bacTag, imgTag, textTag);
		main.appendChild(mainTag);
        		
		
		
		
		
		 

		

	 
	 
       



});