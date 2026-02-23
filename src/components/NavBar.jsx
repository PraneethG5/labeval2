import React from 'react';
import { Home, Gamepad2, Info, MessageSquare } from 'lucide-react';

const NavBar = ({ onNavigate }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-slate-100 h-16">
            <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => onNavigate('home')}
                >
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        Q
                    </div>
                    <span className="font-bold text-slate-700 text-lg hidden md:block">Social Quest</span>
                </div>

                <div className="flex items-center gap-1 md:gap-2">
                    <NavButton
                        icon={<Home className="w-5 h-5" />}
                        label="Practice"
                        onClick={() => onNavigate('practice')}
                    />
                    <NavButton
                        icon={<Gamepad2 className="w-5 h-5" />}
                        label="Math Game"
                        onClick={() => onNavigate('math')}
                    />
                    <NavButton
                        icon={<Info className="w-5 h-5" />}
                        label="About"
                        onClick={() => onNavigate('product')}
                    />
                    <NavButton
                        icon={<MessageSquare className="w-5 h-5" />}
                        label="Feedback"
                        onClick={() => onNavigate('feedback')}
                    />
                </div>
            </div>
        </nav>
    );
};

const NavButton = ({ icon, label, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-teal-600 transition-colors"
    >
        {icon}
        <span className="hidden md:inline font-medium text-sm">{label}</span>
    </button>
);

export default NavBar;
