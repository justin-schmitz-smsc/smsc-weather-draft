System.register(["jimu-core/emotion","jimu-core","jimu-core/react"],function(e,r){var a={},t={},s={};return{setters:[function(e){a.Fragment=e.Fragment,a.jsx=e.jsx,a.jsxs=e.jsxs},function(e){t.DataSourceManager=e.DataSourceManager,t.React=e.React,t.ReactRedux=e.ReactRedux,t.css=e.css},function(){}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=t},7386(e){"use strict";e.exports=a},8972(e){"use strict";e.exports=s}},r={};function i(a){var t=r[a];if(void 0!==t)return t.exports;var s=r[a]={exports:{}};return e[a](s,s.exports,i),s.exports}i.d=(e,r)=>{for(var a in r)i.o(r,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var l={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(l),i.d(l,{__set_webpack_public_path__:()=>y,default:()=>b});var e=i(7386),r=i(9244);const a=e=>{const a="var(--sys-color-on-surface, var(--ref-palette-neutral-900, #1a202c))",t="var(--sys-color-outline, var(--ref-palette-neutral-600, #718096))",s="var(--sys-color-outline-variant, var(--ref-palette-neutral-300, #e2e8f0))";return r.css`
    /* Root Dashboard Container */
    .wx-dashboard-container {
      width: 100%;
      height: 100%;
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
      border-bottom: 1px solid ${s};
    }

    .wx-section-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 700;
      color: ${a};
    }

    .wx-station-badge {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${t};
    }

    /* Cohesive Responsive Grid */
    .wx-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      align-items: stretch;
      width: 100%;
    }

    /* Standardized Card Box Structure */
    .wx-card {
      background-color: ${"var(--sys-color-surface, var(--ref-palette-neutral-100, #ffffff))"};
      border: 1px solid ${s};
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
      color: ${a};
      position: relative;
      display: inline-block;
      /* Inherits default browser h6 sizing/weight automatically */
    }

    /* Tooltip Trigger & Popup */
    .wx-card-header[data-tooltip] {
      cursor: help;
    }

    .wx-card-header[data-tooltip]:hover {
      text-decoration: underline dotted ${t};
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
      color: ${a};
      font-variant-numeric: tabular-nums;
    }

    .wx-secondary-val {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${t};
      margin-top: 4px;
      line-height: 1.2;
    }
  `};i(8972);const t=({speedKnots:r,directionDegrees:a,size:t=100})=>{let s=5*Math.round((r||0)/5);const i=0===s,l=Math.floor(s/50);s%=50;const d=Math.floor(s/10);s%=10;const o=Math.floor(s/5),n=[];let c=-45;if(!i){for(let r=0;r<l;r++)n.push((0,e.jsx)("polygon",{points:`0,${c} 15,${c+-6} 0,${c+8}`,fill:"currentColor"},`pennant-${r}`)),c+=10;for(let r=0;r<d;r++)n.push((0,e.jsx)("line",{x1:"0",y1:c,x2:15,y2:c+-6,stroke:"currentColor",strokeWidth:"2.5"},`full-${r}`)),c+=6;for(let r=0;r<o;r++){const a=0===l&&0===d?c+6:c;n.push((0,e.jsx)("line",{x1:"0",y1:a,x2:7.5,y2:a+-3,stroke:"currentColor",strokeWidth:"2.5"},`half-${r}`))}}return(0,e.jsxs)("svg",{width:t,height:t,viewBox:"-60 -60 120 120",className:"wind-barb-svg",style:{overflow:"visible"},children:[(0,e.jsx)("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#e0e0e0",strokeWidth:"2",strokeDasharray:"2,4"}),(0,e.jsx)("g",{transform:`rotate(${a})`,children:i?(0,e.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-50",stroke:"currentColor",strokeWidth:"2.5"}),n]})})]})},s=({speedMph:r,directionDegrees:a})=>{const s="number"!=typeof r||isNaN(r)?0:r,i="number"!=typeof a||isNaN(a)?0:a,l=Math.round(.868976*s);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Displays the current wind speed in mph and kts, as well as wind direction, measured at 10 feet. Renders a wind barb.",children:"Wind"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(t,{speedKnots:l,directionDegrees:i,size:75})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsxs)("div",{className:"wx-primary-val",children:[(Math.round(10*s)/10).toFixed(1),(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600},children:" mph"})]}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:[l," kts \u2022 ",Math.round(i),"\xb0"]})]})]})]})},d=({colorHex:r,size:a=48})=>(0,e.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("line",{x1:"4",y1:"22",x2:"4",y2:"2",stroke:"#4a5568",strokeWidth:"2"}),(0,e.jsx)("path",{d:"M4 4h12l-2 5 2 5H4",fill:r,stroke:"#FFFFFF"===r?"#718096":r,strokeWidth:"1.5"})]}),o=({wbgtTemp:r})=>{const a="number"!=typeof r||isNaN(r)?null:Math.round(10*r)/10,t=null===(s=a)?{colorHex:"#cbd5e0",label:"No Data",badgeClass:""}:s<77?{colorHex:"#edeff1",label:"Normal",badgeClass:""}:s>=77&&s<=81.9?{colorHex:"#38a169",label:"Green - Low",badgeClass:"wx-badge--cold"}:s>=82&&s<=84.9?{colorHex:"#ecc94b",label:"Yellow - Moderate",badgeClass:"wx-badge--heat"}:s>=85&&s<=88.9?{colorHex:"#e53e3e",label:"Red - High",badgeClass:"wx-badge--danger"}:{colorHex:"#1a202c",label:"Black - Extreme",badgeClass:"wx-badge--danger"};var s;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Measures heat stress, combines temperature, humidity, wind speed, sun angle, and solar radiation. 77-82: Low, 82-85: Moderate, 85-89: High, 89+: Extreme risk.",children:"Wet Bulb Globe Temp"}),"No Data"!==t.label&&"Normal"!==t.label&&(0,e.jsx)("span",{className:`wx-badge ${t.badgeClass}`,children:t.label.split(" - ")[0]})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(d,{colorHex:t.colorHex,size:44})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:null!==a?`${a.toFixed(1)}\xb0F`:"N/A"}),(0,e.jsx)("div",{className:"wx-secondary-val",children:t.label})]})]})]})},n=({temperature:r,height:a=90})=>{const t=60-Math.max(0,Math.min(100,r||0))/100*50;return(0,e.jsxs)("svg",{width:.4*a,height:a,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"temp-fill-clip",children:(0,e.jsx)("rect",{x:"0",y:t,width:"40",height:100-t})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:"#e53e3e"}),(0,e.jsx)("g",{clipPath:"url(#temp-fill-clip)",children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:"#e53e3e"})})]})},c=({temperature:r,rh:a,dewPt:t})=>{const s="number"!=typeof r||isNaN(r)?"N/A":`${(Math.round(10*r)/10).toFixed(1)}\xb0F`,i="number"!=typeof a||isNaN(a)?"N/A":`${(Math.round(10*a)/10).toFixed(1)}%`,l="number"!=typeof t||isNaN(t)?"N/A":`${Math.round(10*t/10).toFixed(1)}\xb0F`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Current air temperature measured at 10 feet. This card also shows relative humidity and dew point.",children:"Air Temperature"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(n,{temperature:r,height:85})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:s}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:["RH: ",i," | DewPt: ",l]})]})]})]})},x=({windChill:r,height:a=90})=>{const t=60-50*((Math.max(-30,Math.min(50,null!=r?r:50))- -30)/80),s=(i=r)>=32?"#90cdf4":i>=10?"#4299e1":i>=-10?"#2b6cb0":"#1a365d";var i;return(0,e.jsxs)("svg",{width:.4*a,height:a,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"windchill-fill-clip",children:(0,e.jsx)("rect",{x:"0",y:t,width:"40",height:100-t})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:s,style:{transition:"fill 0.3s ease"}}),(0,e.jsx)("g",{clipPath:"url(#windchill-fill-clip)",children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:s,style:{transition:"fill 0.3s ease"}})})]})},h=({windChill:r})=>{const a="number"==typeof r?`${(Math.round(10*r)/10).toFixed(1)}\xb0F`:"N/A";return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"How cold it feels wen combining temperature and wind speed.",children:"Wind Chill"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(x,{windChill:r,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:a}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:"Feels Like"})]})]})]})},p=({heatIndex:r})=>{const a="number"==typeof r?`${(Math.round(10*r)/10).toFixed(1)}\xb0F`:"N/A";return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"How warm it feels when considering temperature and relative humidity.",children:"Heat Index"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(n,{temperature:r,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:a}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:"Feels Like"})]})]})]})},u=({inches:r=0,height:a=85})=>{const t=Math.max(0,r||0),s=.85+.3*Math.min(t/2,1),i=0===(l=t)?"#cbd5e0":l<.25?"#63b3ed":l<1?"#3182ce":"#1a365d";var l;return(0,e.jsx)("svg",{width:.5*a,height:a,viewBox:"0 0 50 100",style:{overflow:"visible",transition:"all 0.3s ease"},children:(0,e.jsxs)("g",{transform:`scale(${s})`,"transform-origin":"25 50",children:[(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:0===t?"#f7fafc":i,stroke:i,strokeWidth:"3",strokeLinejoin:"round",style:{transition:"fill 0.3s ease, stroke 0.3s ease"}}),(0,e.jsx)("path",{d:"M 16 52 A 12 12 0 0 0 28 68",fill:"none",stroke:0===t?"#e2e8f0":"#ffffff",strokeWidth:"2.5",strokeLinecap:"round",opacity:.6})]})})},m=({dailyRainInches:r})=>{const a="number"==typeof r?r:0,t=`${a.toFixed(2)} in`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Accumulated rain since midnight.",children:"Rain Since Midnight"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(u,{inches:a,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:t}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:a>0?"Accumulation":"Dry Conditions"})]})]})]})},f=({aqi:r,pm25:a})=>{const t="number"!=typeof r||isNaN(r)?0:Math.round(r),{label:s,cardClass:i,badgeClass:l}=(d=t)<=50?{label:"Good",cardClass:"",badgeClass:"wx-badge--good"}:d<=150?{label:"Moderate",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--moderate"}:{label:"Unhealthy",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--unhealthy"};var d;return(0,e.jsxs)("div",{className:`wx-card ${i}`,children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"AQI based on PM2.5 only. 0-50: Good, 50-150: Moderate, 150+: Unhealthy",children:"AQI"}),(0,e.jsx)("span",{className:`wx-badge ${l}`,children:s})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,e.jsx)("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M18.36 5.64l1.41-1.41"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"4"})]})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:t}),(0,e.jsx)("div",{className:"wx-secondary-val",children:null!=a?`PM2.5: ${a.toFixed(1)} \xb5g/m\xb3`:"EPA Standard"})]})]})]})},{useState:w,useEffect:g}=r.React;const b=r.ReactRedux.connect(e=>{const r=e.widgetsState;let a="";return r&&Object.keys(r).forEach(r=>{const t=e.getIn(["widgetsState",r,"selectedStation"]);t&&(a=t)}),{selectedStation:a}})(function(t){var i;const{config:l,useDataSources:d,selectedStation:n,theme:x}=t,[u,b]=w(null),[y,v]=w(!1),[j,N]=w(null),k=null===(i=null==d?void 0:d[0])||void 0===i?void 0:i.dataSourceId;return g(()=>{if(!k||!n)return;let e=!0;const a=(r,a=!1)=>{a||v(!0),N(null);const t=(null==l?void 0:l.stationNameField)||"station_name",s=(null==l?void 0:l.airTempField)||"airtf",i=(null==l?void 0:l.windDirField)||"winddir",d=(null==l?void 0:l.windSpeedField)||"ws_mph",o=(null==l?void 0:l.windChillField)||"windchill_f",c=(null==l?void 0:l.wetBulbGlobeField)||"wetbulbglobet_f",x=(null==l?void 0:l.heatIndexField)||"heatindex_f",h=(null==l?void 0:l.todaysRainField)||"todaysrain_mm",p=(null==l?void 0:l.aqiField)||"epa_aqi",u=(null==l?void 0:l.pm25Field)||"pm2_5_10min",m=(null==l?void 0:l.dewPtField)||"tdf",f=(null==l?void 0:l.rhField)||"rh",w={where:`${t} = '${n}'`,outFields:["*"],returnGeometry:!1,cacheBust:!0};console.log(`[Cards Querying] ${a?"Polling":"Initial"} query for station: ${n}`),r.query(w).then(r=>{if(e)if(v(!1),(null==r?void 0:r.records)&&r.records.length>0){const e=r.records[0].getData(),a={stationId:e[t],temperature:e[s],windDir:e[i],windSpeed:e[d],windChill:e[o],wetBulbGlobe:e[c],heatIndex:e[x],todaysRain:.0393701*e[h],aqi:e[p],pm25:e[u],dewPt:e[m],rh:e[f],rawAttributes:e};b(a)}else console.warn(`[Cards Query Warning] No records found matching ${n}`),b(null)}).catch(r=>{e&&(v(!1),console.error("[Cards Query Error]",r),N((null==r?void 0:r.message)||"Failed to query telemetry layer"))})},t=(t=!1)=>{const s=r.DataSourceManager.getInstance();let i=s.getDataSource(k);i?a(i,t):s.createDataSourceByUseDataSource(d[0]).then(r=>{r&&e&&a(r,t)})};t(!1);const s=setInterval(()=>{t(!0)},6e4);return()=>{e=!1,clearInterval(s)}},[k,n,l]),(0,e.jsx)("div",{css:a(),className:"widget-weather-cards wx-dashboard-container",children:n?(0,e.jsxs)("div",{style:{height:"100%",overflow:"auto"},children:[(0,e.jsx)("div",{className:"wx-section-header",children:(0,e.jsx)("h2",{className:"wx-section-title",children:"Current Conditions at a Glance"})}),y&&(0,e.jsx)("p",{children:(0,e.jsx)("em",{children:"Loading telemetry records..."})}),j&&(0,e.jsxs)("p",{style:{color:"red"},children:[(0,e.jsx)("strong",{children:"Error:"})," ",j]}),u?(0,e.jsxs)("div",{className:"wx-card-grid",children:[(0,e.jsx)(c,{temperature:u.temperature,dewPt:u.dewPt,rh:u.rh}),(0,e.jsx)(s,{speedMph:u.windSpeed,directionDegrees:u.windDir}),(0,e.jsx)(m,{dailyRainInches:u.todaysRain}),"number"==typeof u.wetBulbGlobe&&u.wetBulbGlobe>=77&&(0,e.jsx)(o,{wbgtTemp:u.wetBulbGlobe}),"number"==typeof u.heatIndex&&u.heatIndex>=77&&(0,e.jsx)(p,{heatIndex:u.heatIndex}),"number"==typeof u.windChill&&u.windChill<=35&&(0,e.jsx)(h,{windChill:u.windChill}),"number"==typeof u.aqi&&u.aqi>50&&(0,e.jsx)(f,{aqi:u.aqi,pm25:u.pm25})]}):!y&&(0,e.jsx)("p",{children:"No data retrieved yet."})]}):(0,e.jsxs)("div",{className:"wx-cards-placeholder",children:[(0,e.jsx)("h6",{children:"Weather Cards Widget"}),(0,e.jsx)("p",{className:"mb-0 text-muted",style:{fontSize:"12px"},children:"Waiting for station selection from Redux..."})]})})});function y(e){i.p=e}})(),l})())}}});