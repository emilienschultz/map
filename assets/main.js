

// affichage des données 
var map = new ol.Map({
              
          view: new ol.View({
          center: [258857,6220000],
          zoom: 8.5       
        
                          }),
        target: 'mymap' })


var   OSMHum = new ol.layer.Tile ({
        source : new ol.source.OSM ({url : 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'}),
        visible :true,
        opacity : 0.5, 
        title : 'OSMHum'

     })

     map.addLayer (OSMHum);



//LAYER GeoJSON Iris
var iris_idf = new ol.source.Vector ({
        url:'assets/Geojson/Iris_idf.geojson',
        format :new ol.format.GeoJSON()
                    });

//COUCHE GeoJSON Iris fld_wrr
var iris_fld_wrr = new ol.layer.Vector({
source : iris_idf,
visible : false, 
title : 'iris_fld_wrr',
style : Stylefld_wrr
});


//COUCHE GeoJSON Iris trst
var iris_trst_fr = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_trst_fr',
        style : Styletrst_fr
        });

//COUCHE GeoJSON Iris fld_wrn
var iris_fld_wrn = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_fld_wrn',
        style : Stylefld_wrn
        
        });

//COUCHE GeoJSON Iris wll_prp
var iris_wll_prp = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_wll_prp',
        style : Stylewll_prp
      
        });

//COUCHE GeoJSON Iris prdct_d
var iris_prdct_d = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_prdct_d',
        style : Styleprdct_d
      
        });

//COUCHE GeoJSON Iris cntrl_d
var iris_cntrl_d = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_cntrl_d',
        style : Stylecntrl_d
      
        });

//COUCHE GeoJSON Iris mr_xpsd
var iris_mr_xpsd = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_mr_xpsd',
        style : Stylemr_xpsd
      
        });


//COUCHE GeoJSON Iris evctn_b
var iris_evctn_b = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_evctn_b',
        style : Styleevctn_b
      
        });

//COUCHE GeoJSON Iris fld_gt
var iris_fld_gt = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_fld_gt',
        style : Stylefld_gt
      
        });

//COUCHE GeoJSON Iris evc_spn
var iris_evc_spn = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_evc_spn',
        style : Styleevc_spn
      
        });

//COUCHE GeoJSON Iris evctn_r
var iris_evctn_r = new ol.layer.Vector({
        source : iris_idf,
        visible : false, 
        title : 'iris_evctn_r',
        style : Styleevctn_r
       
              });
               
//LAYER GeoJSON Communes
var communes_idf = new ol.source.Vector ({
        url:'assets/Geojson/communes_idf.geojson',
        format :new ol.format.GeoJSON()
                    });

//COUCHE GeoJSON communes fld_wrr
var commune_fld_wrr = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_fld_wrr',
        style : Stylefld_wrr
        
        });

//COUCHE GeoJSON communes trst_fr
var commune_trst_fr = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_trst_fr',
        style : Styletrst_fr
                });

//COUCHE GeoJSON communes fld_wrn
var commune_fld_wrn = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_fld_wrn',
        style : Stylefld_wrn
                });

//COUCHE GeoJSON communes wll_prp
var commune_wll_prp = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_wll_prp',
        style : Stylewll_prp
                });

//COUCHE GeoJSON communes prdct_d
var commune_prdct_d = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_prdct_d',
        style : Styleprdct_d
                });

//COUCHE GeoJSON communes cntrl_d
var commune_cntrl_d = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_cntrl_d',
        style : Stylecntrl_d
                });

//COUCHE GeoJSON communes mr_xpsd
var commune_mr_xpsd = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_mr_xpsd',
        style : Stylemr_xpsd
                });

//COUCHE GeoJSON communes evctn_b
var commune_evctn_b = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_evctn_b',
        style : Styleevctn_b
                });

//COUCHE GeoJSON communes fld_gt
var commune_fld_gt = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_fld_gt',
        style : Stylefld_gt
                });

//COUCHE GeoJSON communes evc_spn
var commune_evc_spn = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_evc_spn',
        style : Styleevc_spn
                });

//COUCHE GeoJSON communes evctn_r
var commune_evctn_r = new ol.layer.Vector({
        source : communes_idf,
        visible : false, 
        title : 'commune_evctn_r',
        style : Styleevctn_r
                });

//LAYER GeoJSON Carroyage
var car_idf = new ol.source.Vector ({
        url:'assets/Geojson/carroyage.geojson',
        format :new ol.format.GeoJSON()
                    });

//COUCHE GeoJSON Carroyage fld_wrr
var car_fld_wrr = new ol.layer.Vector({
source : car_idf,
visible : false, 
title : 'car_fld_wrr',
style : Stylefld_wrr
});               
 
