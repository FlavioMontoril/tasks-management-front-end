import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PageNotFound = () => {
    return (
        <div className="min-h-screen  w-full flex flex-col items-center justify-center bg-slate-300 px-4">
            {/* Número grande 404 com animação */}
            <motion.h1
                className="text-9xl font-extrabold text-gray-800"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                404
            </motion.h1>

            {/* Mensagem amigável */}
            <motion.p
                className="mt-6 text-xl md:text-2xl text-gray-700 text-center max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                Ops! A página que você está procurando não existe.
            </motion.p>

            {/* Botão para voltar */}
            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
                >
                    <Home size={20} />
                    Voltar para Home
                </Link>
            </motion.div>
        </div>
    );
}