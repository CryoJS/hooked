import { GiFishingHook } from 'react-icons/gi'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
            <main className="max-w-none">

                {/* Hero */}
                <section className="hero min-h-[70vh] bg-gradient-to-t from-primary/15 via-base-100 to-base-200">
                    <div className="hero-content text-center pt-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2">
                                <GiFishingHook className="text-5xl text-primary" />
                            </div>

                            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
                                Hooked
                            </h1>

                            <p className="text-xl sm:text-2xl text-base-content/80 mb-10">
                                An interactive experience exploring how algorithm-driven platforms
                                exploit attention, productivity, and well-being.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/game" className="btn btn-primary btn-lg">
                                    Play the Game
                                </a>
                                <a href="/about" className="btn btn-outline btn-lg">
                                    Learn the Context
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Hooked */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="prose prose-lg max-w-none mb-10 text-center">
                                <h2 className="text-3xl font-bold">
                                    What Is Hooked?
                                </h2>
                                <p>
                                    Hooked is a hybrid of a game and article.
                                    It places you in the role of a student trying to stay productive while
                                    navigating an endlessly tempting algorithmic feed.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="card bg-base-100 border border-base-300">
                                    <div className="card-body text-center">
                                        <div className="text-4xl mb-3">🧠</div>
                                        <h3 className="font-bold text-lg">Psychology</h3>
                                        <p className="text-sm text-base-content/70">
                                            Models dopamine loops, variable rewards, and attention fatigue.
                                        </p>
                                    </div>
                                </div>

                                <div className="card bg-base-100 border border-base-300">
                                    <div className="card-body text-center">
                                        <div className="text-4xl mb-3">📊</div>
                                        <h3 className="font-bold text-lg">Learn While Playing</h3>
                                        <p className="text-sm text-base-content/70">
                                            The game actually teaches you, providing info/stats!
                                        </p>
                                    </div>
                                </div>

                                <div className="card bg-base-100 border border-base-300">
                                    <div className="card-body text-center">
                                        <div className="text-4xl mb-3">🎮</div>
                                        <h3 className="font-bold text-lg">Experience</h3>
                                        <p className="text-sm text-base-content/70">
                                            You don’t read about addiction...<br/>You feel it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pages Overview */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl text-primary-content font-bold mb-4">
                                    What’s On This Website?
                                </h2>
                                <p className="text-primary-content">
                                    Hooked combines research, analysis, and interaction into one experience.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="card text-neutral bg-primary-content shadow">
                                    <div className="card-body">
                                        <h3 className="card-title">🏠 Home</h3>
                                        <p className="text-sm">
                                            An overview of the project, its purpose, and how to engage with it.
                                        </p>
                                    </div>
                                </div>

                                <div className="card text-neutral bg-primary-content shadow">
                                    <div className="card-body">
                                        <h3 className="card-title">🎮 Play</h3>
                                        <p className="text-sm">
                                            An interactive simulation where productivity and distraction compete
                                            in real time.
                                        </p>
                                    </div>
                                </div>

                                <div className="card text-neutral bg-primary-content shadow">
                                    <div className="card-body">
                                        <h3 className="card-title">📘 About</h3>
                                        <p className="text-sm">
                                            Research on algorithmic exploitation, social media addiction,
                                            and its impact on teenagers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Play */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-14">
                                <h2 className="text-3xl font-bold mb-4">
                                    How to Play the Game
                                </h2>
                                <p className="text-base-content/70 max-w-2xl mx-auto">
                                    The rules are simple, the consequences are not.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-10">
                                <div className="card bg-base-100 border border-base-300 shadow">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg">⌨️ Do Your Work</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li>• Type each sentence character by character</li>
                                            <li>• Completing work increases progress but drains satisfaction</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card bg-base-100 border border-base-300 shadow">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg">📱 Scroll the Feed</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li>• View content for short-term enjoyment</li>
                                            <li>• Satisfaction rises, but harm may accumulate</li>
                                            <li>• Some content is harmful, others educational</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card bg-base-100 border border-base-300 shadow">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg">⚖️ Balance the System</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li>• Too little satisfaction → burnout</li>
                                            <li>• Too much harm → collapse</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card bg-base-100 border border-base-300 shadow">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg">🏁 Game Over</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li>• Satisfaction hits zero, or harm reaches 100%</li>
                                            <li>• Your score reflects amount of completed work</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing */}
                <section className="pb-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="card bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                                <div className="card-body text-center p-10">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Why This Matters
                                    </h2>
                                    <p className="text-lg leading-relaxed">
                                        Hooked isn’t about blaming individuals.
                                        It’s about exposing systems designed to pull attention,
                                        extract value, and normalize exhaustion, especially for teenagers.
                                    </p>
                                    <div className="mt-4">
                                        <a href="/game" className="btn btn-primary btn-lg">
                                            Experience It Yourself
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
