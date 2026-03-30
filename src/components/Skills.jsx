import React from "react";
import { skills } from '../data/skills';

const Skills = ({ hasAnimated }) => {
    return (
        <section id="skills" className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Heading Section with Animation */}
                <div 
                    className={`transition-all duration-1000 ease-out 
                    ${hasAnimated?.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
                        Skills & Technologies
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {skills.map((skillGroup, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 border-b pb-4">
                                {skillGroup.category}
                            </h3>

                            {/* Skills List */}
                            <div className="flex flex-col gap-y-5">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-center group">
                                        {/* Custom Black Dot (Fix) */}
                                        <div className="w-2.5 h-2.5 bg-black rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                                        
                                        {/* Skill Name */}
                                        <span className="text-gray-600 font-medium text-lg leading-none">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;