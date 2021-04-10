  function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();
console.log(params);
document.getElementById('qtgl').innerHTML = "Quantity: " + params['qt'] + "<br><br> Glazing: " + params['gl'];

var bun_type = params['bt'];
if (bun_type == 'original') {
  document.getElementById('bt').innerHTML = bun_type + '<img class="picture" src="./resources copy/images/original cinnamonbun.jpeg" alt="origianl cinnamonbun photo">';
} else if (bun_type == 'gluten-free') {
  document.getElementById('bt').innerHTML = "gluten free" + '<img class="picture" src="./resources copy/images/original cinnamonbun.jpeg" alt="origianl cinnamonbun photo">';
}

var total_price=params['price'];
document.getElementById('price').innerHTML = "$" + params['qt']*3.99;

