export default function Anatomy() {
  return (
    <div className="w-full bg-emerald-950 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold p-4 text-white">Anatomy</h1>

      {/* Human Brain Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/model_of_a_human_brain.glb"} 
          alt="A 3D model of a human brain" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Human Brain Model</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This 3D model represents the human brain, showcasing the complexity of its structure, including the cerebral hemispheres, cerebellum, and brainstem. Ideal for studying brain anatomy and understanding neural pathways.
        </p>
      </div>

      {/* Human Skull Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/choke-grey.glb"} 
          alt="A 3D model of a human skull" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Human Skull Model</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This detailed model of a human skull provides insight into cranial anatomy, highlighting features such as the jaw, eye sockets, and nasal cavity. An essential tool for studying skeletal structures and understanding facial anatomy.
        </p>
      </div>

      {/* Human Eye Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/model_of_human_eye.glb"} 
          alt="A 3D model of a human eye" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Human Eye Model</h2>
        <p className="mt-2 px-6 text-md text-justify">
          Explore the intricacies of the human eye with this 3D model, which illustrates components like the cornea, iris, lens, and retina. Perfect for understanding visual processing and ocular anatomy.
        </p>
      </div>

      {/* Another Skull Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/choke-grey.glb"} 
          alt="A 3D model of a human skull" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Human Skull Model (Alternate)</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This alternate view of the human skull focuses on different anatomical angles, allowing for a more detailed study of cranial features and bone structure. An excellent resource for in-depth analysis of the skull.
        </p>
      </div>
    </div>
  );
}
