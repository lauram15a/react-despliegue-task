import React from "react";
import { Ver_ListaTareas } from "./components/ListaTareas";
import { FormularioTarea } from "./components/FormularioTarea";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <FormularioTarea />
        <Ver_ListaTareas />
      </div>
    </main>
  );
}

export default App;
