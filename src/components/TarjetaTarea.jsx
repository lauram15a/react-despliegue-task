import { useContext } from "react";
import { Contextt } from "../context/Contextt";

export function TarjetaTarea({ tarea }) {
  const { eliminarTarea } = useContext(Contextt);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize text-pink-300">
        {tarea.id} - {tarea.titulo}
      </h3>
      <p className="text-gray-400 text-sm">{tarea.descripcion}</p>
      <button 
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" 
        onClick={() => eliminarTarea(tarea.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}
