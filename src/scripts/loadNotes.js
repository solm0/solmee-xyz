export function loadNotes() {
    const allNotes = import.meta.glob('../pages/markdowns/*.md', { eager: true });
    return Object.keys(allNotes).map((path) => ({
        ...allNotes[path].frontmatter,
        url: path,
    }));
};