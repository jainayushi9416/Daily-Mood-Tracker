function saveMood(mood){
    //console.log(mood);
    let date = new Date();
    //console.log(date);
    localStorage.setItem(date, mood);

}

function displayData(){
    for(let i=0;i<window.localStorage.length;i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let b =key+value;
        document.getElementById("display").innerHTML+= b;
    }
   
}