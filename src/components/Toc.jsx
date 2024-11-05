import { useEffect, useState } from 'react';

const TOC = () => {
    const [tocItems, setTocItems] = useState([]);
    const [activeId, setActiveId] = useState(null);
  
    useEffect(() => {
      const headings = document.querySelectorAll('h2');
      const items = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
            id,
            text: heading.innerText,
            offsetTop: heading.offsetTop,
        };
      });
      setTocItems(items);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 4;
            
            const current = tocItems.find((item) => {
                const element = document.getElementById(item.id);
                return element && scrollPosition >= element.offsetTop;
            });

            if (current) setActiveId(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        console.log('scroll');

    }, [tocItems]);
    
    return (
        <aside>
            <nav className='nav-links side right'>
                {tocItems.map((heading) => (
                    <a
                        key={heading.id}
                        className={heading.id === activeId ? 'toc-link active-toc-link' : 'toc-link'}
                        href={`#${heading.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${heading.id}`).scrollIntoView({
                                behavior: "smooth"
                            });
                        }}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>
        </aside>
    );
  };
  
  export default TOC;