let portugalTime = moment.tz("Europe/Lisbon").format("ddd, DD MMM YYYY, HH:mm A");

let usaHonoluluTime = moment.tz("Pacific/Honolulu").format("ddd, DD MMM YYYY, HH:mm A")

let southKoreaTime = moment.tz("Asia/Seoul").format("ddd, DD MMM YYYY, HH:mm A");

let selectCountry = document.querySelector("#countries");

let timeZones = {
  portugal: portugalTime,
  usa: usaHonoluluTime,
  southKorea: southKoreaTime,
}

function displayCountryTimezone(event) {
  if (
    event.target.value === "portugal"

  ) { alert(portugalTime)
    
  }else if (event.target.value === "usa-honolulu"){alert(usaHonoluluTime)}
   else if (event.target.value === "south-korea"){
    alert(southKoreaTime);
   }
    
  
}


selectCountry.addEventListener("change", displayCountryTimezone)

