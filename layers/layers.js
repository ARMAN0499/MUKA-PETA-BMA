var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WIUPBMA_1 = new ol.format.GeoJSON();
var features_WIUPBMA_1 = format_WIUPBMA_1.readFeatures(json_WIUPBMA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPBMA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPBMA_1.addFeatures(features_WIUPBMA_1);
var lyr_WIUPBMA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPBMA_1, 
                style: style_WIUPBMA_1,
                popuplayertitle: 'WIUP BMA',
                interactive: true,
                title: '<img src="styles/legend/WIUPBMA_1.png" /> WIUP BMA'
            });
var format_data_survei_bma_2 = new ol.format.GeoJSON();
var features_data_survei_bma_2 = format_data_survei_bma_2.readFeatures(json_data_survei_bma_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_survei_bma_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_survei_bma_2.addFeatures(features_data_survei_bma_2);
var lyr_data_survei_bma_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_data_survei_bma_2, 
                style: style_data_survei_bma_2,
                popuplayertitle: 'data_survei_bma',
                interactive: true,
    title: 'data_survei_bma<br />\
    <img src="styles/legend/data_survei_bma_2_0.png" /> Brown Soil<br />\
    <img src="styles/legend/data_survei_bma_2_1.png" /> Laterit<br />\
    <img src="styles/legend/data_survei_bma_2_2.png" /> Outcrop<br />\
    <img src="styles/legend/data_survei_bma_2_3.png" /> Regiolit<br />\
    <img src="styles/legend/data_survei_bma_2_4.png" /> Sungai<br />\
    <img src="styles/legend/data_survei_bma_2_5.png" /> <br />' });
var format_BlokSDMBMA_3 = new ol.format.GeoJSON();
var features_BlokSDMBMA_3 = format_BlokSDMBMA_3.readFeatures(json_BlokSDMBMA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokSDMBMA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokSDMBMA_3.addFeatures(features_BlokSDMBMA_3);
var lyr_BlokSDMBMA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokSDMBMA_3, 
                style: style_BlokSDMBMA_3,
                popuplayertitle: 'Blok SDM BMA',
                interactive: false,
                title: '<img src="styles/legend/BlokSDMBMA_3.png" /> Blok SDM BMA'
            });
var format_PlanBlokNECBMA_4 = new ol.format.GeoJSON();
var features_PlanBlokNECBMA_4 = format_PlanBlokNECBMA_4.readFeatures(json_PlanBlokNECBMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanBlokNECBMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanBlokNECBMA_4.addFeatures(features_PlanBlokNECBMA_4);
var lyr_PlanBlokNECBMA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanBlokNECBMA_4, 
                style: style_PlanBlokNECBMA_4,
                popuplayertitle: 'Plan Blok NEC BMA',
                interactive: true,
                title: '<img src="styles/legend/PlanBlokNECBMA_4.png" /> Plan Blok NEC BMA'
            });
var format_TITIKTESTPIT_5 = new ol.format.GeoJSON();
var features_TITIKTESTPIT_5 = format_TITIKTESTPIT_5.readFeatures(json_TITIKTESTPIT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKTESTPIT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKTESTPIT_5.addFeatures(features_TITIKTESTPIT_5);
var lyr_TITIKTESTPIT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKTESTPIT_5, 
                style: style_TITIKTESTPIT_5,
                popuplayertitle: 'TITIK TESTPIT',
                interactive: false,
                title: '<img src="styles/legend/TITIKTESTPIT_5.png" /> TITIK TESTPIT'
            });
var format_DrillPlanSDM_6 = new ol.format.GeoJSON();
var features_DrillPlanSDM_6 = format_DrillPlanSDM_6.readFeatures(json_DrillPlanSDM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrillPlanSDM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrillPlanSDM_6.addFeatures(features_DrillPlanSDM_6);
var lyr_DrillPlanSDM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrillPlanSDM_6, 
                style: style_DrillPlanSDM_6,
                popuplayertitle: 'Drill Plan SDM',
                interactive: false,
                title: '<img src="styles/legend/DrillPlanSDM_6.png" /> Drill Plan SDM'
            });
var group_DataPoint = new ol.layer.Group({
                                layers: [lyr_TITIKTESTPIT_5,lyr_DrillPlanSDM_6,],
                                fold: 'open',
                                title: 'Data Point'});
var group_DataPoligon = new ol.layer.Group({
                                layers: [lyr_WIUPBMA_1,lyr_data_survei_bma_2,lyr_BlokSDMBMA_3,lyr_PlanBlokNECBMA_4,],
                                fold: 'open',
                                title: 'Data Poligon'});
var group_Raster = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Raster'});

lyr_GoogleSatellite_0.setVisible(true);lyr_WIUPBMA_1.setVisible(true);lyr_data_survei_bma_2.setVisible(true);lyr_BlokSDMBMA_3.setVisible(true);lyr_PlanBlokNECBMA_4.setVisible(true);lyr_TITIKTESTPIT_5.setVisible(true);lyr_DrillPlanSDM_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_DataPoligon,group_DataPoint];
lyr_WIUPBMA_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_data_survei_bma_2.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'No': 'No', 'Indeks': 'Indeks', });
lyr_BlokSDMBMA_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Remark': 'Remark', 'Luas': 'Luas', });
lyr_PlanBlokNECBMA_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Luas': 'Luas', });
lyr_TITIKTESTPIT_5.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_DrillPlanSDM_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Remark': 'Remark', });
lyr_WIUPBMA_1.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_data_survei_bma_2.set('fieldImages', {'fid': '', 'X': '', 'Y': '', 'Z': '', 'No': '', 'Indeks': '', });
lyr_BlokSDMBMA_3.set('fieldImages', {'fid': '', 'ID': '', 'Remark': '', 'Luas': '', });
lyr_PlanBlokNECBMA_4.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'Luas': '', });
lyr_TITIKTESTPIT_5.set('fieldImages', {'fid': '', 'No': '', 'X': '', 'Y': '', 'Z': '', });
lyr_DrillPlanSDM_6.set('fieldImages', {'fid': '', 'ID': '', 'Remark': '', });
lyr_WIUPBMA_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_data_survei_bma_2.set('fieldLabels', {'fid': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'No': 'no label', 'Indeks': 'no label', });
lyr_BlokSDMBMA_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Remark': 'no label', 'Luas': 'no label', });
lyr_PlanBlokNECBMA_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'Luas': 'no label', });
lyr_TITIKTESTPIT_5.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', });
lyr_DrillPlanSDM_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Remark': 'no label', });
lyr_DrillPlanSDM_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});