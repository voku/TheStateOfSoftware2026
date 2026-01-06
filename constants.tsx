import React from 'react';
import { LayerData } from './types';
import { 
  BrickWall, 
  Zap, 
  Construction,
  Paintbrush, 
  Siren,
  Eye,
  AlertTriangle, 
  CheckCircle2,
  History,
  Maximize,
  FileWarning
} from 'lucide-react';

// Helper for Wild West Wood Texture
const WoodTexture = () => (
  <div className="absolute inset-0 opacity-20 pointer-events-none" 
       style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 10px, #000 10px, #000 11px)' }}></div>
);

// Helper for Industrial Grid
const GlassTexture = () => (
  <div className="absolute inset-0 opacity-30 pointer-events-none" 
       style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%)' }}></div>
);

export const LAYERS: LayerData[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    icon: BrickWall,
    analogyTitle: 'The Great Fire of Hamburg (1842)',
    softwareTitle: 'Core Infrastructure',
    descriptionBad: 'In 1842, a quarter of Hamburg burned to the ground because the city was built on mud with wooden stakes. Today, developers repeatedly implement their own authentication, file upload handlers, and logging systems for every new project. These custom solutions are brittle, untested, and riddled with vulnerabilities.',
    actionPlan: 'Stop "rolling your own" crypto and auth. Adopt standardized, secure-by-design frameworks (like hardened Auth0/NextAuth, AWS Cognito, or framework-native security) that act as the certified concrete foundation. Security must be a default, not a plugin.',
    descriptionGood: 'We use "Universal Blueprints"—standardized, secure-by-design frameworks that handle the heavy lifting. We do not forge our own nails; we do not build our own crypto systems. A solid, certified foundation is laid before the first line of business logic is written.',
    futureRetrospective: 'By 2030, writing custom authentication code became a liability that no insurer would cover. The industry moved to ISO-standardized infrastructure foundations, virtually eliminating SQL injection and session hijacking from the common bug list.',
    historicalReference: 'Hamburg lacked fire safety standards, making disaster inevitable. Modern software is a "digital bonfire" waiting for a spark.',
    visualBad: (
      <div className="w-full h-full bg-[#3e2723] relative overflow-hidden flex items-end justify-center">
        <WoodTexture />
        {/* Rotten Stilts */}
        <div className="absolute bottom-0 w-full flex justify-around px-2">
            <div className="w-[5%] h-full bg-[#271c19] mx-1 transform -skew-x-6 border-r border-[#5d4037]"></div>
            <div className="w-[5%] h-full bg-[#271c19] mx-1 transform skew-x-3 border-l border-[#5d4037]"></div>
            <div className="w-[5%] h-full bg-[#271c19] mx-1 transform -skew-x-2"></div>
        </div>
        {/* Mud */}
        <div className="absolute bottom-0 w-full h-1/3 bg-[#1a120b] opacity-80" style={{ clipPath: 'polygon(0% 100%, 20% 80%, 40% 90%, 60% 70%, 80% 85%, 100% 60%, 100% 100%, 0% 100%)' }}></div>
        {/* Debris */}
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-black/30 rotate-45"></div>
      </div>
    ),
    visualGood: (
      <div className="w-full h-full bg-slate-700 relative overflow-hidden flex items-center justify-center border-t-4 border-slate-600">
         {/* Heavy Concrete Texture */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
         
         {/* Rebar Grid */}
         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,transparent_9px,#fff_10px),linear-gradient(90deg,transparent_9px,#fff_10px)] bg-[length:20px_20px]"></div>
         
         <div className="z-10 bg-slate-800 px-3 py-1 rounded border border-slate-600 shadow-inner">
            <span className="text-[9px] text-slate-400 font-mono font-bold tracking-widest">REINFORCED CONCRETE</span>
         </div>
      </div>
    )
  },
  {
    id: 'utilities',
    title: 'Utilities & Wiring',
    icon: Zap,
    analogyTitle: 'Early 1900s Electricity',
    softwareTitle: 'Integration Hell',
    descriptionBad: 'Before standardization, electrical sockets were a mess. Software is currently in "Adapter Hell". APIs lack consistent patterns. Developers spend half their time writing "glue code"—a rat\'s nest of wires—just to connect a logging service to an error tracker.',
    actionPlan: 'Adopt the "Universal Plug" strategy. Implement OpenTelemetry for all logging and metrics immediately. Refuse to use libraries that do not conform to standard interfaces. Standardize error formats (RFC 7807) across all services.',
    descriptionGood: 'We utilize the "Universal Plug"—standardized, language-agnostic APIs (Unix sockets, OpenTelemetry, standard JSON schemas) for common utilities. Logging, monitoring, and security scanning are as simple as plugging a toaster into a wall.',
    futureRetrospective: 'The "Great Standardization" of the late 20s unified observability. Glue code vanished as services began emitting standard OTel signals by default. The "Integration Team" was deprecated as systems simply fit together.',
    historicalReference: 'Standardization of the electrical grid drove the 2nd Industrial Revolution. Software is still waiting for its grid.',
    visualBad: (
      <div className="w-full h-full bg-[#4e342e] relative overflow-hidden flex flex-col justify-center px-4">
         <WoodTexture />
         {/* Exposed Wall Cavity */}
         <div className="w-full h-[60%] bg-[#271c19] shadow-inner relative overflow-hidden border border-[#3e2723]">
             {/* Tangled Wires */}
             <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                 <path d="M0,20 C20,0 30,40 50,20 S80,0 100,30" fill="none" stroke="#ef4444" strokeWidth="1" />
                 <path d="M0,10 C20,30 40,0 100,20" fill="none" stroke="#eab308" strokeWidth="1" />
             </svg>
             <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white animate-ping"></div>
         </div>
      </div>
    ),
    visualGood: (
      <div className="w-full h-full bg-slate-100 relative overflow-hidden flex items-center px-6 border-l-8 border-r-8 border-slate-300">
         <GlassTexture />
         {/* Clean Conduit */}
         <div className="flex-1 flex flex-col gap-2">
            <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden border border-blue-200">
                <div className="h-full w-1/3 bg-blue-500 animate-[width_3s_ease-in-out_infinite]"></div>
            </div>
            <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden border border-green-200">
                 <div className="h-full w-1/2 bg-green-500 animate-[width_4s_ease-in-out_infinite]"></div>
            </div>
         </div>
         {/* Junction Box */}
         <div className="ml-4 w-6 h-8 bg-slate-300 rounded border border-slate-400 flex items-center justify-center">
             <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#4ade80]"></div>
         </div>
      </div>
    )
  },
  {
    id: 'structure',
    title: 'Structure',
    icon: Construction,
    analogyTitle: 'Pre-Industrial Handcrafting',
    softwareTitle: 'Bespoke Bonfires',
    descriptionBad: 'We craft every house by hand using wood and nails. There are no blueprints, just "it works on my machine". The structure is flammable and weak. We prioritize speed over stability, building shacks that collapse under technical debt.',
    actionPlan: 'Move to "Steel Beams". Enforce automated memory safety (Rust, Go, or strict runtime checks). Make static analysis and linting a mandatory, unbreakable step in CI/CD. Treat warnings as errors. No "it works for me" excuses.',
    descriptionGood: 'We mass-produce reliability using "Steel Beams and Rivets". Automated memory management, strict static analysis, and proven design patterns form a structure built to last—scalable, fireproof, and modular.',
    futureRetrospective: 'We stopped treating code as individual art and started treating it as civil engineering. The "Guild of Handcrafters" dissolved, replaced by automated fabrication pipelines that ensured structural integrity before deployment.',
    historicalReference: 'The shift from craftsmanship to industrialization created the modern world. Software is still in the "Guild" phase.',
    visualBad: (
      <div className="w-full h-full bg-[#5d4037] relative flex items-center justify-center overflow-hidden">
         <WoodTexture />
         {/* Wooden framing - Cross brace */}
         <div className="absolute inset-0 border-x-[12px] border-[#3e2723]"></div>
         <div className="absolute top-0 left-0 w-[120%] h-4 bg-[#3e2723] rotate-[15deg] transform origin-top-left border-b border-black/20"></div>
         <div className="absolute bottom-0 right-0 w-[120%] h-4 bg-[#3e2723] rotate-[15deg] transform origin-bottom-right border-t border-black/20"></div>
         
         {/* Window hole */}
         <div className="w-[15%] aspect-square bg-[#271c19] rotate-2 border border-[#3e2723] shadow-inner"></div>
      </div>
    ),
    visualGood: (
      <div className="w-full h-full bg-slate-200 relative flex items-center justify-center border-l-[16px] border-r-[16px] border-slate-400">
         <div className="absolute inset-0 grid grid-cols-2">
            <div className="border-r border-slate-300 h-full"></div>
         </div>
         {/* Steel Trusses */}
         <svg className="absolute inset-0 w-full h-full opacity-30">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#64748b" strokeWidth="2" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#64748b" strokeWidth="2" />
         </svg>
         <div className="w-2 h-2 bg-slate-500 rounded-full shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    )
  },
  {
    id: 'facade',
    title: 'The Facade',
    icon: Paintbrush,
    analogyTitle: 'The Movie Set',
    softwareTitle: 'Style Over Substance',
    descriptionBad: 'The "Wild West Saloon" of software: a fancy painted wooden front hiding a rotting shack. We sell features, animations, and dark mode to distract from a crumbling backend. Security and maintainability are ignored until the breach happens.',
    actionPlan: 'Implement "Transparent Engineering". Dashboard the health of the backend for everyone to see. Tie bonuses to system uptime and security scores, not just shipped features. Don\'t paint the wall until the drywall is inspected.',
    descriptionGood: 'Form follows function. The UI is an interface to a robust machine, not a mask. We do not hide the engine because the engine is a masterpiece. Inspectors check the "Digital Bridge" beneath the shiny exterior.',
    futureRetrospective: 'In the late 20s, the "Facade Crash" occurred where major startups failed due to UI-masked rot. Investors demanded "Structural Audits" before funding. Aesthetics became a signal of quality, not a distraction from it.',
    historicalReference: 'Potemkin villages were fake settlements built to impress officials. Much of modern software is a digital Potemkin village.',
    visualBad: (
      <div className="w-full h-full bg-[#8d6e63] relative flex items-center justify-center overflow-visible">
         {/* THE FAKE FACADE - Shiny Front on Rotten Wood */}
         <div className="absolute inset-0 bg-[#5d4037]"></div>
         <div className="absolute inset-x-[-10px] top-[-5px] bottom-[-5px] bg-sky-200/90 border-4 border-yellow-400 shadow-xl transform -rotate-1 z-10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40"></div>
             <span className="text-yellow-700 font-bold font-sans text-xs tracking-widest bg-yellow-300 px-2 py-1 shadow-sm uppercase transform rotate-1">✨ Modern UI ✨</span>
             {/* Duct Tape holding it */}
             <div className="absolute top-0 right-2 w-4 h-8 bg-gray-400 rotate-45 opacity-80"></div>
             <div className="absolute bottom-0 left-2 w-4 h-8 bg-gray-400 -rotate-45 opacity-80"></div>
         </div>
      </div>
    ),
    visualGood: (
      <div className="w-full h-full bg-sky-100 relative flex items-center justify-center overflow-hidden">
         <GlassTexture />
         {/* Glass Curtain Wall */}
         <div className="w-full h-full grid grid-cols-4 gap-0.5 bg-slate-300 p-0.5">
             {[...Array(8)].map((_, i) => (
                 <div key={i} className="bg-sky-200/50 backdrop-blur-sm relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                 </div>
             ))}
         </div>
      </div>
    )
  },
  {
    id: 'safety',
    title: 'Safety & Standards',
    icon: Siren,
    analogyTitle: 'Inspectors & Firefighters',
    softwareTitle: 'Specialized Roles',
    descriptionBad: 'Developers are forced to be architects, builders, and inspectors all in one. Failures are patched silently in the night. There are no "Digital Firefighters" funded to safeguard critical infrastructure, and no accountability.',
    actionPlan: 'Create "System Inspector" roles independent of product delivery. Fund "Digital Firefighters" for critical open-source dependencies. Conduct public post-mortems for failures, focusing on systemic fixes rather than blame.',
    descriptionGood: 'We have specialized roles. "System Inspectors" audit software for security and scalability before deployment. "Digital Firefighters" are publicly funded institutions safeguarding the grid. Accountability is transparent and systemic.',
    futureRetrospective: 'We professionalized. "Software Civil Engineering" became a licensed degree. Independent inspectors now sign off on architectures before they go live, much like city building permits.',
    historicalReference: 'In the 19th century, after too many bridges collapsed, Civil Engineering was born. Software needs its own Civil Engineers.',
    visualBad: (
      <div className="w-full h-full bg-[#fff3e0] relative flex items-center justify-center border-2 border-dashed border-red-400 m-1 rounded-sm">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
         
         <div className="flex flex-col items-center">
            <FileWarning className="text-red-400 mb-1" size={20} />
            <div className="bg-red-100 text-red-600 text-[8px] font-bold px-1 border border-red-200 text-center leading-tight">NO<br/>PERMIT</div>
         </div>
         
         {/* Cobwebs */}
         <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-300 rounded-tl opacity-50"></div>
      </div>
    ),
    visualGood: (
      <div className="w-full h-full bg-white relative flex items-center justify-between px-6 border-x border-slate-200">
         {/* Fire Suppression Pipes */}
         <div className="absolute top-1 left-0 w-full h-1 bg-red-500"></div>
         <div className="absolute top-1 left-1/4 w-1 h-3 bg-red-500"></div>
         <div className="absolute top-1 left-3/4 w-1 h-3 bg-red-500"></div>

         <div className="flex items-center gap-2 z-10">
             <div className="bg-green-100 p-1.5 rounded-full border border-green-200">
                 <CheckCircle2 className="text-green-600 w-4 h-4" />
             </div>
             <div className="h-1 w-16 bg-slate-100 rounded overflow-hidden">
                 <div className="h-full bg-green-500 w-full"></div>
             </div>
         </div>
      </div>
    )
  },
  {
    id: 'reality_check',
    title: 'The Reality Check',
    icon: Eye,
    analogyTitle: 'Self-Discovery',
    softwareTitle: 'The Mirror',
    descriptionBad: 'It is 2026. AI copilots write code faster than ever, amplifying our mistakes because the foundation is weak. We are using 21st-century tools to build 19th-century wooden shacks. We are still the cowboys.',
    actionPlan: 'Admit we have a problem. Use AI to enforce architectural standards, not just to generate boilerplate. Teach juniors "City Planning" (Architecture), not just "Brick Laying" (Syntax).',
    descriptionGood: 'It is not about writing more code; it is about writing *less* code by using proven standards. We build resilient, scalable systems that stand the test of time. We stopped building bonfires and started building cathedrals.',
    futureRetrospective: 'We realized AI was the steam engine—powerful, but dangerous without rails. Once we laid the tracks of standardization and safety, AI productivity skyrocketed, building safe digital cities instead of bigger bonfires.',
    historicalReference: 'The First Industrial Revolution didn\'t just happen; it required a fundamental shift in mindset. We are at that threshold.',
    visualBad: (
      <div className="w-full h-full bg-[#3e2723] relative flex items-center justify-center p-2">
         {/* The "Penthouse" - Crooked */}
         <div className="w-full h-full bg-white border-4 border-[#271c19] relative flex flex-col items-center justify-center shadow-lg transform rotate-1">
             <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-lg border-2 border-slate-300 mb-1">🤠</div>
             <div className="text-[8px] font-mono text-center text-red-600 bg-red-50 px-1 leading-tight">UNSTABLE<br/>CORE</div>
             {/* Crack */}
             <div className="absolute top-0 right-1/2 w-px h-10 bg-black/20 rotate-12"></div>
         </div>
      </div>
    ),
    visualGood: (
      <div className="w-full h-full bg-emerald-50 relative flex items-center justify-center border-x border-slate-200">
         <div className="w-full max-w-[80%] bg-white border border-green-200 shadow-sm rounded-lg p-2 flex items-center gap-3">
             <div className="bg-green-100 p-1 rounded-full">
                 <Maximize className="w-4 h-4 text-green-700" />
             </div>
             <div className="flex flex-col">
                 <span className="text-[8px] uppercase font-bold text-slate-400">Status</span>
                 <span className="text-xs font-bold text-slate-800">OPTIMIZED</span>
             </div>
         </div>
      </div>
    )
  }
];