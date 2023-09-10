var H=Object.defineProperty;var R=(n,t,e)=>t in n?H(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>(R(n,typeof t!="symbol"?t+"":t,e),e);import{j as z,r as p,U as k,S as c,F as B,H as D,a as I,R as M,b as j}from"./vendor.cf9e3d47.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}};E();const l=z.exports.jsx,m=z.exports.jsxs,N=({startGame:n})=>{let[t,e]=p.exports.useState(3),s=()=>{t===0?n():setTimeout(()=>{e(t-1)},1e3)};p.exports.useEffect(()=>{s()});const i=k`
        from { opacity: 1;}
        to { opacity: 0;}
    `,o=c.div`
        font-size: 10vw;
        line-height: 10vw;
        height: 10vw;
        width: 10vw;
        text-align: center;
        color: #ffffff;
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%,-50%);
        animation: ${i} 500ms ease-in-out;
        animation-delay: 500ms;
    `;return l(o,{children:t>=1?t:1})},P=({level:n,score:t,restartGame:e})=>{const[s,i]=p.exports.useState(JSON.parse(localStorage.getItem("tilesScores")||"[]")),[o]=p.exports.useState({level:n,tiles:t});p.exports.useEffect(()=>{a()},[]);const a=()=>{s.length>0?h():(localStorage.setItem("tilesScores",JSON.stringify([o])),i([o]))},h=()=>{if(!!!s.find(u=>u.tiles===o.tiles)){let u=s;u.push(o),u.sort(function(C,F){return F.tiles-C.tiles}),u=u.slice(0,5),u.find(C=>C.tiles===o.tiles)||(u.pop(),u.push(o)),localStorage.setItem("tilesScores",JSON.stringify(u)),i(u)}},w=f=>{if(f.tiles===o.tiles)return"#ffffff"},v=c.div`
        font-size: ${window.innerWidth<600?7:3}vw;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,g=c.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,d=c.div`
        height: 10em;
        width: 10em;
        background-color: #000000;
        border-radius: .5em;
        position: relative;
    `,y=c.div`
        font-size: .75em;
        position: absolute;
        width: 90%;
        text-align: center;
        top: 1em;
        left: 50%;
        transform: translateX(-50%);
        color: #ffffff;
        font-family: Roboto;
    `,x=c.div`
        width: 100%;
        height: 6.25em;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
    `,$=c.div`
        width: 85%;
        padding: .25em;
        margin: .1em auto;
        background-color: #555555;
        border: 1px solid ${f=>f.color};
        border-radius: .125em;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    `,T=c.div`
        font-family: roboto;
        font-size: .5em;
        margin: 0 .5em;
        padding: 0;
        color: #ffffff;
    `,O=c.button`
        font-size: 1em;
        width: 4em;
        margin: .5em;
        padding: .25em;
        background-color: #555555;
        border: none;
        border-radius: .25em;
    `;return m(v,{children:[l(g,{children:s.length?m(d,{children:[l(y,{children:s.indexOf(o)===0?"New High Score!":"High Scores"}),l(x,{children:s.map(f=>m($,{color:w(f),children:[f.tiles===o.tiles&&l(B,{size:".3em",color:w(f),style:{position:"absolute",top:"50%",left:".5em",transform:"translateY(-50%)"}}),m(T,{children:["Level: ",f.level]}),m(T,{children:[f.tiles," Tiles"]})]},s.indexOf(f)))})]}):null}),l(g,{children:l(O,{onClick:e,children:l(T,{children:"Play Again"})})})]})},W=({tileSize:n,tile:t,clickable:e,tileClicked:s})=>{let[i,o]=p.exports.useState({c:t.color.c,p:t.color.p}),[a,h]=p.exports.useState(t.clicked),w=d=>{if(!e||a)return;let y=!!d.chosenTile;const x=y?"#02FF62":"#FF0000";s(d,y,x),o({c:x,p:d.color.c}),h(!0)};const v=k`
        from {background-color: ${i.p};}
        to   {backgroundColor: ${i.c};}
    `,g=c.button`
        border-radius: ${d=>d.size/20}vw;
        background-color: ${d=>d.color};
        border: none;
        animation: ${v} 100ms ease-in-out;
    `;return m(g,{size:n,color:i.c,onClick:()=>w(t),children:[i.c==="#02FF62"&&a&&l(D,{size:`${n/3}vw`,color:"#555555"}),(i.c==="#FF0000"||i.c==="#ffffff"&&a)&&l(I,{size:`${n/3}vw`,color:"#555555"})]})};class L extends M.Component{constructor(e){super(e);r(this,"tiles",[]);r(this,"clickCount",0);r(this,"count",0);r(this,"correct",0);r(this,"columns","");r(this,"rows","");r(this,"gridSize",window.innerWidth<600?80:35);r(this,"buildGrid",()=>{const{chosenTilesCount:e}=this.state;this.count=Math.round(Math.sqrt(e*3));let s=0,i=this.count*this.count;for(let o=0;o<this.count;o++)this.columns+=" 1fr",this.rows+=" 1fr";for(let o=0;o<i;o++){let a=!1;(Math.random()<=.35&&s<e||e-s>=i-o)&&(a=!0,s++);let h={id:o,clicked:!1,color:a?{c:"#ffffff",p:"#ffffff"}:{c:"#555555",p:"#555555"},previousColor:a?"#ffffff":"#555555",chosenTile:a};this.tiles.push(h)}this.setState({tiles:this.tiles,gameStarted:!0})});r(this,"startGame",()=>{setTimeout(()=>{const{tiles:e}=this.state;let s=e.map(i=>(i.color={c:"#555555",p:i.color.c},i));this.setState({tiles:s,clickable:!0})},1e3)});r(this,"tileClicked",(e,s,i)=>{const{tiles:o,chosenTilesCount:a}=this.state;this.clickCount++,s&&this.correct++,this.tiles=o.map(h=>(h.id===e.id&&(h.clicked=!0,h.color={c:i,p:h.color.c}),h)),this.clickCount===a&&this.endGame()});r(this,"endGame",()=>{const{endRound:e}=this.props;this.tiles.forEach(s=>(s.chosenTile&&s.clicked!==!0&&(s.clicked=!0,s.color={c:"#ffffff",p:s.color.c}),s)),this.setState({tiles:this.tiles,clickable:!1}),setTimeout(()=>{e(this.correct)},1e3)});this.state={tiles:[],gameStarted:!1,clickable:!1,chosenTilesCount:e.level+4}}componentDidMount(){this.buildGrid(),this.startGame()}render(){const{tiles:e,clickable:s}=this.state,i=c.div`
            font-size: ${this.gridSize}vw;
            width: 1em;
            height: 1em; 
            padding: ${1/this.count/7.5}em;
            background-color: #000000;
            border-radius: .025em;
            display: grid;
            grid-template-columns: ${this.columns};
            grid-template-rows: ${this.rows};
            grid-gap: ${1/this.count/20}em;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `;return l(i,{children:e.map(o=>l(W,{tile:o,tileSize:this.gridSize/this.count,clickable:s,tileClicked:this.tileClicked},o.id))})}}class A{constructor(t){r(this,"tile");r(this,"position");r(this,"size");r(this,"angle");r(this,"velocity");r(this,"rotation");var e;this.position=t?{x:window.innerWidth/2,y:window.innerHeight/2}:this.setStartingPoint(),this.size=Math.random()*5+1,this.tile=document.createElement("div"),this.angle=Math.random()*(Math.PI*2),this.velocity=t?Math.random()*10+10:0,this.rotation={speed:Math.random()*.5,direction:Math.round(Math.random()+1)%2===0},this.tile.style.zIndex="-1",this.tile.style.width=`${this.size}em`,this.tile.style.height=`${this.size}em`,this.tile.style.fontSize="1vw",this.tile.style.backgroundColor=Math.round(Math.random()+1)%2===0?"#02FF62":"#FF0000",this.tile.style.border="none",this.tile.style.position="fixed",this.tile.style.bottom="50vh",this.tile.style.left="50vw",this.tile.style.transform="translate(-50%, -50%)",(e=document.getElementById("app"))==null||e.appendChild(this.tile)}setStartingPoint(){switch(Math.floor(Math.random()*4+1)){case 1:return{x:Math.floor(Math.random()*window.innerWidth),y:window.innerHeight+100};case 2:return{x:window.innerWidth+100,y:Math.floor(Math.random()*window.innerHeight)};case 3:return{x:Math.floor(Math.random()*window.innerWidth),y:0-100};default:return{x:0-100,y:Math.floor(Math.random()*window.innerHeight)}}}gravity(t){const e=window.innerWidth/2,s=window.innerHeight/2;this.position.x>e?this.position.x-=(this.position.x-e)/e*t:this.position.x+=(e-this.position.x)/e*t,this.position.y>s?this.position.y-=(this.position.y-s)/window.innerHeight*t:this.position.y+=(s-this.position.y)/window.innerHeight*t}setTilePosition(t){this.gravity(t),this.position.x+=Math.cos(this.angle)*this.velocity,this.position.y+=Math.sin(this.angle)*this.velocity,this.tile.style.left=this.position.x+"px",this.tile.style.bottom=this.position.y+"px"}setTileSize(t){this.tile.style.width=`${t}em`,this.tile.style.height=`${t}em`,this.tile.style.borderRadius=`${t/10}em`}setTileRotation(t,e){this.tile.style.transform=`rotate(${e?t:t*-1}deg)`}update(t){this.size<0&&(this.tile.remove(),X(this)),this.rotation.speed+=.1,this.velocity<=0?this.size=this.size-(t?.005:.07):this.velocity=this.velocity-.125,this.setTilePosition(t?.5:60),this.setTileSize(this.size),this.setTileRotation(this.rotation.speed,this.rotation.direction)}}let S=[],b;const J=()=>{for(let n=0;n<50;n++)G(!0);b=!0},G=n=>{S.push(new A(n))},X=n=>{S.splice(S.indexOf(n),1),b&&G(!1)},q=()=>{b=!1};setInterval(()=>{S.forEach(n=>n.update(b))},10);class U extends M.Component{constructor(){super(...arguments);r(this,"state",{showText:!1,showBoard:!1,showCountDown:!1,showGameOver:!1,level:1,score:0});r(this,"setGame",()=>{this.setState({showText:!0,showBoard:!1,showCountDown:!1,showGameOver:!1,level:1,score:0}),setTimeout(()=>{this.startGame()},2e3)});r(this,"startGame",()=>{J(),this.setState({showText:!1}),setTimeout(()=>{this.setState({showCountDown:!0})},1e3)});r(this,"startRound",()=>{this.setState({showCountDown:!1,showBoard:!0})});r(this,"endRound",e=>{let{score:s,level:i}=this.state;e===i+4?this.setState({showBoard:!1,showCountDown:!0,level:i+1,score:s+e}):this.setState({showBoard:!1,showGameOver:!0,score:s+e})});r(this,"restartGame",()=>{q(),this.setState({showGameOver:!1}),setTimeout(()=>{this.setGame()},2e3)})}componentDidMount(){this.setGame()}render(){const{showText:e,showCountDown:s,showBoard:i,showGameOver:o,level:a,score:h}=this.state,{startRound:w,endRound:v}=this,g=c.div`
      z-index: 1;
    `,d=k`
      0%       { opacity: 0;}
      25%, 75% { opacity: 1;}
      100%     { opacity: 0;}
    `,y=c.h1`
      font-size: 5vw;
      color: #ffffff;
      position: fixed;
      top: 45vh;
      left: 50vw;
      transform: translate(-50%,-50%);
      animation: ${d} 2000ms ease-in-out;
    `;return m(g,{children:[e&&l(y,{children:"Remember The Tiles"}),s&&l(N,{startGame:()=>w()}),i&&l(L,{level:a,endRound:v}),o&&l(P,{score:h,level:a,restartGame:this.restartGame})]})}}const K=()=>{const n=c.div`
    background: radial-gradient(circle, hsl(0, 0%, 0%),  hsl(241.15384615384616, 96.29629629629628%, 10.588235294117649%));
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;return l(n,{id:"app",children:l(U,{})})};j.render(l(M.StrictMode,{children:l(K,{})}),document.getElementById("root"));
