import React from 'react';
import { BuildMode, LayerData } from '../types';

interface BuildingVisualizerProps {
  layers: LayerData[];
  mode: BuildMode;
  activeLayerId: string;
  onLayerSelect: (id: string) => void;
}

const BuildingVisualizer: React.FC<BuildingVisualizerProps> = ({ 
  layers, 
  mode, 
  activeLayerId,
  onLayerSelect 
}) => {
  // Visual Stack: Top (Roof) -> Bottom (Foundation)
  const buildingLayers = [...layers].reverse(); 
  const isWildWest = mode === BuildMode.WILD_WEST;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative perspective-1000 overflow-hidden bg-slate-50">
       
       {/* Ambient Backgrounds */}
       <div className={`absolute inset-0 transition-opacity duration-1000 -z-10 ${isWildWest ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-[#f4e4bc]"></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#d7ccc8] to-transparent opacity-50"></div>
       </div>
       
       <div className={`absolute inset-0 transition-opacity duration-1000 -z-10 ${!isWildWest ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-slate-50"></div>
          {/* Architect Grid */}
          <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', 
               backgroundSize: '32px 32px', 
               opacity: 0.6 
             }}>
          </div>
       </div>

      {/* --- THE BUILDING CONTAINER --- */}
      {/* 
         Reduced height from 85% to 70% to scale down the house.
         Reduced width clamp to match.
      */}
      <div 
        className={`
          relative flex flex-col items-center justify-end
          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          h-[70%] max-h-[700px] w-full
        `}
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* === ROOF === */}
        <div className={`
          relative z-50 transition-all duration-500 origin-bottom flex-shrink-0
          w-[clamp(240px,40vh,400px)]
          ${isWildWest ? 'h-[14%] -mb-[1%] scale-110' : 'h-[12%] mb-0 scale-100'}
        `}>
           {isWildWest ? (
             <div className="w-[104%] -ml-[2%] h-full relative group cursor-pointer">
                {/* Wild West Roof Shape */}
                <div className="absolute inset-0 bg-[#4e342e] transform skew-x-3 rounded-sm shadow-2xl flex items-center justify-center border-b-4 border-[#3e2723] overflow-hidden">
                   <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#3e2723_10px,#3e2723_12px)]"></div>
                   <div className="w-16 h-16 bg-[#3e2723] absolute -right-4 -bottom-8 rounded-full blur-xl"></div>
                </div>
                {/* Chimney */}
                <div className="absolute -top-[30%] right-[15%] w-[12%] h-[60%] bg-[#5d4037] border-2 border-[#3e2723] flex items-start justify-center overflow-visible">
                    <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 text-2xl animate-pulse opacity-60">☁️</div>
                </div>
             </div>
           ) : (
             <div className="w-full h-full bg-slate-800 rounded-t-xl shadow-2xl relative border-t border-slate-600 flex items-end px-6 pb-2 justify-between">
                {/* Green Roof Elements */}
                <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                <div className="w-[15%] h-[60%] bg-slate-700 rounded border border-slate-600 relative">
                   <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1 animate-ping"></div>
                </div>
                <div className="w-[10%] aspect-square rounded-full border-2 border-slate-600 flex items-center justify-center">
                   <div className="w-full h-0.5 bg-slate-600 rotate-45"></div>
                   <div className="w-full h-0.5 bg-slate-600 -rotate-45 absolute"></div>
                </div>
                <div className="w-1 h-[80%] bg-slate-500 absolute -top-[40%] left-[20%]"></div>
             </div>
           )}
        </div>

        {/* === FLOORS === */}
        {/* Container for floors to manage stacking and sizing */}
        <div className="flex flex-col w-[clamp(240px,40vh,400px)] flex-1">
          {buildingLayers.map((layer, index) => {
              const isActive = layer.id === activeLayerId;
              const rotations = ['rotate-1', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0'];
              const offsets = ['translate-x-1', '-translate-x-2', 'translate-x-2', 'translate-x-0', '-translate-x-1', 'translate-x-1'];
              
              const rotation = isWildWest ? rotations[index % rotations.length] : 'rotate-0';
              const offset = isWildWest ? offsets[index % offsets.length] : 'translate-x-0';
              const widthMod = isWildWest ? 'w-[98%]' : 'w-full';

              const zIndex = isActive ? 50 : 40 - index; 

              return (
                <div
                  key={layer.id}
                  onClick={(e) => { e.stopPropagation(); onLayerSelect(layer.id); }}
                  style={{ zIndex }}
                  className={`
                    relative flex-1 min-h-[40px] transition-all duration-500 cursor-pointer group
                    ${widthMod} ${rotation} ${offset}
                    ${isActive ? 'scale-[1.05] !z-50' : 'hover:scale-[1.02]'}
                  `}
                >
                  {/* The Floor Block */}
                  <div className={`
                    w-full h-full relative overflow-hidden transition-all duration-300
                    ${isActive 
                      ? 'ring-4 ring-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.4)]' 
                      : 'shadow-lg hover:shadow-xl'}
                    ${isWildWest 
                        ? 'rounded-sm border-x-2 border-[#3e2723] bg-[#5d4037]' 
                        : 'border-x border-slate-300 bg-white'}
                  `}>
                    {isWildWest ? layer.visualBad : layer.visualGood}
                  </div>

                  {/* Floating Label (Desktop) */}
                  <div className={`
                    hidden md:flex absolute left-full top-1/2 -translate-y-1/2 ml-6 
                    items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 
                    ${isActive ? 'opacity-100 translate-x-0' : '-translate-x-2'}
                  `}>
                    <div className="w-12 h-px bg-indigo-500/50"></div>
                    <span className="bg-white text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap border border-slate-100">
                      {layer.title}
                    </span>
                  </div>
                </div>
              );
          })}
        </div>

        {/* === BASE === */}
        <div className={`
          w-[clamp(260px,45vh,440px)] flex-shrink-0 z-0 transition-all duration-700 relative 
          ${isWildWest ? 'h-[4%] bg-[#3e2723] rounded-b-xl mt-[-2px]' : 'h-[5%] bg-slate-400 rounded-none mt-0'}
        `}>
            {/* Shadow cast on ground */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[120%] h-8 bg-black/20 blur-xl rounded-[100%]"></div>
        </div>

      </div>
    </div>
  );
};

export default BuildingVisualizer;