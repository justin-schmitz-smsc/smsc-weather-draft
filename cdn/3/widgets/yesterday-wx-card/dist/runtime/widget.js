System.register(["jimu-core/emotion","jimu-core","jimu-core/react"],function(e,t){var r={},a={},i={};return{setters:[function(e){r.Fragment=e.Fragment,r.jsx=e.jsx,r.jsxs=e.jsxs},function(e){a.DataSourceManager=e.DataSourceManager,a.React=e.React,a.ReactRedux=e.ReactRedux,a.css=e.css},function(e){i.useId=e.useId}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=r},8972(e){"use strict";e.exports=i}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var l={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(l),s.d(l,{__set_webpack_public_path__:()=>j,default:()=>b});var e=s(7386),t=s(9244);const r=e=>{const r="var(--sys-color-on-surface, var(--ref-palette-neutral-900, #1a202c))",a="var(--sys-color-outline, var(--ref-palette-neutral-600, #718096))",i="var(--sys-color-outline-variant, var(--ref-palette-neutral-300, #e2e8f0))";return t.css`
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
  `};var a=s(8972);const i=({speedKnots:t,directionDegrees:r,size:a=100})=>{let i=5*Math.round((t||0)/5);const s=0===i,l=Math.floor(i/50);i%=50;const d=Math.floor(i/10);i%=10;const o=Math.floor(i/5),n=[];let c=-45;if(!s){for(let t=0;t<l;t++)n.push((0,e.jsx)("polygon",{points:`0,${c} 15,${c+-6} 0,${c+8}`,fill:"currentColor"},`pennant-${t}`)),c+=10;for(let t=0;t<d;t++)n.push((0,e.jsx)("line",{x1:"0",y1:c,x2:15,y2:c+-6,stroke:"currentColor",strokeWidth:"2.5"},`full-${t}`)),c+=6;for(let t=0;t<o;t++){const r=0===l&&0===d?c+6:c;n.push((0,e.jsx)("line",{x1:"0",y1:r,x2:7.5,y2:r+-3,stroke:"currentColor",strokeWidth:"2.5"},`half-${t}`))}}return(0,e.jsxs)("svg",{width:a,height:a,viewBox:"-60 -60 120 120",className:"wind-barb-svg",style:{overflow:"visible"},children:[(0,e.jsx)("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#e0e0e0",strokeWidth:"2",strokeDasharray:"2,4"}),(0,e.jsx)("g",{transform:`rotate(${r})`,children:s?(0,e.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-50",stroke:"currentColor",strokeWidth:"2.5"}),n]})})]})},d=({speedMph:t,directionDegrees:r})=>{const a="number"!=typeof t||isNaN(t)?0:t,s="number"!=typeof r||isNaN(r)?0:r,l=Math.round(.868976*a);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Yesterday's high wind speed. Wind direction is from the five minute record cloest to the high wind speed time.",children:"Wind"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(i,{speedKnots:l,directionDegrees:s,size:75})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsxs)("div",{className:"wx-primary-val",children:[(Math.round(10*a)/10).toFixed(1),(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600},children:" mph"})]}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:[l," kts \u2022 ",Math.round(s),"\xb0"]})]})]})]})},o=({temperature:t,height:r=90})=>{const i=`temp-fill-clip-${(0,a.useId)().replace(/:/g,"")}`,s=60-Math.max(0,Math.min(100,t||0))/100*50;return(0,e.jsxs)("svg",{width:.4*r,height:r,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:i,children:(0,e.jsx)("rect",{x:"0",y:s,width:"40",height:100-s})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:"#e53e3e"}),(0,e.jsx)("g",{clipPath:`url(#${i})`,children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:"#e53e3e"})})]})},n=({temperature:t,rh:r,title:a,tooltip:i})=>{const s="number"!=typeof t||isNaN(t)?"N/A":`${(Math.round(10*t)/10).toFixed(1)}\xb0F`,l="number"!=typeof r||isNaN(r)?null:`${(Math.round(10*r)/10).toFixed(1)}%`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",Object.assign({className:"wx-card-header"},i?{"data-tooltip":i}:{},{children:a}))}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(o,{temperature:t,height:85})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:s}),null!==l&&(0,e.jsxs)("div",{className:"wx-secondary-val",children:["RH: ",l]})]})]})]})},c=({inches:t=0,height:r=85})=>{const a=Math.max(0,t||0),i=.85+.3*Math.min(a/2,1),s=0===(l=a)?"#cbd5e0":l<.25?"#63b3ed":l<1?"#3182ce":"#1a365d";var l;return(0,e.jsx)("svg",{width:.5*r,height:r,viewBox:"0 0 50 100",style:{overflow:"visible",transition:"all 0.3s ease"},children:(0,e.jsxs)("g",{transform:`scale(${i})`,"transform-origin":"25 50",children:[(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:0===a?"#f7fafc":s,stroke:s,strokeWidth:"3",strokeLinejoin:"round",style:{transition:"fill 0.3s ease, stroke 0.3s ease"}}),(0,e.jsx)("path",{d:"M 16 52 A 12 12 0 0 0 28 68",fill:"none",stroke:0===a?"#e2e8f0":"#ffffff",strokeWidth:"2.5",strokeLinecap:"round",opacity:.6})]})})},h=({dailyRainInches:t})=>{const r="number"==typeof t?t:0,a=`${r.toFixed(2)} in`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Accumulated rain yesterday.",children:"Rain Yesterday"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(c,{inches:r,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:a}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:r>0?"Accumulation":"Dry Conditions"})]})]})]})},x=({aqi:t})=>{const r="number"!=typeof t||isNaN(t)?0:Math.round(t),{label:a,cardClass:i,badgeClass:s}=(l=r)<=50?{label:"Good",cardClass:"",badgeClass:"wx-badge--good"}:l<=150?{label:"Moderate",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--moderate"}:{label:"Unhealthy",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--unhealthy"};var l;return(0,e.jsxs)("div",{className:`wx-card ${i}`,children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Yesterday's high AQI based on PM2.5 only. 0-50: Good, 50-150: Moderate, 150+: Unhealthy",children:"High AQI"}),(0,e.jsx)("span",{className:`wx-badge ${s}`,children:a})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,e.jsx)("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M18.36 5.64l1.41-1.41"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"4"})]})}),(0,e.jsx)("div",{className:"wx-card-content",children:(0,e.jsx)("div",{className:"wx-primary-val",children:r})})]})]})},u=({windChill:t,height:r=90})=>{const i=(0,a.useId)(),s=60-50*((Math.max(-30,Math.min(50,null!=t?t:50))- -30)/80),l=(d=t)>=32?"#90cdf4":d>=10?"#4299e1":d>=-10?"#2b6cb0":"#1a365d";var d;return(0,e.jsxs)("svg",{width:.4*r,height:r,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:i,children:(0,e.jsx)("rect",{x:"0",y:s,width:"40",height:100-s})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"var(--sys-color-surface, #ffffff)",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:l,style:{transition:"fill 0.3s ease"}}),(0,e.jsx)("g",{clipPath:`url(#${i})`,children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:l,style:{transition:"fill 0.3s ease"}})})]})},m=({windChill:t})=>{const r="number"==typeof t?`${(Math.round(10*t)/10).toFixed(1)}\xb0F`:"N/A";return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"How cold it feels wen combining temperature and wind speed. Thermometer fills from -30 to 50.",children:"Low Wind Chill"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(u,{windChill:t,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:r}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:"Feels Like"})]})]})]})},g=({colorHex:t,size:r=48})=>(0,e.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("line",{x1:"4",y1:"22",x2:"4",y2:"2",stroke:"#4a5568",strokeWidth:"2"}),(0,e.jsx)("path",{d:"M4 4h12l-2 5 2 5H4",fill:t,stroke:"#FFFFFF"===t?"#718096":t,strokeWidth:"1.5"})]}),p=({wbgtTemp:t})=>{const r="number"!=typeof t||isNaN(t)?null:Math.round(10*t)/10,a=null===(i=r)?{colorHex:"#cbd5e0",label:"No Data",badgeClass:""}:i<77?{colorHex:"#edeff1",label:"Normal",badgeClass:""}:i>=77&&i<=81.9?{colorHex:"#38a169",label:"Green - Low",badgeClass:"wx-badge--cold"}:i>=82&&i<=84.9?{colorHex:"#ecc94b",label:"Yellow - Moderate",badgeClass:"wx-badge--heat"}:i>=85&&i<=88.9?{colorHex:"#e53e3e",label:"Red - High",badgeClass:"wx-badge--danger"}:{colorHex:"#1a202c",label:"Black - Extreme",badgeClass:"wx-badge--danger"};var i;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Measures heat stress, combines temperature, humidity, wind speed, sun angle, and solar radiation. 77-82: Low, 82-85: Moderate, 85-89: High, 89+: Extreme risk.",children:"High Wet Bulb Globe Temp"}),"No Data"!==a.label&&"Normal"!==a.label&&(0,e.jsx)("span",{className:`wx-badge ${a.badgeClass}`,children:a.label.split(" - ")[0]})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(g,{colorHex:a.colorHex,size:44})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:null!==r?`${r.toFixed(1)}\xb0F`:"N/A"}),(0,e.jsx)("div",{className:"wx-secondary-val",children:a.label})]})]})]})},f=({heatIndex:t})=>{const r="number"==typeof t?`${(Math.round(10*t)/10).toFixed(1)}\xb0F`:"N/A";return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"How warm it feels when considering temperature and relative humidity.",children:"High Heat Index"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(o,{temperature:t,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:r}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:"Feels Like"})]})]})]})};var w=function(e,t,r,a){return new(r||(r=Promise))(function(i,s){function l(e){try{o(a.next(e))}catch(e){s(e)}}function d(e){try{o(a.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(l,d)}o((a=a.apply(e,t||[])).next())})};const{useState:y,useEffect:v}=t.React;const b=t.ReactRedux.connect(e=>{const t=e.widgetsState;let r="";if(t){const a=Object.keys(t);for(let t=0;t<a.length;t++){const i=e.getIn(["widgetsState",a[t],"selectedStation"]);if(i){r=i;break}}}return{selectedStation:r}})(function(a){var i,s;const{config:l,useDataSources:o,selectedStation:c,theme:u}=a,[g,b]=y(null),[j,N]=y(!1),[k,M]=y(null),W=null===(i=null==o?void 0:o[0])||void 0===i?void 0:i.dataSourceId,$=null===(s=null==o?void 0:o[1])||void 0===s?void 0:s.dataSourceId;return v(()=>{var e,r,a,i,s,d,n,h,x,u,m,g,p;if(!c||!W)return;let f=!0;N(!0),M(null);const y=(null===(e=null==l?void 0:l.dailyWx)||void 0===e?void 0:e.stationNameField)||"station_name",v=(null===(r=null==l?void 0:l.dailyWx)||void 0===r?void 0:r.highAirTempField)||"airtc_max",j=(null===(a=null==l?void 0:l.dailyWx)||void 0===a?void 0:a.lowAirTempField)||"airtc_min",k=(null===(i=null==l?void 0:l.dailyWx)||void 0===i?void 0:i.highWindSpeedField)||"ws_ms_max",C=(null===(s=null==l?void 0:l.dailyWx)||void 0===s?void 0:s.timeHighWindSpeedField)||"ws_ms_tmx",S=(null===(d=null==l?void 0:l.dailyWx)||void 0===d?void 0:d.lowWindChillField)||"windchill_c_min",F=(null===(n=null==l?void 0:l.dailyWx)||void 0===n?void 0:n.highWetBulbGlobeField)||"wetbulbglobet_c_max",T=(null===(h=null==l?void 0:l.dailyWx)||void 0===h?void 0:h.highHeatIndexField)||"heatindex_c_max",D=(null===(x=null==l?void 0:l.dailyWx)||void 0===x?void 0:x.yesterdaysRainField)||"rain_mm_tot_tot",H=(null===(u=null==l?void 0:l.dailyWx)||void 0===u?void 0:u.highAqiField)||"aqi_max",A=(null===(m=null==l?void 0:l.dailyWx)||void 0===m?void 0:m.highRhField)||"rh_max",R=(null===(g=null==l?void 0:l.dailyWx)||void 0===g?void 0:g.lowRhField)||"rh_min",_=(null===(p=null==l?void 0:l.fiveMinWx)||void 0===p?void 0:p.windDirField)||"winddir",I="time",z=t.DataSourceManager.getInstance(),B=(e,t)=>w(this,void 0,void 0,function*(){if(!e)return null;let r=z.getDataSource(e);return!r&&t&&(r=yield z.createDataSourceByUseDataSource(t)),r}),L=e=>{const t=e=>String(e).padStart(2,"0");return`${e.getUTCFullYear()}-${t(e.getUTCMonth()+1)}-${t(e.getUTCDate())} ${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())}`};return(()=>{w(this,void 0,void 0,function*(){try{const e=yield B(W,null==o?void 0:o[0]),t=$?yield B($,null==o?void 0:o[1]):null,r=new Date;r.setHours(0,0,0,0);const a=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),s=String(r.getDate()).padStart(2,"0"),l={where:`${y} = '${c}' AND time >= DATE '${`${a}-${i}-${s}`}'`,outFields:["*"],returnGeometry:!1},d=yield null==e?void 0:e.query(l);if(!f)return;if((null==d?void 0:d.records)&&d.records.length>0){const e=d.records[0].getData(),r=e[k],a=e[C];let i;if(t&&a)try{const e=new Date(a),r=e.getTime()-36e4,s=e.getTime()+36e4,l=L(new Date(r)),d=L(new Date(s)),o={where:`${y} = '${c}' AND ${I} >= TIMESTAMP '${l}' AND ${I} <= TIMESTAMP '${d}'`,outFields:[_,I],orderByFields:[`${I} ASC`],returnGeometry:!1},n=yield t.query(o);if((null==n?void 0:n.records)&&n.records.length>0){const t=e.getTime();let r=n.records[0],a=Math.abs(new Date(r.getData()[I]).getTime()-t);n.records.forEach(e=>{const i=new Date(e.getData()[I]).getTime(),s=Math.abs(i-t);s<a&&(a=s,r=e)}),i=r.getData()[_]}}catch(e){console.warn("[5-Min Telemetry Query Warning]",e)}b({stationId:e[y],highTemp:1.8*e[v]+32,lowTemp:1.8*e[j]+32,highWindSpeed:2.23694*r,highWindTime:a,highWindDir:i,lowWindChill:1.8*e[S]+32,highWbgt:1.8*e[F]+32,highHeatIndex:1.8*e[T]+32,yesterdaysRain:.0393701*(e[D]||0),highAqi:e[H],highRh:e[A],lowRh:e[R],rawAttributes:e}),N(!1)}else b(null),N(!1)}catch(e){if(!f)return;N(!1),console.error("[Daily Summary Query Error]",e),M((null==e?void 0:e.message)||"Failed to query weather summary layers")}})})(),()=>{f=!1}},[W,$,c,l]),(0,e.jsx)("div",{css:r(),className:"widget-weather-cards wx-dashboard-container",children:c?(0,e.jsxs)("div",{style:{height:"100%",overflow:"auto"},children:[(0,e.jsx)("div",{className:"wx-section-header",children:(0,e.jsx)("h2",{className:"wx-section-title",children:"Yesterday's Conditions"})}),j&&(0,e.jsx)("p",{children:(0,e.jsx)("em",{children:"Loading telemetry records..."})}),k&&(0,e.jsxs)("p",{style:{color:"red"},children:[(0,e.jsx)("strong",{children:"Error:"})," ",k]}),g?(0,e.jsxs)("div",{className:"wx-card-grid",children:[(0,e.jsx)(n,{title:"High Temperature",tooltip:"High Temperature and high Relative Humidity from yesterday.",temperature:g.highTemp,rh:g.highRh}),(0,e.jsx)(n,{title:"Low Temperature",tooltip:"Low Temperature and low Relative Humidity from yesterday.",temperature:g.lowTemp,rh:g.lowRh}),(0,e.jsx)(d,{speedMph:g.highWindSpeed,directionDegrees:g.highWindDir||0}),(0,e.jsx)(h,{dailyRainInches:g.yesterdaysRain}),(0,e.jsx)(x,{aqi:g.highAqi}),(0,e.jsx)(m,{windChill:g.lowWindChill}),(0,e.jsx)(p,{wbgtTemp:g.highWbgt}),(0,e.jsx)(f,{heatIndex:g.highHeatIndex})]}):!j&&(0,e.jsx)("p",{children:"No historical data retrieved yet."})]}):(0,e.jsxs)("div",{className:"wx-cards-placeholder",children:[(0,e.jsx)("h6",{children:"Yesterday's Summary Widget"}),(0,e.jsx)("p",{className:"mb-0 text-muted",style:{fontSize:"12px"},children:"Waiting for station selection from Redux..."})]})})});function j(e){s.p=e}})(),l})())}}});