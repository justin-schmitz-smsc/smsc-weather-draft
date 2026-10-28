System.register(["jimu-core/emotion","jimu-core","jimu-core/react"],function(e,t){var r={},a={},i={};return{setters:[function(e){r.Fragment=e.Fragment,r.jsx=e.jsx,r.jsxs=e.jsxs},function(e){a.DataSourceManager=e.DataSourceManager,a.React=e.React,a.ReactRedux=e.ReactRedux,a.css=e.css},function(e){i.useId=e.useId}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=r},8972(e){"use strict";e.exports=i}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var n={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(n),o.d(n,{__set_webpack_public_path__:()=>j,default:()=>y});var e=o(7386),t=o(9244);const r=e=>{const r="var(--sys-color-on-surface, var(--ref-palette-neutral-900, #1a202c))",a="var(--sys-color-outline, var(--ref-palette-neutral-600, #718096))",i="var(--sys-color-outline-variant, var(--ref-palette-neutral-300, #e2e8f0))";return t.css`
    &.jimu-widget {
      height: 100% !important;
      max-height: 100% !important;
      overflow: hidden !important;
    }
  
    /* Root Dashboard Container */
    .wx-dashboard-container {
      width: 100%;
      height: 100%;
      max-height: 100%;
      min-height: 0;
      padding: 16px;
      box-sizing: border-box;
      background-color: ${"var(--sys-color-surface-container-lowest, var(--ref-palette-neutral-50, #f7fafc))"};
      overflow-y: auto;
    }

    /* Section Header */
    .wx-section-header {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid ${i};
    }

    .wx-section-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 700;
      color: ${r};
    }

    .wx-station-badge {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${a};
    }

    /* Cohesive Responsive Grid */
    .wx-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 16px;
      align-items: stretch;
      width: 100%;
    }

    /* Standardized Card Box Structure */
    .wx-card {
      background-color: ${"var(--sys-color-surface, var(--ref-palette-neutral-100, #ffffff))"};
      border: 1px solid ${i};
      border-radius: 10px;
      padding: 16px 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 125px;
      box-sizing: border-box;
            
    }

    /* Alert Variant Border Styles */
    .wx-card--alert-heat {
      border-left: 4px solid #dd6b20;
    }

    .wx-card--alert-cold {
      border-left: 4px solid #3182ce;
    }

    .wx-card--alert-danger {
      border-left: 4px solid #e53e3e;
    }

    /* Card Header Bar */
    .wx-card-header-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px; /* changed from 12 to 8 */
      height: 20px;
      flex-shrink: 0; /* added this */
    }

    /* Clean, Native h6 Style Header */
    .wx-card-header {
      margin: 0;
      padding: 0;
      color: ${r};
      position: relative;
      display: inline-block;
      /* Inherits default browser h6 sizing/weight automatically */
    }

    /* Tooltip Trigger & Popup */
    .wx-card-header[data-tooltip] {
      cursor: help;
    }

    .wx-card-header[data-tooltip]:hover {
      text-decoration: underline dotted ${a};
    }

    .wx-card-header[data-tooltip]:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      top: 130%;
      bottom: auto;
      left: 0;
      background-color: var(--ref-palette-neutral-900, #1a202c);
      color: #ffffff;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.725rem;
      font-weight: 400;
      line-height: 1.35;
      white-space: normal;
      width: 210px;
      text-transform: none;
      letter-spacing: normal;
      z-index: 100;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      pointer-events: none;
    }

    /* Status Badges */
    .wx-badge {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1;
    }

    .wx-badge--heat {
      background-color: #feebc8;
      color: #7b341e;
    }

    .wx-badge--cold {
      background-color: #ebf8ff;
      color: #2c5282;
    }

    .wx-badge--danger {
      background-color: #fed7d7;
      color: #9b2c2c;
    }
    
    .wx-badge--good {
      background-color: #c6f6d5;
      color: #22543d
    }

    .wx-badge--moderate {
      background-color: #fefcbf;
      color: #c26b14
    }

    .wx-badge--unhealthy {
      background-color: #feebc8;
      color: #cc0d0d}


    /* Standardized Card Body */
    .wx-card-body {
      display: flex;
      flex-direction: row;
      align-items: center; /* changed from center to flex-end */
      gap: 16px;
      flex-grow: 1;
      
    }

    .wx-graphic-frame {
      width: 50px;
      height: 80px;
      display: flex;
      align-items: center; /* changed from center to flex-end */
      justify-content: center;
      flex-shrink: 0;
    }

    .wx-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* Metric Typography */
    .wx-primary-val {
      font-size: 2rem;
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.02em;
      color: ${r};
      font-variant-numeric: tabular-nums;
    }

    .wx-secondary-val {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${a};
      margin-top: 4px;
      line-height: 1.2;
    }
  `};var a=o(8972);const i=({timeRange:t,setTimeRange:r})=>(0,e.jsx)("div",{children:(0,e.jsxs)("select",{className:"form-control form-control-sm w-auto",value:t,onChange:e=>r(e.target.value),children:[(0,e.jsx)("option",{value:"current-month",children:"Current Month (This Year)"}),(0,e.jsx)("option",{value:"all-time",children:"All Time"}),(0,e.jsx)("option",{value:"1",children:"January (All-Time)"}),(0,e.jsx)("option",{value:"2",children:"February (All-Time)"}),(0,e.jsx)("option",{value:"3",children:"March (All-Time)"}),(0,e.jsx)("option",{value:"4",children:"April (All-Time)"}),(0,e.jsx)("option",{value:"5",children:"May (All-Time)"}),(0,e.jsx)("option",{value:"6",children:"June (All-Time)"}),(0,e.jsx)("option",{value:"7",children:"July (All-Time)"}),(0,e.jsx)("option",{value:"8",children:"August (All-Time)"}),(0,e.jsx)("option",{value:"9",children:"September (All-Time)"}),(0,e.jsx)("option",{value:"10",children:"October (All-Time)"}),(0,e.jsx)("option",{value:"11",children:"November (All-Time)"}),(0,e.jsx)("option",{value:"12",children:"December (All-Time)"})]})}),l=({temperature:t,height:r=90})=>{const i=`temp-fill-clip-${(0,a.useId)().replace(/:/g,"")}`,o=60-Math.max(0,Math.min(100,t||0))/100*50;return(0,e.jsxs)("svg",{width:.4*r,height:r,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:i,children:(0,e.jsx)("rect",{x:"0",y:o,width:"40",height:100-o})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:"#e53e3e"}),(0,e.jsx)("g",{clipPath:`url(#${i})`,children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:"#e53e3e"})})]})},s=({temperature:t,date:r,title:a,tooltip:i})=>{const o="number"!=typeof t||isNaN(t)?"N/A":`${(Math.round(10*t)/10).toFixed(1)}\xb0F`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",Object.assign({className:"wx-card-header"},i?{"data-tooltip":i}:{},{children:a}))}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(l,{temperature:t,height:85})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:o}),null!==r&&(0,e.jsx)("div",{className:"wx-secondary-val",children:r})]})]})]})},d=({aqi:t,date:r,tooltip:a})=>{const i="number"!=typeof t||isNaN(t)?0:Math.round(t),{label:o,cardClass:n,badgeClass:l}=(s=i)<=50?{label:"Good",cardClass:"",badgeClass:"wx-badge--good"}:s<=150?{label:"Moderate",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--moderate"}:{label:"Unhealthy",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--unhealthy"};var s;return(0,e.jsxs)("div",{className:`wx-card ${n}`,children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Max AQI based on PM2.5 only. 0-50: Good, 50-150: Moderate, 150+: Unhealthy",children:"Max AQI"}),(0,e.jsx)("span",{className:`wx-badge ${l}`,children:o})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,e.jsx)("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M18.36 5.64l1.41-1.41"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"4"})]})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:i}),(0,e.jsx)("div",{className:"wx-secondary-val",children:r})]})]})]})},c=({speedKnots:t,directionDegrees:r,size:a=100})=>{let i=5*Math.round((t||0)/5);const o=0===i,n=Math.floor(i/50);i%=50;const l=Math.floor(i/10);i%=10;const s=Math.floor(i/5),d=[];let c=-45;if(!o){for(let t=0;t<n;t++)d.push((0,e.jsx)("polygon",{points:`0,${c} 15,${c+-6} 0,${c+8}`,fill:"currentColor"},`pennant-${t}`)),c+=10;for(let t=0;t<l;t++)d.push((0,e.jsx)("line",{x1:"0",y1:c,x2:15,y2:c+-6,stroke:"currentColor",strokeWidth:"2.5"},`full-${t}`)),c+=6;for(let t=0;t<s;t++){const r=0===n&&0===l?c+6:c;d.push((0,e.jsx)("line",{x1:"0",y1:r,x2:7.5,y2:r+-3,stroke:"currentColor",strokeWidth:"2.5"},`half-${t}`))}}return(0,e.jsxs)("svg",{width:a,height:a,viewBox:"-60 -60 120 120",className:"wind-barb-svg",style:{overflow:"visible"},children:[(0,e.jsx)("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#e0e0e0",strokeWidth:"2",strokeDasharray:"2,4"}),(0,e.jsx)("g",{transform:`rotate(${r})`,children:o?(0,e.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-50",stroke:"currentColor",strokeWidth:"2.5"}),d]})})]})},x=({title:t,speedMph:r,directionDegrees:a,date:i,tooltip:o})=>{const n="number"!=typeof r||isNaN(r)?0:r,l="number"!=typeof a||isNaN(a)?0:a,s=Math.round(.868976*n);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":o,children:t})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(c,{speedKnots:s,directionDegrees:l,size:75})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsxs)("div",{className:"wx-primary-val",children:[(Math.round(10*n)/10).toFixed(1),(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600},children:" mph"})]}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:[s," kts \u2022 ",i]})]})]})]})},h=({inches:t=0,height:r=85})=>{const a=Math.max(0,t||0),i=.85+.3*Math.min(a/2,1),o=0===(n=a)?"#cbd5e0":n<.25?"#63b3ed":n<1?"#3182ce":"#1a365d";var n;return(0,e.jsx)("svg",{width:.5*r,height:r,viewBox:"0 0 50 100",style:{overflow:"visible",transition:"all 0.3s ease"},children:(0,e.jsxs)("g",{transform:`scale(${i})`,"transform-origin":"25 50",children:[(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:0===a?"#f7fafc":o,stroke:o,strokeWidth:"3",strokeLinejoin:"round",style:{transition:"fill 0.3s ease, stroke 0.3s ease"}}),(0,e.jsx)("path",{d:"M 16 52 A 12 12 0 0 0 28 68",fill:"none",stroke:0===a?"#e2e8f0":"#ffffff",strokeWidth:"2.5",strokeLinecap:"round",opacity:.6})]})})},u=({dailyRainInches:t,tooltip:r,title:a,date:i})=>{const o="number"==typeof t?t:0,n=`${o.toFixed(2)} in`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":r,children:a})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(h,{inches:o,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:n}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:i})]})]})]})};var m=function(e,t,r,a){return new(r||(r=Promise))(function(i,o){function n(e){try{s(a.next(e))}catch(e){o(e)}}function l(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(n,l)}s((a=a.apply(e,t||[])).next())})};const{useState:p,useEffect:f}=t.React,g=e=>{const t=e=>String(e).padStart(2,"0");return`${e.getUTCFullYear()}-${t(e.getUTCMonth()+1)}-${t(e.getUTCDate())} ${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())}`},v=e=>1.8*e+32,w=e=>2.2369*e,b=e=>e/25.4;const y=t.ReactRedux.connect(e=>{const t=e.widgetsState;let r="";return t&&Object.keys(t).forEach(t=>{const a=e.getIn(["widgetsState",t,"selectedStation"]);a&&(r=a)}),{selectedStation:r}})(function(a){const{config:o,useDataSources:n,selectedStation:l,theme:c}=a,[h,y]=p(null),[j,N]=p(!1),[T,M]=p(null),[k,S]=p("current-month");f(()=>{if(!l||!n||0===n.length)return;let e=!0;return(()=>{m(this,void 0,void 0,function*(){N(!0),M(null);try{const a=null==n?void 0:n[0],i=a?a.asMutable({deep:!0}):void 0,s=yield(r=i,m(void 0,void 0,void 0,function*(){if(!(null==r?void 0:r.dataSourceId))return null;const e=t.DataSourceManager.getInstance();let a=e.getDataSource(r.dataSourceId);return a||(a=yield e.createDataSourceByUseDataSource(r)),a}));if(!s)throw new Error("Historical weather data source unavailable.");const d=(null==o?void 0:o.stationIdField)||"station_guid",c=(null==o?void 0:o.stationNameField)||"station_name",x=(null==o?void 0:o.averageTempField)||"airtc_avg",h=(null==o?void 0:o.highTempField)||"airtc_max",u=(null==o?void 0:o.lowTempField)||"airtc_min",p=(null==o?void 0:o.averageWindSpeedField)||"ws_ms_avg",f=(null==o?void 0:o.highWindSpeedField)||"ws_ms_max",j=(null==o?void 0:o.totalPrecipField)||"rain_mm_tot_tot",T=(null==o?void 0:o.highAqiField)||"aqi_max",M=(null==o||o.lowAqiField,(null==o?void 0:o.dateField)||"date"),S=[];if(l&&S.push(`${c} = '${l}'`),"current-month"===k){const e=new Date,t=g(new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),1,0,0,0))),r=g(new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+1,0,23,59,59)));S.push(`${M} >= TIMESTAMP '${t}' AND ${M} <= TIMESTAMP '${r}'`)}else"all-time"!==k&&S.push(`EXTRACT(MONTH FROM ${M}) = ${k}`);const A={where:S.length>0?S.join(" AND "):"1=1",outFields:["*"],returnGeometry:!1},D=yield s.query(A),C=(null==D?void 0:D.records)||[];if(!e)return;if(0===C.length)return y(null),void N(!1);let $=0,W=0,F=-1/0,_=null,P=1/0,R=null,I=0,U=0,z=0,q=null,H=0,B=-1/0,O=null,E=1/0,L=-1/0,G=null,Y=l||"Unknown Station",J=l||"Unknown";C.forEach((e,t)=>{var r,a;const i=e.getData();console.log(i);const o=i[M];0===t&&(Y=i[c]||Y,J=i[d]||J);const n=v(i[x]);"number"!=typeof n||isNaN(n)||($+=n,W++);const l=v(null!==(r=i[h])&&void 0!==r?r:n);"number"!=typeof l||isNaN(l)||l>F&&(F=l,_=o);const s=v(null!==(a=i[u])&&void 0!==a?a:n);"number"!=typeof s||isNaN(s)||s<P&&(P=s,R=o);const m=w(i[p]);"number"!=typeof m||isNaN(m)||(I+=m,U++);const g=w(i[f]);"number"!=typeof g||isNaN(g)||g>z&&(z=g,q=o);const b=i[j];console.log(j),console.log(b),"number"!=typeof b||isNaN(b)||(H+=b,b>B&&(B=b,O=o));const y=i[T];"number"!=typeof y||isNaN(y)||(y<E&&(E=y),y>L&&(L=y,G=o))});const Q=F===-1/0?0:F,K=P===1/0?0:P,Z=E===1/0?0:E,V=L===-1/0?0:L,X=b(H),ee=b(B),te={stationId:J,stationName:Y,highTemp:Q,maxHighTemp:Q,maxHighDate:_,lowTemp:K,minLowTemp:K,minLowDate:R,averageTemp:W>0?$/W:0,averageWindSpeed:U>0?I/U:0,maxWindSpeed:z,maxWindDate:q,totalAccumulatedPrecipitation:X,maxTotalAccumulatedPrecipitation:ee,maxPrecipDate:O,lowAqi:Z,highAqi:V,maxAqiDate:G,date:new Date};y(te)}catch(t){if(!e)return;console.error("[Historical Query Error]",t),M((null==t?void 0:t.message)||"Failed to query historical weather layer")}finally{e&&N(!1)}var r})})(),()=>{e=!1}},[n,l,k,o]);const A=e=>{if(!e)return"N/A";const t=new Date(e);return isNaN(t.getTime())?String(e):t.toLocaleDateString()};return(0,e.jsxs)("div",{css:r(),className:"widget-weather-cards w-dahsboard-container",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,e.jsx)("h5",{children:h?h.stationName:"Historical Summary"}),(0,e.jsx)(i,{timeRange:k,setTimeRange:S})]}),j&&(0,e.jsx)("p",{children:(0,e.jsx)("em",{children:"Loading historical summary..."})}),T&&(0,e.jsxs)("p",{style:{color:"red"},children:[(0,e.jsx)("strong",{children:"Error:"})," ",T]}),h||j?h?(0,e.jsxs)("div",{className:"wx-card-grid",children:[(0,e.jsx)(s,{title:"Max High Temperature",tooltip:"Maximum of the daily maximum temperatures for the selected time period",temperature:h.highTemp,date:A(h.maxHighDate)}),(0,e.jsx)(s,{title:"Average Temperature",tooltip:"Average of the average temperature for the selected time period.",temperature:h.averageTemp}),(0,e.jsx)(s,{title:"Min Low Temperature",tooltip:"Minimum of the daily minimum temperatures for the selected time period",temperature:h.lowTemp,date:A(h.minLowDate)}),(0,e.jsx)(x,{title:"Average Wind Speed",tooltip:"Average Wind Speed. Direction of barb is 0 and not representative of wind direction",speedMph:h.averageWindSpeed,directionDegrees:0}),(0,e.jsx)(x,{title:"Maximum Wind Speed",tooltip:"Maximum Wind Speed. Direction of barb is 0 and not representative of wind direction",speedMph:h.maxWindSpeed,directionDegrees:0,date:A(h.maxWindDate)}),(0,e.jsx)(u,{title:"Total Precipitation",tooltip:"Total accumulated precipitation for the selected time period.",dailyRainInches:h.totalAccumulatedPrecipitation}),(0,e.jsx)(u,{title:"Maximum Precipitation",tooltip:"Accumulated Precipitation on the wettest day in the selected time period",dailyRainInches:h.maxTotalAccumulatedPrecipitation,date:A(h.maxPrecipDate)}),(0,e.jsx)(d,{aqi:h.highAqi,date:A(h.maxAqiDate)})]}):null:(0,e.jsx)("div",{className:"text-muted",children:"No historical data available for this selection."})]})});function j(e){o.p=e}})(),n})())}}});