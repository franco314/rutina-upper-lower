"use client";

import { useState } from "react";
import {
  Calendar,
  Info,
  ChevronRight,
  Clock,
  ArrowUpCircle,
  Activity,
  User,
  Zap,
} from "lucide-react";

type UserName = "Franco" | "Leslie";
type DayName = "Lunes" | "Miércoles" | "Viernes" | "Sábado";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  focus: string;
  notes: string;
}

interface DayInfo {
  name: string;
  subtitle: string;
  color: string;
  exercises: Exercise[];
}

interface UserRoutine {
  name: string;
  days: Record<DayName, DayInfo>;
}

const routines: Record<UserName, UserRoutine> = {
  Franco: {
    name: "Franco",
    days: {
      Lunes: {
        name: "Torso",
        subtitle: "Enfoque Empuje/Tracción",
        color: "bg-blue-600",
        exercises: [
          { name: "Press Banca", sets: "4", reps: "6-8", focus: "Pecho", notes: "Control excéntrico" },
          { name: "Remo con Barra", sets: "4", reps: "6-8", focus: "Espalda", notes: "Retracción escapular" },
          { name: "Press Militar", sets: "3", reps: "8-10", focus: "Hombros", notes: "Sin rebote" },
          { name: "Dominadas", sets: "3", reps: "8-10", focus: "Espalda", notes: "Rango completo" },
          { name: "Curl Bíceps", sets: "3", reps: "10-12", focus: "Bíceps", notes: "Supinación" },
          { name: "Extensión Tríceps", sets: "3", reps: "10-12", focus: "Tríceps", notes: "Codos fijos" },
        ],
      },
      Miércoles: {
        name: "Pierna",
        subtitle: "Enfoque Cuádriceps",
        color: "bg-green-600",
        exercises: [
          { name: "Sentadilla", sets: "4", reps: "6-8", focus: "Cuádriceps", notes: "Profundidad paralela" },
          { name: "Prensa", sets: "4", reps: "8-10", focus: "Cuádriceps", notes: "Pies al centro" },
          { name: "Extensión Cuádriceps", sets: "3", reps: "12-15", focus: "Cuádriceps", notes: "Pico de contracción" },
          { name: "Peso Muerto Rumano", sets: "3", reps: "10-12", focus: "Isquiotibiales", notes: "Rodillas semi-flexionadas" },
          { name: "Curl Femoral", sets: "3", reps: "12-15", focus: "Isquiotibiales", notes: "Control negativo" },
          { name: "Elevación Talones", sets: "4", reps: "15-20", focus: "Pantorrillas", notes: "Estiramiento completo" },
        ],
      },
      Viernes: {
        name: "Torso",
        subtitle: "Hipertrofia y Detalle",
        color: "bg-purple-600",
        exercises: [
          { name: "Press Inclinado", sets: "4", reps: "8-10", focus: "Pecho superior", notes: "30-45 grados" },
          { name: "Jalón al Pecho", sets: "4", reps: "8-10", focus: "Espalda", notes: "Agarre amplio" },
          { name: "Aperturas", sets: "3", reps: "12-15", focus: "Pecho", notes: "Codos ligeramente flexionados" },
          { name: "Remo Cable", sets: "3", reps: "10-12", focus: "Espalda media", notes: "Squeeze al final" },
          { name: "Elevaciones Laterales", sets: "3", reps: "12-15", focus: "Deltoides lateral", notes: "Sin momentum" },
          { name: "Face Pull", sets: "3", reps: "15-20", focus: "Deltoides posterior", notes: "Rotación externa" },
        ],
      },
      Sábado: {
        name: "Pierna",
        subtitle: "Cadena Posterior",
        color: "bg-red-600",
        exercises: [
          { name: "Peso Muerto", sets: "4", reps: "5-6", focus: "Cadena posterior", notes: "Espalda neutra" },
          { name: "Hip Thrust", sets: "4", reps: "8-10", focus: "Glúteos", notes: "Pausa arriba" },
          { name: "Zancadas", sets: "3", reps: "10-12 c/u", focus: "Cuádriceps/Glúteos", notes: "Paso largo" },
          { name: "Buenos Días", sets: "3", reps: "10-12", focus: "Isquiotibiales", notes: "Peso moderado" },
          { name: "Abducción Cadera", sets: "3", reps: "15-20", focus: "Glúteo medio", notes: "Tensión constante" },
          { name: "Elevación Talones Sentado", sets: "4", reps: "15-20", focus: "Sóleo", notes: "Rango completo" },
        ],
      },
    },
  },
  Leslie: {
    name: "Leslie",
    days: {
      Lunes: {
        name: "Torso",
        subtitle: "Enfoque Empuje/Tracción",
        color: "bg-pink-600",
        exercises: [
          { name: "Press Banca", sets: "3", reps: "8-10", focus: "Pecho", notes: "Control en bajada" },
          { name: "Remo Mancuerna", sets: "3", reps: "10-12", focus: "Espalda", notes: "Un brazo a la vez" },
          { name: "Press Hombro Mancuernas", sets: "3", reps: "10-12", focus: "Hombros", notes: "Neutro a pronado" },
          { name: "Jalón al Pecho", sets: "3", reps: "10-12", focus: "Espalda", notes: "Agarre medio" },
          { name: "Curl Mancuernas", sets: "2", reps: "12-15", focus: "Bíceps", notes: "Alternado" },
          { name: "Fondos en Banco", sets: "2", reps: "12-15", focus: "Tríceps", notes: "Codos atrás" },
        ],
      },
      Miércoles: {
        name: "Pierna",
        subtitle: "Enfoque Cuádriceps",
        color: "bg-emerald-600",
        exercises: [
          { name: "Sentadilla Goblet", sets: "3", reps: "10-12", focus: "Cuádriceps", notes: "Peso al pecho" },
          { name: "Prensa", sets: "3", reps: "12-15", focus: "Cuádriceps", notes: "Pies al centro" },
          { name: "Extensión Cuádriceps", sets: "3", reps: "15-18", focus: "Cuádriceps", notes: "Contracción lenta" },
          { name: "Peso Muerto Rumano", sets: "3", reps: "12-15", focus: "Isquiotibiales", notes: "Mancuernas" },
          { name: "Curl Femoral", sets: "3", reps: "15-18", focus: "Isquiotibiales", notes: "Unilateral" },
          { name: "Elevación Talones", sets: "3", reps: "18-20", focus: "Pantorrillas", notes: "Pausa abajo" },
        ],
      },
      Viernes: {
        name: "Torso",
        subtitle: "Hipertrofia y Detalle",
        color: "bg-violet-600",
        exercises: [
          { name: "Press Inclinado Mancuernas", sets: "3", reps: "10-12", focus: "Pecho superior", notes: "Unir arriba" },
          { name: "Remo Cable Sentada", sets: "3", reps: "12-15", focus: "Espalda", notes: "Agarre neutro" },
          { name: "Aperturas en Máquina", sets: "3", reps: "15-18", focus: "Pecho", notes: "Squeeze al centro" },
          { name: "Pullover", sets: "3", reps: "12-15", focus: "Espalda/Pecho", notes: "Con mancuerna" },
          { name: "Elevaciones Laterales", sets: "3", reps: "15-18", focus: "Deltoides", notes: "Peso ligero" },
          { name: "Face Pull", sets: "3", reps: "18-20", focus: "Deltoides posterior", notes: "Cuerda" },
        ],
      },
      Sábado: {
        name: "Pierna",
        subtitle: "Cadena Posterior y Glúteos",
        color: "bg-rose-600",
        exercises: [
          { name: "Hip Thrust", sets: "4", reps: "10-12", focus: "Glúteos", notes: "Barra acolchada" },
          { name: "Peso Muerto Sumo", sets: "3", reps: "10-12", focus: "Glúteos/Aductores", notes: "Stance amplio" },
          { name: "Zancadas Caminando", sets: "3", reps: "12-14 c/u", focus: "Glúteos", notes: "Torso erguido" },
          { name: "Patada de Glúteo", sets: "3", reps: "15-18 c/u", focus: "Glúteos", notes: "En cable" },
          { name: "Abducción Cadera", sets: "3", reps: "18-20", focus: "Glúteo medio", notes: "En máquina" },
          { name: "Puente de Glúteo", sets: "3", reps: "20-25", focus: "Glúteos", notes: "Unilateral" },
        ],
      },
    },
  },
};

