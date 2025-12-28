export function Cube(){
 return(
  <>
  <div className="h-screen bg-neutral-950 flex items-center justify-center">
   <div className="scene w-[300px] h-[300px] perspective-[1000px]">
    <div className="cube h-full w-full relative transform-3d ">
     <div className="front absolute w-[300px] h-[300px]"></div>
     <div className="back absolute w-[300px] h-[300px]"></div>
     <div className="right absolute w-[300px] h-[300px]"></div>
     <div className="left absolute w-[300px] h-[300px]"></div>
     <div className="bottom absolute w-[300px] h-[300px]"></div>
     <div className="top absolute w-[300px] h-[300px]"></div>
    </div>
   </div>
  </div>
  </>
 )
}