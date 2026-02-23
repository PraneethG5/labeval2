import React from 'react';
import { User, BookOpen, Link, Github, GraduationCap, Building } from 'lucide-react';

const ProductPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 p-6 font-nunito pt-24">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-slate-800 text-center mb-8">
                    Project Details
                </h1>

                {/* Team Member Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 text-center space-y-2">
                    <h2 className="text-4xl font-bold text-indigo-700">Praneeth Gorugantu</h2>
                    <p className="text-xl text-slate-600 font-mono bg-slate-100 inline-block px-3 py-1 rounded-lg mt-2">
                        CB.SC.U4CSE23769
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Course Details */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-teal-400">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-teal-500" />
                            Course Information
                        </h3>
                        <div className="space-y-2 text-slate-600">
                            <p><span className="font-semibold">Course Code:</span> 23CSE399</p>
                            <p><span className="font-semibold">Course Name:</span> Fullstack Frameworks</p>
                        </div>
                    </div>

                    {/* Faculty Details */}
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-blue-400">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-blue-500" />
                            Course Teacher
                        </h3>
                        <div className="space-y-1 text-slate-600">
                            <p className="font-bold text-lg text-blue-800">Dr. T. Senthil Kumar</p>
                            <p className="text-sm">Professor</p>
                            <p className="text-sm">Amrita School of Computing</p>
                            <p className="text-sm">Amrita Vishwa Vidyapeetham</p>
                            <p className="text-sm">Coimbatore - 641112</p>
                            <a href="mailto:t_senthilkumar@cb.amrita.edu" className="text-blue-500 hover:underline text-sm block mt-2">
                                t_senthilkumar@cb.amrita.edu
                            </a>
                        </div>
                    </div>
                </div>


                {/* Footer / GitHub */}
                <div className="text-center pt-8 pb-12">
                    <a
                        href="https://github.com/PraneethG5/social-quest-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors shadow-lg"
                    >
                        <Github className="w-5 h-5" />
                        View Project on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
