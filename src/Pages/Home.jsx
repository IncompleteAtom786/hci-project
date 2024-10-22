export default function Home() {
    return (
        <div className="sketchfab-embed-wrapper ">
            <iframe
                className="w-screen h-screen"
                title="wikipedia logo"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allowFullScreen
                src="https://sketchfab.com/models/f2858651785a4aafbf6ecc042a3050b8/embed?autostart=1"
            ></iframe>
        </div>
    )
}