"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon, MaximizeIcon } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";

const Demo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    }, []);

    const togglePlay = useCallback(() => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((error) => {
                    console.error('Failed to play video:', error);
                    setIsPlaying(false);
                });
        }
    }, [isPlaying]);

    const toggleMute = useCallback(() => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }, [isMuted]);

    const handleTimeUpdate = useCallback(() => {
        if (!videoRef.current) return;
        const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(isFinite(currentProgress) ? currentProgress : 0);
    }, []);

    const handleVideoEnd = useCallback(() => {
        setIsPlaying(false);
        setProgress(0);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    }, []);

    const handleFullscreen = useCallback(() => {
        if (!videoRef.current) return;
        const elem = videoRef.current as HTMLVideoElement & {
            webkitRequestFullscreen?: () => Promise<void>;
            msRequestFullscreen?: () => Promise<void>;
        };
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }, []);

    const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!videoRef.current || !isFinite(videoRef.current.duration)) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        videoRef.current.currentTime = percent * videoRef.current.duration;
    }, []);

    const handleProgressKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (!videoRef.current || !isFinite(videoRef.current.duration)) return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 5);
        }
    }, []);

    const handleContainerKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.target !== e.currentTarget) return;
        switch (e.key) {
            case ' ':
            case 'k':
                e.preventDefault();
                togglePlay();
                break;
            case 'm':
                e.preventDefault();
                toggleMute();
                break;
            case 'f':
                e.preventDefault();
                handleFullscreen();
                break;
        }
    }, [togglePlay, toggleMute, handleFullscreen]);

    return (
        <div id="demo" className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Démonstration" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Voyez l&apos;outil en action
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Découvrez comment contacter l&apos;écosystème French Tech Bordeaux en quelques clics
                    </p>
                </div>
            </Container>
            <Container>
                <div className="w-full max-w-4xl mx-auto mt-12 relative">
                    <div
                        className="relative rounded-2xl border border-border/50 bg-card/30 overflow-hidden aspect-video group"
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => setShowControls(false)}
                        onKeyDown={handleContainerKeyDown}
                        tabIndex={0}
                        role="application"
                        aria-label="Video player - Press space to play/pause, M to mute, F for fullscreen"
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster="/images/dashboard.png"
                            preload="none"
                            muted={isMuted}
                            playsInline
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            onClick={togglePlay}
                            aria-label="Démonstration de French Tech Sender"
                        >
                            <source src="/videos/demo.mp4" type="video/mp4" />
                        </video>

                        {/* Play button overlay - shown when not playing */}
                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity"
                                onClick={togglePlay}
                                role="button"
                                aria-label="Lancer la vidéo"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors hover:scale-105 transform duration-200 shadow-lg shadow-primary/30">
                                    <PlayIcon className="w-8 h-8 text-white ml-1" fill="white" />
                                </div>
                            </div>
                        )}

                        {/* Video controls - shown on hover when playing */}
                        <div
                            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                                showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {/* Progress bar */}
                            <div
                                className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 group/progress"
                                onClick={handleProgressClick}
                                onKeyDown={handleProgressKeyDown}
                                role="slider"
                                tabIndex={0}
                                aria-label="Progression de la vidéo"
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={Math.round(progress)}
                            >
                                <div
                                    className="h-full bg-primary rounded-full relative transition-all"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            {/* Control buttons */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={togglePlay}
                                        aria-label={isPlaying ? "Pause" : "Lecture"}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    >
                                        {isPlaying ? (
                                            <PauseIcon className="w-5 h-5 text-white" fill="white" />
                                        ) : (
                                            <PlayIcon className="w-5 h-5 text-white ml-0.5" fill="white" />
                                        )}
                                    </button>
                                    <button
                                        onClick={toggleMute}
                                        aria-label={isMuted ? "Activer le son" : "Couper le son"}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    >
                                        {isMuted ? (
                                            <VolumeXIcon className="w-5 h-5 text-white" />
                                        ) : (
                                            <Volume2Icon className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                </div>
                                <button
                                    onClick={handleFullscreen}
                                    aria-label="Plein écran"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <MaximizeIcon className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* App features highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                            <p className="text-2xl font-bold text-primary">1.</p>
                            <p className="text-sm text-muted-foreground mt-1">Importez vos templates</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                            <p className="text-2xl font-bold text-primary">2.</p>
                            <p className="text-sm text-muted-foreground mt-1">Sélectionnez vos cibles</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                            <p className="text-2xl font-bold text-primary">3.</p>
                            <p className="text-sm text-muted-foreground mt-1">Lancez l&apos;envoi</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Demo;
