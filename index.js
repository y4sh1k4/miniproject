function search(){
    let text = document.querySelector(".input input").value;
    for(let i=0;i<text.length;i++){
        if(text[i] == " ") {
            text = text.replace(text[i],"+");
        }
    }
    window.location.href="https://www.flipkart.com/search?q="+text+"&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY";
}

document.querySelector(".input input").addEventListener("keypress",function(event){
    if(event.code=='Enter'){
        search();
    }
})