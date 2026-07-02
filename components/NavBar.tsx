'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'whoami', 'projects', 'certifications'];
    
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -50 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'WHOAMI', href: '#whoami' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');

    if (!sectionId) {
      // If href is just '#', scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-[#f9f9f9] border-b-4 border-[#1b1b1b] shadow-[4px_4px_0px_0px_#000000] flex justify-between items-center px-4 md:px-12 py-4">
      <div className="font-['Anton',sans-serif] text-[32px] leading-8 text-[#1b1b1b]">
        ./pahasara
      </div>
      
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '') || 'home';
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)} // Intercept click here
              className={`font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 
                ${isActive ? 'text-[#9700cd] border-b-4 border-[#9700cd]' : 'text-[#514255]'}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <a href="mailto:pridmaka@gmail.com">
        <button className="bg-[#9700cd] text-[#ffffff] font-['JetBrains_Mono',monospace] font-semibold text-[14px] leading-5 px-4 py-2 border-4 border-[#1b1b1b] shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none">
          CONNECT
        </button>
      </a>
    </nav>
  );
};

export default Navbar;