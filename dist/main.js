(()=>{"use strict";class t{constructor({positionX:t,positionY:e}){this.element=document.getElementById("character"),this.positionX=t,this.positionY=e,this.velocity=0,this.life=3,this.updatePosition()}move(t,e){this.positionX=t,this.positionY=e,this.updatePosition()}updatePosition(){this.element.style.left=this.positionX+"px",this.element.style.top=this.positionY+"px"}collisionCheck(t){t.forEach((t=>{this.positionX<t.positionX+50&&this.positionX+50>t.positionX&&this.positionY<t.positionY+t.height&&(this.positionY,t.positionY)}))}decreaseLife(){this.life-=1}}class e{constructor({positionX:t,positionY:e,height:i}){this.element=document.createElement("div"),this.element.className="obstacle",this.positionX=t,this.positionY=e,this.height=i,this.element.style.height=this.height+"px",this.updatePosition(),document.getElementById("container").appendChild(this.element)}updatePosition(){this.element.style.left=this.positionX+"px",this.element.style.top=this.positionY+"px"}move(){this.positionX-=1,this.updatePosition()}}class i{constructor(){this.obstaclesArray=[]}generate(){const t=Math.floor(469*Math.random()+100),i=668-t,s=new e({positionX:1024,positionY:0,height:i}),o=new e({positionX:1024,positionY:i+100,height:t});this.obstaclesArray.push(o,s),console.log(this.obstaclesArray)}move(){this.obstaclesArray.forEach(((t,e)=>{t.move(),t.positionX<-50&&(t.element.remove(),this.obstaclesArray.splice(e,1))}))}}class s{constructor(){this.element=document.createElement("div"),this.element.id="timer",document.getElementById("container").appendChild(this.element),this.time=0,this.update()}update(){this.element.innerText=this.time}increment(){this.time++,this.update()}}let o;o=new class{constructor({color:e}){this.background=e,this.character=new t({positionX:300,positionY:345}),this.obstacles=new i,this.timer=new s}draw(){document.querySelector("#container").style.backgroundColor=this.background}}({color:"blue"}),o.draw(),setInterval((()=>{o.obstacles.generate()}),2500),setInterval((()=>{o.timer.increment()}),1e3),document.addEventListener("keydown",(t=>{const e=t.key;let i=o.character.positionX,s=o.character.positionY;"w"===e?s-=10:"s"===e?s+=10:"a"===e?i-=10:"d"===e&&(i+=10),o.character.move(i,s)})),function t(){o.obstacles.move(),o.character.collisionCheck(o.obstacles.obstaclesArray,timer),requestAnimationFrame(t)}()})();