export default function Instruments() {
  return (
    <div className="w-full bg-emerald-950 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold p-4 text-white">Instruments</h1>
      
      {/* Robert Hooke's Microscope */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/robert_hookes_microscope.glb"} 
          alt="A 3D model of Robert Hooke's microscope" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Robert Hooke's Microscope</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This model represents Robert Hooke's pioneering microscope, which played a crucial role in the development of microbiology. Hooke used it to observe and describe the cellular structure of plants, coining the term "cell."
        </p>
      </div>

      {/* X-Ray Tube */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/x-ray_tube.glb"} 
          alt="A 3D model of an X-ray tube" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">X-Ray Tube</h2>
        <p className="mt-2 px-6 text-md text-justify">
          The X-ray tube model demonstrates the technology behind the production of X-rays, essential in medical imaging for non-invasive visualization of internal structures. This device revolutionized diagnostic practices in medicine.
        </p>
      </div>

      {/* Astronomical Quintant */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/astronomical_quintant.glb"} 
          alt="A 3D model of an astronomical quintant" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Astronomical Quintant</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This model of an astronomical quintant showcases a navigational tool used for celestial measurements. It was instrumental in helping sailors determine their position by measuring the angles between stars and the horizon.
        </p>
      </div>
    </div>
  );
}
