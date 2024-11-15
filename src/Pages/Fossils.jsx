export default function Fossils() {
  return (
    <div className="w-full bg-emerald-950 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold p-4 text-white">Fossils</h1>
      
      {/* Fossil Skull Model */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/skull.glb"} 
          alt="A 3D model of an ancient fossilized skull" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Ancient Fossilized Skull</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This model represents an ancient fossilized skull, showcasing the structure of early human or hominid cranial anatomy. Fossilized skulls like this provide key insights into the evolution of brain size and facial structure.
        </p>
      </div>

      {/* Prehistoric Mammal Skull */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/skull1.glb"} 
          alt="A 3D model of a prehistoric mammal skull" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Prehistoric Mammal Skull</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This fossilized skull belongs to a prehistoric mammal species, providing a glimpse into the diverse forms of life that existed millions of years ago. It highlights adaptations that allowed mammals to thrive in various ecosystems.
        </p>
      </div>

      {/* Dinosaur Skull Fossil */}
      <div className="bg-slate-300 rounded-lg shadow-lg min-h-[500px] w-1/2 flex flex-col items-center justify-center m-4 p-4">
        <model-viewer 
          style={{ height: "450px", width: "100%" }} 
          src={"models/skull2.glb"} 
          alt="A 3D model of a dinosaur skull fossil" 
          auto-rotate 
          camera-controls>
        </model-viewer>
        
        <h2 className="text-2xl font-bold mt-4">Dinosaur Skull Fossil</h2>
        <p className="mt-2 px-6 text-md text-justify">
          This dinosaur skull fossil model showcases the powerful jaw structure and unique features of a predator that roamed the Earth millions of years ago. Fossils like these help scientists study the diet and behavior of extinct species.
        </p>
      </div>
    </div>
  );
}
