import { useGSAP } from "@gsap/react"
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

export function Cube(){

 useGSAP(()=>{
  gsap.registerPlugin(Draggable);

  let rotationX = 0;
  let rotationY = 0;

  let startPointerX = 0;
  let startPointerY = 0;

  Draggable.create(".scene", {
   type: "rotation",

   onPress: function(e){
    startPointerX = e.clientX;
    startPointerY = e.clientY;
   },

   onDrag: function(e){
    const currentPointerX = e.clientX;
    const currentPointerY = e.clientY;

    const deltaX = currentPointerX - startPointerX;
    const deltaY =  currentPointerY - startPointerY;

    rotationY += deltaX * 0.5;
    rotationY -= deltaY * 0.5;

    rotationX = Math.max(-90, Math.min(90, rotationX));

    gsap.set(".cube",{
     rotationX,
     rotationY,
    });

    startPointerX = currentPointerX;
    startPointerY = currentPointerY;
   },
  });
 });

 return(
  <>
  <div className="h-screen bg-neutral-950 flex items-center justify-center">
   <div className="scene w-[300px] h-[300px] perspective-[1000px]">
    <div className="cube h-full w-full relative transform-3d -rotate-x-45 ">
     <div className="front absolute w-[300px] h-[300px]  backdrop-blur-lg "></div>
     <div className="back absolute w-[300px] h-[300px] backdrop-blur-lg "></div>
     <div className="right absolute w-[300px] h-[300px] backdrop-blur-lg "></div>
     <div className="left absolute w-[300px] h-[300px] backdrop-blur-lg "></div>
     <div className="bottom absolute w-[300px] h-[300px] backdrop-blur-lg "></div>
     <div className="top absolute w-[300px] h-[300px] backdrop-blur-lg "></div>
    </div>
   </div>
  </div>
  </>
 )
}