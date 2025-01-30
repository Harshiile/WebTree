import { useRef, useState } from 'react';
import { Github, Chrome, ArrowRight, Lock, Unlock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [passwordType, setPasswordType] = useState("password")
    const [password, setPassword] = useState("");
    const passwordRef = useRef()
    const showPassword = (e) => {
        e.preventDefault();
        passwordRef.current.type = passwordRef.current.type == "password" ? "text" : "password"
        setPasswordType(passwordRef.current.type)
    };

    const transitionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
    };

    return (
        <div className="min-h-screen bg-black flex">
            <div
                className={`w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-12 xl:px-24 transition-all duration-500 ${!isLogin ? "order-2" : "order-1"
                    }`}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isLogin ? "login" : "signup"}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={transitionVariants}
                        className="max-w-md w-full mx-auto"
                    >
                        <h1 className="text-white text-4xl font-bold mb-2">
                            {isLogin ? "Welcome back" : "Join WebTree"}
                        </h1>
                        <p className="text-gray-400 mb-8">
                            {isLogin ? "Sign in to continue" : "Sign up for free!"}
                        </p>

                        <form method='POST' action={`http://localhost:3300/${isLogin ? 'login' : 'signup'}`} className="space-y-4">
                            <div>
                                <input
                                    name='email'
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
                                        name='password'
                                        ref={passwordRef}
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    />
                                    {
                                        passwordType == "password" ?
                                            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer" onClick={showPassword} />
                                            :
                                            <Unlock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer" onClick={showPassword} />
                                    }

                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center group cursor-pointer"
                            >
                                {isLogin ? "Sign in" : "Continue"}
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

                            {
                                isLogin && (
                                    <div className="text-center mt-4">
                                        <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm cursor-pointer">
                                            Forgot your password?
                                        </button>
                                    </div>
                                )
                            }

                            <div className="text-center mt-6">
                                <p className="text-gray-400">
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <button
                                        type="button"
                                        onClick={() => setIsLogin(!isLogin)}
                                        className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                                    >
                                        {isLogin ? "Sign up" : "Log in"}
                                    </button>
                                </p>
                            </div>
                        </form >
                    </motion.div >
                </AnimatePresence >
            </div >

            <div
                className={`hidden lg:block w-1/2 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden transition-all duration-500 ${!isLogin ? "order-1" : "order-2"
                    }`}
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] bg-cover bg-center opacity-10" />
            </div>
        </div >
    );
}

export default App;
