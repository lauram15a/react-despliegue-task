import { TarjetaTarea } from "./TarjetaTarea";
import { useContext } from "react";
import { Contextt } from "../context/Contextt";

export function Ver_ListaTareas() {
  const { tareas } = useContext(Contextt);

  if (tareas.length == 0) {
    return <div className="text-red-600 font-bold text-4xl text-center">No hay tareas</div>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
        {tareas.map((tarea) => (
          <TarjetaTarea key={tarea.id} tarea={tarea} />
        ))}
      </div>
    );
  }
}
