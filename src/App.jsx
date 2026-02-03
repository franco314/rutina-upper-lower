import React, { useState } from 'react';
import {
  Dumbbell,
  Calendar,
  Info,
  ChevronRight,
  Clock,
  ArrowUpCircle,
  Activity,
  User,
  Zap
} from 'lucide-react';

const App = () => {
  const [activeDay, setActiveDay] = useState('Lunes');
  const [currentUser, setCurrentUser] = useState('Franco');

  const routines = {
    Franco: {
      Lunes: {
        title: "Torso (Enfoque Empuje/Tracción)",
        color: "bg-blue-600",
        exercises: [
          { name: "Press de Banca (Barra o Manc.)", sets: "3", reps: "6-8", target: "Pecho y tríceps", note: "Básico de fuerza" },
          { name: "Jalón al Pecho (Polea alta)", sets: "3", reps: "8-10", target: "Dorsales (Amplitud)", note: "Controlar el descenso" },
          { name: "Remo Sentado Polea Baja", sets: "3", reps: "10-12", target: "Espalda media y dorsal", note: "Sustituto: Estabilidad lumbar" },
          { name: "Press Militar Máquina/Multi", sets: "3", reps: "8-10", target: "Hombros", note: "Permite mayor cercanía al fallo" },
          { name: "Elevaciones Laterales", sets: "3", reps: "12-15", target: "Deltoides lateral", note: "Mancuerna o polea" },
          { name: "Tríceps en Polea Alta", sets: "3", reps: "12-15", target: "Tríceps", note: "Cuerda o barra" }
        ]
      },
      Miércoles: {
        title: "Pierna (Enfoque Cuádriceps)",
        color: "bg-green-600",
        exercises: [
          { name: "Prensa de Piernas", sets: "3", reps: "10-12", target: "Cuádriceps/General", note: "Pies zona media/baja" },
          { name: "Sillón de Cuádriceps", sets: "3", reps: "12-15", target: "Cuádriceps (Aislamiento)", note: "Aguantar 1 seg arriba" },
          { name: "Curl Femoral Tumbado", sets: "4", reps: "10-12", target: "Isquiotibiales", note: "Compensación de peso muerto" },
          { name: "Aductores en Máquina", sets: "3", reps: "12-15", target: "Aductores", note: "Pausa 1s en contracción máxima" }
        ]
      },
      Viernes: {
        title: "Torso (Hipertrofia y Detalle)",
        color: "bg-purple-600",
        exercises: [
          { name: "Press Inclinado", sets: "3", reps: "8-10", target: "Pectoral superior", note: "Clave para estética de torso" },
          { name: "Jalón al Pecho", sets: "3", reps: "10-12", target: "Dorsal y bíceps", note: "Controlar el descenso" },
          { name: "Peck Deck", sets: "3", reps: "12-15", target: "Aislamiento pecho", note: "Foco en la contracción" },
          { name: "Deltoide Posterior", sets: "3", reps: "15-20", target: "Deltoide post./Salud", note: "Importante para postura" },
          { name: "Curl de Bíceps (Barra Z)", sets: "3", reps: "10-12", target: "Bíceps", note: "Controlar fase excéntrica" }
        ]
      },
      Sábado: {
        title: "Pierna (Cadena Posterior)",
        color: "bg-red-600",
        exercises: [
          { name: "Hip Thrust (Barra o Máquina)", sets: "3", reps: "8-10", target: "Glúteo mayor", note: "Sustituto de Peso Muerto" },
          { name: "Prensa (Pies altos/separados)", sets: "3", reps: "10-12", target: "Glúteo e Isquios", note: "Mayor extensión de cadera" },
          { name: "Curl Femoral Sentado", sets: "4", reps: "10-15", target: "Isquiotibiales", note: "Máximo estiramiento" },
          { name: "Aductores en Máquina", sets: "3", reps: "12-15", target: "Aductores", note: "Estabilidad de pierna" }
        ]
      }
    },
    Leslie: {
      Lunes: {
        title: "Torso (Enfoque Empuje/Tracción)",
        color: "bg-pink-600",
        exercises: [
          { name: "Peck Deck", sets: "3", reps: "10-12", target: "Pecho", note: "Foco en la contracción" },
          { name: "Jalón al Pecho (Polea alta)", sets: "3", reps: "8-10", target: "Dorsales (Amplitud)", note: "Controlar el descenso" },
          { name: "Remo Sentado Polea Baja", sets: "3", reps: "10-12", target: "Espalda media y dorsal", note: "Sustituto: Estabilidad lumbar" },
          { name: "Press Militar Máquina/Multi", sets: "3", reps: "8-10", target: "Hombros", note: "Permite mayor cercanía al fallo" },
          { name: "Elevaciones Laterales", sets: "3", reps: "12-15", target: "Deltoides lateral", note: "Mancuerna o polea" },
          { name: "Tríceps en Polea Alta", sets: "3", reps: "12-15", target: "Tríceps", note: "Cuerda o barra" }
        ]
      },
      Miércoles: {
        title: "Pierna (Enfoque Cuádriceps)",
        color: "bg-emerald-600",
        exercises: [
          { name: "Prensa de Piernas", sets: "3", reps: "10-12", target: "Cuádriceps/General", note: "Pies zona media/baja" },
          { name: "Sillón de Cuádriceps", sets: "3", reps: "12-15", target: "Cuádriceps (Aislamiento)", note: "Aguantar 1 seg arriba" },
          { name: "Curl Femoral Tumbado", sets: "4", reps: "10-12", target: "Isquiotibiales", note: "Compensación de peso muerto" },
          { name: "Aductores en Máquina", sets: "3", reps: "12-15", target: "Aductores", note: "Pausa 1s en contracción máxima" },
          { name: "Crunch en Máquina/Polea", sets: "3", reps: "15-20", target: "Abdomen superior", note: "Contracción controlada" },
          { name: "Elevación de Piernas", sets: "3", reps: "12-15", target: "Abdomen inferior", note: "Evitar balanceo" }
        ]
      },
      Viernes: {
        title: "Torso (Hipertrofia y Detalle)",
        color: "bg-violet-600",
        exercises: [
          { name: "Press Inclinado", sets: "3", reps: "8-10", target: "Pectoral superior", note: "Clave para estética de torso" },
          { name: "Jalón al Pecho", sets: "3", reps: "10-12", target: "Dorsal y bíceps", note: "Controlar el descenso" },
          { name: "Peck Deck", sets: "3", reps: "12-15", target: "Aislamiento pecho", note: "Foco en la contracción" },
          { name: "Deltoide Posterior", sets: "3", reps: "15-20", target: "Deltoide post./Salud", note: "Importante para postura" },
          { name: "Curl de Bíceps (Barra Z)", sets: "3", reps: "10-12", target: "Bíceps", note: "Controlar fase excéntrica" }
        ]
      },
      Sábado: {
        title: "Pierna (Cadena Posterior)",
        color: "bg-rose-600",
        exercises: [
          { name: "Hip Thrust (Barra o Máquina)", sets: "3", reps: "8-10", target: "Glúteo mayor", note: "Sustituto de Peso Muerto" },
          { name: "Prensa (Pies altos/separados)", sets: "3", reps: "10-12", target: "Glúteo e Isquios", note: "Mayor extensión de cadera" },
          { name: "Curl Femoral Sentado", sets: "4", reps: "10-15", target: "Isquiotibiales", note: "Máximo estiramiento" },
          { name: "Aductores en Máquina", sets: "3", reps: "12-15", target: "Aductores", note: "Estabilidad de pierna" }
        ]
      }
    }
  };

  const routine = routines[currentUser];
  const currentDayData = routine[activeDay];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <Activity className="text-blue-500" /> Plan de Entrenamiento
            </h1>
            <p className="text-neutral-400 mt-1">Optimización para Hipertrofia y Salud Lumbar</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-neutral-800 p-2 rounded-xl border border-neutral-700 flex items-center gap-2">
              <User className="text-blue-400" size={18} />
              {['Franco', 'Leslie'].map((user) => (
                <button
                  key={user}
                  onClick={() => setCurrentUser(user)}
                  className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                    currentUser === user
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-700 text-neutral-400 hover:bg-neutral-600'
                  }`}
                >
                  {user}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Day Selector */}
        <nav className="grid grid-cols-4 gap-2 mb-8">
          {Object.keys(routine).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-2 md:px-5 py-2 md:py-3 rounded-xl font-bold text-xs md:text-base transition-all duration-200 border-b-4 ${
                activeDay === day
                ? `${routine[day].color} text-white border-black/20 translate-y-[-2px] shadow-lg`
                : 'bg-neutral-800 text-neutral-400 border-neutral-950 hover:bg-neutral-700'
              }`}
            >
              {day}
            </button>
          ))}
        </nav>

        {/* Active Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className={`p-6 rounded-t-2xl ${currentDayData.color} shadow-2xl`}>
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={20} className="text-white/80" />
              <span className="uppercase text-xs font-black tracking-widest text-white/90">Día de Entrenamiento</span>
            </div>
            <h2 className="text-2xl font-black text-white">{currentDayData.title}</h2>
          </div>

          <div className="bg-neutral-800 border-x border-b border-neutral-700 rounded-b-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-850 text-neutral-500 text-xs uppercase font-bold tracking-wider">
                    <th className="px-3 md:px-6 py-4">Ejercicio</th>
                    <th className="px-3 md:px-6 py-4">Series</th>
                    <th className="px-3 md:px-6 py-4 text-center">Enfoque</th>
                    <th className="px-3 md:px-6 py-4 text-right">Detalle</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {currentDayData.exercises.map((ex, idx) => (
                    <tr key={idx} className="hover:bg-neutral-750 transition-colors group">
                      <td className="px-3 md:px-6 py-3 md:py-5">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs font-bold ${currentDayData.color} text-white shrink-0`}>
                            {idx + 1}
                          </div>
                          <p className="font-bold text-neutral-100 group-hover:text-white text-xs md:text-base">{ex.name}</p>
                        </div>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5">
                        <span className="bg-neutral-900 px-1.5 md:px-2 py-1 rounded text-xs md:text-sm font-mono text-blue-400 border border-neutral-700">
                          {ex.sets}x{ex.reps}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-center">
                        <span className="text-[10px] md:text-xs bg-neutral-900/50 px-2 md:px-3 py-1 rounded-full text-neutral-300 border border-neutral-700">
                          {ex.target}
                        </span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-right">
                        <div className="group/note relative inline-block">
                          <Info size={18} className="text-neutral-500 cursor-help hover:text-white transition-colors" />
                          <div className="absolute right-0 bottom-full mb-2 w-48 p-3 bg-white text-black text-xs rounded-lg shadow-xl opacity-0 group-hover/note:opacity-100 pointer-events-none transition-opacity z-10 border border-neutral-200">
                            <p className="font-bold mb-1">Nota Técnica:</p>
                            {ex.note}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* General Tips Footer */}
            <div className="bg-neutral-900/50 p-6 border-t border-neutral-700">
              <h3 className="text-sm font-bold text-neutral-400 mb-4 flex items-center gap-2">
                <Zap size={16} className="text-yellow-500" /> PRINCIPIOS DE PROGRESO
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-800 p-4 rounded-xl border border-neutral-700 flex gap-3">
                  <Clock className="text-blue-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-white">Descanso</h4>
                    <p className="text-[10px] text-neutral-400">2-3 min en básicos, 60-90s en accesorios.</p>
                  </div>
                </div>
                <div className="bg-neutral-800 p-4 rounded-xl border border-neutral-700 flex gap-3">
                  <ArrowUpCircle className="text-green-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-white">Sobrecarga</h4>
                    <p className="text-[10px] text-neutral-400">Anota tus pesos. Busca sumar 1 rep o 1kg cada semana.</p>
                  </div>
                </div>
                <div className="bg-neutral-800 p-4 rounded-xl border border-neutral-700 flex gap-3">
                  <ChevronRight className="text-purple-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-white">RPE 8-9</h4>
                    <p className="text-[10px] text-neutral-400">Termina cada serie sintiendo que podías hacer 1 o 2 más.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="mt-8 text-center text-neutral-600 text-sm">
          <p>Enfoque en Estabilidad Mecánica & Protección Lumbar</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
