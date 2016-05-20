function getData(){
  var districts = ["101","102","103","104","105","106","107","108","109","110","111","112","201","202","203","204","205","206","207","208","209","210","211","212","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","401","402","403","404","405","406","407","408","409","410","411","412","413","414","501","502","503"];
  var population = { "201":91497.0,"202":52246.0,"203":79762.0,"204":146441.0,"205":128200.0,"206":83268.0,"207":139286.0,"208":101731.0,"209":172298.0,"210":120392.0,"211":113232.0,"212":152344.0,"301":173083.0,"302":99617.0,"303":152985.0,"304":112634.0,"305":182896.0,"306":104709.0,"307":126230.0,"308":96317.0,"309":98429.0,"310":124491.0,"311":181981.0,"312":191382.0,"313":104278.0,"314":160664.0,"315":159650.0,"316":86468.0,"317":155252.0,"318":193543.0,"101":60978.0,"102":90016.0,"103":163277.0,"104":103245.0,"105":51673.0,"106":142745.0,"107":209084.0,"108":219920.0,"109":110193.0,"110":115723.0,"111":120511.0,"112":190020.0,"401":191105.0,"402":113200.0,"403":171576.0,"404":172598.0,"405":169190.0,"406":113257.0,"407":247354.0,"408":151107.0,"409":143317.0,"410":122396.0,"411":116431.0,"412":225919.0,"413":188593.0,"414":114978.0,"501":175756.0,"502":132003.0,"503":160209.0 };
  var stabilization = { "102":0.2883409945674885,"314":0.08518046709129512,"310":0.054648645485928266,"316":0.05581904414447282,"317":0.04253572015109213,"401":0.11424461909898803,"405":0.046511627906976744,"107":0.526032315978456,"110":0.29613636363636364,"104":0.3462635482030804,"308":0.1639060568603214,"211":0.028868087784157948,"303":0.0848193336461755,"309":0.09577828834003446,"306":0.0860587683199769,"305":0.0289185326345879,"109":0.3614119534697152,"402":0.09409696521095484,"203":0.12070787110406762,"108":0.42401567789061106,"106":0.36300174520069806,"207":0.2883251500272777,"111":0.2750941028858218,"209":0.034172498409524674,"112":0.5635701275045537,"103":0.4291044776119403,"304":0.17155516171909616,"409":0.014147941450041612,"208":0.08295114656031904,"212":0.027648653883401122,"313":0.032305005820721766,"414":0.01350362535754673,"403":0.039474579731845094,"301":0.13776219149076954,"406":0.03973702020690322,"412":0.006107865385543914,"206":0.15419339510572583,"312":0.03801576263328697,"311":0.03791729633191372,"205":0.2378815080789946,"404":0.051195971464540496,"408":0.014539080222726335,"105":0.12920984455958548,"315":0.01779541672001024,"407":0.016962309174021792,"302":0.10586534987353968,"307":0.08433554941361023,"204":0.24174218064893305,"210":0.01680341319330489,"411":0.006084092230187948,"318":0.0026677899466442012,"201":0.1235236220472441,"202":0.1081441922563418,"101":0.09587217043941411,"501":0.0043871955107766866,"410":0.0032169665197188135,"413":0.0013736892714867896,"502":0.0013272165959779566,"503":0.0004988426849708676,"482":1 };
  var complaints = { "414":11960,"304":15843,"103":17195,"410":4609,"206":23654,"317":38472,"104":12692,"308":25255,"204":47746,"207":57665,"314":32814,"312":13480,"309":31261,"211":23136,"110":28863,"106":9877,"401":13861,"405":8765,"112":71075,"402":9857,"412":16098,"209":31068,"316":13302,"409":8860,"307":8988,"208":25908,"111":16458,"202":12036,"403":9561,"318":9345,"501":7564,"210":8417,"108":15247,"311":15390,"212":27130,"203":15899,"303":26381,"305":21977,"301":11956,"407":10265,"109":29497,"408":6683,"201":14326,"205":44634,"105":4918,"315":14235,"306":5898,"404":13746,"406":8756,"107":19979,"101":1772,"302":7523,"313":9102,"310":11458,"503":1196,"102":8773,"413":5497,"411":1990,"502":1337,"355":10,"482":28,"484":13,"483":8,"227":1,"481":2,"480":3 };
  var rentChange = { "201":9.3,"202":9.3,"203":10.1,"204":10.3,"205":7.5,"206":10.1,"207":9.6,"208":9.0,"209":7.8,"210":9.3,"211":9.9,"212":9.4,"301":21.3,"302":28.2,"303":13.2,"304":20.2,"305":7.3,"306":14.8,"307":11.5,"308":9.9,"309":11.2,"310":6.9,"311":6.7,"312":11.0,"313":8.3,"314":8.9,"315":9.0,"316":17.4,"317":6.5,"318":3.7,"101":13.2,"102":13.2,"103":12.0,"104":20.3,"105":20.3,"106":9.9,"107":6.8,"108":2.6,"109":10.7,"110":15.6,"111":20.1,"112":13.1,"401":12.9,"402":13.3,"403":6.6,"404":8.4,"405":5.8,"406":6.5,"407":3.3,"408":8.5,"409":6.1,"410":2.4,"411":10.8,"412":9.5,"413":8.0,"414":7.6,"501":-0.7,"502":-2.4,"503":0.5 };
  var income = { "201":21143.0,"202":21143.0,"203":22069.0,"204":27237.0,"205":20898.0,"206":22069.0,"207":35540.0,"208":54292.0,"209":36103.0,"210":55031.0,"211":47970.0,"212":44963.0,"301":57891.0,"302":84675.0,"303":34722.0,"304":40535.0,"305":33038.0,"306":113187.0,"307":48112.0,"308":44961.0,"309":41867.0,"310":56767.0,"311":47808.0,"312":43276.0,"313":29615.0,"314":50379.0,"315":52783.0,"316":25291.0,"317":42402.0,"318":62186.0,"101":120341.0,"102":120341.0,"103":41418.0,"104":98685.0,"105":98685.0,"106":105758.0,"107":106315.0,"108":115383.0,"109":42288.0,"110":40615.0,"111":31380.0,"112":45214.0,"401":56340.0,"402":57337.0,"403":49673.0,"404":45321.0,"405":63740.0,"406":61367.0,"407":52171.0,"408":55394.0,"409":61352.0,"410":61023.0,"411":80968.0,"412":52603.0,"413":75827.0,"414":44295.0,"501":57675.0,"502":71549.0,"503":82822.0 };

  var data = {  };

  districts.forEach(function(district){
    var pop = population[district];
    data[district] = { stabilization: stabilization[district],
                       income: income[district],
                       complaints: complaints[district] / pop,
                       rentChange: rentChange[district] };
  });

  Object.keys(data).map(function(key){
    return { stabilization: data[key].stabilization,
             income: data[key].income,
             complaints: data[key].complaints,
             rentChange: data[key].rentChange };
  });

  return data;
}

