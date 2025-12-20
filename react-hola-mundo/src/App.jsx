
import Modal from "./components/Modal";
import {
  CheckCircle,
  CheckCheck,
  Calendar,
  PencilIcon,
  Trash,
  TriangleAlert,
} from "lucide-react";
import useAppLogic from "./hooks/useAppLogic";
import { formatDate } from "./utils/date";

function App() {
  const {
    tasks,
    currentTask,
    isOpenDelete,
    isOpenUpdate,
    taskName,
    handleDelete,
    handleFormSubmit,
    handleInput,
    handleIsOpenDelete,
    handleIsOpenUpdate,
    handleModalDelete,
    handleModalUpdate,
    handleUpdateSubmit,
  } = useAppLogic();

  const bgStatus = {
    1: "bg-white border-l-4 border-indigo-500 shadow-sm hover:shadow-md",
    2: "bg-red-50 border-l-4 border-red-500 shadow-sm",
    3: "bg-emerald-50 border-l-4 border-emerald-500 shadow-sm opacity-75",
  };

  return (
    <div className="h-screen bg-gray-100 px-6 py-8 space-y-10">
      <h1 className="text-center text-3xl font-bold">TodoList</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="bg-white p-5 rounded-lg flex">
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={taskName}
            onChange={handleInput}
            className="border border-gray-400 px-3 py-2 rounded-l flex-1 outline-none"
          />
          <button
            type="submit"
            className="bg-gray-950 cursor-pointer text-white p-3 rounded-r border border-gray-950"
          >
            <CheckCircle />
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${
              bgStatus[task.status]
            } p-5 rounded-lg transition-all duration-300 flex flex-col gap-3 group`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 capitalize">
                <Calendar size={14} className="stroke-2" />
                {formatDate(task.createdAt)}
              </span>
            </div>

            <p
              className={`text-lg font-medium leading-relaxed ${
                task.status === 3
                  ? "text-gray-500 line-through decoration-emerald-500/50"
                  : "text-gray-800"
              }`}
            >
              {task.text}
            </p>

            <div className="flex justify-end gap-2 mt-1 border-t border-black/5 pt-3">
              <button
                onClick={() => handleModalUpdate(task)}
                className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors"
                title="Editar tarea"
              >
                <PencilIcon size={18} strokeWidth={2.5} />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-100 rounded-full transition-colors"
                title="Marcar como completada"
              >
                <CheckCheck size={18} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => handleModalDelete(task)}
                className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-100 rounded-full transition-colors"
                title="Eliminar tarea"
              >
                <Trash size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title="Eliminar Tarea"
        open={isOpenDelete}
        onClose={handleIsOpenDelete}
        onConfirm={handleDelete}
      >
        {/* dentro de la etiqueta modal = children */}
        <div className="flex gap-2">
          <TriangleAlert className="text-yellow-600" />
          <p>
            Esta seguro de eliminar esta tarea{" "}
            <strong>{currentTask?.text}</strong>?, es una{" "}
            <strong className="text-red-500">acción irreversible</strong>
          </p>
        </div>
      </Modal>
      <Modal
        title="Actualizar tarea"
        open={isOpenUpdate}
        onClose={handleIsOpenUpdate}
        showFooter={false}
      >
        <form className="space-y-6 mt-2" onSubmit={handleUpdateSubmit}>
          <input type="hidden" name="id" defaultValue={currentTask?.id} />

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">
              Nombre de la tarea
            </label>
            <input
              key={currentTask?.id}
              type="text"
              placeholder="Ej. Comprar leche"
              defaultValue={currentTask?.text}
              name="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">
              Estado actual
            </label>
            <div className="relative">
              <select
                key={currentTask?.id ? `status-${currentTask.id}` : "status"}
                name="status"
                defaultValue={currentTask?.status}
                className="w-full appearance-none px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-white"
              >
                <option value="1">Creado</option>
                <option value="2">Bloqueado</option>
                <option value="3">Finalizado</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <CheckCircle size={18} />
              Guardar cambios
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;