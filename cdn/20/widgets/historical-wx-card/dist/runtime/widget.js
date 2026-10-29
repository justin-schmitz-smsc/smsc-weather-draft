System.register(["jimu-core/emotion","jimu-core","jimu-core/react"],function(e,t){var a={},r={},i={};return{setters:[function(e){a.Fragment=e.Fragment,a.jsx=e.jsx,a.jsxs=e.jsxs},function(e){r.DataSourceManager=e.DataSourceManager,r.React=e.React,r.ReactRedux=e.ReactRedux,r.css=e.css},function(e){i.useId=e.useId}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=r},7386(e){"use strict";e.exports=a},8972(e){"use strict";e.exports=i}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var n={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(n),o.d(n,{__set_webpack_public_path__:()=>M,default:()=>N});var e=o(7386),t=o(9244);const a=e=>{const a="var(--sys-color-on-surface, var(--ref-palette-neutral-900, #1a202c))",r="var(--sys-color-outline, var(--ref-palette-neutral-600, #718096))",i="var(--sys-color-outline-variant, var(--ref-palette-neutral-300, #e2e8f0))";return t.css`
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
      color: ${a};
    }

    .wx-station-badge {
      font-size: 0.8125rem;
      font-weight: 500;
      color: ${r};
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
      text-decoration: underline dotted ${r};
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
      color: ${r};
      margin-top: 4px;
      line-height: 1.2;
    }
  `};var r=o(8972);const i=({timeRange:t,setTimeRange:a})=>(0,e.jsx)("div",{children:(0,e.jsxs)("select",{className:"form-control form-control-sm w-auto",value:t,onChange:e=>a(e.target.value),children:[(0,e.jsx)("option",{value:"current-month",children:"Current Month (This Year)"}),(0,e.jsx)("option",{value:"all-time",children:"All Time"}),(0,e.jsx)("option",{value:"1",children:"January (All-Time)"}),(0,e.jsx)("option",{value:"2",children:"February (All-Time)"}),(0,e.jsx)("option",{value:"3",children:"March (All-Time)"}),(0,e.jsx)("option",{value:"4",children:"April (All-Time)"}),(0,e.jsx)("option",{value:"5",children:"May (All-Time)"}),(0,e.jsx)("option",{value:"6",children:"June (All-Time)"}),(0,e.jsx)("option",{value:"7",children:"July (All-Time)"}),(0,e.jsx)("option",{value:"8",children:"August (All-Time)"}),(0,e.jsx)("option",{value:"9",children:"September (All-Time)"}),(0,e.jsx)("option",{value:"10",children:"October (All-Time)"}),(0,e.jsx)("option",{value:"11",children:"November (All-Time)"}),(0,e.jsx)("option",{value:"12",children:"December (All-Time)"})]})}),s=({temperature:t,height:a=90})=>{const i=`temp-fill-clip-${(0,r.useId)().replace(/:/g,"")}`,o=60-Math.max(0,Math.min(100,t||0))/100*50;return(0,e.jsxs)("svg",{width:.4*a,height:a,viewBox:"0 0 40 100",className:"thermometer-svg",style:{overflow:"visible"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:i,children:(0,e.jsx)("rect",{x:"0",y:o,width:"40",height:100-o})})}),(0,e.jsx)("path",{d:"M 15 10 A 5 5 0 0 1 25 10 L 25 62 A 12 12 0 1 1 15 62 Z",fill:"#ffffff",stroke:"#4a5568",strokeWidth:"2.5"}),(0,e.jsx)("line",{x1:"26",y1:"60",x2:"31",y2:"60",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"47.5",x2:"29",y2:"47.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"35",x2:"31",y2:"35",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"22.5",x2:"29",y2:"22.5",stroke:"#cbd5e0",strokeWidth:"1.5"}),(0,e.jsx)("line",{x1:"26",y1:"10",x2:"31",y2:"10",stroke:"#a0aec0",strokeWidth:"1.5"}),(0,e.jsx)("circle",{cx:"20",cy:"72",r:"8",fill:"#e53e3e"}),(0,e.jsx)("g",{clipPath:`url(#${i})`,children:(0,e.jsx)("rect",{x:"17.5",y:"8",width:"5",height:"64",fill:"#e53e3e"})})]})},l=({temperature:t,date:a,title:r,tooltip:i})=>{const o="number"!=typeof t||isNaN(t)?"N/A":`${(Math.round(10*t)/10).toFixed(1)}\xb0F`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",Object.assign({className:"wx-card-header"},i?{"data-tooltip":i}:{},{children:r}))}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(s,{temperature:t,height:85})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:o}),null!==a&&(0,e.jsx)("div",{className:"wx-secondary-val",children:a})]})]})]})},d=({aqi:t,date:a,tooltip:r,title:i})=>{const o="number"!=typeof t||isNaN(t)?0:Math.round(t),{label:n,cardClass:s,badgeClass:l}=(d=o)<=50?{label:"Good",cardClass:"",badgeClass:"wx-badge--good"}:d<=150?{label:"Moderate",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--moderate"}:{label:"Unhealthy",cardClass:"wx-card--alert-heat",badgeClass:"wx-badge--unhealthy"};var d;return(0,e.jsxs)("div",{className:`wx-card ${s}`,children:[(0,e.jsxs)("div",{className:"wx-card-header-bar",children:[(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":r,children:i}),(0,e.jsx)("span",{className:`wx-badge ${l}`,children:n})]}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,e.jsx)("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M18.36 5.64l1.41-1.41"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"4"})]})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsx)("div",{className:"wx-primary-val",children:o}),(0,e.jsx)("div",{className:"wx-secondary-val",children:a})]})]})]})},c=({speedKnots:t,directionDegrees:a,size:r=100})=>{let i=5*Math.round((t||0)/5);const o=0===i,n=Math.floor(i/50);i%=50;const s=Math.floor(i/10);i%=10;const l=Math.floor(i/5),d=[];let c=-45;if(!o){for(let t=0;t<n;t++)d.push((0,e.jsx)("polygon",{points:`0,${c} 15,${c+-6} 0,${c+8}`,fill:"currentColor"},`pennant-${t}`)),c+=10;for(let t=0;t<s;t++)d.push((0,e.jsx)("line",{x1:"0",y1:c,x2:15,y2:c+-6,stroke:"currentColor",strokeWidth:"2.5"},`full-${t}`)),c+=6;for(let t=0;t<l;t++){const a=0===n&&0===s?c+6:c;d.push((0,e.jsx)("line",{x1:"0",y1:a,x2:7.5,y2:a+-3,stroke:"currentColor",strokeWidth:"2.5"},`half-${t}`))}}return(0,e.jsxs)("svg",{width:r,height:r,viewBox:"-60 -60 120 120",className:"wind-barb-svg",style:{overflow:"visible"},children:[(0,e.jsx)("circle",{cx:"0",cy:"0",r:"52",fill:"none",stroke:"#e0e0e0",strokeWidth:"2",strokeDasharray:"2,4"}),(0,e.jsx)("g",{transform:`rotate(${a})`,children:o?(0,e.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"-50",stroke:"currentColor",strokeWidth:"2.5"}),d]})})]})},h=({title:t,speedMph:a,directionDegrees:r,date:i,tooltip:o})=>{const n="number"!=typeof a||isNaN(a)?0:a,s="number"!=typeof r||isNaN(r)?0:r,l=Math.round(.868976*n);return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":o,children:t})}),(0,e.jsxs)("div",{className:"wx-card-body",children:[(0,e.jsx)("div",{className:"wx-graphic-frame",children:(0,e.jsx)(c,{speedKnots:l,directionDegrees:s,size:75})}),(0,e.jsxs)("div",{className:"wx-card-content",children:[(0,e.jsxs)("div",{className:"wx-primary-val",children:[(Math.round(10*n)/10).toFixed(1),(0,e.jsx)("span",{style:{fontSize:"1.25rem",fontWeight:600},children:" mph"})]}),(0,e.jsxs)("div",{className:"wx-secondary-val",children:[l," kts \u2022 ",i]})]})]})]})},x=({inches:t=0,height:a=85})=>{const r=Math.max(0,t||0),i=.85+.3*Math.min(r/2,1),o=0===(n=r)?"#cbd5e0":n<.25?"#63b3ed":n<1?"#3182ce":"#1a365d";var n;return(0,e.jsx)("svg",{width:.5*a,height:a,viewBox:"0 0 50 100",style:{overflow:"visible",transition:"all 0.3s ease"},children:(0,e.jsxs)("g",{transform:`scale(${i})`,"transform-origin":"25 50",children:[(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:0===r?"#f7fafc":o,stroke:o,strokeWidth:"3",strokeLinejoin:"round",style:{transition:"fill 0.3s ease, stroke 0.3s ease"}}),(0,e.jsx)("path",{d:"M 16 52 A 12 12 0 0 0 28 68",fill:"none",stroke:0===r?"#e2e8f0":"#ffffff",strokeWidth:"2.5",strokeLinecap:"round",opacity:.6})]})})},p=({dailyRainInches:t,tooltip:a,title:r,date:i})=>{const o="number"==typeof t?t:0,n=`${o.toFixed(2)} in`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":a,children:r})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(x,{inches:o,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:n}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:i})]})]})]})},u=({percent:t=0,height:a=85})=>{const r=Math.max(0,Math.min(100,t||0)),i="#3182ce",o=i,n=r/100*80,s=90-n;return(0,e.jsxs)("svg",{width:.5*a,height:a,viewBox:"0 0 50 100",style:{overflow:"visible",transition:"all 0.3s ease"},children:[(0,e.jsx)("defs",{children:(0,e.jsx)("clipPath",{id:`raindrop-clip-${t}`,children:(0,e.jsx)("rect",{x:"0",y:s,width:"50",height:n,style:{transition:"y 0.3s ease, height 0.3s ease"}})})}),(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:"#f7fafc",stroke:o,strokeWidth:"3",strokeLinejoin:"round"}),(0,e.jsx)("g",{clipPath:`url(#raindrop-clip-${t})`,children:(0,e.jsx)("path",{d:"M 25 10 C 25 10 5 45 5 65 A 20 20 0 0 0 45 65 C 45 45 25 10 25 10 Z",fill:i,stroke:o,strokeWidth:"3",strokeLinejoin:"round"})}),(0,e.jsx)("path",{d:"M 16 52 A 12 12 0 0 0 28 68",fill:"none",stroke:r>50?"#ffffff":"#cbd5e0",strokeWidth:"2.5",strokeLinecap:"round",opacity:.6,style:{transition:"stroke 0.3s ease"}})]})},m=({wetDaysPercent:t,tooltip:a,title:r,date:i})=>{const o="number"==typeof t?t:0,n=`${o.toFixed(2)} %`;return(0,e.jsxs)("div",{className:"wx-card",children:[(0,e.jsx)("div",{className:"wx-card-header-bar",children:(0,e.jsx)("h6",{className:"wx-card-header","data-tooltip":a,children:r})}),(0,e.jsxs)("div",{className:"wx-card-body",style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"},children:[(0,e.jsx)(u,{percent:o,height:85}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"wx-primary-val",children:n}),(0,e.jsx)("div",{className:"wx-secondary-val",style:{textAlign:"left",marginTop:"2px"},children:i})]})]})]})};var f=function(e,t,a,r){return new(a||(a=Promise))(function(i,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(n,s)}l((r=r.apply(e,t||[])).next())})};const{useState:g,useEffect:v}=t.React,w=e=>{const t=e=>String(e).padStart(2,"0");return`${e.getUTCFullYear()}-${t(e.getUTCMonth()+1)}-${t(e.getUTCDate())} ${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())}`},y=e=>1.8*e+32,j=e=>2.2369*e,b=e=>e/25.4;const N=t.ReactRedux.connect(e=>{const t=e.widgetsState;let a="";return t&&Object.keys(t).forEach(t=>{const r=e.getIn(["widgetsState",t,"selectedStation"]);r&&(a=r)}),{selectedStation:a}})(function(r){const{config:o,useDataSources:n,selectedStation:s,theme:c}=r,[x,u]=g(null),[N,M]=g(!1),[T,k]=g(null),[A,S]=g("current-month");v(()=>{if(!s||!n||0===n.length)return;let e=!0;return(()=>{f(this,void 0,void 0,function*(){M(!0),k(null);try{const r=null==n?void 0:n[0],i=r?r.asMutable({deep:!0}):void 0,l=yield(a=i,f(void 0,void 0,void 0,function*(){if(!(null==a?void 0:a.dataSourceId))return null;const e=t.DataSourceManager.getInstance();let r=e.getDataSource(a.dataSourceId);return r||(r=yield e.createDataSourceByUseDataSource(a)),r}));if(!l)throw new Error("Historical weather data source unavailable.");const d=(null==o?void 0:o.stationIdField)||"station_guid",c=(null==o?void 0:o.stationNameField)||"station_name",h=(null==o?void 0:o.averageTempField)||"airtc_avg",x=(null==o?void 0:o.highTempField)||"airtc_max",p=(null==o?void 0:o.lowTempField)||"airtc_min",m=(null==o?void 0:o.averageWindSpeedField)||"ws_ms_avg",g=(null==o?void 0:o.highWindSpeedField)||"ws_ms_max",v=(null==o?void 0:o.totalPrecipField)||"rain_mm_tot_tot",N=(null==o?void 0:o.highAqiField)||"aqi_max",T=(null==o||o.lowAqiField,(null==o?void 0:o.dateField)||"date"),k=[];if(s&&k.push(`${c} = '${s}'`),"current-month"===A){const e=new Date,t=w(new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),1,0,0,0))),a=w(new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+1,0,23,59,59)));k.push(`${T} >= TIMESTAMP '${t}' AND ${T} <= TIMESTAMP '${a}'`)}else"all-time"!==A&&k.push(`EXTRACT(MONTH FROM ${T}) = ${A}`);const S={where:k.length>0?k.join(" AND "):"1=1",outFields:["*"],returnGeometry:!1},D=yield l.query(S),C=(null==D?void 0:D.records)||[];if(!e)return;if(0===C.length)return u(null),void M(!1);let $=0,P=0,W=-1/0,F=null,_=1/0,I=null,R=0,U=0,q=0,z=null,H=0,L=0,B=-1/0,O=null,E=1/0,G=-1/0,Q=null,Y=0,Z=0,J=s||"Unknown Station",K=s||"Unknown",V=0;C.forEach((e,t)=>{var a,r;const i=e.getData(),o=i[T];V++,0===t&&(J=i[c]||J,K=i[d]||K);const n=y(i[h]);"number"!=typeof n||isNaN(n)||($+=n,P++);const s=y(null!==(a=i[x])&&void 0!==a?a:n);"number"!=typeof s||isNaN(s)||s>W&&(W=s,F=o);const l=y(null!==(r=i[p])&&void 0!==r?r:n);"number"!=typeof l||isNaN(l)||l<_&&(_=l,I=o);const u=j(i[m]);"number"!=typeof u||isNaN(u)||(R+=u,U++);const f=j(i[g]);"number"!=typeof f||isNaN(f)||f>q&&(q=f,z=o);const w=i[v];"number"!=typeof w||isNaN(w)||(H+=w,w>B&&(B=w,O=o),w>0&&L++);const b=i[N];"number"!=typeof b||isNaN(b)||(Y+=b,Z++,b<E&&(E=b),b>G&&(G=b,Q=o))});const X=W===-1/0?0:W,ee=_===1/0?0:_,te=E===1/0?0:E,ae=G===-1/0?0:G,re=b(H),ie=b(B),oe={stationId:K,stationName:J,highTemp:X,maxHighTemp:X,maxHighDate:F,lowTemp:ee,minLowTemp:ee,minLowDate:I,averageTemp:P>0?$/P:0,averageWindSpeed:U>0?R/U:0,maxWindSpeed:q,maxWindDate:z,totalAccumulatedPrecipitation:re,maxTotalAccumulatedPrecipitation:ie,maxPrecipDate:O,precipitationDaysPercent:V>0?L/V*100:0,lowAqi:te,highAqi:ae,meanAqi:Z>0?Y/Z:0,maxAqiDate:Q,date:new Date};u(oe)}catch(t){if(!e)return;console.error("[Historical Query Error]",t),k((null==t?void 0:t.message)||"Failed to query historical weather layer")}finally{e&&M(!1)}var a})})(),()=>{e=!1}},[n,s,A,o]);const D=e=>{if(!e)return"N/A";const t=new Date(e);return isNaN(t.getTime())?String(e):t.toLocaleDateString()};return(0,e.jsxs)("div",{css:a(),className:"widget-weather-cards w-dahsboard-container",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,e.jsx)("h5",{children:x?x.stationName:"Historical Summary"}),(0,e.jsx)(i,{timeRange:A,setTimeRange:S})]}),N&&(0,e.jsx)("p",{children:(0,e.jsx)("em",{children:"Loading historical summary..."})}),T&&(0,e.jsxs)("p",{style:{color:"red"},children:[(0,e.jsx)("strong",{children:"Error:"})," ",T]}),x||N?x?(0,e.jsxs)("div",{className:"wx-card-grid",children:[(0,e.jsx)(l,{title:"Max High Temperature",tooltip:"Maximum of the daily maximum temperatures for the selected time period",temperature:x.highTemp,date:D(x.maxHighDate)}),(0,e.jsx)(l,{title:"Average Temperature",tooltip:"Average of the average temperature for the selected time period.",temperature:x.averageTemp}),(0,e.jsx)(l,{title:"Min Low Temperature",tooltip:"Minimum of the daily minimum temperatures for the selected time period",temperature:x.lowTemp,date:D(x.minLowDate)}),(0,e.jsx)(h,{title:"Average Wind Speed",tooltip:"Average Wind Speed. Direction of barb is 0 and not representative of wind direction",speedMph:x.averageWindSpeed,directionDegrees:0}),(0,e.jsx)(h,{title:"Maximum Wind Speed",tooltip:"Maximum Wind Speed. Direction of barb is 0 and not representative of wind direction",speedMph:x.maxWindSpeed,directionDegrees:0,date:D(x.maxWindDate)}),(0,e.jsx)(p,{title:"Total Precipitation",tooltip:"Total accumulated precipitation for the selected time period.",dailyRainInches:x.totalAccumulatedPrecipitation}),(0,e.jsx)(p,{title:"Maximum Precipitation",tooltip:"Accumulated Precipitation on the wettest day in the selected time period",dailyRainInches:x.maxTotalAccumulatedPrecipitation,date:D(x.maxPrecipDate)}),(0,e.jsx)(m,{title:"Percent of Days with Precipitation",tooltip:"Percent of days in the selected range with precipitation.",wetDaysPercent:x.precipitationDaysPercent}),(0,e.jsx)(d,{aqi:x.highAqi,date:D(x.maxAqiDate),tooltip:"Max AQI based on PM2.5 only. 0-50: Good, 50-150: Moderate, 150+: Unhealthy",title:"Max AQI"}),(0,e.jsx)(d,{aqi:x.meanAqi,tooltip:"Mean of max AQI based on PM2.5 only. 0-50: Good, 50-150: Moderate, 150+: Unhealthy",title:"Mean of max AQI"})]}):null:(0,e.jsx)("div",{className:"text-muted",children:"No historical data available for this selection."})]})});function M(e){o.p=e}})(),n})())}}});