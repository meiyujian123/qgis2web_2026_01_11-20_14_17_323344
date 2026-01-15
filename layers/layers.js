ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([97.003798, 34.459392, 127.345269, 54.605934]);
var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '内蒙古自治区_市',
                interactive: true,
    title: '内蒙古自治区_市<br />\
    <img src="styles/legend/__1_0.png" /> 284 - 284<br />\
    <img src="styles/legend/__1_1.png" /> 284 - 549<br />\
    <img src="styles/legend/__1_2.png" /> 549 - 927<br />\
    <img src="styles/legend/__1_3.png" /> 927 - 1361<br />\
    <img src="styles/legend/__1_4.png" /> 1361 - 2057<br />\
    <img src="styles/legend/__1_5.png" /> 2057 - 3534<br />' });
var format__railways_2 = new ol.format.GeoJSON();
var features__railways_2 = format__railways_2.readFeatures(json__railways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__railways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__railways_2.addFeatures(features__railways_2);
var lyr__railways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__railways_2, 
                style: style__railways_2,
                popuplayertitle: '内蒙古自治区_railways',
                interactive: true,
                title: '<img src="styles/legend/_railways_2.png" /> 内蒙古自治区_railways'
            });
var lyr_2020_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '内蒙古2020夜间灯光分布<br />\
    <img src="styles/legend/2020_3_0.png" /> -3<br />\
    <img src="styles/legend/2020_3_1.png" /> 50<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [97.178802, 37.408188, 126.062123, 53.333182]
        })
    });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '工业建筑分布图',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 工业建筑分布图'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: '贸易区分布图',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 贸易区分布图'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr___1.setVisible(true);lyr__railways_2.setVisible(true);lyr_2020_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr___1,lyr__railways_2,lyr_2020_3,lyr__4,lyr__5];
lyr___1.set('fieldAliases', {'省代码': '省代码', '省': '省', '市代码': '市代码', '市': '市', '类型': '类型', 'Sheet1_序号': 'Sheet1_序号', 'Sheet1_2020年GDP（亿元）': 'Sheet1_2020年GDP（亿元）', });
lyr__railways_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr__4.set('fieldAliases', {'BUILDING_TYPE': 'BUILDING_TYPE', 'FLOOR_AREA': 'FLOOR_AREA', });
lyr__5.set('fieldAliases', {'ZONENAME': 'ZONENAME', 'ESTABLISH_YEAR': 'ESTABLISH_YEAR', });
lyr___1.set('fieldImages', {'省代码': 'TextEdit', '省': 'TextEdit', '市代码': 'TextEdit', '市': 'TextEdit', '类型': 'TextEdit', 'Sheet1_序号': 'Range', 'Sheet1_2020年GDP（亿元）': 'TextEdit', });
lyr__railways_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr__4.set('fieldImages', {'BUILDING_TYPE': 'TextEdit', 'FLOOR_AREA': 'Range', });
lyr__5.set('fieldImages', {'ZONENAME': 'TextEdit', 'ESTABLISH_YEAR': 'Range', });
lyr___1.set('fieldLabels', {'省代码': 'no label', '省': 'no label', '市代码': 'no label', '市': 'inline label - always visible', '类型': 'no label', 'Sheet1_序号': 'no label', 'Sheet1_2020年GDP（亿元）': 'inline label - visible with data', });
lyr__railways_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr__4.set('fieldLabels', {'BUILDING_TYPE': 'no label', 'FLOOR_AREA': 'inline label - visible with data', });
lyr__5.set('fieldLabels', {'ZONENAME': 'no label', 'ESTABLISH_YEAR': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});