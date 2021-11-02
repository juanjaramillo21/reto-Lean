var $select =$('#ciudades');
$.getJSON('ciudades.json',function(ciudades){
    console.log(ciudades);
    $select.html('');

    for (var i=0;i<ciudades['ciudades'].leght;i++){
        $select.appened('<option id="'+ciudades['ciudades'][i]['ciudad']+'">'+'</option>');
    }
})

var $select=$()