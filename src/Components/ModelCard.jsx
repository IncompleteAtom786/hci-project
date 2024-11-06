/* eslint-disable react/prop-types */
export default function ModelCard({src, info}){

    return <>
            <div className="bg-slate-300 rounded-lg shadow-lg min-h-max w-1/3 justify-start flex flex-col m-2">
            <model-viewer style={{ height: "400px" , width: "100%"}} src={src} alt="A 3D model" auto-rotate camera-controls></model-viewer>

                <h2 className="text-2xl font-bold">Robert Hooke&apos;s Microscope</h2>
                <p className="mt-2 p-6 text-md text-justify">
                    {info}
                </p>
            </div>
    </>
}