const dayOrder: DayName[] = ["Lunes", "Miércoles", "Viernes", "Sábado"];

export default function Home() {
  const [activeDay, setActiveDay] = useState<DayName>("Lunes");
  const [currentUser, setCurrentUser] = useState<UserName>("Franco");

  const currentRoutine = routines[currentUser];
  const currentDayInfo = currentRoutine.days[activeDay];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${currentDayInfo.color}`}>
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Rutina Upper-Lower</h1>
                <p className="text-sm text-neutral-400">4 días por semana</p>
              </div>
            </div>

            {/* User Selector */}
            <div className="flex items-center gap-2 bg-neutral-800 rounded-lg p-1">
              {(["Franco", "Leslie"] as UserName[]).map((user) => (
                <button
                  key={user}
                  onClick={() => setCurrentUser(user)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    currentUser === user
                      ? `${currentDayInfo.color} text-white`
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <User className="w-4 h-4" />
                  {user}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Day Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {dayOrder.map((day) => {
            const dayInfo = currentRoutine.days[day];
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? `${dayInfo.color} text-white shadow-lg`
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-semibold">{day}</div>
                  <div className="text-xs opacity-80">{dayInfo.name}</div>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Day Header */}
        <div className={`rounded-xl p-4 mb-6 ${currentDayInfo.color}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{currentDayInfo.name}</h2>
              <p className="text-white/80">{currentDayInfo.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-1.5">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">60-75 min</span>
            </div>
          </div>
        </div>

        {/* Exercise Table */}
        <div className="bg-neutral-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-300">
                    Ejercicio
                  </th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-neutral-300">
                    Series
                  </th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-neutral-300">
                    Reps
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-300 hidden sm:table-cell">
                    Enfoque
                  </th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-neutral-300 hidden md:table-cell">
                    Notas
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDayInfo.exercises.map((exercise, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-700/50 hover:bg-neutral-700/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium">{exercise.name}</div>
                      <div className="text-xs text-neutral-400 sm:hidden">
                        {exercise.focus}
                      </div>
                    </td>
                    <td className="text-center px-4 py-3">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${currentDayInfo.color} text-sm font-bold`}
                      >
                        {exercise.sets}
                      </span>
                    </td>
                    <td className="text-center px-4 py-3 font-medium">
                      {exercise.reps}
                    </td>
                    <td className="px-4 py-3 text-neutral-300 hidden sm:table-cell">
                      {exercise.focus}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex items-center gap-1 text-sm text-neutral-400">
                        <Info className="w-3 h-3" />
                        {exercise.notes}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Progress Principles */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold">Descanso</h3>
            </div>
            <p className="text-sm text-neutral-400">
              Compuestos: 2-3 min. Aislamiento: 60-90 seg
            </p>
          </div>
          <div className="bg-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUpCircle className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold">Sobrecarga</h3>
            </div>
            <p className="text-sm text-neutral-400">
              Aumenta peso cuando completes todas las reps
            </p>
          </div>
          <div className="bg-neutral-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="font-semibold">RPE</h3>
            </div>
            <p className="text-sm text-neutral-400">
              Trabaja a RPE 7-8. Deja 2-3 reps en reserva
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
