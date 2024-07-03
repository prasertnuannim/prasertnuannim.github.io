import React from 'react';

interface HeaderProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    sectionRefs: {
        section1: React.RefObject<HTMLDivElement>;
        section2: React.RefObject<HTMLDivElement>;
        section3: React.RefObject<HTMLDivElement>;
        section4: React.RefObject<HTMLDivElement>;
        section5: React.RefObject<HTMLDivElement>;
    };
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, sectionRefs }) => {
    return (
        <header>
            <ul className='flex flex-row gap-8 p-5 mt-5'>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(sectionRefs.section1)}>Section 1</li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(sectionRefs.section2)}>Section 2</li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(sectionRefs.section3)}>Section 3</li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(sectionRefs.section4)}>Section 4</li>
                <li className='hover:cursor-pointer' onClick={() => scrollToSection(sectionRefs.section5)}>Section 5</li>
            </ul>
        </header>
    );
};

export default Header;
