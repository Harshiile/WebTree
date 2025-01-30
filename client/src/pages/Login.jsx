import { useState } from 'react';
import { Github, Chrome, ArrowRight, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    const FormContent = () => (
        <motion.div
            key={isLogin ? 'login' : 'signup'}
            initial={{ x: isLogin ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isLogin ? 50 : -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-md w-full mx-auto"
        >
            <h1 className="text-white text-4xl font-bold mb-2">
                {isLogin ? 'Welcome back' : 'Join WebTree'}
            </h1>
            <p className="text-gray-400 mb-8">
                {isLogin ? 'Sign in to continue' : 'Sign up for free!'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                <div>
                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                        <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center group cursor-pointer"
                >
                    {isLogin ? 'Sign in' : 'Continue'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-black text-gray-500">OR</span>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full bg-gray-900/50 border border-gray-800 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 mb-3 cursor-pointer"
                >
                    <Chrome className="h-5 w-5" />
                    <span>Continue with Google</span>
                </button>

                <button
                    type="button"
                    className="w-full bg-gray-900/50 border border-gray-800 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                    <Github className="h-5 w-5" />
                    <span>Continue with GitHub</span>
                </button>

                {isLogin && (
                    <div className="text-center mt-4">
                        <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm cursor-pointer">
                            Forgot your password?
                        </button>
                    </div>
                )}

                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                        >
                            {isLogin ? 'Sign up' : 'Log in'}
                        </button>
                    </p>
                </div>
            </form>
        </motion.div>
    );

    const PreviewContent = () => (
        <motion.div
            initial={{ rotate: isLogin ? 6 : -6 }}
            animate={{ rotate: isLogin ? 6 : -6 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-full flex items-center justify-center"
        >
            <div className="w-96 h-[32rem] bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800/50 shadow-2xl overflow-hidden">
                <div className="p-6 space-y-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto" />
                    <div className="h-8 bg-gray-800/50 rounded-lg" />
                    <div className="h-8 bg-gray-800/50 rounded-lg w-3/4 mx-auto" />
                    <div className="space-y-2">
                        <div className="h-12 bg-gray-800/50 rounded-xl" />
                        <div className="h-12 bg-gray-800/50 rounded-xl" />
                        <div className="h-12 bg-gray-800/50 rounded-xl" />
                    </div>
                    <div className="flex justify-center space-x-4 mt-8">
                        <div className="w-10 h-10 rounded-full bg-gray-800/50" />
                        <div className="w-10 h-10 rounded-full bg-gray-800/50" />
                        <div className="w-10 h-10 rounded-full bg-gray-800/50" />
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-black flex">
            <motion.div
                layout
                layoutId="form-section"
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className={`w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-12 xl:px-24 ${!isLogin ? 'order-2' : 'order-1'}`}
            >
                <AnimatePresence mode="wait">
                    <FormContent />
                </AnimatePresence>
            </motion.div>

            <motion.div
                layout
                layoutId="preview-section"
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className={`hidden lg:block w-1/2 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden ${!isLogin ? 'order-1' : 'order-2'}`}
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] bg-cover bg-center opacity-10" />
                <PreviewContent />
            </motion.div>
        </div>
    );
}

export default App;