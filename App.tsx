import React, { useState } from 'react';
import { BuildMode } from './types';
import { LAYERS } from './constants';
import InfoPanel from './components/InfoPanel';
import BuildingVisualizer from './components/BuildingVisualizer';
import { Settings2, X } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<BuildMode>(BuildMode.WILD_WEST);
  const [activeLayerId, setActiveLayerId] = useState<string>(LAYERS[0].id);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const activeLayer = LAYERS.find(l => l.id === activeLayerId) || LAYERS[0];

  const handleLayerSelect = (id: string) => {
    setActiveLayerId(id);
    setIsPanelOpen(true);
  };

  const closePanel = () => setIsPanelOpen(false);

  return (
    <div className="fixed inset-0 bg-slate-50 text-slate-900 font-sans overflow-hidden h-[100dvh]">
      
      {/* --- MODERN HEADER --- */}
      <header className="absolute top-0 left-0 right-0 h-16 z-50 px-4 md:px-8 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-black text-sm">Rb</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold tracking-tight text-slate-900 leading-none">Re:Build</h1>
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">The State of Software</span>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
           <button 
             onClick={() => setMode(BuildMode.WILD_WEST)}
             className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ease-out ${
               mode === BuildMode.WILD_WEST 
               ? 'bg-amber-600 text-white shadow-md shadow-amber-900/20' 
               : 'text-slate-500 hover:text-slate-900'
             }`}
           >
             Current Reality (2026)
           </button>
           <button 
             onClick={() => setMode(BuildMode.INDUSTRIAL)}
             className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all duration-300 ease-out ${
               mode === BuildMode.INDUSTRIAL 
               ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20' 
               : 'text-slate-500 hover:text-slate-900'
             }`}
           >
             Future Standard
           </button>
        </div>
      </header>

      {/* --- BACKGROUND VISUALIZER --- */}
      <div 
        className={`
          absolute inset-0 z-0 pt-16
          transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
          ${isPanelOpen ? 'scale-[0.95] md:translate-x-[-15%]' : 'scale-100 translate-x-0'}
        `}
        onClick={closePanel} // Click "sky" to close
      >
        <BuildingVisualizer 
          layers={LAYERS} 
          mode={mode} 
          activeLayerId={activeLayerId}
          onLayerSelect={handleLayerSelect}
        />
        
        {/* Helper Hint */}
        <div className={`
           absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-500 z-10
           ${isPanelOpen ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}>
           <span className="bg-white/90 px-5 py-2.5 rounded-full text-xs font-bold shadow-xl text-slate-600 border border-slate-200 flex items-center gap-2 animate-bounce">
             <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
             Tap a layer to inspect
           </span>
        </div>
      </div>

      {/* --- OVERLAY PANEL (Smart Sheet/Drawer) --- */}
      {/* Backdrop for mobile dimming */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-[1px] z-20 transition-opacity duration-300 md:hidden ${isPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={closePanel}
      />

      <div 
        className={`
          absolute z-40 bg-white shadow-2xl
          
          /* Mobile: Bottom Sheet */
          bottom-0 left-0 right-0 
          h-[75vh] rounded-t-[2rem]
          border-t border-slate-200
          
          /* Desktop: Right Sidebar */
          md:top-16 md:bottom-0 md:right-0 md:left-auto md:h-auto md:w-[480px]
          md:rounded-none md:border-l md:border-t-0
          
          transform transition-transform duration-300 ease-out
          ${isPanelOpen ? 'translate-y-0 md:translate-x-0' : 'translate-y-[100%] md:translate-x-[100%]'}
        `}
      >
        {/* Mobile Drag Handle */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-200 rounded-full md:hidden" />
        
        <InfoPanel 
          layer={activeLayer} 
          mode={mode} 
          onClose={closePanel}
        />
      </div>

    </div>
  );
};

export default App;