//COUCHE GeoJSON Carroyage trst_fr
var car_trst_fr = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_trst_fr',
        style : Styletrst_fr
        }); 

//COUCHE GeoJSON Carroyage fld_wrn
var car_fld_wrn = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_fld_wrn',
        style : Stylefld_wrn
        }); 

//COUCHE GeoJSON Carroyage wll_prp
var car_wll_prp = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_wll_prp',
        style : Stylewll_prp
        }); 

//COUCHE GeoJSON Carroyage prdct_d
var car_prdct_d = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_prdct_d',
        style : Styleprdct_d
        }); 

//COUCHE GeoJSON Carroyage cntrl_d
var car_cntrl_d = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_cntrl_d',
        style : Stylecntrl_d
        }); 
        
//COUCHE GeoJSON Carroyage mr_xpsd
var car_mr_xpsd = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_mr_xpsd',
        style : Stylemr_xpsd
        }); 
        

//COUCHE GeoJSON Carroyage evctn_b
var car_evctn_b = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_evctn_b',
        style : Styleevctn_b
        }); 
        
//COUCHE GeoJSON Carroyage fld_gt
var car_fld_gt = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_fld_gt',
        style : Stylefld_gt
        });

//COUCHE GeoJSON Carroyage evc_spn
var car_evc_spn = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_evc_spn',
        style : Styleevc_spn
        });

//COUCHE GeoJSON Carroyage evctn_r
var car_evctn_r = new ol.layer.Vector({
        source : car_idf,
        visible : false, 
        title : 'car_evctn_r',
        style : Styleevctn_r
        });

var GroupCouches  = new ol.layer.Group ({
                layers :[
                        commune_fld_wrr,commune_trst_fr,commune_fld_wrn,commune_wll_prp, commune_prdct_d,commune_cntrl_d,commune_mr_xpsd, commune_evctn_b, commune_fld_gt, commune_evc_spn, commune_evctn_r,
                        iris_fld_wrr,iris_trst_fr,iris_fld_wrn,iris_wll_prp,iris_prdct_d,iris_cntrl_d,iris_mr_xpsd,iris_evctn_b,iris_fld_gt,iris_evc_spn,iris_evctn_r,
                        car_fld_wrr,car_trst_fr,car_fld_wrn,car_wll_prp,car_prdct_d,car_cntrl_d,car_mr_xpsd,car_evctn_b,car_fld_gt,car_evc_spn,car_evctn_r,
                ]
                  })
                         map.addLayer(GroupCouches);   

//LAYER GeoJSON Limite departement
var dep_idf = new ol.source.Vector ({
        url:'assets/Geojson/limite_departement_idf.geojson',
        format :new ol.format.GeoJSON()
                    });

//COUCHE GeoJSON Limite departement
var basedep = new ol.layer.Vector({
        source : dep_idf,
        visible : true, 
        title : "basedep",
        style : Styledep       
        });  

        map.addLayer (basedep);                        

//LAYER GeoJSON Hydrographie
var hydro = new ol.source.Vector ({
        url:'assets/Geojson/Hydro.geojson',
        format :new ol.format.GeoJSON()
                    });

//COUCHE GeoJSON Hydrographie
var basehydro = new ol.layer.Vector({
        source : hydro,
        visible : true, 
        title : "basehydro",
        style : Stylehydro       
        });  

        map.addLayer (basehydro);            
                
// Interaction menu deroulant

var baseLayerElements = document.querySelector ('#formCoucheCommune'); 
for (let baseLayerElement of baseLayerElements){ 
 baseLayerElement.addEventListener ('change', function (){
     let baseLayerElementValue = this.value;
     GroupCouches.getLayers().forEach(function(element, index, array){
     let baseLayerTitle = element.get ('title');
   element.setVisible(baseLayerTitle === baseLayerElementValue);

       })
   })
}

var baseLayerElements = document.querySelector ('#formCoucheIris'); 
for (let baseLayerElement of baseLayerElements){ 
 baseLayerElement.addEventListener ('change', function (){
     let baseLayerElementValue = this.value;
     GroupCouches.getLayers().forEach(function(element, index, array){
     let baseLayerTitle = element.get ('title');
   element.setVisible(baseLayerTitle === baseLayerElementValue);


       })
   })
}

var baseLayerElements = document.querySelector ('#formCoucheCarroyage'); 
for (let baseLayerElement of baseLayerElements){ 
 baseLayerElement.addEventListener ('change', function (){
     let baseLayerElementValue = this.value;
     GroupCouches.getLayers().forEach(function(element, index, array){
     let baseLayerTitle = element.get ('title');
   element.setVisible(baseLayerTitle === baseLayerElementValue);

       })
   })
}

