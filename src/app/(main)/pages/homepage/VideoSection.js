import React from 'react';

export default function VideoSection() {
    return (
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/videoBackground.png')" }}>
            <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-center " style={{
                textShadow: '-1px 7px 5px rgba(0, 0, 0, 0.75)',
            }}>
                Video Coming Soon...
            </p>
        </div>
    );
}