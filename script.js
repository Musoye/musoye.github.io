//Display and Not-Display function
function Displayhamburger(ele){
    let element = document.getElementById(ele)
    if (element.style.display == 'none')
    {
        element.style.display = 'block';
    }
    else
    {
        element.style.display = 'none';
    }
}

function ToSection(section){
    location.href = section;
}

let hambuger = document.getElementById('toggle-btn');
hambuger.onclick = function(){
    Displayhamburger('toggle')
}

let cancel = document.getElementById('cancel-toggle');
cancel.onclick = function(){
    Displayhamburger('toggle');
}

function AboutProject(sbutton) {
    let a = 'about-button';
    let b = 'project-button';
    let c = 0;
    let d = 0;
    if (sbutton == b){
        a = document.getElementById(a);
    } else {

        a = document.getElementById(b);
    }
    b = document.getElementById(sbutton);
    if (a.style.backgroundColor == 'white'){
        console.log(sbutton.slice(0, 5));
    }
    else {
        a.style.color = '#330033';
        a.style.backgroundColor = 'white';
        b.style.color = 'white';
        b.style.backgroundColor = '#330033'
        if (sbutton.slice(0, 5) == 'about'){
            c = document.getElementById('about');
            d = document.getElementById('project');
            c.style.display = 'none';
            d.style.display = 'block';
        }
        else {
            c = document.getElementById('about');
            d = document.getElementById('project');
            c.style.display = 'block';    
            d.style.display = 'none';     
        }      
        console.log(sbutton.slice(0, 5));
    }
}

let aboutButton = document.getElementById("about-button");
let projectButton = document.getElementById("project-button");
aboutButton.onclick = function() {
    AboutProject('project-button');
}
projectButton.onclick = function() {
    AboutProject('about-button');
}


let contact = document.querySelectorAll('.cont');
for (let i = 0; i < contact.length; i++){
    contact[i].onclick = function(){
        let ele = document.getElementById('contact-form');
        let ele_2 = document.getElementById('toggle');
        ele.style.display = 'block';
        ele_2.style.display = 'none';
        ToSection('#contact-form');       
    }
}
let cancel_contact = document.getElementById('cancel_contact');
cancel_contact.onclick = function(){
    Displayhamburger('contact-form'); 
}

// font-family: 'Anton', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Outfit', sans-serif;