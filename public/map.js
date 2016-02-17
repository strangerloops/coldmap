function getData(){
  var districts = ["101","102","103","104","105","106","107","108","109","110","111","112","201","202","203","204","205","206","207","208","209","210","211","212","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","401","402","403","404","405","406","407","408","409","410","411","412","413","414","501","502","503"];
  var race = { "201":1.2307692307692308,"202":1.0833333333333335,"203":1.2,"204":1.0714285714285714,"205":0.9333333333333332,"206":0.8064516129032258,"207":0.6728971962616823,"208":0.875,"209":0.6666666666666666,"210":0.7128099173553719,"211":0.7248677248677249,"212":0.71,"301":1.2666666666666666,"302":1.3401162790697676,"303":7.7857142857142865,"304":2.931034482758621,"305":0.6666666666666667,"306":1.1420765027322406,"307":1.0219298245614035,"308":2.4558823529411766,"309":1.6902654867256637,"310":0.8965014577259476,"311":0.768875192604006,"312":1.0030674846625767,"313":1.030741410488246,"314":1.0392156862745097,"315":0.952317880794702,"316":1.4285714285714286,"317":0.8749999999999999,"318":0.7514450867052023,"101":1.0,"102":1.0066844919786095,"103":1.1489361702127658,"104":0.9966832504145937,"105":0.9363762102351315,"106":0.9515072083879423,"107":1.0165912518853697,"108":0.9564164648910413,"109":1.2921348314606742,"110":4.75,"111":1.6438356164383563,"112":1.2941176470588236,"401":1.081145584725537,"402":0.9318181818181818,"403":0.7933333333333333,"404":0.6857142857142857,"405":0.882636655948553,"406":0.8948220064724919,"407":0.7215496368038742,"408":0.8771929824561404,"409":0.6901408450704226,"410":0.7640117994100295,"411":0.7794361525704809,"412":0.7727272727272726,"413":0.7119565217391305,"414":0.9436997319034854,"501":0.792,"502":0.9158031088082902,"503":0.9584736251402919 };
  var complaints = { "101":1657,"102":8017,"103":15866,"104":11254,"105":4521,"106":8919,"107":18044,"108":14056,"109":26828,"110":26826,"111":15142,"112":65496,"201":13094,"202":11034,"203":14514,"204":43632,"205":40664,"206":21489,"207":52629,"208":24016,"209":27403,"210":7725,"211":21047,"212":25111,"301":10912,"302":6962,"303":24573,"304":14623,"305":20349,"306":5499,"307":8335,"308":23477,"309":28575,"310":10615,"311":14054,"312":12015,"313":8358,"314":30109,"315":12861,"316":12317,"317":35586,"318":8726,"401":12794,"402":9092,"403":8812,"404":11666,"405":8173,"406":7971,"407":9315,"408":6149,"409":8134,"410":4300,"411":1823,"412":15080,"413":5183,"414":11034,"501":6998,"502":1286,"503":1093 };
  var population = { "201":91497.0,"202":52246.0,"203":79762.0,"204":146441.0,"205":128200.0,"206":83268.0,"207":139286.0,"208":101731.0,"209":172298.0,"210":120392.0,"211":113232.0,"212":152344.0,"301":173083.0,"302":99617.0,"303":152985.0,"304":112634.0,"305":182896.0,"306":104709.0,"307":126230.0,"308":96317.0,"309":98429.0,"310":124491.0,"311":181981.0,"312":191382.0,"313":104278.0,"314":160664.0,"315":159650.0,"316":86468.0,"317":155252.0,"318":193543.0,"101":60978.0,"102":90016.0,"103":163277.0,"104":103245.0,"105":51673.0,"106":142745.0,"107":209084.0,"108":219920.0,"109":110193.0,"110":115723.0,"111":120511.0,"112":190020.0,"401":191105.0,"402":113200.0,"403":171576.0,"404":172598.0,"405":169190.0,"406":113257.0,"407":247354.0,"408":151107.0,"409":143317.0,"410":122396.0,"411":116431.0,"412":225919.0,"413":188593.0,"414":114978.0,"501":175756.0,"502":132003.0,"503":160209.0 };
  var income = { '201':21600, '202':21600, '203':22639, '204':26086, '205':24841, '206':22639, '207':30945, '208':57629, '209':35239, '210':55408, '211':44078, '212':44117, '301':51450, '302':74259, '303':37011, '304':38780, '305':34146, '306':95212, '307':43924, '308':42391, '309':41639, '310':57760, '311':48890, '312':38720, '313':30558, '314':42232, '315':50045, '316':28139, '317':46562, '318':63941, '101':121178, '102':121178, '103':41460, '104':93808, '105':93808, '106':103115, '107':97279, '108':105986, '109':42288, '110':36950, '111':30736, '112':38183, '401':51387, '402':54842, '403':48184, '404':46265, '405':55650, '406':65223, '407':51929, '408':59906, '409':59353, '410':61633, '411':75951, '412':51929, '413':77007, '414':47565, '501':58742, '502':72876, '503':85790 };
  var stabilization = { "101":0.09593604263824117,"102":0.28918692372170995,"103":0.4290375203915171,"104":0.3444853983555429,"105":0.1289701636188643,"106":0.3618649965205289,"107":0.5254313242213757,"108":0.4246477617264134,"109":0.3613782051282051,"110":0.29569160997732424,"111":0.27511737089201876,"112":0.5627500909421608,"201":0.1235540241201083,"202":0.108,"203":0.12010512483574244,"204":0.24117818606007582,"205":0.23745519713261648,"206":0.15390087740099598,"207":0.2885558583106267,"208":0.08291807853298784,"209":0.03415387410300663,"210":0.01679569610287364,"211":0.02886581720937549,"212":0.02764597656628256,"301":0.13751898065623555,"302":0.10587810166225006,"303":0.08476464036578932,"304":0.17111543220788403,"305":0.028990352469194767,"306":0.08607503607503607,"307":0.08425373134328358,"308":0.1638048177887585,"309":0.0957370460743505,"310":0.05464544816288322,"311":0.03789647123438144,"312":0.03801576263328697,"313":0.03202538949798038,"314":0.08512985910711254,"315":0.017770391204295577,"316":0.055771567436208994,"317":0.04252873563218391,"318":0.0026676401213074244,"401":0.11422701592193117,"402":0.09401551533062431,"403":0.03946652150244965,"404":0.051217464315701094,"405":0.04651753940010168,"406":0.03973317865429234,"407":0.016950126407722362,"408":0.014591389533384893,"409":0.014145863925599609,"410":0.0032160724211863735,"411":0.006083384996900186,"412":0.006106096442535116,"413":0.00137359492685607,"414":0.013500033251313426,"501":0.004391003548543566,"502":0.0013292492631335607,"503":0.0004992710642462005 };

  var data = {};

  for (var i = 0; i < districts.length; i++){
    var district = districts[i];
    data[district] = { race: race[district], stabilization: stabilization[district], income: income[district], cold: complaints[district], population: population[district], percap: (complaints[district] / population[district]) };
  }
  return data;
}

