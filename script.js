
window.addEventListener("load", (event) => {
    document.getElementById('todayMood').innerHTML ="Today's Mood is:" + localStorage.getItem((new Date()).toDateString());
  });
  

function saveMood(mood){
    //console.log(mood.innerText);
    let date=(new Date()).toDateString();
    localStorage.setItem(date, mood.innerText);
    document.getElementById('todayMood').innerHTML ="Today's Mood is:" + localStorage.getItem(date);
}

function displayData(){
    document.getElementById("display").innerHTML ="";
    for(let i=0;i<window.localStorage.length;i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        let b =key+value;
        document.getElementById("display").innerHTML+= b;
    }
  
}