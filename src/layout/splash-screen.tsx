import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className=" w-full relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
            {/* Fundo com círculos animados */}
            <motion.div
                className="absolute w-96 h-96 bg-blue-600 rounded-full opacity-30"
                animate={{ y: [0, -50, 0], x: [0, 50, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-72 h-72 bg-emerald-500 rounded-full opacity-20"
                animate={{ y: [0, 40, 0], x: [0, -60, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-80 h-80 bg-indigo-700 rounded-full opacity-25"
                animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Conteúdo central */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex flex-col items-center text-center"
            >
                {/* Logo animada */}
                {/* <motion.img
                    src="portfolio.png"
                    alt="Logo"
                    className="w-24 h-24 mb-6"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                /> */}

                {/* Texto */}
                <h1 className="text-5xl font-extrabold text-white mb-2">
                    Tasks Management
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                    Organize suas tarefas com estilo
                </p>

                {/* Indicador de carregamento animado */}
                <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.span className="w-3 h-3 bg-white rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                    <motion.span className="w-3 h-3 bg-white rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
                    <motion.span className="w-3 h-3 bg-white rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
                </motion.div>
            </motion.div>
        </div>
    );
}