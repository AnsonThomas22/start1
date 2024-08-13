var animal_space=document.getElementById("animal_space")
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
       if(xhr.readyState == 4 && xhr.status == 200){
        animal_space.innerHTML = xhr.responseText;
       }
    }
    xhr.open('GET',"hhttps://ansonthomas22.github.io/start1/",true);
    xhr.send();