import React, { useRef, useEffect } from 'react';
import { BuildMode, LayerData } from '../types';
import { History, AlertTriangle, CheckCircle2, X, ArrowRight, BookOpen } from 'lucide-react';
import { LAYERS } from '../constants';

interface InfoPanelProps {
  layer: LayerData;
  mode: BuildMode;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ layer, mode, onClose }) => {
  const isWildWest = mode === BuildMode.WILD_WEST;
  const layerIndex = LAYERS.findIndex(l => l.id === layer.id) + 1;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when the layer changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [layer.id]);

  return (
    <div className="h-full flex flex-col relative bg-white">
      {/* Header */}
      <div className="flex-none pt-6 px-6 md:pt-10 md:px-10 pb-6 border-b border-slate-200 flex items-start justify-between bg-white/95 sticky top-0 z-20 backdrop-blur-sm">
         <div className="flex items-center gap-5">
            <div className={`p-4 rounded-2xl shadow-md ring-1 ring-black/5 ${isWildWest ? 'bg-amber-100 text-amber-800' : 'bg-indigo-100 text-indigo-800'}`}>
              <layer.icon size={32} strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none mb-2">{layer.title}</h2>
              <div className="flex items-center gap-2">
                 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                   Layer {layerIndex}/6
                 </span>
              </div>
            </div>
         </div>
         
         <button 
           onClick={onClose}
           className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
           aria-label="Close"
         >
           <X size={24} />
         </button>
      </div>

      {/* Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 scrollbar-thin scrollbar-thumb-slate-300 pb-24">
        
        {/* 1. The Analogy */}
        <section>
           <div className="flex items-center gap-3 mb-4">
              <span className={`w-1.5 h-6 rounded-full ${isWildWest ? 'bg-amber-500' : 'bg-indigo-500'}`}></span>
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">The Analogy</h3>
           </div>
           <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed text-pretty">
             {layer.analogyTitle}
           </p>
           {layer.historicalReference && (
              <div className="mt-4 flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <History className="shrink-0 text-slate-400 mt-1" size={18} />
                  <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                    {layer.historicalReference}
                  </p>
              </div>
           )}
        </section>

        <hr className="border-slate-200" />

        {/* 2. Mode-Specific Content */}
        <section>
           <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-6 bg-slate-800 rounded-full"></span>
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">
                {isWildWest ? 'The Current Crisis (2026)' : 'The Future Standard (2050)'}
              </h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT COLUMN */}
              <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isWildWest ? 'bg-amber-50/50 border-amber-200 shadow-lg' : 'bg-indigo-50/50 border-indigo-200 shadow-lg'}`}>
                 <div className={`flex items-center gap-2 mb-3 ${isWildWest ? 'text-amber-700' : 'text-indigo-700'}`}>
                    {isWildWest ? <AlertTriangle size={20} className="fill-current" /> : <CheckCircle2 size={20} className="fill-current" />}
                    <span className="font-bold text-xs uppercase tracking-wider">
                        {isWildWest ? 'The Problem' : 'The Standard'}
                    </span>
                 </div>
                 <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {isWildWest ? 'Why it Burns' : 'Fireproof Design'}
                 </h4>
                 <p className="text-base text-slate-700 leading-relaxed font-medium">
                   {isWildWest ? layer.descriptionBad : layer.descriptionGood}
                 </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className={`p-6 rounded-2xl border-2 bg-white border-slate-200 hover:border-slate-300 transition-colors`}>
                 <div className="flex items-center gap-2 mb-3 text-slate-600">
                    {isWildWest ? <ArrowRight size={20} /> : <BookOpen size={20} />}
                    <span className="font-bold text-xs uppercase tracking-wider">
                        {isWildWest ? 'What Needs To Be Done' : 'How We Got Here'}
                    </span>
                 </div>
                 <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {isWildWest ? 'The Action Plan' : 'A Retrospective'}
                 </h4>
                 <p className="text-base text-slate-700 leading-relaxed font-medium">
                   {isWildWest ? layer.actionPlan : layer.futureRetrospective}
                 </p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default InfoPanel;