// Interaction bouton 

function afficherListeCommune(){					   
        document.getElementById("formCoucheCommune").style.display = "block";    
        document.getElementById("formCoucheIris").style.display = "none";  
        document.getElementById("formCoucheCarroyage").style.display = "none";   
       }
function afficherListeIris(){
        document.getElementById("formCoucheCommune").style.display = "none";    
        document.getElementById("formCoucheIris").style.display = "block";
        document.getElementById("formCoucheCarroyage").style.display = "none";     
       }
function afficherListeCarroyage(){
        document.getElementById("formCoucheCommune").style.display = "none";    
        document.getElementById("formCoucheIris").style.display = "none";
        document.getElementById("formCoucheCarroyage").style.display = "block"; 
}

function afficherboxplotCommune(){					   
        document.getElementById("svgmuni").style.display = "block";    
        document.getElementById("svgiris").style.display = "none";  
        document.getElementById("svggrid").style.display = "none";   
       }
function afficherboxplotIris(){					   
        document.getElementById("svgmuni").style.display = "none";    
        document.getElementById("svgiris").style.display = "block";  
        document.getElementById("svggrid").style.display = "none";   
       }
function afficherboxplotGrid(){					   
        document.getElementById("svgmuni").style.display = "none";    
        document.getElementById("svgiris").style.display = "none";  
        document.getElementById("svggrid").style.display = "block";   
       }

       


// Overlay legend code victor 

// Commune et Iris
var overlayCommune = document.querySelector('.overlay-container');
var coverlay_fld_wrr = new ol.Overlay({
  element: overlayCommune 
 
})
map.addOverlay(coverlay_fld_wrr);   


var overlayFeatureFLDWR = document.getElementById('feature-ComFLDWRR');
        map.on('pointermove', function(e){
                coverlay_fld_wrr.setPosition(undefined);
        map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
                let clickedCoordinate = e.coordinate;
                let clickedFeatureFLDWRR = ( feature.get('NOM_COM')+'<BR/>'+feature.get('DEPCOM'));
        
                coverlay_fld_wrr.setPosition(clickedCoordinate);
                overlayFeatureFLDWR.innerHTML = clickedFeatureFLDWRR ;
       })});

// Carroyage
var overlayCarro = document.querySelector('.overlay-container-carroyage');
       var caroverlay = new ol.Overlay({
         element: overlayCarro 
        
       })
       map.addOverlay(caroverlay);   
       
       
       var overlayFeatureCAR = document.getElementById('feature-CARFLDWRR');
               map.on('pointermove', function(e){
                caroverlay.setPosition(undefined);
               map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
                       let clickedCoordinate = e.coordinate;
                       let clickedFeatureCAR = ( feature.get('NOM_COM'));
               
                       caroverlay.setPosition(clickedCoordinate);
                       var overlayFeatureCAR = document.getElementById('feature-ComFLDWRR');
                       overlayFeatureCAR.innerHTML = clickedFeatureCAR ;
              })});

// Selection limite administration avec un style particulier
selectInteraction = new ol.interaction.Select({
        style: new ol.style.Style({
                fill:fond_translucide_orange,
                stroke:contour_rouge
        })
}) ;
map.addInteraction(selectInteraction);
selectInteraction.on('select', function(){
        document.getElementById('info').innerHTML='';
        var tab_select=selectInteraction.getFeatures();
        tab_select.forEach(function(feature){
                document.getElementById('info').innerHTML+=feature.get('DEPCOM')+'<BR/>';
        });
});
/*
//overlay (infobulle)
var overlayContainerElement = document.querySelector('.overlay-container');
var popup = new ol.Overlay({
  element: document.getElementById('overlayContainerElement')
});
map.addOverlay(popup);
//écoute de l'événement clic sur la carte
map.on('singleclick', function(evt){
    var objet=map.forEachFeatureAtPixel(//cherche un objet à l'endroit du clic
                        evt.pixel,
                        function(feature){
                                return feature;//trouve un département et le met dans la variable objet
                        },
                        {
                                layerFilter: function (layer) {
                                        return layer.get('name') === 'depts';
                                }
                        }
                        
        );
        if(objet){
                popup.setPosition(evt.coordinate);//si departement, affiche l'infobulle
                
        }else{
                popup.setPosition(null);//sinon masque l'infobulle
        }
});
*/
 // Menu 
 function openPage(pageName,elmnt,color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = color;
      }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
          