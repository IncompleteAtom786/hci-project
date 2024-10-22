export default function Anatomy() {
    return (
        <div className="min-h-screen w-screen flex flex-col gap-4 items-center">
            <h1 className="text-4xl font-bold p-4">Scientific Equipment</h1>
            <div className="grid grid-cols-3 gap-4 p-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Total Projects</h2>
                    <p className="text-4xl font-bold">10</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Total Tasks</h2>
                    <p className="text-4xl font-bold">20</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Total Members</h2>
                    <p className="text-4xl font-bold">30</p>
                </div>
            </div>
            <div className="flex gap-4 p-4 h-12 block">
                <model-viewer style={{ height: "400px" }} src="models/robert_hookes_microscope.glb" alt="A 3D model" auto-rotate camera-controls></model-viewer>
                <div className="bg-white p-6 rounded-lg shadow-lg h-96 w-96 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">Robert Hooke&apos;s Microscope</h2>
                    <p className="mt-2 text-lg">
                        Robert Hooke, a 17th-century
                        English scientist, is often credited with pioneering work in microscopy. He used a compound microscope, which he detailed in his 1665 book Micrographia. This microscope featured a bi-convex lens and an adjustable focus mechanism, allowing Hooke to observe and document the microscopic structure of various materials. His most famous observation was the discovery of the cellular structure of cork, where he coined the term cell to describe the box-like structures he saw.
                    </p>
                </div>
            </div>
        </div>
    )
}