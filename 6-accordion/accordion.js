

let tabs = document.getElementsByClassName("accordion-link");
let tabContent = document.getElementsByClassName("accordion-content");

for(let i = 0; i < tabs.length; i ++) {

    let tab = tabs[i];

    tabContent[i].style.display = "none";

    tab.addEventListener('click', function(){
        
        let targetId = this.dataset.for;
        let target = document.getElementById(targetId);

        if (target.style.display == "block") 
        {
            target.style.display = "none";
        }
        else 
        {
            target.style.display = "block";
        }

    });

}