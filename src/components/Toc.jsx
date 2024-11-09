import { useEffect, useState, useRef } from 'react';

const TOC = () => {
    const [tocItems, setTocItems] = useState([]);
    const [activeId, setActiveId] = useState(null);
  
    // Helper function to extract index from an ID string like "heading-2"
    const getIndexFromId = (id) => {
        const match = id.match(/heading-(\d+)/); // Extract the index from the ID
        return match ? parseInt(match[1], 10) : -1; // Return -1 if no match is found
    };
    
    useEffect(() => {
      const headings = document.querySelectorAll('h2');
      const items = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
            id,
            text: heading.innerText,
        };
      });
      setTocItems(items);
    }, []);

    const useIntersectionObserver = () => {
        const headingElementsRef = useRef({});

        useEffect(() => {
            const headingElements = Array.from(document.querySelectorAll("h2, h3"));
            const callback = (entries) => {
                headingElementsRef.current = entries.reduce((map, entry) => {
                    map[entry.target.id] = entry;
                    return map;
                }, headingElementsRef.current);

                const visibleHeadings = entries.filter((entry) => entry.isIntersecting);

                if (visibleHeadings.length === 1) {
                    setActiveId(visibleHeadings[0].target.id);
                } else if (visibleHeadings.length > 1) {
                    const sortedVisibleHeadings = visibleHeadings.sort(
                        (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
                    );
                    setActiveId(sortedVisibleHeadings[0].target.id);
                }
            };

            const observer = new IntersectionObserver(callback, {
                rootMargin: '0px 0px -40% 0px',
            });

            headingElements.forEach((element) => observer.observe(element));
        
            return () => observer.disconnect();
        }, []);
    };

    useIntersectionObserver();
    
    return (
        <aside>
            <nav className='nav-links right'>
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