(this["webpackJsonpmap-covid-v2"]=this["webpackJsonpmap-covid-v2"]||[]).push([[0],{120:function(e,t){},127:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(16),i=a.n(n),l=a(34),p=a.n(l),s=a(61),c=a(35),m=a(145),u=a(148),d=a(147),g=a(149),y=a(62),f=a.n(y),E=a(63),h=a.n(E),x=a(150),b=a(153),v=a(7),C=a.n(v),P=a(151);function A(e){return o.a.createElement(P.a,Object.assign({},e,{onEachFeature:function(t,a){var r="";e.popupContent.length?r=t.properties.lugar:t.properties&&t.properties.popupContent&&(r=t.properties.popupContent),a.bindPopup(r),a.on({mouseover:function(e){a.openPopup()},mouseout:function(e){a.closePopup()}})}}))}A.defaultProps={popupContent:""};var F=a(65),O={wrapper:{height:"100%",width:"100%",margin:"0 auto",display:"flex"},map:{flex:1}},w={radius:4,fillColor:"#EE4266",color:"#EE4266",weight:5,opacity:1,fillOpacity:.4},N=function(e,t){return C.a.circleMarker(t,w)},S=function(e){return o.a.createElement("div",{style:O.wrapper},o.a.createElement(x.a,{style:O.map,center:e.center,zoom:e.zoom},o.a.createElement(b.a,{url:e.url}),o.a.createElement(A,{popupContent:"Un contenido",data:F,pointToLayer:N})))};S.defaultProps={center:[-38.4160957,-63.6166725],zoom:4,url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"};var k=S,j=Object(m.a)((function(e){return{root:{width:"100%",height:"100%"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paper_header:{padding:e.spacing(2),color:e.palette.text.secondary},alerta:{marginTop:e.spacing(2),color:"#fff",fontWeight:500}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement((function(){var e=j(),t=Object(r.useState)({items:{}}),a=Object(c.a)(t,2),n=(a[0],a[1]),i=Object(r.useState)({}),l=Object(c.a)(i,2),m=l[0],y=l[1];return Object(r.useEffect)((function(){(function(){var e=Object(s.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://almundo-examen.herokuapp.com/api/v1/coronavirus");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){h()("https://almundo-examen.herokuapp.com").on("FromTemperatura",(function(e){y(e)}))}),[]),o.a.createElement("div",{className:e.root},o.a.createElement(d.a,{container:!0,spacing:2},o.a.createElement(d.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},o.a.createElement(u.a,{className:e.paper,style:{backgroundColor:"#222",color:"#fff",padding:"3px",lineHeight:"28px"}},o.a.createElement("h1",null,"CORONAVIRUS ARGENTINA ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{fontSize:"12px"}},"\xdaLTIMA ACTUALIZACI\xd3N: ",m.date)))),o.a.createElement(d.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6},o.a.createElement(g.a,{severity:"error",elevation:6,variant:"filled"},"Disculp\xe9 las molestias! Si no carga los datos es por las miles de visitas que estamos recibiendo!"),o.a.createElement(g.a,{severity:"info",elevation:6,variant:"filled",className:e.alerta},m.titulo?m.titulo:"Estamos mejorando para que tengan una mejor experiencia")),o.a.createElement(d.a,{item:!0,xs:12,sm:4,md:4,lg:4,xl:4},o.a.createElement(d.a,{container:!0,spacing:2},o.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(u.a,{className:e.paper,style:{fontSize:"1.2em",backgroundColor:"#222",color:"rgb(112, 168, 0)"}},o.a.createElement("h2",null,"CONFIRMADOS ",o.a.createElement("br",null)," ",m.confirmados))),o.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(u.a,{className:e.paper,style:{fontSize:"1.2em",backgroundColor:"#222",color:"rgb(230, 0, 0)",fontWeight:"bold"}},o.a.createElement("h2",null,"FALLECIDOS ",o.a.createElement("br",null)," ",m.fallecidos))),o.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(u.a,{className:e.paper,style:{backgroundColor:"#222",color:"rgb(112, 168, 0)"}},o.a.createElement("h2",null,"RECUPERADOS ",o.a.createElement("br",null)," ",m.recuperados))),o.a.createElement(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(u.a,{className:e.paper,style:{fontSize:"1.06em",backgroundColor:"#222",color:"rgb(230, 0, 0)",fontWeight:"bold"}},o.a.createElement("h2",null,"TOTAL MUNDO ",o.a.createElement("br",null)," ",m.total_mundo))))),o.a.createElement(d.a,{item:!0,xs:12,sm:8,md:8,lg:8,xl:8},o.a.createElement(k,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e){e.exports=JSON.parse('{"type":"Feature","properties":{"name":"Un nombre","amenity":"Un Contenido","popupContent":"Un popup contenido"},"geometry":{"type":"Point","coordinates":[-38.4160957,-63.6166725]},"features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.4016157,-34.5922517]},"properties":{"lugar":"CABA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.5155126,-34.5282118]},"properties":{"lugar":"Vicente L\xf3pez - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-64.1810532,-31.4134998]},"properties":{"lugar":"C\xf3rdoba"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-62.9966812,-40.8134499]},"properties":{"lugar":"Viedma - R\xedo Negro"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.54722,-34.57222]},"properties":{"lugar":"San Martin - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-66.3356323,-33.2950096]},"properties":{"lugar":"San Luis"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.9838905,-27.4605598]},"properties":{"lugar":"Resistencia - Chaco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.984808,-27.459946]},"properties":{"lugar":"Resistencia - Chaco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.3772316,-34.6131516]},"properties":{"lugar":"CABA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.757584,-34.7728556]},"properties":{"lugar":"La Matanza - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-57.5575409,-38.0022812]},"properties":{"lugar":"Mar Del Plata - Buenos Aires"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-60.7000008,-31.6333294]},"properties":{"lugar":"Santa Fe"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-68.3000031,-54.7999992]},"properties":{"lugar":"Tierra del Fuego"}}]}')},71:function(e,t,a){e.exports=a(127)}},[[71,1,2]]]);
//# sourceMappingURL=main.72260e3a.chunk.js.map