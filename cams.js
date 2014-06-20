
var map, tmp, camview;
var arr =  new Array();
var PolylineCount = 0;
var encodedPolyline_Array = [];
var tooltip;
function load_map() {
  map = new GMap2(document.getElementById("map_canvas"));
  map.setMapType(G_PHYSICAL_MAP);
  map.removeMapType(G_HYBRID_MAP);
  map.removeMapType(G_SATELLITE_MAP);
  //map.addOverlay(new GTrafficOverlay());
  map.addControl(new GLargeMapControl3D());
  map.addControl(new google.maps.MapTypeControl());
  map.enableContinuousZoom();
  map.enableScrollWheelZoom();
  map.setCenter(new GLatLng(40.720892, -73.995414), 11);
  tooltip = document.createElement("div");
    document.getElementById("map_canvas").appendChild(tooltip);
    tooltip.style.visibility="hidden";
  var baseIcon = new GIcon();
  baseIcon.image = "images/camera1.png";
  baseIcon.iconSize = new GSize(17, 17);
  baseIcon.shadowSize = new GSize(37, 34);
  baseIcon.iconAnchor = new GPoint(9, 34);
  baseIcon.infoWindowAnchor = new GPoint(9, 2);
  baseIcon.infoShadowAnchor = new GPoint(18, 25);
  var baseIcon2 = new GIcon();
  baseIcon2.image = "images/camera2.png";
  baseIcon2.iconSize = new GSize(17, 17);
  baseIcon2.shadowSize = new GSize(37, 34);
  baseIcon2.iconAnchor = new GPoint(9, 34);
  baseIcon2.infoWindowAnchor = new GPoint(9, 2);
  baseIcon2.infoShadowAnchor = new GPoint(18, 25);

  c_marker0 = new GMarker(new GLatLng("40.730413", "-73.98227"),baseIcon);
  c_marker0.tooltip = "<div class=tooltip>1 Ave @ 14 St</div>";
  map.addOverlay(c_marker0);
  c_html0 = "1 Ave @ 14 St<br /><a href='#' onclick='javascript:open_window(369)'><img src='http://207.251.86.238/cctv262.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker0, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker0, "mouseover", function() {
    //c_marker0.openInfoWindowHtml(c_html0);
    showTooltip(c_marker0);
  });
   GEvent.addListener(c_marker0,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker0, "click", function() {
    open_window(369);
    //window.open("google_popup.php?cid=369","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker1 = new GMarker(new GLatLng("40.74803725830298", "-73.9694881439209"),baseIcon);
  c_marker1.tooltip = "<div class=tooltip>1 Ave @ 42 St</div>";
  map.addOverlay(c_marker1);
  c_html1 = "1 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(550)'><img src='http://207.251.86.238/cctv490.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker1, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker1, "mouseover", function() {
    //c_marker1.openInfoWindowHtml(c_html1);
    showTooltip(c_marker1);
  });
   GEvent.addListener(c_marker1,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker1, "click", function() {
    open_window(550);
    //window.open("google_popup.php?cid=550","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker2 = new GMarker(new GLatLng("40.77144186567577", "-73.95249366760254"),baseIcon);
  c_marker2.tooltip = "<div class=tooltip>1 Ave @ 79 St</div>";
  map.addOverlay(c_marker2);
  c_html2 = "1 Ave @ 79 St<br /><a href='#' onclick='javascript:open_window(362)'><img src='http://207.251.86.238/cctv252.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker2, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker2, "mouseover", function() {
    //c_marker2.openInfoWindowHtml(c_html2);
    showTooltip(c_marker2);
  });
   GEvent.addListener(c_marker2,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker2, "click", function() {
    open_window(362);
    //window.open("google_popup.php?cid=362","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker3 = new GMarker(new GLatLng("40.7760243030083", "-73.9493179321289"),baseIcon);
  c_marker3.tooltip = "<div class=tooltip>1 Ave @ 86 St</div>";
  map.addOverlay(c_marker3);
  c_html3 = "1 Ave @ 86 St<br /><a href='#' onclick='javascript:open_window(370)'><img src='http://207.251.86.238/cctv263.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker3, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker3, "mouseover", function() {
    //c_marker3.openInfoWindowHtml(c_html3);
    showTooltip(c_marker3);
  });
   GEvent.addListener(c_marker3,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker3, "click", function() {
    open_window(370);
    //window.open("google_popup.php?cid=370","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker4 = new GMarker(new GLatLng("40.75492947089871", "-74.00180339813232"),baseIcon2);
  c_marker4.tooltip = "<div class=tooltip>11 Ave @ 34 ST</div>";
  map.addOverlay(c_marker4);
  c_html4 = "11 Ave @ 34 ST<br /><a href='#' onclick='javascript:open_window(326)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker4, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker4, "mouseover", function() {
    //c_marker4.openInfoWindowHtml(c_html4);
    showTooltip(c_marker4);
  });
   GEvent.addListener(c_marker4,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker4, "click", function() {
    open_window(326);
    //window.open("google_popup.php?cid=326","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker5 = new GMarker(new GLatLng("40.75990312387116", "-73.99815559387207"),baseIcon2);
  c_marker5.tooltip = "<div class=tooltip>11 Ave @ 42 St</div>";
  map.addOverlay(c_marker5);
  c_html5 = "11 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(192)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker5, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker5, "mouseover", function() {
    //c_marker5.openInfoWindowHtml(c_html5);
    showTooltip(c_marker5);
  });
   GEvent.addListener(c_marker5,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker5, "click", function() {
    open_window(192);
    //window.open("google_popup.php?cid=192","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker6 = new GMarker(new GLatLng("40.74182715312056", "-74.00879859924316"),baseIcon);
  c_marker6.tooltip = "<div class=tooltip>12 Ave @ 14 St</div>";
  map.addOverlay(c_marker6);
  c_html6 = "12 Ave @ 14 St<br /><a href='#' onclick='javascript:open_window(548)'><img src='http://207.251.86.238/cctv489.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker6, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker6, "mouseover", function() {
    //c_marker6.openInfoWindowHtml(c_html6);
    showTooltip(c_marker6);
  });
   GEvent.addListener(c_marker6,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker6, "click", function() {
    open_window(548);
    //window.open("google_popup.php?cid=548","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker7 = new GMarker(new GLatLng("40.74771213629116", "-74.00789737701416"),baseIcon);
  c_marker7.tooltip = "<div class=tooltip>12 Ave @ 22 St</div>";
  map.addOverlay(c_marker7);
  c_html7 = "12 Ave @ 22 St<br /><a href='#' onclick='javascript:open_window(547)'><img src='http://207.251.86.238/cctv488.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker7, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker7, "mouseover", function() {
    //c_marker7.openInfoWindowHtml(c_html7);
    showTooltip(c_marker7);
  });
   GEvent.addListener(c_marker7,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker7, "click", function() {
    open_window(547);
    //window.open("google_popup.php?cid=547","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker8 = new GMarker(new GLatLng("40.75629482445485", "-74.00450706481934"),baseIcon);
  c_marker8.tooltip = "<div class=tooltip>12 Ave @ 34 St</div>";
  map.addOverlay(c_marker8);
  c_html8 = "12 Ave @ 34 St<br /><a href='#' onclick='javascript:open_window(545)'><img src='http://207.251.86.238/cctv486.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker8, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker8, "mouseover", function() {
    //c_marker8.openInfoWindowHtml(c_html8);
    showTooltip(c_marker8);
  });
   GEvent.addListener(c_marker8,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker8, "click", function() {
    open_window(545);
    //window.open("google_popup.php?cid=545","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker9 = new GMarker(new GLatLng("40.761268375278135", "-74.00090217590332"),baseIcon);
  c_marker9.tooltip = "<div class=tooltip>12 Ave @ 42 St</div>";
  map.addOverlay(c_marker9);
  c_html9 = "12 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(544)'><img src='http://207.251.86.238/cctv485.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker9, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker9, "mouseover", function() {
    //c_marker9.openInfoWindowHtml(c_html9);
    showTooltip(c_marker9);
  });
   GEvent.addListener(c_marker9,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker9, "click", function() {
    open_window(544);
    //window.open("google_popup.php?cid=544","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker10 = new GMarker(new GLatLng("40.77072684694955", "-73.99420738220215"),baseIcon);
  c_marker10.tooltip = "<div class=tooltip>12 Ave @ 57 St</div>";
  map.addOverlay(c_marker10);
  c_html10 = "12 Ave @ 57 St<br /><a href='#' onclick='javascript:open_window(543)'><img src='http://207.251.86.238/cctv484.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker10, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker10, "mouseover", function() {
    //c_marker10.openInfoWindowHtml(c_html10);
    showTooltip(c_marker10);
  });
   GEvent.addListener(c_marker10,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker10, "click", function() {
    open_window(543);
    //window.open("google_popup.php?cid=543","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker11 = new GMarker(new GLatLng("40.72927511814658", "-74.0103006362915"),baseIcon);
  c_marker11.tooltip = "<div class=tooltip>12 Ave @ Clarkson St</div>";
  map.addOverlay(c_marker11);
  c_html11 = "12 Ave @ Clarkson St<br /><a href='#' onclick='javascript:open_window(546)'><img src='http://207.251.86.238/cctv487.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker11, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker11, "mouseover", function() {
    //c_marker11.openInfoWindowHtml(c_html11);
    showTooltip(c_marker11);
  });
   GEvent.addListener(c_marker11,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker11, "click", function() {
    open_window(546);
    //window.open("google_popup.php?cid=546","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker12 = new GMarker(new GLatLng("40.79142677512476", "-73.93807411193848"),baseIcon2);
  c_marker12.tooltip = "<div class=tooltip>1 Ave @ 110 St</div>";
  map.addOverlay(c_marker12);
  c_html12 = "1 Ave @ 110 St<br /><a href='#' onclick='javascript:open_window(368)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker12, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker12, "mouseover", function() {
    //c_marker12.openInfoWindowHtml(c_html12);
    showTooltip(c_marker12);
  });
   GEvent.addListener(c_marker12,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker12, "click", function() {
    open_window(368);
    //window.open("google_popup.php?cid=368","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker13 = new GMarker(new GLatLng("40.7359741672444", "-73.97828578948975"),baseIcon2);
  c_marker13.tooltip = "<div class=tooltip>1 Ave @ 23 St</div>";
  map.addOverlay(c_marker13);
  c_html13 = "1 Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(361)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker13, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker13, "mouseover", function() {
    //c_marker13.openInfoWindowHtml(c_html13);
    showTooltip(c_marker13);
  });
   GEvent.addListener(c_marker13,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker13, "click", function() {
    open_window(361);
    //window.open("google_popup.php?cid=361","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker14 = new GMarker(new GLatLng("40.800426144169315", "-73.93155097961426"),baseIcon);
  c_marker14.tooltip = "<div class=tooltip>1 Ave @ 124 St </div>";
  map.addOverlay(c_marker14);
  c_html14 = "1 Ave @ 124 St <br /><a href='#' onclick='javascript:open_window(360)'><img src='http://207.251.86.238/cctv254.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker14, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker14, "mouseover", function() {
    //c_marker14.openInfoWindowHtml(c_html14);
    showTooltip(c_marker14);
  });
   GEvent.addListener(c_marker14,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker14, "click", function() {
    open_window(360);
    //window.open("google_popup.php?cid=360","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker15 = new GMarker(new GLatLng("40.78236119552992", "-73.94472599029541"),baseIcon);
  c_marker15.tooltip = "<div class=tooltip>1 Ave @ 96 St</div>";
  map.addOverlay(c_marker15);
  c_html15 = "1 Ave @ 96 St<br /><a href='#' onclick='javascript:open_window(371)'><img src='http://207.251.86.238/cctv260.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker15, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker15, "mouseover", function() {
    //c_marker15.openInfoWindowHtml(c_html15);
    showTooltip(c_marker15);
  });
   GEvent.addListener(c_marker15,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker15, "click", function() {
    open_window(371);
    //window.open("google_popup.php?cid=371","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker16 = new GMarker(new GLatLng("40.792531", "-73.9402627"),baseIcon);
  c_marker16.tooltip = "<div class=tooltip>2 Ave @ 110 St</div>";
  map.addOverlay(c_marker16);
  c_html16 = "2 Ave @ 110 St<br /><a href='#' onclick='javascript:open_window(363)'><img src='http://207.251.86.238/cctv251.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker16, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker16, "mouseover", function() {
    //c_marker16.openInfoWindowHtml(c_html16);
    showTooltip(c_marker16);
  });
   GEvent.addListener(c_marker16,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker16, "click", function() {
    open_window(363);
    //window.open("google_popup.php?cid=363","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker17 = new GMarker(new GLatLng("40.80195299186528", "-73.9333963394165"),baseIcon);
  c_marker17.tooltip = "<div class=tooltip>2 Ave @ 125 St</div>";
  map.addOverlay(c_marker17);
  c_html17 = "2 Ave @ 125 St<br /><a href='#' onclick='javascript:open_window(247)'><img src='http://207.251.86.238/cctv102.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker17, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker17, "mouseover", function() {
    //c_marker17.openInfoWindowHtml(c_html17);
    showTooltip(c_marker17);
  });
   GEvent.addListener(c_marker17,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker17, "click", function() {
    open_window(247);
    //window.open("google_popup.php?cid=247","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker18 = new GMarker(new GLatLng("40.73138896860918", "-73.98480892181396"),baseIcon);
  c_marker18.tooltip = "<div class=tooltip>2 Ave @ 14 St</div>";
  map.addOverlay(c_marker18);
  c_html18 = "2 Ave @ 14 St<br /><a href='#' onclick='javascript:open_window(364)'><img src='http://207.251.86.238/cctv256.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker18, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker18, "mouseover", function() {
    //c_marker18.openInfoWindowHtml(c_html18);
    showTooltip(c_marker18);
  });
   GEvent.addListener(c_marker18,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker18, "click", function() {
    open_window(364);
    //window.open("google_popup.php?cid=364","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker19 = new GMarker(new GLatLng("40.73704725320736", "-73.98073196411133"),baseIcon);
  c_marker19.tooltip = "<div class=tooltip>2 Ave @ 23 St</div>";
  map.addOverlay(c_marker19);
  c_html19 = "2 Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(365)'><img src='http://207.251.86.238/cctv257.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker19, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker19, "mouseover", function() {
    //c_marker19.openInfoWindowHtml(c_html19);
    showTooltip(c_marker19);
  });
   GEvent.addListener(c_marker19,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker19, "click", function() {
    open_window(365);
    //window.open("google_popup.php?cid=365","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker20 = new GMarker(new GLatLng("40.745338697450066", "-73.97489547729492"),baseIcon);
  c_marker20.tooltip = "<div class=tooltip>2 Ave @ 36 St-Midtown Tunnel</div>";
  map.addOverlay(c_marker20);
  c_html20 = "2 Ave @ 36 St-Midtown Tunnel<br /><a href='#' onclick='javascript:open_window(165)'><img src='http://207.251.86.238/cctv4.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker20, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker20, "mouseover", function() {
    //c_marker20.openInfoWindowHtml(c_html20);
    showTooltip(c_marker20);
  });
   GEvent.addListener(c_marker20,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker20, "click", function() {
    open_window(165);
    //window.open("google_popup.php?cid=165","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker21 = new GMarker(new GLatLng("40.74904512643806", "-73.97197723388672"),baseIcon);
  c_marker21.tooltip = "<div class=tooltip>2 Ave @ 42 St</div>";
  map.addOverlay(c_marker21);
  c_html21 = "2 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(551)'><img src='http://207.251.86.238/cctv491.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker21, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker21, "mouseover", function() {
    //c_marker21.openInfoWindowHtml(c_html21);
    showTooltip(c_marker21);
  });
   GEvent.addListener(c_marker21,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker21, "click", function() {
    open_window(551);
    //window.open("google_popup.php?cid=551","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker22 = new GMarker(new GLatLng("40.7534015420061", "-73.96884441375732"),baseIcon);
  c_marker22.tooltip = "<div class=tooltip>2 Ave @ 49 St</div>";
  map.addOverlay(c_marker22);
  c_html22 = "2 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(366)'><img src='http://207.251.86.238/cctv258.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker22, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker22, "mouseover", function() {
    //c_marker22.openInfoWindowHtml(c_html22);
    showTooltip(c_marker22);
  });
   GEvent.addListener(c_marker22,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker22, "click", function() {
    open_window(366);
    //window.open("google_popup.php?cid=366","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker23 = new GMarker(new GLatLng("40.75925299429778", "-73.96468162536621"),baseIcon);
  c_marker23.tooltip = "<div class=tooltip>2 Ave @ 58 St</div>";
  map.addOverlay(c_marker23);
  c_html23 = "2 Ave @ 58 St<br /><a href='#' onclick='javascript:open_window(472)'><img src='http://207.251.86.238/cctv400.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker23, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker23, "mouseover", function() {
    //c_marker23.openInfoWindowHtml(c_html23);
    showTooltip(c_marker23);
  });
   GEvent.addListener(c_marker23,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker23, "click", function() {
    open_window(472);
    //window.open("google_popup.php?cid=472","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker24 = new GMarker(new GLatLng("40.75990312387116", "-73.96412372589111"),baseIcon);
  c_marker24.tooltip = "<div class=tooltip>2 Ave @ 59 St (QBB)</div>";
  map.addOverlay(c_marker24);
  c_html24 = "2 Ave @ 59 St (QBB)<br /><a href='#' onclick='javascript:open_window(164)'><img src='http://207.251.86.238/cctv3.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker24, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker24, "mouseover", function() {
    //c_marker24.openInfoWindowHtml(c_html24);
    showTooltip(c_marker24);
  });
   GEvent.addListener(c_marker24,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker24, "click", function() {
    open_window(164);
    //window.open("google_popup.php?cid=164","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker25 = new GMarker(new GLatLng("40.77959903465128", "-73.94974708557129"),baseIcon);
  c_marker25.tooltip = "<div class=tooltip>2 Ave @ 90 St</div>";
  map.addOverlay(c_marker25);
  c_html25 = "2 Ave @ 90 St<br /><a href='#' onclick='javascript:open_window(367)'><img src='http://207.251.86.238/cctv259.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker25, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker25, "mouseover", function() {
    //c_marker25.openInfoWindowHtml(c_html25);
    showTooltip(c_marker25);
  });
   GEvent.addListener(c_marker25,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker25, "click", function() {
    open_window(367);
    //window.open("google_popup.php?cid=367","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker26 = new GMarker(new GLatLng("40.72306326129451", "-73.99081707000732"),baseIcon);
  c_marker26.tooltip = "<div class=tooltip>2 Ave @ Houston Street</div>";
  map.addOverlay(c_marker26);
  c_html26 = "2 Ave @ Houston Street<br /><a href='#' onclick='javascript:open_window(390)'><img src='http://207.251.86.238/cctv255.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker26, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker26, "mouseover", function() {
    //c_marker26.openInfoWindowHtml(c_html26);
    showTooltip(c_marker26);
  });
   GEvent.addListener(c_marker26,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker26, "click", function() {
    open_window(390);
    //window.open("google_popup.php?cid=390","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker27 = new GMarker(new GLatLng("40.86283581665962", "-73.91700267791748"),baseIcon);
  c_marker27.tooltip = "<div class=tooltip>207 ST @ 9 Ave</div>";
  map.addOverlay(c_marker27);
  c_html27 = "207 ST @ 9 Ave<br /><a href='#' onclick='javascript:open_window(328)'><img src='http://207.251.86.238/cctv203.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker27, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker27, "mouseover", function() {
    //c_marker27.openInfoWindowHtml(c_html27);
    showTooltip(c_marker27);
  });
   GEvent.addListener(c_marker27,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker27, "click", function() {
    open_window(328);
    //window.open("google_popup.php?cid=328","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker28 = new GMarker(new GLatLng("40.737990253855365", "-73.98296356201172"),baseIcon2);
  c_marker28.tooltip = "<div class=tooltip>3 Ave @ 23 St</div>";
  map.addOverlay(c_marker28);
  c_html28 = "3 Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(495)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker28, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker28, "mouseover", function() {
    //c_marker28.openInfoWindowHtml(c_html28);
    showTooltip(c_marker28);
  });
   GEvent.addListener(c_marker28,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker28, "click", function() {
    open_window(495);
    //window.open("google_popup.php?cid=495","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker29 = new GMarker(new GLatLng("40.74481848035928", "-73.97798538208008"),baseIcon);
  c_marker29.tooltip = "<div class=tooltip>3 AVE @ 34 ST</div>";
  map.addOverlay(c_marker29);
  c_html29 = "3 AVE @ 34 ST<br /><a href='#' onclick='javascript:open_window(403)'><img src='http://207.251.86.238/cctv431.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker29, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker29, "mouseover", function() {
    //c_marker29.openInfoWindowHtml(c_html29);
    showTooltip(c_marker29);
  });
   GEvent.addListener(c_marker29,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker29, "click", function() {
    open_window(403);
    //window.open("google_popup.php?cid=403","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker30 = new GMarker(new GLatLng("40.74989042341799", "-73.97429466247559"),baseIcon);
  c_marker30.tooltip = "<div class=tooltip>3 Ave @ 42 St</div>";
  map.addOverlay(c_marker30);
  c_html30 = "3 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(398)'><img src='http://207.251.86.238/cctv290.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker30, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker30, "mouseover", function() {
    //c_marker30.openInfoWindowHtml(c_html30);
    showTooltip(c_marker30);
  });
   GEvent.addListener(c_marker30,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker30, "click", function() {
    open_window(398);
    //window.open("google_popup.php?cid=398","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker31 = new GMarker(new GLatLng("40.75440932883489", "-73.97116184234619"),baseIcon);
  c_marker31.tooltip = "<div class=tooltip>3 Ave @ 49 St</div>";
  map.addOverlay(c_marker31);
  c_html31 = "3 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(410)'><img src='http://207.251.86.238/cctv429.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker31, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker31, "mouseover", function() {
    //c_marker31.openInfoWindowHtml(c_html31);
    showTooltip(c_marker31);
  });
   GEvent.addListener(c_marker31,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker31, "click", function() {
    open_window(410);
    //window.open("google_popup.php?cid=410","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker32 = new GMarker(new GLatLng("40.75944803383743", "-73.96734237670898"),baseIcon);
  c_marker32.tooltip = "<div class=tooltip>3 Ave @ 57 St</div>";
  map.addOverlay(c_marker32);
  c_html32 = "3 Ave @ 57 St<br /><a href='#' onclick='javascript:open_window(399)'><img src='http://207.251.86.238/cctv428.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker32, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker32, "mouseover", function() {
    //c_marker32.openInfoWindowHtml(c_html32);
    showTooltip(c_marker32);
  });
   GEvent.addListener(c_marker32,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker32, "click", function() {
    open_window(399);
    //window.open("google_popup.php?cid=399","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker33 = new GMarker(new GLatLng("40.76071577689616", "-73.96639823913574"),baseIcon);
  c_marker33.tooltip = "<div class=tooltip>3 Ave @ 59 St</div>";
  map.addOverlay(c_marker33);
  c_html33 = "3 Ave @ 59 St<br /><a href='#' onclick='javascript:open_window(400)'><img src='http://207.251.86.238/cctv432.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker33, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker33, "mouseover", function() {
    //c_marker33.openInfoWindowHtml(c_html33);
    showTooltip(c_marker33);
  });
   GEvent.addListener(c_marker33,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker33, "click", function() {
    open_window(400);
    //window.open("google_popup.php?cid=400","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker34 = new GMarker(new GLatLng("40.74068911286629", "-73.9894437789917"),baseIcon);
  c_marker34.tooltip = "<div class=tooltip>5 Ave @ 23 St</div>";
  map.addOverlay(c_marker34);
  c_html34 = "5 Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(168)'><img src='http://207.251.86.238/cctv7.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker34, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker34, "mouseover", function() {
    //c_marker34.openInfoWindowHtml(c_html34);
    showTooltip(c_marker34);
  });
   GEvent.addListener(c_marker34,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker34, "click", function() {
    open_window(168);
    //window.open("google_popup.php?cid=168","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker35 = new GMarker(new GLatLng("40.747549574689174", "-73.98446559906006"),baseIcon);
  c_marker35.tooltip = "<div class=tooltip>5 Ave @ 34 St</div>";
  map.addOverlay(c_marker35);
  c_html35 = "5 Ave @ 34 St<br /><a href='#' onclick='javascript:open_window(415)'><img src='http://207.251.86.238/cctv305.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker35, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker35, "mouseover", function() {
    //c_marker35.openInfoWindowHtml(c_html35);
    showTooltip(c_marker35);
  });
   GEvent.addListener(c_marker35,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker35, "click", function() {
    open_window(415);
    //window.open("google_popup.php?cid=415","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker36 = new GMarker(new GLatLng("40.752621309453865", "-73.98068904876709"),baseIcon);
  c_marker36.tooltip = "<div class=tooltip>5 Ave @ 42 St</div>";
  map.addOverlay(c_marker36);
  c_html36 = "5 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(523)'><img src='http://207.251.86.238/cctv466.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker36, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker36, "mouseover", function() {
    //c_marker36.openInfoWindowHtml(c_html36);
    showTooltip(c_marker36);
  });
   GEvent.addListener(c_marker36,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker36, "click", function() {
    open_window(523);
    //window.open("google_popup.php?cid=523","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker37 = new GMarker(new GLatLng("40.75710752159198", "-73.9775562286377"),baseIcon);
  c_marker37.tooltip = "<div class=tooltip>5 Ave @ 49 St</div>";
  map.addOverlay(c_marker37);
  c_html37 = "5 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(169)'><img src='http://207.251.86.238/cctv8.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker37, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker37, "mouseover", function() {
    //c_marker37.openInfoWindowHtml(c_html37);
    showTooltip(c_marker37);
  });
   GEvent.addListener(c_marker37,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker37, "click", function() {
    open_window(169);
    //window.open("google_popup.php?cid=169","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker38 = new GMarker(new GLatLng("40.76217852730423", "-73.97377967834473"),baseIcon);
  c_marker38.tooltip = "<div class=tooltip>5 Ave @ 57 St</div>";
  map.addOverlay(c_marker38);
  c_html38 = "5 Ave @ 57 St<br /><a href='#' onclick='javascript:open_window(409)'><img src='http://207.251.86.238/cctv299.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker38, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker38, "mouseover", function() {
    //c_marker38.openInfoWindowHtml(c_html38);
    showTooltip(c_marker38);
  });
   GEvent.addListener(c_marker38,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker38, "click", function() {
    open_window(409);
    //window.open("google_popup.php?cid=409","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker39 = new GMarker(new GLatLng("40.7715393676332", "-73.9669132232666"),baseIcon);
  c_marker39.tooltip = "<div class=tooltip>5 Ave @ 72 St</div>";
  map.addOverlay(c_marker39);
  c_html39 = "5 Ave @ 72 St<br /><a href='#' onclick='javascript:open_window(525)'><img src='http://207.251.86.238/cctv465.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker39, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker39, "mouseover", function() {
    //c_marker39.openInfoWindowHtml(c_html39);
    showTooltip(c_marker39);
  });
   GEvent.addListener(c_marker39,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker39, "click", function() {
    open_window(525);
    //window.open("google_popup.php?cid=525","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker40 = new GMarker(new GLatLng("40.7364944535093", "-73.99656772613525"),baseIcon);
  c_marker40.tooltip = "<div class=tooltip>6 Ave @ 14 St</div>";
  map.addOverlay(c_marker40);
  c_html40 = "6 Ave @ 14 St<br /><a href='#' onclick='javascript:open_window(509)'><img src='http://207.251.86.238/cctv446.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker40, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker40, "mouseover", function() {
    //c_marker40.openInfoWindowHtml(c_html40);
    showTooltip(c_marker40);
  });
   GEvent.addListener(c_marker40,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker40, "click", function() {
    open_window(509);
    //window.open("google_popup.php?cid=509","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker41 = new GMarker(new GLatLng("40.74208727387333", "-73.99266242980957"),baseIcon);
  c_marker41.tooltip = "<div class=tooltip>6 Ave @ 23 St</div>";
  map.addOverlay(c_marker41);
  c_html41 = "6 Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(511)'><img src='http://207.251.86.238/cctv448.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker41, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker41, "mouseover", function() {
    //c_marker41.openInfoWindowHtml(c_html41);
    showTooltip(c_marker41);
  });
   GEvent.addListener(c_marker41,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker41, "click", function() {
    open_window(511);
    //window.open("google_popup.php?cid=511","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker42 = new GMarker(new GLatLng("40.74881754464601", "-73.98746967315674"),baseIcon);
  c_marker42.tooltip = "<div class=tooltip>6 Ave @ 34 St</div>";
  map.addOverlay(c_marker42);
  c_html42 = "6 Ave @ 34 St<br /><a href='#' onclick='javascript:open_window(170)'><img src='http://207.251.86.238/cctv9.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker42, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker42, "mouseover", function() {
    //c_marker42.openInfoWindowHtml(c_html42);
    showTooltip(c_marker42);
  });
   GEvent.addListener(c_marker42,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker42, "click", function() {
    open_window(170);
    //window.open("google_popup.php?cid=170","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker43 = new GMarker(new GLatLng("40.75408423797857", "-73.98390769958496"),baseIcon);
  c_marker43.tooltip = "<div class=tooltip>6 Ave @ 42 St</div>";
  map.addOverlay(c_marker43);
  c_html43 = "6 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(173)'><img src='http://207.251.86.238/cctv12.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker43, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker43, "mouseover", function() {
    //c_marker43.openInfoWindowHtml(c_html43);
    showTooltip(c_marker43);
  });
   GEvent.addListener(c_marker43,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker43, "click", function() {
    open_window(173);
    //window.open("google_popup.php?cid=173","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker44 = new GMarker(new GLatLng("40.7584078163464", "-73.98073196411133"),baseIcon);
  c_marker44.tooltip = "<div class=tooltip>6 Ave @ 49 St</div>";
  map.addOverlay(c_marker44);
  c_html44 = "6 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(171)'><img src='http://207.251.86.238/cctv10.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker44, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker44, "mouseover", function() {
    //c_marker44.openInfoWindowHtml(c_html44);
    showTooltip(c_marker44);
  });
   GEvent.addListener(c_marker44,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker44, "click", function() {
    open_window(171);
    //window.open("google_popup.php?cid=171","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker45 = new GMarker(new GLatLng("40.763446218285964", "-73.97695541381836"),baseIcon);
  c_marker45.tooltip = "<div class=tooltip>6 Ave @ 57 St</div>";
  map.addOverlay(c_marker45);
  c_html45 = "6 Ave @ 57 St<br /><a href='#' onclick='javascript:open_window(414)'><img src='http://207.251.86.238/cctv304.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker45, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker45, "mouseover", function() {
    //c_marker45.openInfoWindowHtml(c_html45);
    showTooltip(c_marker45);
  });
   GEvent.addListener(c_marker45,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker45, "click", function() {
    open_window(414);
    //window.open("google_popup.php?cid=414","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker46 = new GMarker(new GLatLng("40.764291332174466", "-73.97652626037598"),baseIcon2);
  c_marker46.tooltip = "<div class=tooltip>6 Ave @ 58 St</div>";
  map.addOverlay(c_marker46);
  c_html46 = "6 Ave @ 58 St<br /><a href='#' onclick='javascript:open_window(473)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker46, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker46, "mouseover", function() {
    //c_marker46.openInfoWindowHtml(c_html46);
    showTooltip(c_marker46);
  });
   GEvent.addListener(c_marker46,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker46, "click", function() {
    open_window(473);
    //window.open("google_popup.php?cid=473","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker47 = new GMarker(new GLatLng("40.80806003141889", "-73.94815921783447"),baseIcon2);
  c_marker47.tooltip = "<div class=tooltip>7 Ave @ 125 St</div>";
  map.addOverlay(c_marker47);
  c_html47 = "7 Ave @ 125 St<br /><a href='#' onclick='javascript:open_window(225)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker47, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker47, "mouseover", function() {
    //c_marker47.openInfoWindowHtml(c_html47);
    showTooltip(c_marker47);
  });
   GEvent.addListener(c_marker47,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker47, "click", function() {
    open_window(225);
    //window.open("google_popup.php?cid=225","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker48 = new GMarker(new GLatLng("-73.94815921783447", "40.80806003141889"),baseIcon);
  c_marker48.tooltip = "<div class=tooltip>7 Ave @ 125 St</div>";
  map.addOverlay(c_marker48);
  c_html48 = "7 Ave @ 125 St<br /><a href='#' onclick='javascript:open_window(530)'><img src='http://' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker48, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker48, "mouseover", function() {
    //c_marker48.openInfoWindowHtml(c_html48);
    showTooltip(c_marker48);
  });
   GEvent.addListener(c_marker48,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker48, "click", function() {
    open_window(530);
    //window.open("google_popup.php?cid=530","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker49 = new GMarker(new GLatLng("40.820727097919615", "-73.93880367279053"),baseIcon2);
  c_marker49.tooltip = "<div class=tooltip>7 Ave @ 145 St</div>";
  map.addOverlay(c_marker49);
  c_html49 = "7 Ave @ 145 St<br /><a href='#' onclick='javascript:open_window(227)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker49, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker49, "mouseover", function() {
    //c_marker49.openInfoWindowHtml(c_html49);
    showTooltip(c_marker49);
  });
   GEvent.addListener(c_marker49,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker49, "click", function() {
    open_window(227);
    //window.open("google_popup.php?cid=227","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker50 = new GMarker(new GLatLng("-73.93880367279053", "40.820727097919615"),baseIcon);
  c_marker50.tooltip = "<div class=tooltip>7 Ave @ 145 St</div>";
  map.addOverlay(c_marker50);
  c_html50 = "7 Ave @ 145 St<br /><a href='#' onclick='javascript:open_window(529)'><img src='http://' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker50, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker50, "mouseover", function() {
    //c_marker50.openInfoWindowHtml(c_html50);
    showTooltip(c_marker50);
  });
   GEvent.addListener(c_marker50,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker50, "click", function() {
    open_window(529);
    //window.open("google_popup.php?cid=529","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker51 = new GMarker(new GLatLng("40.74332283355683", "-73.99545192718506"),baseIcon);
  c_marker51.tooltip = "<div class=tooltip>7 Ave @ 23St</div>";
  map.addOverlay(c_marker51);
  c_html51 = "7 Ave @ 23St<br /><a href='#' onclick='javascript:open_window(510)'><img src='http://207.251.86.238/cctv447.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker51, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker51, "mouseover", function() {
    //c_marker51.openInfoWindowHtml(c_html51);
    showTooltip(c_marker51);
  });
   GEvent.addListener(c_marker51,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker51, "click", function() {
    open_window(510);
    //window.open("google_popup.php?cid=510","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker52 = new GMarker(new GLatLng("40.75015051263462", "-73.9905595779419"),baseIcon);
  c_marker52.tooltip = "<div class=tooltip>7 Ave @ 34 St</div>";
  map.addOverlay(c_marker52);
  c_html52 = "7 Ave @ 34 St<br /><a href='#' onclick='javascript:open_window(501)'><img src='http://207.251.86.238/cctv440.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker52, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker52, "mouseover", function() {
    //c_marker52.openInfoWindowHtml(c_html52);
    showTooltip(c_marker52);
  });
   GEvent.addListener(c_marker52,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker52, "click", function() {
    open_window(501);
    //window.open("google_popup.php?cid=501","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker53 = new GMarker(new GLatLng("40.75593723456708", "-73.98626804351807"),baseIcon);
  c_marker53.tooltip = "<div class=tooltip>7 Ave @ 43 St</div>";
  map.addOverlay(c_marker53);
  c_html53 = "7 Ave @ 43 St<br /><a href='#' onclick='javascript:open_window(489)'><img src='http://207.251.86.238/cctv422.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker53, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker53, "mouseover", function() {
    //c_marker53.openInfoWindowHtml(c_html53);
    showTooltip(c_marker53);
  });
   GEvent.addListener(c_marker53,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker53, "click", function() {
    open_window(489);
    //window.open("google_popup.php?cid=489","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker54 = new GMarker(new GLatLng("40.75964307280483", "-73.98356437683105"),baseIcon);
  c_marker54.tooltip = "<div class=tooltip>7 Ave @ 49 St</div>";
  map.addOverlay(c_marker54);
  c_html54 = "7 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(416)'><img src='http://207.251.86.238/cctv439.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker54, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker54, "mouseover", function() {
    //c_marker54.openInfoWindowHtml(c_html54);
    showTooltip(c_marker54);
  });
   GEvent.addListener(c_marker54,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker54, "click", function() {
    open_window(416);
    //window.open("google_popup.php?cid=416","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker55 = new GMarker(new GLatLng("40.764746389047964", "-73.97995948791504"),baseIcon);
  c_marker55.tooltip = "<div class=tooltip>7 Ave @ 57 St</div>";
  map.addOverlay(c_marker55);
  c_html55 = "7 Ave @ 57 St<br /><a href='#' onclick='javascript:open_window(504)'><img src='http://207.251.86.238/cctv444.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker55, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker55, "mouseover", function() {
    //c_marker55.openInfoWindowHtml(c_html55);
    showTooltip(c_marker55);
  });
   GEvent.addListener(c_marker55,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker55, "click", function() {
    open_window(504);
    //window.open("google_popup.php?cid=504","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker56 = new GMarker(new GLatLng("40.73896575770038", "-74.00231838226318"),baseIcon);
  c_marker56.tooltip = "<div class=tooltip>8 Ave @ 14 St</div>";
  map.addOverlay(c_marker56);
  c_html56 = "8 Ave @ 14 St<br /><a href='#' onclick='javascript:open_window(503)'><img src='http://207.251.86.238/cctv443.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker56, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker56, "mouseover", function() {
    //c_marker56.openInfoWindowHtml(c_html56);
    showTooltip(c_marker56);
  });
   GEvent.addListener(c_marker56,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker56, "click", function() {
    open_window(503);
    //window.open("google_popup.php?cid=503","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker57 = new GMarker(new GLatLng("40.75135341202851", "-73.99339199066162"),baseIcon);
  c_marker57.tooltip = "<div class=tooltip>8 Ave @ 34 St</div>";
  map.addOverlay(c_marker57);
  c_html57 = "8 Ave @ 34 St<br /><a href='#' onclick='javascript:open_window(180)'><img src='http://207.251.86.238/cctv19.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker57, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker57, "mouseover", function() {
    //c_marker57.openInfoWindowHtml(c_html57);
    showTooltip(c_marker57);
  });
   GEvent.addListener(c_marker57,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker57, "click", function() {
    open_window(180);
    //window.open("google_popup.php?cid=180","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker58 = new GMarker(new GLatLng("40.75629482445485", "-73.98957252502441"),baseIcon);
  c_marker58.tooltip = "<div class=tooltip>8 Ave @ 42 St</div>";
  map.addOverlay(c_marker58);
  c_html58 = "8 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(181)'><img src='http://207.251.86.238/cctv20.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker58, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker58, "mouseover", function() {
    //c_marker58.openInfoWindowHtml(c_html58);
    showTooltip(c_marker58);
  });
   GEvent.addListener(c_marker58,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker58, "click", function() {
    open_window(181);
    //window.open("google_popup.php?cid=181","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker59 = new GMarker(new GLatLng("40.760813294591514", "-73.98639678955078"),baseIcon);
  c_marker59.tooltip = "<div class=tooltip>8 Ave @ 49 St</div>";
  map.addOverlay(c_marker59);
  c_html59 = "8 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(420)'><img src='http://207.251.86.238/cctv437.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker59, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker59, "mouseover", function() {
    //c_marker59.openInfoWindowHtml(c_html59);
    showTooltip(c_marker59);
  });
   GEvent.addListener(c_marker59,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker59, "click", function() {
    open_window(420);
    //window.open("google_popup.php?cid=420","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker60 = new GMarker(new GLatLng("40.76217852730423", "-73.9854097366333"),baseIcon2);
  c_marker60.tooltip = "<div class=tooltip>8 Ave @ 51 St</div>";
  map.addOverlay(c_marker60);
  c_html60 = "8 Ave @ 51 St<br /><a href='#' onclick='javascript:open_window(520)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker60, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker60, "mouseover", function() {
    //c_marker60.openInfoWindowHtml(c_html60);
    showTooltip(c_marker60);
  });
   GEvent.addListener(c_marker60,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker60, "click", function() {
    open_window(520);
    //window.open("google_popup.php?cid=520","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker61 = new GMarker(new GLatLng("40.766969", "-73.982265"),baseIcon);
  c_marker61.tooltip = "<div class=tooltip>8 Ave @ Columbus Cr South</div>";
  map.addOverlay(c_marker61);
  c_html61 = "8 Ave @ Columbus Cr South<br /><a href='#' onclick='javascript:open_window(179)'><img src='http://207.251.86.238/cctv18.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker61, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker61, "mouseover", function() {
    //c_marker61.openInfoWindowHtml(c_html61);
    showTooltip(c_marker61);
  });
   GEvent.addListener(c_marker61,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker61, "click", function() {
    open_window(179);
    //window.open("google_popup.php?cid=179","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker62 = new GMarker(new GLatLng("40.744395800976775", "-73.99811267852783"),baseIcon);
  c_marker62.tooltip = "<div class=tooltip>8th Ave @ 23 St</div>";
  map.addOverlay(c_marker62);
  c_html62 = "8th Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(500)'><img src='http://207.251.86.238/cctv441.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker62, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker62, "mouseover", function() {
    //c_marker62.openInfoWindowHtml(c_html62);
    showTooltip(c_marker62);
  });
   GEvent.addListener(c_marker62,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker62, "click", function() {
    open_window(500);
    //window.open("google_popup.php?cid=500","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker63 = new GMarker(new GLatLng("40.745793884066536", "-74.00120258331299"),baseIcon);
  c_marker63.tooltip = "<div class=tooltip>9 Ave @ 23 St</div>";
  map.addOverlay(c_marker63);
  c_html63 = "9 Ave @ 23 St<br /><a href='#' onclick='javascript:open_window(229)'><img src='http://207.251.86.238/cctv355.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker63, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker63, "mouseover", function() {
    //c_marker63.openInfoWindowHtml(c_html63);
    showTooltip(c_marker63);
  });
   GEvent.addListener(c_marker63,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker63, "click", function() {
    open_window(229);
    //window.open("google_popup.php?cid=229","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker64 = new GMarker(new GLatLng("40.75015051263462", "-73.99789810180664"),baseIcon);
  c_marker64.tooltip = "<div class=tooltip>9 Ave @ 30 St</div>";
  map.addOverlay(c_marker64);
  c_html64 = "9 Ave @ 30 St<br /><a href='#' onclick='javascript:open_window(359)'><img src='http://207.251.86.238/cctv354.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker64, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker64, "mouseover", function() {
    //c_marker64.openInfoWindowHtml(c_html64);
    showTooltip(c_marker64);
  });
   GEvent.addListener(c_marker64,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker64, "click", function() {
    open_window(359);
    //window.open("google_popup.php?cid=359","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker65 = new GMarker(new GLatLng("40.75245875985304", "-73.99613857269287"),baseIcon);
  c_marker65.tooltip = "<div class=tooltip>9 Ave @ 34 St</div>";
  map.addOverlay(c_marker65);
  c_html65 = "9 Ave @ 34 St<br /><a href='#' onclick='javascript:open_window(178)'><img src='http://207.251.86.238/cctv352.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker65, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker65, "mouseover", function() {
    //c_marker65.openInfoWindowHtml(c_html65);
    showTooltip(c_marker65);
  });
   GEvent.addListener(c_marker65,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker65, "click", function() {
    open_window(178);
    //window.open("google_popup.php?cid=178","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker66 = new GMarker(new GLatLng("40.75447434681541", "-73.99463653564453"),baseIcon);
  c_marker66.tooltip = "<div class=tooltip>9 Ave @ 37 St</div>";
  map.addOverlay(c_marker66);
  c_html66 = "9 Ave @ 37 St<br /><a href='#' onclick='javascript:open_window(507)'><img src='http://207.251.86.238/cctv353.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker66, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker66, "mouseover", function() {
    //c_marker66.openInfoWindowHtml(c_html66);
    showTooltip(c_marker66);
  });
   GEvent.addListener(c_marker66,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker66, "click", function() {
    open_window(507);
    //window.open("google_popup.php?cid=507","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker67 = new GMarker(new GLatLng("40.757595135105426", "-73.99244785308838"),baseIcon);
  c_marker67.tooltip = "<div class=tooltip>9 Ave @ 42 St</div>";
  map.addOverlay(c_marker67);
  c_html67 = "9 Ave @ 42 St<br /><a href='#' onclick='javascript:open_window(506)'><img src='http://207.251.86.238/cctv351.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker67, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker67, "mouseover", function() {
    //c_marker67.openInfoWindowHtml(c_html67);
    showTooltip(c_marker67);
  });
   GEvent.addListener(c_marker67,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker67, "click", function() {
    open_window(506);
    //window.open("google_popup.php?cid=506","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker68 = new GMarker(new GLatLng("40.76136589216275", "-73.98965835571289"),baseIcon);
  c_marker68.tooltip = "<div class=tooltip>9 Ave @ 48 St</div>";
  map.addOverlay(c_marker68);
  c_html68 = "9 Ave @ 48 St<br /><a href='#' onclick='javascript:open_window(515)'><img src='http://207.251.86.238/cctv456.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker68, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker68, "mouseover", function() {
    //c_marker68.openInfoWindowHtml(c_html68);
    showTooltip(c_marker68);
  });
   GEvent.addListener(c_marker68,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker68, "click", function() {
    open_window(515);
    //window.open("google_popup.php?cid=515","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker69 = new GMarker(new GLatLng("40.76198349577638", "-73.98922920227051"),baseIcon);
  c_marker69.tooltip = "<div class=tooltip>9 Ave @ 49 St</div>";
  map.addOverlay(c_marker69);
  c_html69 = "9 Ave @ 49 St<br /><a href='#' onclick='javascript:open_window(502)'><img src='http://207.251.86.238/cctv350.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker69, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker69, "mouseover", function() {
    //c_marker69.openInfoWindowHtml(c_html69);
    showTooltip(c_marker69);
  });
   GEvent.addListener(c_marker69,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker69, "click", function() {
    open_window(502);
    //window.open("google_popup.php?cid=502","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker70 = new GMarker(new GLatLng("40.767119135122165", "-73.98549556732178"),baseIcon);
  c_marker70.tooltip = "<div class=tooltip>9 Ave @ 57 St</div>";
  map.addOverlay(c_marker70);
  c_html70 = "9 Ave @ 57 St<br /><a href='#' onclick='javascript:open_window(508)'><img src='http://207.251.86.238/cctv349.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker70, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker70, "mouseover", function() {
    //c_marker70.openInfoWindowHtml(c_html70);
    showTooltip(c_marker70);
  });
   GEvent.addListener(c_marker70,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker70, "click", function() {
    open_window(508);
    //window.open("google_popup.php?cid=508","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker71 = new GMarker(new GLatLng("40.69554199204517", "-73.98837089538574"),baseIcon2);
  c_marker71.tooltip = "<div class=tooltip>Adams @ Tillary</div>";
  map.addOverlay(c_marker71);
  c_html71 = "Adams @ Tillary<br /><a href='#' onclick='javascript:open_window(135)'><img src='img/inactive-camera.gif' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker71, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker71, "mouseover", function() {
    //c_marker71.openInfoWindowHtml(c_html71);
    showTooltip(c_marker71);
  });
   GEvent.addListener(c_marker71,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_marker71, "click", function() {
    open_window(135);
    //window.open("google_popup.php?cid=135","popup_camera","scrollbars=no,resizable=no,top=100,left=100,width=400,height=320");
  });

  c_marker72 = new GMarker(new GLatLng("40.77787668796429", "-73.98141860961914"),baseIcon);
  c_marker72.tooltip = "<div class=tooltip>Amsterdam @ 72 St</div>";
  map.addOverlay(c_marker72);
  c_html72 = "Amsterdam @ 72 St<br /><a href='#' onclick='javascript:open_window(526)'><img src='http://207.251.86.238/cctv468.jpg' width='176' height='120'></a><br><!-- <a href=\"#\" onclick=\"GEvent.trigger(c_marker72, 'click');\"><b>View</b></a> -->";
  GEvent.addListener(c_marker72, "mouseover", function() {
    //c_marker72.openInfoWindowHtml(c_html72);
    showTooltip(c_marker72);
  });
   GEvent.addListener(c_marker72,"mouseout", function() {
    tooltip.style.visibility="hidden"
        });
  GEvent.addListener(c_ma
