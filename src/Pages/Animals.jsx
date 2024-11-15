
export default function Animals() {
    return (
<div class="w-full bg-emerald-950 min-h-screen flex flex-col items-center">
  <h1 class="text-4xl font-bold p-4 text-white">Animals</h1>

  <div class="bg-slate-300 rounded-lg shadow-lg w-2/3 flex flex-col items-center justify-center m-4 p-4">
    <div class="sketchfab-embed-wrapper w-full">
      <iframe
        title="Stegoceras Validum"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/8a20aada53644b1089e306819c11815a/embed?camera=0&dnt=1"
        class="w-full h-[500px]"
      ></iframe>
    </div>
    <h2 class="text-2xl font-bold mt-4">Stegoceras Validum</h2>
    <p class="mt-2 text-md text-justify px-6">
      Stegoceras Validum is a genus of pachycephalosaurid dinosaurs from the Late Cretaceous period. Known for its distinctive thick skull, it was likely herbivorous or omnivorous.
    </p>
  </div>

  <div class="bg-slate-300 rounded-lg shadow-lg w-2/3 flex flex-col items-center justify-center m-4 p-4">
    <div class="sketchfab-embed-wrapper w-full">
      <iframe
        title="Styracosaurus Albertensis"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/955017e2b4784c5381fb0927e663298a/embed"
        class="w-full h-[500px]"
      ></iframe>
    </div>
    <h2 class="text-2xl font-bold mt-4">Styracosaurus Albertensis</h2>
    <p class="mt-2 text-md text-justify px-6">
      Styracosaurus Albertensis was a herbivorous ceratopsian dinosaur that lived during the Late Cretaceous period. Recognized by its unique horned face and frill, it is one of the most iconic dinosaurs.
    </p>
  </div>
</div>


    )
    
}