function setModalWithStyle(graphStyle){
  var data = getData();
  var y = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){ return obj.complaints; });
  var yLabel = 'Complaints per capita';
  var x;
  var title;
  var xLabel;
  var lineX;
  var lineY;
  var identifier;
  if(graphStyle === 'stabilization'){
    x = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.stabilization;});
    xLabel = 'Share of housing that is rent stabilized';
    title = "r-squared = 0.1797; p = 0.00082"
    lineX = [0.05, 0.425];
    lineY = [0.109965, 0.440025];
    identifier = 'stabilization';
  } else if(graphStyle === 'income'){
    x = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.income;});
    xLabel = 'Median income';
    title = "r-squared = 0.2779; p = .00001788"
    lineX = [20000, 100000];
    lineY = [0.20458, 0.0449];
    identifier = 'income';
  } else if(graphStyle === 'rentChange'){
    x = Object.keys(data).sort().map(function(k){return data[k];}).map(function(obj){return obj.rentChange;});
    xLabel = 'Percent rent change 2005-2009 to 2010-2014';
    title = "r-squared = 0.02735; p = 0.2107"
    lineX = [1, 22];
    lineY = [0.105397, 0.168124];
    identifier = 'rent-change';
  }

  var trace = { x:x, y:y, mode:'markers', type:'scatter' };
  var line =  { x:lineX, y:lineY, mode:'lines', type:'line' };
  var layout = { title:title, xaxis:{ title:xLabel }, yaxis:{ title:yLabel } };
  Plotly.newPlot('chart', [trace, line], layout);
  $('#graph-' + identifier).prop('checked', true);
}

