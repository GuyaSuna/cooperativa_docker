import { prisma } from "../../lib/prisma";

export default async function UsuariosPage() {
  const usuarios = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Listado de Usuarios
        </h1>
        <p className="text-gray-600">
          Total de usuarios registrados: {usuarios.length}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {usuario.name?.charAt(0) || usuario.email.charAt(0)}
              </div>
              <span className="text-sm text-gray-500">ID: {usuario.id}</span>
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {usuario.name || "Sin nombre"}
            </h3>

            <p className="text-gray-600 mb-3 break-all">{usuario.email}</p>

            <div className="text-xs text-gray-500 space-y-1">
              <p>
                <span className="font-medium">Creado:</span>{" "}
                {new Date(usuario.createdAt).toLocaleDateString("es-ES")}
              </p>
              <p>
                <span className="font-medium">Actualizado:</span>{" "}
                {new Date(usuario.updatedAt).toLocaleDateString("es-ES")}
              </p>
            </div>
          </div>
        ))}
      </div>

      {usuarios.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No hay usuarios registrados
          </h3>
          <p className="text-gray-500">
            Ejecuta el script de seeds para agregar usuarios de prueba.
          </p>
        </div>
      )}

      <div className="mt-8">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
