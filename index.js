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

  ) { alert(`It's ${portugalTime}in Lisbon, Portugal`)
    
  }else if (event.target.value === "usa-honolulu"){alert(`It's ${usaHonoluluTime}in Honolulu - Hawaii`)}
   else if (event.target.value === "south-korea"){
    alert(`It's ${southKoreaTime}in Seoul, South Korea`);
   }
    
  
}


selectCountry.addEventListener("change", displayCountryTimezone)

