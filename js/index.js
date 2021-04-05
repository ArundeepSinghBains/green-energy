function preloader() 
{
    
const imagesList = 
      [
          
"./img/waterenergy.jpg",   
"./img/windenergy.jpg",  
"./img/solarenergy.jpg"
    
];
const images = [];  
for 
    (let i = 0; i < imagesList.length; i++)
{  
images[i] = new Image();
images[i].src = imagesList[i];
    
}

console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


const allbuttons = document.querySelectorAll('.buttons');


const greenresources = 
      [
        
{
headingContent: "Water Energy",
    
imgUrl: "./img/waterenergy",
    
imgAlt: 'water',
    
bodyText: "Water energy is energy derived from the power of water, most often its motion. Energy sources using water have been around for thousands of years in the form of water clocks and waterwheels. A more recent innovation has been hydroelectricity, or the electricity produced by the flow of water over dams."
    
},
{
    
headingContent: "Wind Energy",
    
imgUrl: "./img/windenergy",
    
imgAlt: 'wind',
    
bodyText: "Wind energy (or wind power) describes the process by which wind is used to generate electricity. Wind turbines convert the kinetic energy in the wind into mechanical power.Mechanical power can also be utilized directly for specific tasks such as pumping water."

},       
{
            
headingContent: "Solar Energy",
    
imgUrl: "./img/solarenergy.jpg",
    
imgAlt: 'solar',
    
bodyText: "Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis."
    
}
        
];
const container = document.querySelector('.primary-block');




// handleSelection function starts here.
function handleSelection(event)
{

	for 
        (let buttons of allbuttons)
    {  
		if
            (buttons.hasAttribute('id')
            )
        {

			// Remove the id active-button
			buttons.removeAttribute('id');  

		}
	}
    
    

	//Use the element-object method setAttribute() to set the id
	event.target.setAttribute('id', 'active-button');
    

    if 
        (event.target.innerText == "Water Energy")
    {
		
		container.innerHTML = `<h1>
${greenresources[0].headingContent}
</h1>


		<div class="block1">
			<img src="${greenresources[0].imgUrl}" alt="${greenresources[0].imgAlt}">
			<p>
${greenresources[0].bodyText}
</p>
		</div>`;
	            
	}
    else if
        (event.target.innerText == "Wind Energy")
    {
		
		container.innerHTML = `<h1>${greenresources[1].headingContent}</h1>
		<div class="block1">
			<img src="${greenresources[1].imgUrl}" alt="${greenresources[1].imgAlt}">
			<p>
${greenresources[1].bodyText}
</p>
		</div>`;
	    
	}
    else if
        (event.target.innerText == "Solar Energy")
    {
	                
		container.innerHTML = `<h1>
${greenresources[2].headingContent}
</h1>
		<div class="block1">
			<img src="${greenresources[2].imgUrl}" alt="${greenresources[2].imgAlt}">
		 	<p>
${greenresources[2].bodyText}
</p>
		 </div>`;
	                
	}

    

}


//Register all buttons to click event. The event-handler handleSelection will listen for this event to happen.
for 
    (let buttons of allbuttons)
{
buttons.addEventListener('click', handleSelection);
}