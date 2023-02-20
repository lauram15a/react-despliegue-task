import { useContext, useState } from "react";
import { Contextt } from "../context/Contextt";

export function FormularioTarea() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { crearTarea } = useContext(Contextt);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    crearTarea({
      titulo,
      descripcion,
    });
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md">
      <form 
        className="bg-gray-800 p-10 mb-4 rounded" 
        onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-yellow-50 mb-3">
            Crea tu tarea
          </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(evento) => setTitulo(evento.target.value)}
          value={titulo}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion"
          onChange={(evento) => setDescripcion(evento.target.value)}
          value={descripcion}
        />
        <button className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}
