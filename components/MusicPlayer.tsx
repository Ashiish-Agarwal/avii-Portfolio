'use client'
import { Music2Icon, Volume2Icon, VolumeXIcon, X } from 'lucide-react'
import { Card } from './ui/card'
import { useState, useRef } from 'react'

const MusicPlayer = () => {
    const [isMuted, setIsMuted] = useState(true)
    const [showPrompt, setShowPrompt] = useState(true)
    const audioRef = useRef<HTMLAudioElement>(null)

    const enableSound = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setIsMuted(false)
            setShowPrompt(false)
        }
    }

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setIsMuted(!isMuted)
        }
    }

    return (
        <>
            <audio ref={audioRef} autoPlay loop  id="music">
                <source src="hayeremeraghagra.mp3" type="audio/mpeg"/>
            </audio>
            
            {/* Prompt Card */}
            {showPrompt && isMuted && (
                <Card className="absolute top-20 right-2 p-4 shadow-lg animate-in fade-in slide-in-from-top-5">
                    <button 
                        onClick={() => setShowPrompt(false)}
                        className="absolute top-1 right-1"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    <div className="flex flex-col items-center gap-2">
                        <Music2Icon className="w-8 h-8" />
                        <p className="text-sm font-medium">Enable Background Music?</p>
                        <button 
                            onClick={enableSound}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        >
                            Play Music
                        </button>
                    </div>
                </Card>
            )}

            {/* Mute/Unmute Control */}
            <Card className="absolute top-2 mt-5  right-2 h-10 w-10 p-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-accent transition-colors">
                <button onClick={toggleMute} className="flex items-center gap-2 p-2">
                    {isMuted ? <VolumeXIcon className="w-6 h-6" /> : <Volume2Icon className="w-6 h-6" />}
                </button>
            </Card>
        </>
    )
}

export default MusicPlayer