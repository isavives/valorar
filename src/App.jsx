import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  FileText, 
  Upload, 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut,
  Brain,
  ShieldCheck,
  ArrowUpRight,
  Bell,
  CheckCircle2
} from 'lucide-react';

/**
 * Componente Principal App - ValoraIA
 * Diseño adaptable: Escritorio (Menú lateral) + Móvil (Barra inferior)
 */
const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Datos de ejemplo para visualizar la tabla
  const casos = [
    { id: "2024-001", titular: "Carmen Mendoza", estado: "Listo", grado: "II", coherencia: 92, fecha: "Hoy" },
    { id: "2024-002", titular: "Roberto Sánchez", estado: "Pendiente", grado: "N/A", coherencia: 0, fecha: "Ayer" },
    { id: "2024-003", titular: "Julia Ortiz", estado: "Revisado", grado: "I", coherencia: 88, fecha: "12 Mar" }
  ];

  // Componente para los botones de navegación
  const NavItem = ({ icon: Icon, label, id, mobile = false }) => {
    const isActive = activeTab === id;
    if (mobile) {
      return (
        <button onClick={() => setActiveTab(id)} className={`flex flex-col items-center justify-center flex-1 py-2 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
          <Icon size={22} />
          <span className="text-[10px] font-bold mt-1 uppercase">{label}</span>
        </button>
      );
    }
    return (
      <button onClick={() => setActiveTab(id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-100'}`}>
        <Icon size={20} />
        <span className="text-sm font-bold">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 text-slate-900 font-sans pb-24 md:pb-0">
      
      {/* SIDEBAR (Escritorio) */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 hidden md:flex flex-col gap-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2">
          <div className="bg-indigo-600 p-2 rounded-lg text-white"><ShieldCheck size={24} /></div>
          <div>
            <h1 className="text-sm font-black uppercase tracking-tighter">ValoraIA</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Copiloto Prof.</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" id="dashboard" />
          <NavItem icon={Users} label="Mis Casos" id="casos" />
          <NavItem icon={FileText} label="Plantillas" id="plantillas" />
          <NavItem icon={Settings} label="Ajustes" id="settings" />
        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        
        {/* CABECERA */}
        <header className="h-16 md:h-20 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3 md:hidden">
             <div className="bg-indigo-600 p-1.5 rounded-lg text-white"><ShieldCheck size={20} /></div>
             <span className="font-black text-sm uppercase">ValoraIA</span>
          </div>
          <div className="hidden md:flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-2xl w-96 border border-slate-200">
            <Search size={18} className="text-slate-400" />
            <input type="text" placeholder="Buscar expediente..." className="bg-transparent text-sm outline-none w-full" />
          </div>
          <div className="flex items-center gap-3">
            <Bell size={22} className="text-slate-400" />
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-black text-xs">IM</div>
          </div>
        </header>

        {/* CUERPO DEL DASHBOARD */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Panel de Control</h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium">Gestión de expedientes de dependencia.</p>
          </section>

          {/* TARJETAS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm">
              <Brain size={22} className="text-indigo-600 mb-4" />
              <p className="text-[10px] font-black text-slate-400 uppercase">Analizados</p>
              <p className="text-2xl font-black text-slate-800">24</p>
            </div>
            <div className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm">
              <CheckCircle2 size={22} className="text-green-600 mb-4" />
              <p className="text-[10px] font-black text-slate-400 uppercase">Completados</p>
              <p className="text-2xl font-black text-slate-800">18</p>
            </div>
          </div>

          {/* LISTA DE CASOS */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">Expedientes Recientes</h3>
            <div className="grid grid-cols-1 gap-3">
              {casos.map((caso) => (
                <div key={caso.id} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between group hover:border-indigo-200 transition-all cursor-pointer shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-slate-100 p-3 rounded-xl text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all"><Users size={20} /></div>
                    <div>
                      <p className="text-sm font-black text-slate-800 leading-tight">{caso.titular}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">ID {caso.id} • {caso.fecha}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-indigo-600" />
                </div>
              ))}
            </div>
          </section>

          {/* BANNER SUBIDA */}
          <div className="bg-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl mb-8">
            <div className="relative z-10">
              <h3 className="text-xl font-black italic mb-2">Análisis Inteligente</h3>
              <p className="text-indigo-200 text-xs mb-6 max-w-xs">Sube documentos para detectar incongruencias automáticamente.</p>
              <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-black text-xs uppercase flex items-center gap-2">
                <Upload size={18} /> Subir PDF
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
          </div>
        </div>
      </main>

      {/* NAVEGACIÓN INFERIOR (Móvil) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 px-6 flex justify-between items-center z-50 h-20">
        <NavItem icon={LayoutDashboard} label="Inicio" id="dashboard" mobile />
        <NavItem icon={Users} label="Casos" id="casos" mobile />
        <div className="relative -mt-10">
           <button className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50"><Plus size={24} /></button>
        </div>
        <NavItem icon={FileText} label="Docs" id="plantillas" mobile />
        <NavItem icon={Settings} label="Ajustes" id="settings" mobile />
      </nav>

    </div>
  );
};

export default App;