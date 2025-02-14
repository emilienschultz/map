Styledep = new ol.style.Style ({

  stroke: new ol.style.Stroke({
  color: [0,0,0],
  width: 0.5
}),
}),

Stylehydro = new ol.style.Style ({

     stroke: new ol.style.Stroke({
     color: [0,128,255],
     width: 2
   }),
   }),
 
Stylefld_wrr =  function(feature){
    var valeur = feature.get('fld_wrr');
    switch(true){

        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
                  
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                   break;
                
            }
};
Styletrst_fr =  function(feature){
    var valeur =feature.get('trst_fr');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
        
    
};
Stylefld_wrn =  function(feature){
    var valeur =feature.get('fld_wrn');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
    
};
Stylewll_prp =  function(feature){
    var valeur =feature.get('wll_prp');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
        
    
};
Styleprdct_d =  function(feature){
    var valeur =feature.get('prdct_d');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
    
};
Stylecntrl_d =  function(feature){
    var valeur =feature.get('cntrl_d');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
    
};
Stylemr_xpsd =  function(feature){
    var valeur =feature.get('mr_xpsd');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
        
    
};
Styleevctn_b =  function(feature){
    var valeur =feature.get('evctn_b');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
    
};
Stylefld_gt =  function(feature){
    var valeur =feature.get('fld_gt_');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
        
    
};
Styleevc_spn =  function(feature){
    var valeur =feature.get('evc_spn');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
        
    
};
Styleevctn_r =  function(feature){
    var valeur =feature.get('evctn_r');
    switch(true){
        case (valeur >=0.001 && valeur <0.1):return new ol.style.Style({fill : new ol.style.Fill ({color : [242,227,43,0.7]}) ,stroke: new ol.style.Stroke({color: [246,234,107],width: 1}), }); 
        case (valeur >= 0.1 && valeur <0.2 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [196,219,59,0.7]}) ,stroke: new ol.style.Stroke({color: [214,230,117],width: 1 }), }); 
                    break;
        case (valeur >= 0.2 && valeur <0.3):return new ol.style.Style({fill : new ol.style.Fill ({color : [114,204,86,0.7]}) ,stroke: new ol.style.Stroke({color: [156,220,136],width:1 }), }); 
                    break;
        case (valeur >= 0.3 && valeur <0.4 ):return new ol.style.Style({fill : new ol.style.Fill ({color : [92,191,100,0.7] }) ,stroke: new ol.style.Stroke({color: [141, 210, 146],width: 1}), });      
                    break;
        case (valeur >= 0.4 && valeur <0.5 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [67, 176, 115,0.7]})  ,stroke: new ol.style.Stroke({color: [123, 200, 157],width: 1 }), }); 
                    break;
        case (valeur >= 0.5 && valeur <0.6 ): return new ol.style.Style({fill : new ol.style.Fill ({color : [35, 158, 134,0.7]})  ,stroke: new ol.style.Stroke({color: [101,187,170],width: 1 }), }); 
                    break;
        case (valeur >= 0.6 && valeur <0.7  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [45, 129, 135,0.7]}) ,stroke: new ol.style.Stroke({color: [108,167,171],width: 1 }), }); 
                    break;
        case (valeur >= 0.7 && valeur <0.8  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [56, 100, 136,0.7]})  ,stroke: new ol.style.Stroke({color: [114,146,171],width: 1}), }); 
                   break;
        case (valeur >= 0.8 && valeur <0.9  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [64, 77, 136,0.7]}) ,stroke: new ol.style.Stroke({color: [121,130,171],width: 1}), }); 
                   break;
        case (valeur >= 0.9 && valeur <1  ): return new ol.style.Style({fill : new ol.style.Fill ({color : [68, 22, 95,0.7]}) ,stroke: new ol.style.Stroke({color: [124,91,143],width: 1}), }); 
                   break;
        default: return new ol.style.Style({fill : new ol.style.Fill ({ color : [255,255,255 ,0.7]}),stroke: new ol.style.Stroke({color: [255,255,255 ,0.7],width: 0.5 }), }); 
                    break;
                
            }
        
    
};

fond_translucide_orange=new ol.style.Fill({
    color : 'rgba(248,196,23,0.6)'
});
contour_rouge = new ol.style.Stroke({
color: 'rgba(250,0,0,0.4)',
width:2
});