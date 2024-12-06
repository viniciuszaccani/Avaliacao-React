import { json, useNavigate } from "react-router-dom";

function TaskCadastrar() {
    const navigation = useNavigate()

    async function saveTask(task) {
        await fetch("http://localhost:3001/tasks", {
            method: "POST",
            body: JSON.stringify(task)
        })
        window.alert(`Sua task:\n\n- ${task.titulo} -\n\nfoi criada com sucesso!`)
        navigation("/produtos")
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const task = {
            titulo: formData.get("titulo"),
            descricao: formData.get("descricao"),
            prioridade: formData.get("prioridade"),
            status: formData.get("status"),
            categoria: formData.get("categoria"),
        }


        saveTask(task)
    }
    return (
        <div class="min-h-screen bg-[#f0f8ff]  flex items-start justify-center pt-16">
            <form class="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="titulo"
                        class="block text-sm font-bold text-gray-800 mb-2"
                    >
                        Titulo da Task
                    </label>
                    <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        class="w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Digite o título"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="descricao"
                        class="block text-sm font-bold text-gray-800 mb-2"
                    >
                        Descrição da Task
                    </label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        rows="4"
                        class="w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Digite a descrição"
                    ></textarea>
                </div>

                <div>
                    <label
                        htmlFor="categoria"
                        class="block text-sm font-bold text-gray-800 mb-2"
                    >
                        Categoria
                    </label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        class="w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Digite a categoria"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="status"
                        class="block text-sm font-bold text-gray-800 mb-2"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        class="w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>A fazer</option>
                        <option>Fazendo</option>
                        <option>Concluído</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="prioridade"
                        class="block text-sm font-bold text-gray-800 mb-2"
                    >
                        Prioridade
                    </label>
                    <select
                        id="prioridade"
                        name="prioridade"
                        class="w-full p-3 bg-gray-100 text-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>Baixa</option>
                        <option>Média</option>
                        <option>Alta</option>
                    </select>
                </div>
                <button
                    type="submit"
                    class="w-full py-3 text-white bg-[#263950] hover:bg-[#3b5272] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#3b5272] transition-transform transform hover:scale-105"
                >
                    Criar Task
                </button>
            </form>
        </div>
    );
}

export default TaskCadastrar;