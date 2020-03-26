(this["webpackJsonpmap-covid-v2"]=this["webpackJsonpmap-covid-v2"]||[]).push([[0],{103:function(e,t){},109:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(7),i=a.n(n),l=a(24),c=a(60),s=a(145),p=a(148),u=a(158),m=a(160),d=a(61),g=a.n(d),y=a(151),f=a(155),h=a(154),E=a(150),b=a(152),v=a(159),P=a(153),x=[{id:"provincia",label:"Provincia",minWidth:150},{id:"confirmados",label:"Confirmados",minWidth:150,align:"center"},{id:"fallecidos",label:"Fallecidos",minWidth:150,align:"center"}];function w(e,t,a,r,o,n){return{provincia:e,municipalidad:t,barrio_ciudad:a,confirmados:r,fallecidos:o,recuperados:n}}var C=[w("CABA","","",168,3,25),w("Buenos Aires","","",132,2,1),w("Chaco","","",53,3,0),w("C\xf3rdoba","","",49,0,0),w("Tierra del Fuego","","",11,0,0),w("Entre R\xedos","","",6,0,0),w("R\xedo Negro","","",4,0,1),w("Neuqu\xe9n","","",2,0,0),w("Santa Fe","","",42,0,0),w("Mendoza","","",6,0,0),w("San Luis","","",1,0,0),w("Santiago del Estero","","",1,0,0),w("Corrientes","","",1,0,0),w("Tucum\xe1n","","",9,0,0),w("Santa Cruz","","",7,0,0),w("Corrientes","","",3,0,0),w("Salta","","",1,0,0),w("Jujuy","","",1,0,0),w("La Pampa","","",1,0,0)],F=Object(s.a)({root:{width:"100%"},container:{maxHeight:440}});function S(){var e=F(),t=o.a.useState(0),a=Object(l.a)(t,2),r=a[0],n=a[1],i=o.a.useState(10),c=Object(l.a)(i,2),s=c[0],u=c[1];return o.a.createElement(p.a,{className:e.root},o.a.createElement(E.a,{className:e.container},o.a.createElement(y.a,{stickyHeader:!0,"aria-label":"sticky table"},o.a.createElement(b.a,null,o.a.createElement(P.a,null,x.map((function(t){return o.a.createElement(h.a,{key:t.id,align:t.align,style:{minWidth:t.minWidth},className:e.table_head},t.label)})))),o.a.createElement(f.a,null,C.slice(r*s,r*s+s).map((function(e){return o.a.createElement(P.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},x.map((function(t){var a=e[t.id];return o.a.createElement(h.a,{key:t.id,align:t.align},t.format&&"number"===typeof a?t.format(a):a)})))}))))),o.a.createElement(v.a,{rowsPerPageOptions:[10],component:"div",count:C.length,rowsPerPage:s,page:r,onChangePage:function(e,t){n(t)},onChangeRowsPerPage:function(e){u(+e.target.value),n(0)}}))}var N=a(19),k=a.n(N),A=a(63),O={wrapper:{height:"100%",width:"100%",margin:"0 auto",display:"flex"},map:{flex:1}},j={radius:4,fillColor:"#EE4266",color:"#EE4266",weight:5,opacity:1,fillOpacity:.4};function R(e){var t=e.markerPosition,a=function(e,t){return k.a.circleMarker(t,j)},n=function(e,t){var a="";e.properties&&e.properties.lugar&&(a=e.properties.lugar),t.bindPopup(a),t.on({mouseover:function(e){t.openPopup()},mouseout:function(e){t.closePopup()}})},i=Object(r.useRef)(null);Object(r.useEffect)((function(){i.current=k.a.map("map",{center:[-38.4160957,-63.6166725],zoom:4,layers:[k.a.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]})}),[]);var l=Object(r.useRef)(null);return Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=new k.a.LatLng(e.coords.latitude,e.coords.longitude);l.current=k.a.marker(t).addTo(i.current).bindPopup("Mi posici\xf3n").openPopup()&&k.a.geoJSON(A,{style:j,pointToLayer:a,onEachFeature:n}).addTo(i.current)}))}),[t]),o.a.createElement("div",{style:O.wrapper},o.a.createElement("div",{id:"map",style:O.map})," ")}var L=Object(s.a)((function(e){return{root:{width:"100%",height:"100%"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paper_header:{padding:e.spacing(2),color:e.palette.text.secondary},alerta:{marginTop:e.spacing(2),color:"#fff",fontWeight:500},mapa:Object(c.a)({},e.breakpoints.down("xs","sm"),{padding:"50px",height:"50vh"}),cargando:{fontSize:"15px",fontWeight:300}}}));var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement((function(){var e=L(),t=Object(r.useState)({}),a=Object(l.a)(t,2),n=a[0],i=a[1],c=Object(r.useState)({lat:-38.4160957,lng:-63.6166725}),s=Object(l.a)(c,2),d=s[0],y=(s[1],"cargando datos...");return Object(r.useEffect)((function(){g()("https://sunny-studio-271511.appspot.com").on("FromTemperatura",(function(e){i(e)}))}),[]),o.a.createElement("div",{className:e.root},o.a.createElement(u.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},o.a.createElement(p.a,{className:e.paper,style:{backgroundColor:"#222",color:"#fff",padding:"3px",lineHeight:"28px"}},o.a.createElement("h1",null,"CORONAVIRUS ARGENTINA ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{fontSize:"12px"}},"\xdaLTIMA ACTUALIZACI\xd3N: ",n.date)))),o.a.createElement(u.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},o.a.createElement(m.a,{severity:"error",elevation:6,variant:"filled"},"Disculp\xe9 las molestias! Si no carga los datos es por las miles de visitas que estamos recibiendo!"),o.a.createElement(m.a,{severity:"info",elevation:6,variant:"filled",className:e.alerta},n.titulo?n.titulo:"Estamos mejorando para que tengan una mejor experiencia")),o.a.createElement(u.a,{item:!0,xs:12,sm:4,md:4,lg:4,xl:4},o.a.createElement(u.a,{container:!0,spacing:2},o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(p.a,{className:e.paper,style:{fontSize:"1.2em",backgroundColor:"#222",color:"rgb(112, 168, 0)"}},o.a.createElement("h2",null,"CONFIRMADOS ",o.a.createElement("br",null)," ",n.confirmados?n.confirmados:o.a.createElement("span",{className:e.cargando},y)))),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(p.a,{className:e.paper,style:{fontSize:"1.2em",backgroundColor:"#222",color:"rgb(230, 0, 0)",fontWeight:"bold"}},o.a.createElement("h2",null,"FALLECIDOS ",o.a.createElement("br",null)," ",n.fallecidos?n.fallecidos:o.a.createElement("span",{className:e.cargando},y)))),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(p.a,{className:e.paper,style:{backgroundColor:"#222",color:"rgb(112, 168, 0)"}},o.a.createElement("h2",null,"RECUPERADOS ",o.a.createElement("br",null)," ",n.recuperados?n.recuperados:o.a.createElement("span",{className:e.cargando},y)))),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(p.a,{className:e.paper,style:{fontSize:"1.06em",backgroundColor:"#222",color:"rgb(230, 0, 0)",fontWeight:"bold"}},o.a.createElement("h2",null,"TOTAL MUNDO ",o.a.createElement("br",null)," ",n.total_mundo?n.total_mundo:o.a.createElement("span",{className:e.cargando},y)))))),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:8,lg:8,xl:8,className:e.mapa},o.a.createElement(R,{markerPosition:d}," ")),o.a.createElement(u.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(S,null))))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()},63:function(e){e.exports=JSON.parse('{"type":"Feature","properties":{"name":"Un nombre","amenity":"Un Contenido","popupContent":"Un popup contenido"},"geometry":{"type":"Point","coordinates":[-38.4160957,-63.6166725]},"features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.4016157,-34.5922517]},"properties":{"lugar":"CABA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.5155126,-34.5282118]},"properties":{"lugar":"Vicente L\xf3pez - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-64.1810532,-31.4134998]},"properties":{"lugar":"C\xf3rdoba"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-62.9966812,-40.8134499]},"properties":{"lugar":"Viedma - R\xedo Negro"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.54722,-34.57222]},"properties":{"lugar":"San Martin - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-66.3356323,-33.2950096]},"properties":{"lugar":"San Luis"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.9838905,-27.4605598]},"properties":{"lugar":"Resistencia - Chaco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.984808,-27.459946]},"properties":{"lugar":"Resistencia - Chaco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.3772316,-34.6131516]},"properties":{"lugar":"CABA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.757584,-34.7728556]},"properties":{"lugar":"La Matanza - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-57.5575409,-38.0022812]},"properties":{"lugar":"Mar Del Plata - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-60.7000008,-31.6333294]},"properties":{"lugar":"Santa Fe"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-68.3000031,-54.7999992]},"properties":{"lugar":"Tierra del Fuego"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-65.4116592,-24.7859001]},"properties":{"lugar":"Salta"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-65.2971191,-24.1945705]},"properties":{"lugar":"Jujuy"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-72.27682,-50.34075]},"properties":{"lugar":"El Calafate - Santa Cruz"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-60.5237999,-31.7319698]},"properties":{"lugar":"Entre Rios"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-65.5,-27]},"properties":{"lugar":"Tucum\xe1n"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.8340988,-27.4806004]},"properties":{"lugar":"Corrientes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-68.0590973,-38.9516106]},"properties":{"lugar":"Neuqu\xe9n"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-64.2614899,-27.7951107]},"properties":{"lugar":"Santiago del Estero"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-68.8271713,-32.8908386]},"properties":{"lugar":"Mendoza"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-64.2833328,-36.6166687]},"properties":{"lugar":"La Pampa"}}]}')},71:function(e,t,a){e.exports=a(109)}},[[71,1,2]]]);
//# sourceMappingURL=main.f5dcaa9e.chunk.js.map