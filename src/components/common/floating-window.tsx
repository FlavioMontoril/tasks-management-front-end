import { motion } from "framer-motion";

interface FloatingWindowProps {
  open: boolean;
  minimized: boolean;
  onClose: () => void;
  onToggleMinimize: () => void;
}

export function FloatingWindow({
  open,
  minimized,
  onClose,
  onToggleMinimize,
}: FloatingWindowProps) {
  if (!open) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-40 left-40 z-999 w-80 bg-white border shadow-2xl rounded-xl"
    >
      {/* HEADER */}
      <div className="cursor-move bg-gray-100 p-3 rounded-t-xl flex justify-between items-center">
        <span className="font-semibold">
          Painel Flutuante
        </span>

        <div className="flex gap-2">
          <button
            onClick={onToggleMinimize}
            className="text-sm px-2"
          >
            {minimized ? "⬆" : "—"}
          </button>

          <button
            onClick={onClose}
            className="text-sm px-2"
          >
            ✕
          </button>
        </div>
      </div>

      {!minimized && (
        <div className="p-4">
          <p className="text-sm text-gray-600">
            Conteúdo da janela aqui.
          </p>
        </div>
      )}
    </motion.div>
  );
}