function setModalWithStyle(graphStyle){
  var data = getData();
  var y = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.percap;});
  var yLabel = 'Complaints per capita';
  var x;
  var title;
  var xLabel;
  var lineX;
  var lineY;
  var identifier;
  if(graphStyle === 'stabilization'){
    x = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.stabilization;});
    xLabel = 'Share of rent-stabilized buildings';
    title = "r-squared = 0.1639; p = 0.00086"
    lineX = [0, 0.5];
    lineY = [0.08839, 0.13927];
    identifier = 'stabilization';
    // y = 0.08839 + (0.27854 * stabilization)
  } else if(graphStyle === 'race'){
    x = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.race;});
    xLabel = 'Factor change in white share of the population';
    title = "r-squared = 0.04277; p = 0.116"
    lineX = [0, 7];
    lineY = [0.10167, 0.12467];
    identifier = 'white-change';
    // y = 0.10167 + (0.01781 * race)
  } else if(graphStyle === 'income'){
    x = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.income;});
    xLabel = 'Median income';
    title = "r-squared = 0.3034; p = 0.000006"
    lineX = [0.1, 100000];
    lineY = [0.2355997941, 0.0297];
    identifier = 'income';
    // y = 0.2356 + (-0.000002059 * income)
  }
  var trace = { x:x, y:y, mode:'markers', type:'scatter' };
  var line =  { x:lineX, y:lineY, mode:'lines', type:'line' };
  var layout = { title:title, xaxis:{ title:xLabel }, yaxis:{ title:yLabel } };
  Plotly.newPlot('chart', [trace, line], layout);
  $('#graph-' + identifier).prop('checked', true);
}

