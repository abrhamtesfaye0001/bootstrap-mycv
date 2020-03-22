var count=0;
function clicked(){
    if (count%2==0){
        document.getElementById("sidemenu").classList.add("active");
        document.getElementById("sidekick").classList.add("active");
        document.getElementById("mobiletopbar").classList.add("active");
    }
    else{
        document.getElementById("sidemenu").classList.remove("active");   
        document.getElementById("sidekick").classList.remove("active");
        document.getElementById("mobiletopbar").classList.remove("active");
        
    }
    count = count+1;
}
// transform: translateX(100%);
// transition: all .1s ease-in-out; 
 










