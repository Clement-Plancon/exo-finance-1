window.onload = async function () {

    const request = await fetch(
        "./data/cessions-immobilieres-de-letat-copie.geojson"
    )
        .then((response) => response.json())
        .then((response) => response.features)
        .catch((error) => alert("Error : " + error));
    const response = await request;
    // console.log(response);
    const ville = {};
    for (x = 0; x < response.length; x = x + 1) {
        // console.log(response[x].properties.commune);
        // ville.city= response[x].properties.commune;
        if (ville[response[x].properties.commune] !== undefined) {
            ville[response[x].properties.commune] = ville[response[x].properties.commune] + 1;
        } else {
            ville[response[x].properties.commune] = 1;
        }



    }
    // console.log(ville);

    sortProperties(ville)
    function sortProperties(ville) {
        // convert object into array
        var sortable = [];
        for (var key in ville)
            if (ville.hasOwnProperty(key))
                sortable.push([key, ville[key]]); // each item is an array in format [key, value]

        // sort items by value
        sortable.sort(function (a, b) {
            return a[1] - b[1]; // compare numbers
        });
        // console.log(sortable);
        return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
    }
    
    x = 1;
    while (x < sortProperties(ville).length ) {
        console.log(sortProperties(ville)[sortProperties(ville).length - x]);
        x = x + 1;
    }
    // console.log("les ville avec le plus de vente sont : "+ sortable[sortable.length]);
}