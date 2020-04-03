(this["webpackJsonpmap-covid-v2"]=this["webpackJsonpmap-covid-v2"]||[]).push([[0],{120:function(e,a){},144:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(7),i=t.n(r),l=t(13),c=t(74),s=t(182),d=t(185),f=t(195),m=t(197),p=t(36),u=t.n(p),h="https://sunny-studio-271511.appspot.com",g=t(188),v=t(192),b=t(191),E=t(187),x=t(189),y=t(196),O=t(190),w=t(75),z=t.n(w),M=[{id:"provincia",label:"Provincia",minWidth:150},{id:"ciudad",label:"Ciudad",minWidth:150},{id:"confirmados",label:"Confirmados",minWidth:150,align:"center"},{id:"fallecidos",label:"Fallecidos",minWidth:150,align:"center"}],k=Object(s.a)({root:{width:"100%"},container:{maxHeight:440}});function A(){var e=k(),a=n.a.useState(0),t=Object(l.a)(a,2),o=t[0],r=t[1],i=n.a.useState(10),c=Object(l.a)(i,2),s=c[0],f=c[1],m=n.a.useState([]),p=Object(l.a)(m,2),u=p[0],h=p[1];n.a.useEffect((function(){z.a.get("https://sunny-studio-271511.appspot.com/api/v1/coronavirus/argentina/provincia").then((function(e){h(e.data.tabla)}))}),[]);var w=u.map((function(e){return e}));return n.a.createElement(d.a,{className:e.root},n.a.createElement(E.a,{className:e.container},n.a.createElement(g.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,null,n.a.createElement(O.a,null,M.map((function(a){return n.a.createElement(b.a,{key:a.id,align:a.align,style:{minWidth:a.minWidth},className:e.table_head},a.label)})))),n.a.createElement(v.a,null,w.slice(o*s,o*s+s).map((function(e){return n.a.createElement(O.a,{hover:!0,role:"checkbox",tabIndex:-1},M.map((function(a){var t=e[a.id];return n.a.createElement(b.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),n.a.createElement(y.a,{rowsPerPageOptions:[10],component:"div",count:w.length,rowsPerPage:s,page:o,onChangePage:function(e,a){r(a)},onChangeRowsPerPage:function(e){f(+e.target.value),r(0)}}))}var N=t(22),j=t.n(N),C={wrapper:{height:"100%",width:"100%",margin:"0 auto",display:"flex"},map:{flex:1}},S={radius:4,fillColor:"#EE4266",color:"#EE4266",weight:5,opacity:1,fillOpacity:.4};function W(e){var a=e.markerPosition,t=Object(o.useState)([]),r=Object(l.a)(t,2),i=r[0],c=r[1];Object(o.useEffect)((function(){u()(h).on("FromMapa",(function(e){c(e)}))}),[]);var s=function(e,a){return j.a.circleMarker(a,S)},d=function(e,a){var t="";e.properties&&e.properties.lugar&&(t=e.properties.lugar),a.bindPopup(t),a.on({mouseover:function(e){a.openPopup()},mouseout:function(e){a.closePopup()}})},f=Object(o.useRef)(null);Object(o.useEffect)((function(){f.current=j.a.map("map",{center:[-38.4160957,-63.6166725],zoom:4,layers:[j.a.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]})}),[]);var m=Object(o.useRef)(null);return Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var a=new j.a.LatLng(e.coords.latitude,e.coords.longitude);m.current=j.a.marker(a).addTo(f.current).bindPopup("Mi posici\xf3n").openPopup()&&j.a.geoJSON(i,{style:S,pointToLayer:s,onEachFeature:d}).addTo(f.current)}))}),[a,i]),n.a.createElement("div",{style:C.wrapper},n.a.createElement("div",{id:"map",style:C.map})," ")}var P=t(77),R=t.n(P),T=t(28);console.log(T);var L={type:"line",data:{labels:T.datos.map((function(e){return e.fecha})),datasets:[{label:"Fallecidos",data:T.datos.map((function(e){return e.fallecidos})),borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1},{label:"Confirmados",data:T.datos.map((function(e){return e.positivos})),borderColor:["rgb(112, 168, 0)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}},I=function(){var e=Object(o.useRef)(null),a=Object(o.useState)(null),t=Object(l.a)(a,2),r=(t[0],t[1]);Object(o.useEffect)((function(){if(e&&e.current){var a=new R.a(e.current,L);r(a)}}),[e]);return n.a.createElement("canvas",{ref:e})},F=Object(s.a)((function(e){return{root:{width:"100%",height:"100%"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paper_header:{padding:e.spacing(2),color:e.palette.text.secondary},alerta:{marginTop:e.spacing(2),color:"#fff",fontWeight:500},mapa:Object(c.a)({},e.breakpoints.down("xs","sm"),{padding:"50px",height:"50vh"}),cargando:{fontSize:"15px",fontWeight:300}}}));function U(){var e=F(),a=Object(o.useState)({}),t=Object(l.a)(a,2),r=t[0],i=t[1],c=Object(o.useState)({lat:-38.4160957,lng:-63.6166725}),s=Object(l.a)(c,2),p=s[0],g=(s[1],"cargando datos...");return Object(o.useEffect)((function(){u()(h).on("FromTemperatura",(function(e){i(e)}))}),[]),n.a.createElement("div",{className:e.root},n.a.createElement(f.a,{container:!0,spacing:2},n.a.createElement(f.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},n.a.createElement(d.a,{className:e.paper,style:{backgroundColor:"#222",color:"#fff",padding:"3px",lineHeight:"28px"}},n.a.createElement("h1",null,"CORONAVIRUS ARGENTINA ",n.a.createElement("br",null)," ",n.a.createElement("span",{style:{fontSize:"12px"}},"\xdaLTIMA ACTUALIZACI\xd3N: ",r.date)))),n.a.createElement(f.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},n.a.createElement(m.a,{severity:"error",elevation:6,variant:"filled"},"Disculp\xe9 las molestias! Si no carga los datos es por las miles de visitas que estamos recibiendo!"),n.a.createElement(m.a,{severity:"info",elevation:6,variant:"filled",className:e.alerta},r.titulo?r.titulo:"Estamos mejorando para que tengan una mejor experiencia")),n.a.createElement(f.a,{item:!0,xs:12,sm:4,md:4,lg:4,xl:4},n.a.createElement(f.a,{container:!0,spacing:2},n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},n.a.createElement(d.a,{className:e.paper,style:{fontSize:"1em",backgroundColor:"#222",color:"rgb(112, 168, 0)"}},n.a.createElement("h2",null,"CONFIRMADOS ",n.a.createElement("br",null)," ",r.confirmados?r.confirmados:n.a.createElement("span",{className:e.cargando},g)))),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},n.a.createElement(d.a,{className:e.paper,style:{fontSize:"1em",backgroundColor:"#222",color:"rgb(230, 0, 0)",fontWeight:"bold"}},n.a.createElement("h2",null,"FALLECIDOS ",n.a.createElement("br",null)," ",r.fallecidos?r.fallecidos:n.a.createElement("span",{className:e.cargando},g)))),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},n.a.createElement(d.a,{className:e.paper,style:{backgroundColor:"#222",color:"rgb(112, 168, 0)"}},n.a.createElement("h2",null,"RECUPERADOS ",n.a.createElement("br",null)," ",r.recuperados?r.recuperados:n.a.createElement("span",{className:e.cargando},g)))),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},n.a.createElement(d.a,{className:e.paper,style:{backgroundColor:"#222",color:"rgb(112, 168, 0)"}},n.a.createElement("h2",null,"ACTIVOS ",n.a.createElement("br",null)," ",r.activos?r.activos:n.a.createElement("span",{className:e.cargando},g)))),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},n.a.createElement(d.a,{className:e.paper,style:{fontSize:"1em",backgroundColor:"#222",color:"rgb(230, 0, 0)",fontWeight:"bold"}},n.a.createElement("h2",null,"TOTAL MUNDO ",n.a.createElement("br",null)," ",r.total_mundo?r.total_mundo:n.a.createElement("span",{className:e.cargando},g)))))),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:8,lg:8,xl:8,className:e.mapa},n.a.createElement(W,{markerPosition:p}," ")),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},n.a.createElement(A,null)),n.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},n.a.createElement(d.a,{style:{padding:"15px",minHeight:"460px"}},n.a.createElement(I,null)))))}var _=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(n.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");_?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(a,e)}))}}()},28:function(e){e.exports=JSON.parse('{"datos":[{"positivos":1,"fallecidos":0,"fecha":"3 de Marzo"},{"positivos":1,"fallecidos":0,"fecha":"4 de Marzo"},{"positivos":2,"fallecidos":0,"fecha":"5 de Marzo"},{"positivos":8,"fallecidos":0,"fecha":"6 de Marzo"},{"positivos":9,"fallecidos":1,"fecha":"7 de Marzo"},{"positivos":12,"fallecidos":1,"fecha":"8 de Marzo"},{"positivos":17,"fallecidos":1,"fecha":"9 de Marzo"},{"positivos":19,"fallecidos":1,"fecha":"10 de Marzo"},{"positivos":21,"fallecidos":1,"fecha":"11 de Marzo"},{"positivos":31,"fallecidos":1,"fecha":"12 de Marzo"},{"positivos":34,"fallecidos":2,"fecha":"13 de Marzo"},{"positivos":45,"fallecidos":2,"fecha":"14 de Marzo"},{"positivos":56,"fallecidos":2,"fecha":"15 de Marzo"},{"positivos":65,"fallecidos":2,"fecha":"16 de Marzo"},{"positivos":78,"fallecidos":2,"fecha":"17 de Marzo"},{"positivos":97,"fallecidos":3,"fecha":"18 de Marzo"},{"positivos":128,"fallecidos":3,"fecha":"19 de Marzo"},{"positivos":158,"fallecidos":3,"fecha":"20 de Marzo"},{"positivos":225,"fallecidos":4,"fecha":"21 de Marzo"},{"positivos":265,"fallecidos":4,"fecha":"22 de Marzo"},{"positivos":301,"fallecidos":4,"fecha":"23 de Marzo"},{"positivos":385,"fallecidos":6,"fecha":"24 de Marzo"},{"positivos":502,"fallecidos":9,"fecha":"25 de Marzo"},{"positivos":589,"fallecidos":12,"fecha":"26 de Marzo"},{"positivos":690,"fallecidos":17,"fecha":"27 de Marzo"},{"positivos":745,"fallecidos":19,"fecha":"28 de Marzo"},{"positivos":820,"fallecidos":21,"fecha":"29 de Marzo"},{"positivos":966,"fallecidos":24,"fecha":"30 de Marzo"},{"positivos":1054,"fallecidos":27,"fecha":"31 de Marzo"},{"positivos":1133,"fallecidos":32,"fecha":"1 de Abril"},{"positivos":1265,"fallecidos":36,"fecha":"2 de Abril"},{"fecha":"3 de Abril"},{"fecha":"4 de Abril"},{"fecha":"5 de Abril"},{"fecha":"6 de Abril"},{"fecha":"7 de Abril"}]}')},85:function(e,a,t){e.exports=t(144)}},[[85,1,2]]]);
//# sourceMappingURL=main.da738ae4.chunk.js.map