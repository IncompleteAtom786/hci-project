export default function Home() {
    return (
        <div className="sketchfab-embed-wrapper w-full h-full bg-white rounded-md">
            <iframe
                className="w-full h-full"
                title="wikipedia logo"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allowFullScreen
                src="https://sketchfab.com/models/f2858651785a4aafbf6ecc042a3050b8/embed?autostart=1&ui_theme=dark"
            ></iframe>
        </div>
    )
}