$(function(){

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
       return d > 0.30 ? "#08306b" :
              d > 0.25 ? "#08519c" :
              d > 0.18 ? "#2171b5" :
              d > 0.15 ? "#4292c6" :
              d > 0.12 ? "#6baed6" :
              d > 0.09 ? "#9ecae1" :
              d > 0.06 ? "#c6dbef" :
              d > 0.03 ? "#deebf7" : "#f7fbff";
      } else if (layerStyle === 'income'){
        return d > 100000 ? "#00441b" :
               d > 90000  ? "#006d2c" :
               d > 80000  ? "#238b45" :
               d > 70000  ? "#41ab5d" :
               d > 60000  ? "#74c476" :
               d > 50000  ? "#a1d99b" :
               d > 40000  ? "#c7e9c0" :
               d > 30000  ? "#e5f5e0" : "#f7fcf5";
      } else if (layerStyle === 'stabilization'){
        return d > 0.40 ? "#000000" :
               d > 0.35 ? "#252525" :
               d > 0.30 ? "#525252" :
               d > 0.25 ? "#737373" :
               d > 0.20 ? "#969696" :
               d > 0.15 ? "#bdbdbd" :
               d > 0.10 ? "#d9d9d9" :
               d > 0.05 ? "#f0f0f0" : "#ffffff";
      } else if (layerStyle === 'rentChange'){
        return d > 17.5 ? "#99000d" :
               d > 15 ? "#cb181d" :
               d > 12.5 ? "#ef3b2c" :
               d > 10 ? "#fb6a4a" :
               d > 9 ? "#fc9272" :
               d > 5 ? "#fcbba1" : "#fee5d9";
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
        mouseover: function(){ console.log(feature); },
        mouseout: resetHighlight,
        click: zoomToFeature
    });
  }

  function addComplaintsLegend(map){
    addLegendWithGrades([0, 0.07, 0.095, 0.12, 0.145, 0.17, 0.195, 0.22, 0.245]);
  }

  function addIncomeLegend(map){
    addLegendWithGrades([0, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]);
  }

  function addRentLegend(map){
    addLegendWithGrades([0, 5, 9, 10, 12.5, 15, 17.5]);
  }

  function addStabilizationLegend(map){
    addLegendWithGrades([0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]);
  }

  function addLegendWithGrades(grades){
    if (legend){
      map.removeControl(legend);  
    }
    legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
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
        feature.properties.complaints = data[feature.properties.communityDistrict + ''].complaints;
        feature.properties.income = data[feature.properties.communityDistrict + ''].income;
        feature.properties.stabilization = data[feature.properties.communityDistrict + ''].stabilization;
        feature.properties.rentChange = data[feature.properties.communityDistrict + ''].rentChange;
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

  $('#rent-change').click(function(){
    layerStyle = 'rentChange';
    graphStyle = layerStyle;
    map.removeLayer(geojson);
    geojson = L.geoJson(districtFeatures, {style: style, onEachFeature: onEachFeature}).addTo(map);
    addRentLegend(map);
  });

  $('#graph-stabilization').click(function(){
    setModalWithStyle('stabilization');
  });

  $('#graph-income').click(function(){
    setModalWithStyle('income');
  });

  $('#graph-rent-change').click(function(){
    setModalWithStyle('rentChange');
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