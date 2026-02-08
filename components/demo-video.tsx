export function DemoVideo() {
    return (
        <section className="py-24 px-6 bg-background border-t border-border/40">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl mb-12">Démo Interactive</h2>
                <div className="relative aspect-video w-full bg-muted border border-border/40 shadow-2xl">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
                        title="Démonstration Produit"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
