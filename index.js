document.querySelector(".btn").addEventListener("click", function () {
  let age = document.querySelector("#voter").value;
  let setNumber=Number(age)
  if(setNumber>=18){
    document.querySelector(".vot").innerHTML=`You Are <span class="Greenn">Voter</span>`
    document.querySelector(".vot").style.opacity=1
  }else if(setNumber!==setNumber){
    alert("please enter your age")
  }else if(setNumber==""){
    alert("please enter your age")
  }
  else if(setNumber<=18){
    document.querySelector(".vot").innerHTML=`You Are <span class="Redd">Nonvoter</span>`
    document.querySelector(".vot").style.opacity=1
  }

});
