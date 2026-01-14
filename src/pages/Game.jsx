import { useState, useEffect, useRef } from 'react'
import { cards } from '../data/cardsData'
import { motion, AnimatePresence } from 'framer-motion'

export default function Game() {
    const [workCompleted, setWorkCompleted] = useState(0)
    const [currentWorkProgress, setCurrentWorkProgress] = useState(0)
    const [satisfaction, setSatisfaction] = useState(50)
    const [harm, setHarm] = useState(0)
    const [currentCard, setCurrentCard] = useState(null)
    const [isGameOver, setIsGameOver] = useState(false)
    const [distractionsViewed, setDistractionsViewed] = useState(0)
    const [highScore, setHighScore] = useState(0)

    // Visual feedback states
    const [showSuccessGlow, setShowSuccessGlow] = useState(false)
    const [showGameOverGlow, setShowGameOverGlow] = useState(false)

    const [targetText, setTargetText] = useState('')
    const [typedText, setTypedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [errors, setErrors] = useState(0)
    const inputRef = useRef(null)

    // Initialize high score from localStorage
    useEffect(() => {
        const savedHighScore = localStorage.getItem('typingGameHighScore')
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore))
        }
    }, [])

    useEffect(() => {
        generateNewWork()
    }, [])

    useEffect(() => {
        if (satisfaction <= 0 || harm >= 100) {
            setIsGameOver(true)
            setShowGameOverGlow(true)

            // Update high score if current score is higher
            if (workCompleted > highScore) {
                setHighScore(workCompleted)
                localStorage.setItem('typingGameHighScore', workCompleted.toString())
            }
        }
    }, [satisfaction, harm, workCompleted, highScore])

    // Auto-reset after game over glow
    useEffect(() => {
        if (showGameOverGlow) {
            const timer = setTimeout(() => {
                resetGame()
                setShowGameOverGlow(false)
            }, 1500) // Reset after 1.5 seconds of red glow
            return () => clearTimeout(timer)
        }
    }, [showGameOverGlow])

    const generateNewWork = () => {
        const texts = [
            "Digital platforms optimize for engagement, not well-being.",
            "Short-form content reduces attention spans significantly.",
            "Dopamine hits from likes create addictive feedback loops.",
            "Algorithmic feeds prioritize controversy over truth.",
            "Social comparison on apps increases anxiety rates.",
            "Notification design exploits human psychology intentionally.",
            "Endless scrolling hijacks our decision-making abilities.",
            "Metrics replace meaning in modern online interactions.",
            "Variable rewards create unpredictable addiction patterns.",
            "Auto-play features eliminate natural stopping points completely."
        ]
        const text = texts[Math.floor(Math.random() * texts.length)]
        setTargetText(text)
        setTypedText('')
        setCurrentIndex(0)
        setErrors(0)
        setCurrentWorkProgress(0)
        setTimeout(() => inputRef.current?.focus(), 50)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isGameOver || currentIndex >= targetText.length) return

            if (e.key !== 'Tab' && e.key !== 'F5' && e.key !== 'F12') {
                e.preventDefault()
            }

            if (e.key === 'Backspace') {
                if (currentIndex > 0) {
                    setCurrentIndex(prev => prev - 1)
                    setTypedText(prev => prev.slice(0, -1))
                    setCurrentWorkProgress(Math.max(((currentIndex - 1) / targetText.length) * 100, 0))
                }
                return
            }

            if (e.key.length === 1) {
                const expectedChar = targetText[currentIndex]

                if (e.key === expectedChar) {
                    setTypedText(prev => prev + e.key)
                    const newIndex = currentIndex + 1
                    setCurrentIndex(newIndex)
                    setCurrentWorkProgress((newIndex / targetText.length) * 100)
                    setSatisfaction(prev => Math.max(prev - 0.15, 0))

                    if (newIndex === targetText.length) {
                        setTimeout(() => {
                            completeWork()
                        }, 200)
                    }
                } else {
                    setErrors(prev => prev + 1)
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentIndex, targetText, isGameOver])

    const completeWork = () => {
        setWorkCompleted(prev => {
            const newScore = prev + 1
            // Update high score if needed
            if (newScore > highScore) {
                setHighScore(newScore)
                localStorage.setItem('typingGameHighScore', newScore.toString())
            }
            return newScore
        })
        setSatisfaction(prev => Math.max(prev - 10, 0))

        // Show success glow
        setShowSuccessGlow(true)
        setTimeout(() => {
            setShowSuccessGlow(false)
            generateNewWork()
        }, 500) // Show success glow for 0.5 seconds
    }

    const getRandomCard = () => {
        const randomCard = cards[Math.floor(Math.random() * cards.length)]
        setCurrentCard(randomCard)
        setDistractionsViewed(prev => prev + 1)
        setSatisfaction(prev => Math.min(Math.max(prev + randomCard.enjoyment, 0), 100))

        // Handle negative harm values (reducing harm)
        setHarm(prev => {
            const newHarm = prev + randomCard.harm
            // Clamp between 0 and 100
            return Math.min(Math.max(newHarm, 0), 100)
        })
    }

    const resetGame = () => {
        setWorkCompleted(0)
        setCurrentWorkProgress(0)
        setSatisfaction(50)
        setHarm(0)
        setCurrentCard(null)
        setIsGameOver(false)
        setDistractionsViewed(0)
        setShowSuccessGlow(false)
        setShowGameOverGlow(false)
        generateNewWork()
    }

    const renderText = () => {
        return targetText.split('').map((char, idx) => {
            if (idx < currentIndex) {
                const isCorrect = typedText[idx] === char
                return (
                    <span
                        key={idx}
                        className={`transition-colors duration-75 ${isCorrect ? 'text-success' : 'text-error'}`}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                )
            }

            if (idx === currentIndex) {
                return (
                    <span key={idx} className="relative">
                        <span className="text-base-content/40">
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary animate-pulse" />
                    </span>
                )
            }

            return (
                <span key={idx} className="text-base-content/40">
                    {char === ' ' ? '\u00A0' : char}
                </span>
            )
        })
    }

    return (
        <div className="h-full w-full overflow-hidden flex flex-col bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative">
            {/* Stats Bar with High Score */}
            <div className="flex-none px-5 pt-5 pb-4">
                <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1fr 1fr 150px 150px 150px' }}>
                    <div className="bg-base-100/90 backdrop-blur rounded-xl p-3 border border-base-300/50 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-base-content/70 uppercase tracking-wide">Assignment {workCompleted + 1}</span>
                            <span className="text-base font-bold text-primary">{currentWorkProgress.toFixed(0)}%</span>
                        </div>
                        <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-primary/80"
                                animate={{ width: `${currentWorkProgress}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        </div>
                    </div>

                    <div className="bg-base-100/90 backdrop-blur rounded-xl p-3 border border-base-300/50 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-base-content/70 uppercase tracking-wide">Satisfaction</span>
                            <span className={`text-base font-bold ${
                                satisfaction < 25 ? 'text-error' : satisfaction < 50 ? 'text-warning' : 'text-success'
                            }`}>
                                {satisfaction.toFixed(0)}%
                            </span>
                        </div>
                        <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full ${
                                    satisfaction > 70 ? 'bg-gradient-to-r from-success to-success/80' :
                                        satisfaction > 30 ? 'bg-gradient-to-r from-warning to-warning/80' :
                                            'bg-gradient-to-r from-error to-error/80'
                                }`}
                                animate={{ width: `${satisfaction}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        </div>
                    </div>

                    <div className="bg-base-100/90 backdrop-blur rounded-xl p-3 border border-base-300/50 shadow">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-base-content/70 uppercase tracking-wide">Digital Harm</span>
                            <span className={`text-base font-bold ${
                                harm > 70 ? 'text-error' :
                                    harm > 40 ? 'text-warning' :
                                        harm < 20 ? 'text-success' : 'text-base-content'
                            }`}>
                                {harm.toFixed(0)}%
                            </span>
                        </div>
                        <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full ${
                                    harm > 70 ? 'bg-gradient-to-r from-error to-error/80' :
                                        harm > 40 ? 'bg-gradient-to-r from-warning to-warning/80' :
                                            'bg-gradient-to-r from-success to-success/80'
                                }`}
                                animate={{ width: `${harm}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        </div>
                    </div>

                    <div className="bg-base-100/90 backdrop-blur rounded-xl p-3 border border-base-300/50 shadow">
                        <div className="text-xs font-bold text-base-content/60 uppercase tracking-wide mb-1">Completed</div>
                        <div className="flex items-baseline gap-1">
                            <div className="text-3xl font-black text-primary leading-none">{workCompleted}</div>
                            <div className="text-xs text-base-content/50">works</div>
                        </div>
                    </div>

                    <div className="bg-base-100/90 backdrop-blur rounded-xl p-3 border border-base-300/50 shadow">
                        <div className="text-xs font-bold text-base-content/60 uppercase tracking-wide mb-1">Distractions</div>
                        <div className="flex items-baseline gap-1">
                            <div className="text-3xl font-black text-secondary leading-none">{distractionsViewed}</div>
                            <div className="text-xs text-base-content/50">views</div>
                        </div>
                    </div>

                    <div className="bg-base-100/90 backdrop-blur rounded-xl p-3 border border-base-300/50 shadow">
                        <div className="text-xs font-bold text-base-content/60 uppercase tracking-wide mb-1 flex items-center gap-1">
                            <span>🏆</span>
                            <span>High Score</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <div className="text-3xl font-black text-warning leading-none">{highScore}</div>
                            <div className="text-xs text-base-content/50">works</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Panels */}
            <div className="flex-1 min-h-0 px-3 pb-3">
                <div className="grid lg:grid-cols-2 gap-2.5 h-full">
                    {/* Work Panel */}
                    <div
                        onClick={() => inputRef.current?.focus()}
                        className="bg-base-100/95 backdrop-blur rounded-xl border border-base-300/60 shadow-xl p-4 flex flex-col cursor-text hover:border-primary/30 transition-colors overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-3 flex-none">
                            <h2 className="text-base font-bold flex items-center gap-1.5">
                                ⌨️ Workstation
                            </h2>
                            <div className="flex gap-1.5">
                                <div className={`badge badge-sm ${currentWorkProgress === 100 ? 'badge-success' : 'badge-ghost'}`}>
                                    {targetText.length - currentIndex}
                                </div>
                                {errors > 0 && <div className="badge badge-error badge-sm">{errors}</div>}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col min-h-0">
                            {/* Text container with wrapping */}
                            <div className="flex-1 bg-base-200/60 rounded-lg px-5 py-4 mb-3 border border-base-300/40 flex items-center justify-center overflow-hidden">
                                <div
                                    className="font-mono text-base leading-relaxed tracking-wide select-none"
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}
                                >
                                    {renderText()}
                                </div>
                            </div>

                            <input ref={inputRef} className="sr-only" autoFocus />

                            <div className="flex-none space-y-2">
                                <div className="flex justify-between text-[10px] text-base-content/50 font-medium">
                                    <span>Type each character • Backspace to fix</span>
                                    <span>-0.15% per char</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: currentWorkProgress >= 100 ? 1.01 : 1 }}
                                    whileTap={{ scale: currentWorkProgress >= 100 ? 0.99 : 1 }}
                                    onClick={() => currentWorkProgress >= 100 && completeWork()}
                                    disabled={currentWorkProgress < 100 || isGameOver}
                                    className={`btn btn-sm w-full ${
                                        currentWorkProgress >= 100 ? 'btn-success' : 'btn-disabled'
                                    }`}
                                >
                                    {currentWorkProgress >= 100 ? (
                                        <>
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            >
                                                ⚡
                                            </motion.span>
                                            Submit Work
                                        </>
                                    ) : 'Complete typing to submit'}
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Feed Panel */}
                    <div className="bg-base-100/95 backdrop-blur rounded-xl border border-base-300/60 shadow-xl p-4 flex flex-col overflow-hidden">
                        <div className="flex items-center justify-between mb-3 flex-none">
                            <h2 className="text-base font-bold flex items-center gap-1.5">
                                📱 Content Feed
                            </h2>
                            <div className="badge badge-secondary badge-sm">#{distractionsViewed}</div>
                        </div>

                        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                            <AnimatePresence mode="wait">
                                {currentCard ? (
                                    <motion.div
                                        key={currentCard.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex-1 flex flex-col min-h-0"
                                    >
                                        <div className={`text-black flex-1 rounded-lg px-5 py-6 border border-base-300/40 ${currentCard.color} flex items-center justify-center overflow-auto`}>
                                            <div className="text-center">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                    className="text-5xl mb-3"
                                                >
                                                    {currentCard.emoji}
                                                </motion.div>
                                                <h3 className="font-bold mb-2">{currentCard.title}</h3>
                                                <p className="text-sm leading-relaxed mb-4 max-w-sm mx-auto">
                                                    {currentCard.description}
                                                </p>
                                                <div className="grid grid-cols-2 gap-3 max-w-[220px] mx-auto">
                                                    <div className="bg-base-100/95 p-3 rounded-lg border border-base-300/40">
                                                        <div className="text-xl font-bold text-success">+{currentCard.enjoyment}</div>
                                                        <div className="text-[10px] text-success/70 font-bold uppercase tracking-wide">Joy</div>
                                                    </div>
                                                    <div className="bg-base-100/95 p-3 rounded-lg border border-base-300/40">
                                                        <div className={`text-xl font-bold ${currentCard.harm < 0 ? 'text-success' : 'text-error'}`}>
                                                            {currentCard.harm >= 0 ? '+' : ''}{currentCard.harm}
                                                        </div>
                                                        <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: currentCard.harm < 0 ? '#059669' : '#dc2626' }}>
                                                            Harm
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex-none space-y-1.5">
                                            <div className="text-center text-[10px] text-base-content/40 italic">
                                                Just one more scroll...
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                onClick={getRandomCard}
                                                disabled={isGameOver}
                                                className="btn btn-primary btn-sm w-full"
                                            >
                                                Next Content →
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex-1 flex flex-col items-center justify-center"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="text-6xl mb-3 opacity-20"
                                        >
                                            📱
                                        </motion.div>
                                        <p className="text-sm text-base-content/50 mb-4">Feed is empty</p>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={getRandomCard}
                                            className="btn btn-primary btn-sm"
                                        >
                                            Start Scrolling
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Glow - Clean Edge Pulse */}
            <AnimatePresence>
                {showSuccessGlow && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 pointer-events-none z-50"
                    >
                        {/* Top Edge */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: [0, 12, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-success to-transparent"
                        />

                        {/* Bottom Edge */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: [0, 12, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-success to-transparent"
                        />

                        {/* Left Edge */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: [0, 12, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-success to-transparent"
                        />

                        {/* Right Edge */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: [0, 12, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-success to-transparent"
                        />

                        {/* Full screen glow pulse */}
                        <motion.div
                            initial={{ opacity: 0, boxShadow: 'inset 0 0 0px 0px rgba(34, 197, 94, 0)' }}
                            animate={{
                                opacity: [0, 0.3, 0],
                                boxShadow: [
                                    'inset 0 0 0px 0px rgba(34, 197, 94, 0)',
                                    'inset 0 0 50px 20px rgba(34, 197, 94, 0.4)',
                                    'inset 0 0 0px 0px rgba(34, 197, 94, 0)'
                                ]
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Game Over Glow - Clean Edge Pulse */}
            <AnimatePresence>
                {showGameOverGlow && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 pointer-events-none z-50"
                    >
                        {/* Top Edge */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: [0, 16, 8, 16, 8, 0],
                                opacity: [0, 0.9, 0.5, 0.9, 0.5, 0]
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-error to-transparent"
                        />

                        {/* Bottom Edge */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: [0, 16, 8, 16, 8, 0],
                                opacity: [0, 0.9, 0.5, 0.9, 0.5, 0]
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-error to-transparent"
                        />

                        {/* Left Edge */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: [0, 16, 8, 16, 8, 0],
                                opacity: [0, 0.9, 0.5, 0.9, 0.5, 0]
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-error to-transparent"
                        />

                        {/* Right Edge */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: [0, 16, 8, 16, 8, 0],
                                opacity: [0, 0.9, 0.5, 0.9, 0.5, 0]
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-error to-transparent"
                        />

                        {/* Full screen glow pulse */}
                        <motion.div
                            initial={{ opacity: 0, boxShadow: 'inset 0 0 0px 0px rgba(239, 68, 68, 0)' }}
                            animate={{
                                opacity: [0, 0.4, 0.2, 0.4, 0.2, 0],
                                boxShadow: [
                                    'inset 0 0 0px 0px rgba(239, 68, 68, 0)',
                                    'inset 0 0 60px 25px rgba(239, 68, 68, 0.5)',
                                    'inset 0 0 40px 15px rgba(239, 68, 68, 0.3)',
                                    'inset 0 0 60px 25px rgba(239, 68, 68, 0.5)',
                                    'inset 0 0 40px 15px rgba(239, 68, 68, 0.3)',
                                    'inset 0 0 0px 0px rgba(239, 68, 68, 0)'
                                ]
                            }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}