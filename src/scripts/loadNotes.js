export function loadNotes() {
    const allNotes = import.meta.glob('../pages/markdowns/*.md', { eager: true });

    return Object.keys(allNotes).map((path) => {
        const note = allNotes[path];
        
        const url = path
            .replace('../pages/markdowns', '/markdowns')
            .replace('.md', '');

        return {
            ...note.frontmatter,
            url,
        };
    });
}