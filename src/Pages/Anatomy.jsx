import ModelCard from "../Components/ModelCard";
import models from "../hooks/AnatomyModels";


export default function Anatomy() {
    const anantomyModels = models;
    return (
        <div className="w-full bg-emerald-950 min-h-full">
            <h1 className="text-4xl font-bold p-4">Scientific Equipment</h1>
            {anantomyModels.map((model) => {
                return <ModelCard
                key={model.id}
                src={model.src}
                info={model.info}
                />
            })}
        </div>
    )
}
