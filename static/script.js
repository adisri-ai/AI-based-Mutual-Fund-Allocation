function format(s){
    let n = s.length;
    let ans="";
    for(let i=0 ; i<n ;  i++){
        if((s.charCodeAt(i) >= "A".charCodeAt(0)) && (s.charCodeAt(i)<="Z".charCodeAt(0))){
            ans+=" ";
        }
        ans+=s[i];
    }
    return ans;
}
async function submitInput(){
    let box = document.getElementById("input1").value;
    let output = document.getElementById("allocation");
    let tab = document.getElementById("prev");
    if(!box){
        alert("Enter valid input");
        return;
    }
    let form = new FormData();
   //this code is hidden
    });
    if(!(send.ok)){
        output.innerHTML = "<h2>An Error Occured! Try reloading the page after a few minutes!</h2>";
        return;
    }
    else{
       //the remaining code is hidden
    }
}
// the remaining code is hidden
showSlide(index);
startAutoplay();


