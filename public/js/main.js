const submitbtn=document.getElementById("submitbtn")
const cityN=document.getElementById("cityN")
const city=document.getElementById("city")
const t_status=document.getElementById("t_status")
const t=document.getElementById("t")


const getinfo=async(event)=>{
    event.preventDefault();
 let cityval=cityN.value

    if(cityval===""){
        city.innerText=`plzzz write the name`
      
    }else{
        try{
        let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=5757c29fb4294b1359699d20dfc6b29e`
       const response= await fetch(url)
       const data=await response.json()
       const arrdata=[data]
       city.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`
       t.innerText=arrdata[0].main.temp
     
       const tmood=arrdata[0].weather[0].main

       if(tmood == "Clear"){
           t_status.innerHTML=
           "<i class='fas fa-sun' style='color:#eccc68;'></i>"
       }else if(tmood == "Clouds"){
        t_status.innerHTML=
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
    }else if(tmood == "Rain"){
        t_status.innerHTML=
        "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
    }else{
        t_status.innerHTML=
        "<i class='fas fa-sun' style='color:#eccc68;'></i>"
    }
    
    }catch{
        city.innerText=`plzzz enter the name`
      
    }
}
}
submitbtn.addEventListener("click",getinfo)