$(document).ready(function(){

  var geojson;
  var map;
  var layerStyle = 'complaints';
  var graphStyle;
  var districtFeatures;
  var legend;

  function style(feature) {
    var color;
    return {
      fillColor: getColor(feature.properties[layerStyle]),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  function getColor(d){
    if(d) {
      if (layerStyle === 'complaints'){
       return d > 0.245 ? "#08306b" :
              d > 0.22  ? "#08519c" :
              d > 0.195 ? "#2171b5" :
              d > 0.17  ? "#4292c6" :
              d > 0.145 ? "#6baed6" :
              d > 0.12  ? "#9ecae1" :
              d > 0.095 ? "#c6dbef" :
              d > 0.07  ? "#deebf7" : "#f7fbff";
      } else if (layerStyle === 'income'){
        return d > 100000 ? "#00441b" :
               d > 90000  ? "#006d2c" :
               d > 80000  ? "#238b45" :
               d > 70000  ? "#41ab5d" :
               d > 60000  ? "#74c476" :
               d > 50000  ? "#a1d99b" :
               d > 40000  ? "#c7e9c0" :
               d > 30000  ? "#e5f5e0" : "#f7fcf5";
      } else if (layerStyle === 'race'){
        return d > 7.5 ? "#49006a" :
               d > 6.0 ? "#7a0177" :
               d > 4.5 ? "#ae017e" :
               d > 3.5 ? "#dd3497" :
               d > 2.5 ? "#f768a1" :
               d > 1.6 ? "#fa9fb5" :
               d > 1.2 ? "#fcc5c0" :
               d > 1.0 ? "#fde0dd" : "#fff7f3";
      } else if (layerStyle === 'stabilization'){
        return d > 0.40 ? "#000000" :
               d > 0.35 ? "#252525" :
               d > 0.30 ? "#525252" :
               d > 0.25 ? "#737373" :
               d > 0.20 ? "#969696" :
               d > 0.15 ? "#bdbdbd" :
               d > 0.10 ? "#d9d9d9" :
               d > 0.05 ? "#f0f0f0" : "#ffffff";
      }
    }
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
  }

  function addComplaintsLegend(map){
    if (legend){
      map.removeControl(legend);  
    }
    legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 0.07, 0.095, 0.12, 0.145, 0.17, 0.195, 0.22, 0.245];
      labels = [];
       // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 0.000001) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div;
    };
    legend.addTo(map);
  }

  function addIncomeLegend(map){
    if (legend){
      map.removeControl(legend);
    }
    legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 0.000001) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div;
    };
    legend.addTo(map);
  }

  function addWhiteChangeLegend(map){
    if (legend){
      map.removeControl(legend);
    }
    legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 1.0, 1.2, 1.6, 2.5, 3.5, 4.5, 6.0, 7.5];
      labels = [];
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 0.000001) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div;
    };
    legend.addTo(map);
  }

  function addStabilizationLegend(map){
    if (legend){
      map.removeControl(legend);  
    }
    legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4];
      labels = [];
       // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 0.000001) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div;
    };
    legend.addTo(map);
  }

  map = L.map('map');
  var layer = Tangram.leafletLayer({
    scene: 'https://raw.githubusercontent.com/tangrams/cinnabar-style/gh-pages/cinnabar-style.yaml',
    attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
  });

  layer.addTo(map);

  $.getJSON('community_districts.json', function(districts) {
    var data = getData();
    districtFeatures = districts;
    districtFeatures.features.forEach(function(feature){
      if (data[feature.properties.communityDistrict + '']){
        feature.properties.complaints = data[feature.properties.communityDistrict + '']['cold'] / data[feature.properties.communityDistrict + '']['population'];
        feature.properties.race = data[feature.properties.communityDistrict + '']['race'];
        feature.properties.income = data[feature.properties.communityDistrict + '']['income'];
        feature.properties.stabilization = data[feature.properties.communityDistrict + '']['stabilization'];
      }
    });
    geojson = L.geoJson(districtFeatures, {style: style, onEachFeature: onEachFeature}).addTo(map);
    addComplaintsLegend(map);
    setModalWithStyle('stabilization');
  });

  map.setView([40.693817467738924, -73.92976999282837], 11);

  $('#complaint-rate').click(function(){
    layerStyle = 'complaints';
    map.removeLayer(geojson);
    geojson = L.geoJson(districtFeatures, {style: style, onEachFeature: onEachFeature}).addTo(map);
    addComplaintsLegend(map);
  });

  $('#stabilization').click(function(){
    layerStyle = 'stabilization';
    graphStyle = layerStyle;
    map.removeLayer(geojson);
    geojson = L.geoJson(districtFeatures, {style: style, onEachFeature: onEachFeature}).addTo(map);
    addStabilizationLegend(map);
  });

  $('#income').click(function(){
    layerStyle = 'income';
    graphStyle = layerStyle;
    map.removeLayer(geojson);
    geojson = L.geoJson(districtFeatures, {style: style, onEachFeature: onEachFeature}).addTo(map);
    addIncomeLegend(map);
  });

  $('#white-change').click(function(){
    layerStyle = 'race';
    graphStyle = layerStyle;
    map.removeLayer(geojson);
    geojson = L.geoJson(districtFeatures, {style: style, onEachFeature: onEachFeature}).addTo(map);
    addWhiteChangeLegend(map);
  });

  $('#graph-stabilization').click(function(){
    setModalWithStyle('stabilization');
  });

  $('#graph-income').click(function(){
    setModalWithStyle('income');
  });

  $('#graph-white-change').click(function(){
    setModalWithStyle('race');
  });

  var modal = $('#graph-modal');
  var open = $("#view-graph");
  var close = $("#close-modal");

  open.click(function(){
    modal.show();
    if (!graphStyle) { graphStyle = 'stabilization'; }
    setModalWithStyle(graphStyle);
  });

  close.click(function(){
    modal.hide();
  });
});