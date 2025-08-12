import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Self-Employed, NYC',
      role: 'Visual Designer',
      period: 'Sep 2020 - July 2023',
      side: 'left',
    },
    {
      company: 'Insightancer',
      role: 'UI/UX Designer',
      period: 'Aug 2016 - Sep 2020',
      side: 'right',
    },
    {
      company: 'KG Design Studio',
      role: 'Web Designer',
      period: 'Sep 2015 - Aug 2016',
      side: 'left',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-orange">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    exp.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-orange font-medium mb-2">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;