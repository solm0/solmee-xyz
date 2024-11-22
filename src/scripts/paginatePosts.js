export function paginatePosts(allPosts, type, currentPage, postsPerPage = 10) {
    let filteredPosts = allPosts
      .filter((post) => post.type === type)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
    let finished = [];
    let inProgress = [];
      
    if (type === 'logbooks') {
      finished = filteredPosts.filter((post) => post.finished === true);
      inProgress = filteredPosts.filter((post) => post.finished === false);
      filteredPosts = finished;
    }

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
    return { paginatedPosts, totalPages, inProgress };
  }