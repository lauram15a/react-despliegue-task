import { createContext, useState, useEffect } from "react";
import {datos_tareas} from "../data/Tareas";

export const Contextt = createContext(); // el que almacena los datos

// el que engloba al resto de componentes
export function ContexttProvider(props) {

  useEffect(() => {
    setLista_Tareas(datos_tareas);
  }, []);

  // listaTareas va a empezar como una array vacío, pero cuando cargue el componente, le voy a asignar "tareas" con useEffect
  const [lista_tareas, setLista_Tareas] = useState([]);

  // en un array vacío meto todos los elemento que había en lista_tareas y además le añado tarea
  function crearTarea(tarea) {
    setLista_Tareas([
      ...lista_tareas,
      {
        titulo: tarea.titulo,
        id: asignarID(lista_tareas.length),
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function asignarID(supuestoID){
    const comprobarID = lista_tareas.filter((tarea) => tarea.id == supuestoID);
    if (comprobarID.length == 0){
      return supuestoID;
    } else {
      asignarID(supuestoID + 1)
    }
  }

  function eliminarTarea(tareaID){
    setLista_Tareas(lista_tareas.filter(tarea => tarea.id != tareaID));
  }

  return (
    <Contextt.Provider value={{
      tareas: lista_tareas,
      crearTarea,
      eliminarTarea
    }}>
      {props.children}
    </Contextt.Provider>
  );
}
