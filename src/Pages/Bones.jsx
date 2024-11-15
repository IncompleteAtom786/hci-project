export default function Bones() {
  return (
    <div className="w-full bg-emerald-950 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold p-4 text-white">Bones</h1>
      
      {/* Skull Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/skull4.glb"} 
          alt="3D model of a human skull"  
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Animal Skull Model</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This model displays a detailed animal skull, offering insights into cranial structure, dental arrangement, and bone density. It's useful for studying human anatomy, particularly in the context of evolutionary biology.
        </p>
      </div>

      {/* Femur Bone Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/skull3.glb"} 
          alt="3D model of a human femur"  
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Animal Femur Bone</h2>
        <p className="mt-2 px-6 text-md text-justify">
          The femur, the longest bone in the Animal body, supports movement and weight-bearing functions. This model allows for a close examination of its structural strength and shape, integral to biomechanics and orthopedics.
        </p>
      </div>

      {/* Vertebrae Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/skull5.glb"} 
          alt="3D model of human vertebrae"  
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4"> Vertebrae Model</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This vertebrae model reveals the intricate structure of the Animal spine, showcasing interlocking vertebrae that protect the spinal cord. A valuable resource for understanding spinal health and neurology.
        </p>
      </div>
    </div>
  );
}
