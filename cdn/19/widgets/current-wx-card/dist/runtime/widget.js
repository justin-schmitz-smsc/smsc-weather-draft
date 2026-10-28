System.register(["jimu-core/emotion","jimu-core","jimu-core/react"],function(e,r){var t={},a={},i={};return{setters:[function(e){t.Fragment=e.Fragment,t.jsx=e.jsx,t.jsxs=e.jsxs},function(e){a.DataSourceManager=e.DataSourceManager,a.React=e.React,a.ReactRedux=e.ReactRedux,a.css=e.css},function(){}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=t},8972(e){"use strict";e.exports=i}},r={};function l(t){var a=r[t];if(void 0!==a)return a.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,l),i.exports}l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var s={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(s),l.d(s,{__set_webpack_public_path__:()=>C,default:()=>k});var e=l(7386),r=l(9244);const t=e=>{const t="var(--sys-color-on-surface, var(--ref-palette-neutral-900, #1a202c))",a="var(--sys-color-outline, var(--ref-palette-neutral-600, #718096))",i="var(--sys-color-outline-variant, var(--ref-palette-neutral-300, #e2e8f0))";return r.css`
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
      border-bottom: 1px solid ${i};
    }

    .wx-section-title {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 700;
      color: ${t};
    }

    .wx-station-badge {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${a};
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
      color: ${t};
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
      color: ${t};
      font-variant-numeric: tabular-nums;
    }

    .wx-secondary-val {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${a};
      margin-top: 4px;
      line-height: 1.2;
    }
  `};l(8972);const a=({speedKnots:r,directionDegrees:t,size:a=100})=>{let i=5*Math.round((r||0)/5);const l=0===i,s=Math.floor(i/50);i%=50;const o=Math.floor(i/10);i%=10;const d=Math.floor(i/5),n=[];let c=-45;if(!l){for(let r=0;r<s;r++)n.push((0,e.jsx)("polygon",{points:`0,${c} 15,${c+-6} 0,${c+8}`,fill:"currentColor"},`pennant-${r}`)),c+=10;for(let r=0;r<o;r++)n.push((0,e.jsx)("line",{x1:"0",y1:c,x2:15,y2:c+-6,stroke:"currentColor",strokeWidth:"2.5"},`full-${r}`)),c+=6;for(let r=0;r<d;r++){const t=0===s&&0===o?c+6:c;n.push((0,e.jsx)("line",{x1:"0",y1:t,x2:7.5,y2:t+-3,stroke:"currentColor",strokeWidth:"2.5"},`half-${r}`))}}return(0,e.jsxs)("svg",{width:a,height:a,viewBox:"-60 -60 120 120",className:"wind-barb-svg",style:{overflow:"visible"},children:[(0,e.jsx)("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#e0e0e0",strokeWidth:"2",strokeDasharray:"2,4"}),(0,e.jsx)("g",{transform:`rotate(${t})`,children:l?(0,e.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-50",stroke:"currentColor",strokeWidth:"2.5"}),n]})})]})},i=({speedMph:r,directionDegrees:t,directionCardinal:i})=>{const l="number"!=typeof r||isNaN(r)?0:r,s="number"!=typeof t||isNaN(t)?0:t,o=Math.round(.868976*l);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Displays the current wind speed in mph and kts, as well as wind direction, measured at 10 feet. Renders a wind barb.",children:"Wind"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(a,{speedKnots:o,directionDegrees:s,size:75})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsxs)("div",{className:"wx-primary-val",children:[(Math.round(10*l)/10).toFixed(1),(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600},children:" mph"})]}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:[o," kts \u2022 ",Math.round(s),"\xb0  (",i,")"]})]})]})]})},o=({colorHex:r,size:t=48})=>(0,e.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,e.jsx)("line",{x1:"4",y1:"22",x2:"4",y2:"2",stroke:"#4a5568",strokeWidth:"2"}),(0,e.jsx)("path",{d:"M4 4h12l-2 5 2 5H4",fill:r,stroke:"#FFFFFF"===r?"#718096":r,strokeWidth:"1.5"})]}),d=({wbgtTemp:r})=>{const t="number"!=typeof r||isNaN(r)?null:Math.round(10*r)/10,a=null===(i=t)?{colorHex:"#cbd5e0",label:"No Data",badgeClass:""}:i<77?{colorHex:"#edeff1",label:"Normal",badgeClass:""}:i>=77&&i<=81.9?{colorHex:"#38a169",label:"Green - Low",badgeClass:"wx-badge--cold"}:i>=82&&i<=84.9?{colorHex:"#ecc94b",label:"Yellow - Moderate",badgeClass:"wx-badge--heat"}:i>=85&&i<=88.9?{colorHex:"#e53e3e",label:"Red - High",badgeClass:"wx-badge--danger"}:{colorHex:"#1a202c",label:"Black - Extreme",badgeClass:"wx-badge--danger"};var i;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Measures heat stress, combines temperature, humidity, wind speed, sun angle, and solar radiation. 77-82: Low, 82-85: Moderate, 85-89: High, 89+: Extreme risk.",children:"Wet Bulb Globe Temp"}),"No Data"!==a.label&&"Normal"!==a.label&&(0,e.jsx)("span",{className:`wx-badge ${a.badgeClass}`,children:a.label.split(" - ")[0]})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(o,{colorHex:a.colorHex,size:44})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:null!==t?`${t.toFixed(1)}\xb0F`:"N/A"}),(0,e.jsx)("div",{className:"wx-secondary-val",children:a.label})]})]})]})},n=({temperature:r,height:t=90})=>{const a=60-Math.max(0,Math.min(100,r||0))/100*50;return(0,e.jsxs)("svg",{width:.4*t,height:t,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"temp-fill-clip",children:(0,e.jsx)("rect",{x:"0",y:a,width:"40",height:100-a})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:"#e53e3e"}),(0,e.jsx)("g",{clipPath:"url(#temp-fill-clip)",children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:"#e53e3e"})})]})},c=({temperature:r,rh:t,dewPt:a})=>{const i="number"!=typeof r||isNaN(r)?"N/A":`${(Math.round(10*r)/10).toFixed(1)}\xb0F`,l="number"!=typeof t||isNaN(t)?"N/A":`${(Math.round(10*t)/10).toFixed(1)}%`,s="number"!=typeof a||isNaN(a)?"N/A":`${Math.round(10*a/10).toFixed(1)}\xb0F`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Current air temperature measured at 10 feet. This card also shows relative humidity and dew point.",children:"Air Temperature"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(n,{temperature:r,height:85})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:i}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:["RH: ",l," | DewPt: ",s]})]})]})]})},x=({windChill:r,height:t=90})=>{const a=60-50*((Math.max(-30,Math.min(50,null!=r?r:50))- -30)/80),i=(l=r)>=32?"#90cdf4":l>=10?"#4299e1":l>=-10?"#2b6cb0":"#1a365d";var l;return(0,e.jsxs)("svg",{width:.4*t,height:t,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:"windchill-fill-clip",children:(0,e.jsx)("rect",{x:"0",y:a,width:"40",height:100-a})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:i,style:{transition:"fill 0.3s ease"}}),(0,e.jsx)("g",{clipPath:"url(#windchill-fill-clip)",children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:i,style:{transition:"fill 0.3s ease"}})})]})},h=({windChill:r})=>{const t="number"==typeof r?`${(Math.round(10*r)/10).toFixed(1)}\xb0F`:"N/A";return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"How cold it feels wen combining temperature and wind speed.",children:"Wind Chill"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(x,{windChill:r,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:t}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:"Feels Like"})]})]})]})},u=({heatIndex:r})=>{const t="number"==typeof r?`${(Math.round(10*r)/10).toFixed(1)}\xb0F`:"N/A";return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"How warm it feels when considering temperature and relative humidity.",children:"Heat Index"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(n,{temperature:r,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:t}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:"Feels Like"})]})]})]})},m=({inches:r=0,height:t=85})=>{const a=Math.max(0,r||0),i=.85+.3*Math.min(a/2,1),l=0===(s=a)?"#cbd5e0":s<.25?"#63b3ed":s<1?"#3182ce":"#1a365d";var s;return(0,e.jsx)("svg",{width:.5*t,height:t,viewBox:"0 0 50 100",style:{overflow:"visible",transition:"all 0.3s ease"},children:(0,e.jsxs)("g",{transform:`scale(${i})`,"transform-origin":"25 50",children:[(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:0===a?"#f7fafc":l,stroke:l,strokeWidth:"3",strokeLinejoin:"round",style:{transition:"fill 0.3s ease, stroke 0.3s ease"}}),(0,e.jsx)("path",{d:"M 16 52 A 12 12 0 0 0 28 68",fill:"none",stroke:0===a?"#e2e8f0":"#ffffff",strokeWidth:"2.5",strokeLinecap:"round",opacity:.6})]})})},p=({dailyRainInches:r})=>{const t="number"==typeof r?r:0,a=`${t.toFixed(2)} in`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Accumulated rain since midnight.",children:"Rain Since Midnight"})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(m,{inches:t,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:a}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:t>0?"Accumulation":"Dry Conditions"})]})]})]})},f=({aqi:r,pm25:t})=>{const a="number"!=typeof r||isNaN(r)?0:Math.round(r),{label:i,cardClass:l,badgeClass:s}=(o=a)<=50?{label:"Good",cardClass:"",badgeClass:"wx-badge--good"}:o<=150?{label:"Moderate",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--moderate"}:{label:"Unhealthy",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--unhealthy"};var o;return(0,e.jsxs)("div",{className:`wx-card ${l}`,children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"AQI based on PM2.5 only. 0-50: Good, 50-150: Moderate, 150+: Unhealthy",children:"AQI"}),(0,e.jsx)("span",{className:`wx-badge ${s}`,children:i})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,e.jsx)("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M18.36 5.64l1.41-1.41"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"4"})]})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:a}),(0,e.jsx)("div",{className:"wx-secondary-val",children:null!=t?`PM2.5: ${t.toFixed(1)} \xb5g/m\xb3`:"EPA Standard"})]})]})]})},w=({cloudCover:r,size:t=100})=>{const a=Math.max(0,Math.min(100,r))/100*96,i=96-a;return(0,e.jsx)("div",{style:{width:t,height:t,display:"inline-block"},children:(0,e.jsxs)("svg",{viewBox:"0 0 96 96",width:"100%",height:"100%",children:[(0,e.jsxs)("defs",{children:[(0,e.jsx)("clipPath",{id:"sun-clip-large",children:(0,e.jsx)("rect",{x:"0",y:"0",width:i,height:"96"})}),(0,e.jsx)("clipPath",{id:"cloud-clip-large",children:(0,e.jsx)("rect",{x:i,y:"0",width:a,height:"96"})})]}),(0,e.jsxs)("g",{clipPath:"url(#sun-clip-large)",children:[(0,e.jsx)("circle",{cx:"48",cy:"48",r:"20",fill:"#F59E0B"}),(0,e.jsx)("path",{d:"M48 12v10M48 74v10M12 48h10M74 48h10M22.5 22.5l7 7M66.5 66.5l7 7M22.5 73.5l7-7M66.5 29.5l7-7",stroke:"#F59E0B",strokeWidth:"6",strokeLinecap:"round"})]}),(0,e.jsx)("g",{clipPath:"url(#cloud-clip-large)",children:(0,e.jsx)("path",{d:"M71.4 43.5C68.9 29.8 57.0 20 43 20c-11.5 0-21.5 6.6-26.5 16.2C12.0 37.4 8 42.4 8 48.5c0 6.9 5.6 12.5 12.5 12.5h51c6.4 0 11.5-5.1 11.5-11.5 0-3.3-1.4-6.3-3.6-8.5z",fill:"#94A3B8"})})]})})},g=r=>{const{cloudCoverPercent:t,solarRadiation:a}=r,i="number"==typeof t&&!isNaN(t);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":"Estimated from clear-sky solar radiation potential and measured solar radiation. The accuracy of this estimate decays rapidly at low sun angles.",children:"Cloud Cover"})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(w,{cloudCover:t})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:i?`${t}%`:"--"}),(0,e.jsx)("div",{className:"wx-secondary-val",children:i?"number"!=typeof a||isNaN(a)?"Estimated":`Solar Rad: ${a.toFixed(2)} W/m\xb2`:"Unavailable / Nighttime"})]})]})]})};var v=function(e,r,t,a){return new(t||(t=Promise))(function(i,l){function s(e){try{d(a.next(e))}catch(e){l(e)}}function o(e){try{d(a.throw(e))}catch(e){l(e)}}function d(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(s,o)}d((a=a.apply(e,r||[])).next())})};const{useState:y,useEffect:b}=r.React,j=e=>{const r=e=>String(e).padStart(2,"0");return`${e.getUTCFullYear()}-${r(e.getUTCMonth()+1)}-${r(e.getUTCDate())} ${r(e.getUTCHours())}:${r(e.getUTCMinutes())}:${r(e.getUTCSeconds())}`},N=e=>v(void 0,void 0,void 0,function*(){if(!(null==e?void 0:e.dataSourceId))return null;const t=r.DataSourceManager.getInstance();let a=t.getDataSource(e.dataSourceId);return a||(a=yield t.createDataSourceByUseDataSource(e)),a});const k=r.ReactRedux.connect(e=>{const r=e.widgetsState;let t="";return r&&Object.keys(r).forEach(r=>{const a=e.getIn(["widgetsState",r,"selectedStation"]);a&&(t=a)}),{selectedStation:t}})(function(r){var a;const{config:l,useDataSources:s,selectedStation:o,theme:n}=r,[x,m]=y(null),[w,k]=y(!1),[C,M]=y(null);b(()=>{if(!o||!s||0===s.length)return;let e=!0;const r=(...r)=>v(this,[...r],void 0,function*(r=!1){var t,a,i,d,n,c,x,h,u,p,f,w,g,v,y,b,C,W;r||k(!0),M(null);try{const M=null==s?void 0:s[0],$=null==s?void 0:s[1],F=M?M.asMutable({deep:!0}):void 0,S=$?$.asMutable({deep:!0}):void 0,[D,R]=yield Promise.all([N(F),N(S)]);if(!D)throw new Error("Current weather telemetry data source unavailable.");const P=(null===(t=null==l?void 0:l.currentWx)||void 0===t?void 0:t.stationNameField)||"station_name",T=(null===(a=null==l?void 0:l.currentWx)||void 0===a?void 0:a.airTempField)||"airtf",A=(null===(i=null==l?void 0:l.currentWx)||void 0===i?void 0:i.windDirField)||"winddir",H=(null===(d=null==l?void 0:l.currentWx)||void 0===d?void 0:d.windDirCardinalField)||"winddirc",I=(null===(n=null==l?void 0:l.currentWx)||void 0===n?void 0:n.windSpeedField)||"ws_mph",B=(null===(c=null==l?void 0:l.currentWx)||void 0===c?void 0:c.windChillField)||"windchill_f",z=(null===(x=null==l?void 0:l.currentWx)||void 0===x?void 0:x.wetBulbGlobeField)||"wetbulbglobet_f",_=(null===(h=null==l?void 0:l.currentWx)||void 0===h?void 0:h.heatIndexField)||"heatindex_f",E=(null===(u=null==l?void 0:l.currentWx)||void 0===u?void 0:u.todaysRainField)||"todaysrain_mm",G=(null===(p=null==l?void 0:l.currentWx)||void 0===p?void 0:p.aqiField)||"epa_aqi",q=(null===(f=null==l?void 0:l.currentWx)||void 0===f?void 0:f.pm25Field)||"pm2_5_10min",L=(null===(w=null==l?void 0:l.currentWx)||void 0===w?void 0:w.dewPtField)||"tdf",O=(null===(g=null==l?void 0:l.currentWx)||void 0===g?void 0:g.rhField)||"rh",U=(null===(v=null==l?void 0:l.currentWx)||void 0===v?void 0:v.solarWattsField)||"slrw",Q={where:`${P} = '${o}'`,outFields:["*"],returnGeometry:!1,cacheBust:!0},Z=D.query(Q);let K=Promise.resolve(null);if(R){const e=new Date,r=new Date(e.getTime()-864e5),t=18e5,a=Math.floor(r.getTime()/t)*t,i=a+t,s=j(new Date(a-6e4)),d=j(new Date(i+6e4)),n=(null===(y=null==l?void 0:l.halfHourWx)||void 0===y?void 0:y.timeField)||"time",c=(null===(b=null==l?void 0:l.halfHourWx)||void 0===b?void 0:b.rsoField)||"rso",x=`${P} = '${o}' AND ${n} >= TIMESTAMP '${s}' AND ${n} <= TIMESTAMP '${d}'`;console.log(`[RSO Query Where Clause]: ${x}`);const h={where:x,outFields:[n,c],orderByFields:[`${n} ASC`],returnGeometry:!1,cacheBust:!0};K=R.query(h)}console.log(`[Cards Querying] ${r?"Polling":"Initial"} multi-source query for: ${o}`);const[Y,V]=yield Promise.all([Z,K]);if(!e)return;if(k(!1),(null==Y?void 0:Y.records)&&Y.records.length>0){const e=Y.records[0].getData(),r=e[U],t="number"!=typeof r||isNaN(r)?0:r;let a=null,i=0;if((null==V?void 0:V.records)&&V.records.length>=2){const e=(null===(C=null==l?void 0:l.halfHourWx)||void 0===C?void 0:C.rsoField)||"rso",r=(null===(W=null==l?void 0:l.halfHourWx)||void 0===W?void 0:W.timeField)||"time",s=V.records[0].getData(),o=V.records[1].getData();console.log(`HalfHour Q Results: ${s[e]}`),console.log(`HalfHour Q Results: ${s[r]}`);const d=new Date(s[r]).getTime(),n=new Date(o[r]).getTime(),c=s[e],x=o[e],h="number"==typeof d&&!isNaN(d)&&"number"==typeof n&&!isNaN(n),u="number"==typeof c&&!isNaN(c)&&"number"==typeof x&&!isNaN(x);if(h&&u){const e={timestamp:d,rso:c},r={timestamp:n,rso:x},l=(new Date).getTime()-864e5,s=r.timestamp-e.timestamp;if(s>0){const o=Math.max(0,Math.min(1,(l-e.timestamp)/s));console.log(`RSO vals: ${e.rso} ${r.rso}`);const d=e.rso+o*(r.rso-e.rso);if(i=d/.0036,console.log(`Watts RSO: ${i}`),"number"==typeof d&&!isNaN(d)&&d>0){const e=100*(1-t/i);console.log(`CloudCover: ${e}`),isNaN(e)||(a=Math.round(Math.max(0,Math.min(100,e))))}}}}const s=e[E],o="number"!=typeof s||isNaN(s)?0:.0393701*s,d={stationId:e[P],temperature:e[T],windDir:e[A],windDirCardinal:e[H],windSpeed:e[I],windChill:e[B],wetBulbGlobe:e[z],heatIndex:e[_],todaysRain:o,aqi:e[G],pm25:e[q],dewPt:e[L],rh:e[O],solarRadiationWatts:t,clearSkyRadiation:i,cloudCoverPercent:a,rawAttributes:e};m(d)}else console.warn(`[Cards Query Warning] No current records found matching ${o}`),m(null)}catch(r){if(!e)return;k(!1),console.error("[Cards Query Error]",r),M((null==r?void 0:r.message)||"Failed to query weather layers")}});r(!1);const t=setInterval(()=>{r(!0)},6e4);return()=>{e=!1,clearInterval(t)}},[s,o,l]);const W=null===(a=null==x?void 0:x.rawAttributes)||void 0===a?void 0:a.time,$=!W||Date.now()-new Date(W).getTime()>6e5;return console.log(W),console.log(`Is Old? ${$}`),(0,e.jsx)("div",{css:t(),className:"widget-weather-cards wx-dashboard-container",children:o?(0,e.jsxs)("div",{style:{height:"100%",overflow:"auto"},children:[(0,e.jsx)("div",{className:"wx-section-header",children:(0,e.jsx)("h2",{className:"wx-section-title",children:"Current Conditions at a Glance "})}),w&&(0,e.jsx)("p",{children:(0,e.jsx)("em",{children:"Loading telemetry records..."})}),C&&(0,e.jsxs)("p",{style:{color:"red"},children:[(0,e.jsx)("strong",{children:"Error:"})," ",C]}),x?$?(0,e.jsx)("p",{children:"Ooops, there was an issue gathering current conditions for this station. Weather Data is more than 10 minutes old."}):(0,e.jsxs)("div",{className:"wx-card-grid",children:[(0,e.jsx)(c,{temperature:x.temperature,dewPt:x.dewPt,rh:x.rh}),(0,e.jsx)(i,{speedMph:x.windSpeed,directionDegrees:x.windDir,directionCardinal:x.windDirCardinal}),(0,e.jsx)(p,{dailyRainInches:x.todaysRain}),"number"==typeof x.clearSkyRadiation&&!isNaN(x.clearSkyRadiation)&&x.clearSkyRadiation>=200&&(0,e.jsx)(g,{cloudCoverPercent:x.cloudCoverPercent,solarRadiation:x.solarRadiationWatts}),"number"==typeof x.wetBulbGlobe&&!isNaN(x.wetBulbGlobe)&&x.wetBulbGlobe>=77&&(0,e.jsx)(d,{wbgtTemp:x.wetBulbGlobe}),"number"==typeof x.heatIndex&&!isNaN(x.heatIndex)&&x.heatIndex>=77&&(0,e.jsx)(u,{heatIndex:x.heatIndex}),"number"==typeof x.windChill&&!isNaN(x.windChill)&&x.windChill<=35&&(0,e.jsx)(h,{windChill:x.windChill}),"number"==typeof x.aqi&&!isNaN(x.aqi)&&x.aqi>50&&(0,e.jsx)(f,{aqi:x.aqi,pm25:x.pm25})]}):!w&&(0,e.jsx)("p",{children:"No data retrieved yet."})]}):(0,e.jsxs)("div",{className:"wx-cards-placeholder",children:[(0,e.jsx)("h6",{children:"Weather Cards Widget"}),(0,e.jsx)("p",{className:"mb-0 text-muted",style:{fontSize:"12px"},children:"Waiting for station selection from Redux..."})]})})});function C(e){l.p=e}})(),s})())}}});