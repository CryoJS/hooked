import { useState } from 'react'
import barUsageImg from "../../public/bar-usage.png"
import flowchartImg from "../../public/flowchart-rec.png"

export default function About() {
    const [readingTime] = useState('20 min read');
    const [publishDate] = useState('January 14, 2026');
    const author = "Jason Sun";

    function Picture({imgSource, title, desc}) {
        return (
            <div className="mb-10 max-w-2xl mx-auto card bg-base-100 border border-primary border-solid overflow-hidden">
                <div className="card-body p-0">
                    <figure>
                        <img
                            src={imgSource}
                            alt="Bar chart showing teen social media usage statistics across different platforms"
                            className="w-full h-auto"
                        />
                    </figure>
                    <div className="px-6 pt-4 pb-6">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-base-content/70">{desc}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <main id="main" className="max-w-none">
                {/* Hero Section */}
                <section className="hero bg-gradient-to-b from-base-200 via-base-100 to-base-100">
                    <div className="hero-content pt-20">
                        <div className="max-w-4xl text-center">
                            <div className="badge badge-primary badge-lg mb-4">
                                Equity and Social Justice
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
                                Algorithm-Driven
                                <span className="text-primary block">Online Addiction in Teenagers</span>
                            </h1>

                            {/* Article Subtitle */}
                            <p className="mt-3 text-xl sm:text-2xl text-base-content/80">
                                How engagement-maximizing algorithms are compromising adolescent mental health and development
                            </p>

                            {/* Author and Meta Information */}
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-b border-base-300 pb-8 prose-p:my-0">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="text-sm font-medium my-0">{author}</p>
                                        <p className="text-xs text-base-content/70 my-0">Student @ Stephen Lewis S.S.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
                                    <span className="flex items-center gap-2 my-0">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
                                        {readingTime}
                                    </span>
                                    <span className="flex items-center gap-2 my-0">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                        {publishDate}
                                    </span>
                                    <span className="flex items-center gap-2 my-0">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                        7 sections
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats Section */}
                <section className="py-16 bg-base-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">How Serious Is the Issue?</h2>
                                <p className="text-base-content/70 max-w-2xl mx-auto">
                                    The numbers reveal a growing crisis impacting teenagers worldwide
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                                <div className="card bg-blue-500/90 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                    <div className="card-body p-6 text-center">
                                        <div className="text-5xl font-bold">95%</div>
                                        <div className="text-lg font-semibold">Smartphone Access</div>
                                        <div className="text-sm opacity-90">Most teens have phones</div>
                                    </div>
                                </div>

                                <div className="card bg-indigo-500/90 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                    <div className="card-body p-6 text-center">
                                        <div className="text-5xl font-bold">46%</div>
                                        <div className="text-lg font-semibold">Constantly Online</div>
                                        <div className="text-sm opacity-90">↑ 22% since 2015</div>
                                    </div>
                                </div>

                                <div className="card bg-violet-500/90 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                    <div className="card-body p-6 text-center">
                                        <div className="text-5xl font-bold">8.5h</div>
                                        <div className="text-lg font-semibold">Daily Screen Time</div>
                                        <div className="text-sm opacity-90">Average daily usage</div>
                                    </div>
                                </div>

                                <div className="card bg-purple-500/90 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                                    <div className="card-body p-6 text-center">
                                        <div className="text-5xl font-bold">210M</div>
                                        <div className="text-lg font-semibold">Global Addiction</div>
                                        <div className="text-sm opacity-90">Social media addiction cases</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="bg-base-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Section 1: What Is Algorithmic Exploitation? */}
                            <div id="section-1" className="mb-20 scroll-mt-20">
                                <div className="prose prose-lg max-w-none mb-8">
                                    <h2 className="text-3xl font-bold mb-4">What Is Algorithmic Exploitation?</h2>
                                </div>

                                <div className="alert alert-info mb-4 py-4">
                                    <div>
                                        <h3 className="font-bold text-xl mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6 shrink-0 stroke-current align-text-top translate-y-0.5" fill="none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            {" "}Definition
                                        </h3>
                                        <p className="text-base">
                                            <strong>Algorithmic exploitation</strong> refers to how social media platforms use algorithms to identify user vulnerabilities and encourage compulsive behavior in order to maximize engagement, data collection, and profit.
                                        </p>
                                    </div>
                                </div>

                                <div className="prose prose-base max-w-none mb-8">
                                    <p>
                                        Algorithms optimize for engagement because this allows recommendation systems to <strong>collect more data and be more accurate</strong>. This allows for better targeted ads, allowing the company to make more money.
                                        Short-form content is a reduction in agency which further helps keep engagement high, making content consumption similar to gambling.
                                    </p>
                                    <p>
                                        The language used to describe algorithmic systems (recommended, personalized, for you) frames platform control as user choice.
                                        This empowers corporations by <strong>masking surveillance and manipulation</strong>, while limiting the agency of teenagers who lack the developmental capacity
                                        to critically interpret or resist these systems. As a result, <strong>responsibility is subtly shifted</strong> away from platforms and onto individual users, reinforcing
                                        the false narrative that excessive use is a personal failure rather than a structural issue.
                                    </p>
                                </div>

                                <div className="grid gap-8 lg:grid-cols-2 mb-10">
                                    <div className="card bg-base-100 border border-base-300">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg">How Platforms Exploit Vulnerabilities</h3>
                                            <div className="prose prose-base max-w-none">
                                                <ul className="space-y-2">
                                                    <li>Analyze user behavior (likes, comments, watch time, scrolling patterns)</li>
                                                    <li>Infer psychological traits from digital footprints</li>
                                                    <li>Use personalization to maintain engagement despite negative mental health effects</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 border border-base-300">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg">Effects on Teen Mental Health</h3>
                                            <div className="prose prose-base max-w-none">
                                                <ul className="space-y-2">
                                                    <li>Correlated with psychological distress</li>
                                                    <li>Higher likelihood of anxiety, depression, and weaker relationships</li>
                                                    <li>Encouragement of compulsive behaviors (endless scrolling, impulsive use)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Picture
                                    imgSource={flowchartImg}
                                    title="Online Media Addiction Visualized"
                                    desc="This flowchart details the process in which recommendation algorithms sustain engagement."
                                />

                                <div className="prose prose-base max-w-none mb-10">
                                    <p>
                                        While platform developers often justify algorithmic design decisions as neutral, the real-world impact on teenagers reveals a significant
                                        <strong> disconnect between intent and impact</strong>. Even if engagement optimization is not explicitly intended to cause harm, its disproportionate effects on adolescent
                                        mental health demonstrate how systems of power can perpetuate damage all for the means of profit, which also <strong>entails keeping power and ensuring students don't fight back</strong>.
                                    </p>
                                </div>

                                {/* Harmful Design Features */}
                                <div className="card bg-base-100 border border-base-300">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg mb-2">Harmful Design Features</h3>
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                            <div className="bg-base-200 border border-base-300 rounded-xl p-5 text-center hover:bg-base-300 transition-all hover:shadow-md">
                                                <div className="text-4xl mb-3">🎯</div>
                                                <h4 className="font-semibold mb-2">Dopamine Triggers</h4>
                                                <p className="text-sm text-base-content/70">Likes, comments, notifications</p>
                                            </div>

                                            <div className="bg-base-200 border border-base-300 rounded-xl p-5 text-center hover:bg-base-300 transition-all hover:shadow-md">
                                                <div className="text-4xl mb-3">∞</div>
                                                <h4 className="font-semibold mb-2">Infinite Consumption</h4>
                                                <p className="text-sm text-base-content/70">No time limit warnings, autoplay</p>
                                            </div>

                                            <div className="bg-base-200 border border-base-300 rounded-xl p-5 text-center hover:bg-base-300 transition-all hover:shadow-md">
                                                <div className="text-4xl mb-3">👤</div>
                                                <h4 className="font-semibold mb-2">Unrealistic Standards</h4>
                                                <p className="text-sm text-base-content/70">Filters, AI-generated imagery</p>
                                            </div>

                                            <div className="bg-base-200 border border-base-300 rounded-xl p-5 text-center hover:bg-base-300 transition-all hover:shadow-md">
                                                <div className="text-4xl mb-3">📊</div>
                                                <h4 className="font-semibold mb-2">Performance Metrics</h4>
                                                <p className="text-sm text-base-content/70">Turning social interaction into constant comparison</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Evolution of Algorithms */}
                            <div id="section-2" className="mb-20 scroll-mt-20">
                                <div className="prose prose-lg max-w-none mb-8">
                                    <h2 className="text-3xl font-bold mb-4">How Did Algorithms Evolve to Target Teen Engagement?</h2>
                                </div>

                                <div className="card bg-base-100 border border-base-300 mb-10">
                                    <div className="card-body">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-primary text-xl font-semibold mb-4 flex items-center gap-2">
                                                    From Convenience to Control
                                                </h3>
                                                <div className="prose prose-base max-w-none">
                                                    <ul className="space-y-2">
                                                        <li>Early algorithms focused on user experience</li>
                                                        <li>Shift toward maximizing engagement for ad targeting</li>
                                                        <li>Profit-driven optimization over well-being</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-error text-xl font-semibold mb-4 flex items-center gap-2">
                                                    AI-Driven Engagement Systems
                                                </h3>
                                                <div className="prose prose-base max-w-none">
                                                    <ul className="space-y-2">
                                                        <li>Personalized feeds and notifications</li>
                                                        <li>Priority given to emotionally charged content</li>
                                                        <li>Teens targeted during critical development phase</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Picture
                                    imgSource={barUsageImg}
                                    title="Teen Social Media Platform Usage"
                                    desc="Average daily time spent on major platforms among 13-17 year olds (Arora et al., 2024)."
                                />

                                <div className="card bg-base-100 border border-base-300">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg mb-2">Consequences of Excessive Use</h3>
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">Suicidal Ideation</span>
                                                        <span className="badge badge-error">Critical</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">Self-Harm Behaviors</span>
                                                        <span className="badge badge-error">Critical</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">Online Trauma</span>
                                                        <span className="badge badge-info">Risk</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">Social Isolation</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">Sleep Disruption</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">Reduced Attention Span</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Future Impact */}
                            <div id="section-4" className="mb-20 scroll-mt-20">
                                <div className="prose prose-lg max-w-none mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Impact on the Future Generation of Teenagers</h2>
                                </div>

                                <div className="prose prose-base max-w-none mb-10">
                                    <p>
                                        As algorithmic addiction becomes normalized, future generations may come to view constant surveillance and compulsive engagement as inevitable aspects of life.
                                        This normalization risks eroding expectations of autonomy, safe digital consumption, and meaningful social connection, <strong>reshaping cultural norms in ways that do not prioritize social justice</strong>.
                                    </p>
                                </div>

                                <div className="grid gap-8 lg:grid-cols-2 mb-10">
                                    <div className="card bg-base-100 border border-base-300">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg mb-2">Gendered Impacts</h3>
                                            <div className="space-y-8">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h4 className="font-semibold text-lg text-pink-500">Women</h4>
                                                    </div>
                                                    <div className="prose prose-base max-w-none">
                                                        <ul className="space-y-2">
                                                            <li>Reinforcement of unrealistic beauty standards</li>
                                                            <li>Increased risk of disordered eating</li>
                                                            <li>Higher rates of suicidal ideation</li>
                                                            <li>Body dysmorphia from filters/AI</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h4 className="font-semibold text-lg text-blue-600">Men</h4>
                                                    </div>
                                                    <div className="prose prose-base max-w-none">
                                                        <ul className="space-y-2">
                                                            <li>Exposure to violent pornography</li>
                                                            <li>Radicalization into misogynistic ideologies</li>
                                                            <li>Hyper-masculine narrative reinforcement</li>
                                                            <li>Aggression normalization</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 border border-base-300">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg mb-2">Long-Term Consequences</h3>
                                            <div className="space-y-4">
                                                <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                    <div className="card-body p-4 flex items-center gap-4">
                                                        <span className="text-3xl">🚨</span>
                                                        <span className="font-medium">Worsening mental health across generations</span>
                                                    </div>
                                                </div>

                                                <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                    <div className="card-body p-4 flex items-center gap-4">
                                                        <span className="text-3xl">📉</span>
                                                        <span className="font-medium">Spread of harmful ideologies and false beliefs</span>
                                                    </div>
                                                </div>

                                                <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                    <div className="card-body p-4 flex items-center gap-4">
                                                        <span className="text-3xl">🎭</span>
                                                        <span className="font-medium">Normalization of algorithmic addiction</span>
                                                    </div>
                                                </div>

                                                <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                    <div className="card-body p-4 flex items-center gap-4">
                                                        <span className="text-3xl">👥</span>
                                                        <span className="font-medium">Loss of agency and power</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Corporate Responsibility */}
                            <div id="section-3" className="mb-20 scroll-mt-20">
                                <div className="prose prose-lg max-w-none mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Who Is Responsible? Let's Dig Deeper</h2>
                                </div>

                                <div className="card bg-base-100 border border-base-300 mb-6">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg mb-2">Surveillance Capitalism</h3>
                                        <div className="prose prose-base max-w-none mb-4">
                                            <p>
                                                The digital revolution provides convenience but introduces new social risks.
                                                Digital interactions generate hundreds of data points per user per day.
                                                These data points are copied, aggregated, and processed algorithmically, primarily for advertising and behavioural prediction.
                                            </p>
                                        </div>
                                        <div className="grid gap-6 md:grid-cols-3">
                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-6 text-center">
                                                    <div className="text-4xl font-bold text-primary mb-2">2.5 × 10<sup>18</sup></div>
                                                    <div className="text-sm text-base-content/70">Bytes of data are generated globally every day</div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-6 text-center">
                                                    <div className="text-4xl font-bold text-secondary mb-2">3.1% → 44%</div>
                                                    <div className="text-sm text-base-content/70">Digital ad spend growth (2001-2020)</div>
                                                </div>
                                            </div>

                                            <div className="card bg-base-200 border border-base-300 hover:shadow-md transition-shadow">
                                                <div className="card-body p-6 text-center">
                                                    <div className="text-4xl font-bold text-accent mb-2">5</div>
                                                    <div className="text-sm text-base-content/70">Corporations control majority of global digital ad revenue</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-base max-w-none mb-6">
                                    <p>
                                        Corporations that design and deploy engagement-driven algorithms possess <strong>disproportionate power</strong> and privilege compared to teenage users. This imbalance
                                        allows platforms to shape behavior, attention, and identity formation without meaningful consent or accountability. Framing responsibility as individual
                                        choice ignores the structural advantage held by corporations, and causes people to lose power by failing to see the root issue.
                                    </p>
                                </div>

                                <div className="card bg-base-100 border border-base-300 bg-gradient-to-br from-primary/20 to-secondary/20">
                                    <div className="card-body">
                                        <h3 className="card-title text-lg mb-2">Why Responsibility Is Systemic</h3>
                                        <div className="prose prose-base max-w-none">
                                            <p>
                                                Accountability is blurred between users, parents, and companies. Teens are identified as especially vulnerable but remain structurally unprotected in a system designed to extract maximum value from their attention and data.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5: Solutions */}
                            <div id="section-5" className="mb-15 scroll-mt-20">
                                <div className="prose prose-lg max-w-none mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Solutions and Paths Forward</h2>
                                </div>

                                <div className="grid gap-8 lg:grid-cols-3 mb-12">
                                    <div className="card bg-base-100 border border-base-300 transition-all">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg text-success">Individual & Community</h3>
                                            <div className="prose prose-base max-w-none">
                                                <ul className="space-y-2">
                                                    <li>Monitor and reduce usage patterns</li>
                                                    <li>Implement digital detox periods</li>
                                                    <li>Create screen-free zones and times</li>
                                                    <li>Develop contingency plans for triggers</li>
                                                    <li>Recognize addiction signs early</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 border border-base-300 transition-all">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg text-primary">Government & Policy</h3>
                                            <div className="prose prose-base max-w-none">
                                                <ul className="space-y-2">
                                                    <li>Implement Online Harms Act legislation</li>
                                                    <li>Require platform transparency</li>
                                                    <li>Mandate algorithmic risk assessments</li>
                                                    <li>Enforce child protection measures</li>
                                                    <li>Label amplified harmful content</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 border border-base-300 transition-all">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg text-secondary">Platform Redesign</h3>
                                            <div className="prose prose-base max-w-none">
                                                <ul className="space-y-2">
                                                    <li>Proactive algorithm monitoring</li>
                                                    <li>AI flagging content with human moderation</li>
                                                    <li>Reduce autoplay and infinite scroll (increase agency)</li>
                                                    <li>Limit targeted advertising</li>
                                                    <li>Take elements from decentralized platforms</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Platform Comparison */}
                                <div className="card bg-base-100 border border-base-300">
                                    <div className="card-body">
                                        <h3 className="card-title text-center text-xl mb-2">Centralized vs. Decentralized Platforms</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="card bg-error/10 border-error/30 hover:shadow-md transition-shadow">
                                                <div className="card-body">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-lg font-bold text-error">Centralized Social Media</h4>
                                                        <span className="badge badge-error badge-lg">Current</span>
                                                    </div>
                                                    <div className="prose prose-base max-w-none">
                                                        <ul className="space-y-2">
                                                            <li>Profit-driven algorithms</li>
                                                            <li>Data harvesting & surveillance</li>
                                                            <li>Limited user control</li>
                                                            <li>Opaque content moderation</li>
                                                            <li>Addictive design patterns</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card bg-success/10 border-success/30 hover:shadow-md transition-shadow">
                                                <div className="card-body">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-lg font-bold text-success">Mastodon (Decentralized)</h4>
                                                        <span className="badge badge-success badge-lg">Alternative</span>
                                                    </div>
                                                    <div className="prose prose-base max-w-none">
                                                        <ul className="space-y-2">
                                                            <li>Community-driven governance</li>
                                                            <li>Transparent algorithms</li>
                                                            <li>User data ownership</li>
                                                            <li>Customizable feeds</li>
                                                            <li>Well-being focused design</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="prose prose-base max-w-none mt-4">
                                            <h4>Issues with Mastodon</h4>
                                            <ul>
                                                <li>Can create echo chambers as users select communities that align with their own ideologies.</li>
                                                <li>Less automated moderation: relies heavily on community reporting.</li>
                                                <li>Not a full replacement for mainstream platforms, mostly a proof of concept currently.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="pb-20">
                                <div className="card bg-gradient-to-br from-primary/20 to-base-200 border border-primary/30">
                                    <div className="card-body p-8">
                                        <h2 className="card-title text-3xl mb-4 text-center">Conclusion</h2>

                                        <div className="prose prose-base max-w-none mb-4">
                                            <p>
                                                The current state of teenage online addiction is driven by algorithms that chase engagement, all for the goal of profit for huge corporations.
                                                I’ve always thought online media addiction is not a personal failure, but a systemic issue, given the number of teenagers with high online usage rates.
                                                The research to find the root cause provides confirmation, as the designs of popular platforms are predatory, education and policies need updating, and more awareness needs to be brought to the issue.
                                                Algorithms have their benefits, but we need to ensure that algorithmic systems are not actively manipulating engagement and emotion.
                                            </p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="card bg-base-100 border border-base-300">
                                                <div className="card-body">
                                                    <h3 className="card-title text-lg">Key Insights</h3>
                                                    <div className="prose prose-base max-w-none">
                                                        <ol className="space-y-2">
                                                            <li className="font-medium">Teenagers are neurologically vulnerable to algorithm-driven addiction</li>
                                                            <li className="font-medium">Algorithms prioritize engagement over well-being</li>
                                                            <li className="font-medium">Dopamine-driven feedback loops are intentionally designed</li>
                                                            <li className="font-medium">Safeguards have not kept pace with technological development</li>
                                                            <li className="font-medium">Digital media benefits exist but are overshadowed by harm</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="prose prose-base max-w-none mb-10">
                                                <p>
                                                    As a teenager who grew up accustomed to technology, my perspective is shaped by firsthand exposure to constant connectivity, algorithmic feeds, and normalized high screen use.
                                                    Recently, through high school, I’ve noticed short-form content being the most addictive, and something that had a negative impact on my life, which is why I’ve slowly reduced my use throughout the years.
                                                    I fear that social normalization will make it harder for people to recognize harm or seek help, reinforcing the need for systemic change rather than blaming individuals.
                                                </p>
                                            </div>

                                            <div className="card bg-primary/10 border-primary/40">
                                                <div className="card-body">
                                                    <h3 className="text-xl font-bold text-primary">Final Statement</h3>
                                                    <div className="prose prose-lg max-w-none">
                                                        <p className="text-lg leading-relaxed">
                                                            <strong>Online media addiction is not a personal failure, but a systemic issue.</strong> Meaningful change requires platform accountability, updated policies, and increased algorithm awareness so that technology serves teenagers rather than exploits them.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                                <input type="checkbox" />
                                <div className="collapse-title font-semibold">References</div>
                                <div className="prose max-w-none collapse-content text-sm hanging-indent">
                                    <p className="text-base text-base-content">Full research and specific source used for each point:{" "}
                                        <a href="../../../public/full-research.pdf" download className="text-blue-600 hover:text-blue-800">
                                            Download PDF
                                        </a>
                                    </p>

                                    <p>Arora, S., Arora, S., & Hastings, J. D. (2024, August 19). The Psychological Impacts of Algorithmic and AI-Driven Social Media on Teenagers: A Call to Action. arXiv. Retrieved January 12, 2026, from https://arxiv.org/html/2408.10351v1</p>
                                    <p>Bolch, M. B., Moore, R. M., Robertson, G. C., Scafe, M. J., & Milkovich, L. M. (2025, August 1). Screens Are Not the Enemy: Recommendations for Developing Healthy Digital Habits in Youth. National Library of Medicine. Retrieved January 12, 2026, from https://pmc.ncbi.nlm.nih.gov/articles/PMC12331319/</p>
                                    <p>Canadian Heritage. (2024, February 26). Backgrounder – Government of Canada introduces legislation to combat harmful content online, including the sexual exploitation of children. Canada.ca. Retrieved January 12, 2026, from https://www.canada.ca/en/canadian-heritage/news/2024/02/backgrounder--government-of-canada-introduces-legislation-to-combat-harmful-content-online-including-the-sexual-exploitation-of-children.html</p>
                                    <p>Draper, D., & Neschke, S. (2023, October 1). The Pros and Cons of Social Media Algorithms. Bipartisan Policy Center. Retrieved January 12, 2026, from https://bipartisanpolicy.org/wp-content/uploads/2023/10/BPC_Tech-Algorithm-Tradeoffs_R01.pdf</p>
                                    <p>Ebsworth, J., Johns, S., & Dodson, M. (2021, July 1). Surveillance Capitalism: the hidden costs of the digital revolution. Cambridge Papers. Retrieved January 12, 2026, from https://www.cambridgepapers.org/surveillance-capitalism-the-hidden-costs-of-the-digital-revolution/</p>
                                    <p>eSafety Commissioner. (2025, April 17). An unfair fight – how algorithms are shaping our adolescents. eSafety Commissioner. Retrieved January 12, 2026, from https://www.esafety.gov.au/newsroom/blogs/an-unfair-fight-how-algorithms-are-shaping-our-adolescents</p>
                                    <p>Jackiw, J. (2022, March 1). How To Overcome Social Media Addiction - CTRI. Crisis & Trauma Resource Institute. Retrieved January 12, 2026, from https://ctrinstitute.com/blog/how-to-overcome-social-media-addiction/</p>
                                    <p>Klam, L. (2024, April 15). Algorithms, Addiction, and Abuse: The Need to Protect Children Online. First Focus on Children. Retrieved January 12, 2026, from https://firstfocus.org/update/algorithms-addiction-and-abuse-the-need-to-protect-children-online/</p>
                                    <p>Moore, D. M. (2024, July 9). Algorithmic Exploitation in Social Media Human Trafficking and Strategies for Regulation. CanLII. Retrieved January 12, 2026, from https://www.canlii.org/en/commentary/doc/2024CanLIIDocs1910</p>
                                    <p>Shakya, B., & Hernandez, C. (2024, November 8). Algorithmic Manipulation: How social media platforms exploit student vulnerabilities. Yale News. Retrieved January 12, 2026, from https://yaledailynews.com/blog/2024/11/08/algorithmic-manipulation-how-social-media-platforms-exploit-student-vulnerabilities/</p>
                                </div>
                            </div>
                            <div className="py-10"></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};