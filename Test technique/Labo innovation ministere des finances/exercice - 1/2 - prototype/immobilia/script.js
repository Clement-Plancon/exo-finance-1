window.onload = async function () {
  if (localStorage.getItem("dataLocalStorage")) {
    let usableStorageData = localStorage.getItem("dataLocalStorage");
  } else {
    const request = await fetch(
      "./data/cessions-immobilieres-de-letat-copie.geojson"
    )
      .then((response) => response.json())
      .then((response) => response.features)
      .catch((error) => alert("Error : " + error));
    const response = await request;
    /*  localStorage.setItem("dataLocalStorage", response); */
    let array2013 = 0;
    let array2014 = 0;
    let array2015 = 0;
    let array2016 = 0;
    let array2017 = 0;
    let arrayOther = 0;
    for (let i = 0; i < response.length; i++) {
      if (response[i].properties.annee_cession == "2013") {
        array2013++;
      } else if (response[i].properties.annee_cession == "2014") {
        array2014++;
      } else if (response[i].properties.annee_cession == "2015") {
        array2015++;
      } else if (response[i].properties.annee_cession == "2016") {
        array2016++;
      } else if (response[i].properties.annee_cession == "2017") {
        array2017++;
      } else {
        arrayOther++;
      }
    }
    arrayGlobal = array2013 + array2014 + array2015 + array2016 + array2017;
    const barCanvasOne = document.getElementById("barCanvasOne");
    const barCanvasTwo = document.getElementById("barCanvasTwo");
    const barCanvasThree = document.getElementById("barCanvasThree");
    const barCanvasFourth = document.getElementById("barCanvasFourth");
    let barArray = [
      barCanvasOne,
      barCanvasTwo,
      barCanvasThree,
      barCanvasFourth,
    ];
for (let i = 0; i < barArray.length; i++) {
  new Chart(barArray[i], {
    type: "bar",
    data: {
      labels: ["2013", "2014", "2015", "2016", "2017"],
      datasets: [
        {
          data: [array2013, array2014, array2015, array2016, array2017],
          backgroundColor: ["crimson", "lightgreen", "lightblue", "violet", "blue"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          /* suggestedMax: 2000, */
          ticks: {
            font: {
              size: 18,
            },
          },
        },
      },
    },
  });
}
   
  }
};
