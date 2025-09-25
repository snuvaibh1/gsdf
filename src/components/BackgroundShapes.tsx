import React from 'react';

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-yellow-900">
      {/* Floating golden spotlight */}
      <div className="absolute inset-0">
        <div className="absolute w-[160%] h-[160%] bg-[radial-gradient(circle,rgba(255,215,0,0.18),transparent_70%)] animate-float-slow"></div> 
      </div>

      {/* Floating gradient shimmer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-orange-500/10 animate-float-medium"></div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundShapes;
