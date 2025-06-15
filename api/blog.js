// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    excerpt: "Learn the fundamentals of React Hooks and how they can improve your functional components.",
    content: "React Hooks have revolutionized the way we write functional components in React. In this comprehensive guide, we'll explore the most commonly used hooks and how they can simplify your code...",
    author: "K Venkata Siva Reddy",
    publishedAt: "2023-09-15",
    updatedAt: "2023-09-20",
    tags: ["React", "JavaScript", "Frontend"],
    category: "Tutorial",
    readTime: 8,
    featured: true,
    status: "published"
  },
  {
    id: 2,
    title: "Building Scalable Node.js APIs",
    slug: "building-scalable-nodejs-apis",
    excerpt: "Best practices for creating maintainable and scalable backend APIs with Node.js and Express.",
    content: "Building scalable APIs is crucial for modern web applications. In this article, we'll dive deep into the best practices for creating robust Node.js APIs...",
    author: "K Venkata Siva Reddy",
    publishedAt: "2023-09-10",
    updatedAt: "2023-09-12",
    tags: ["Node.js", "Express", "Backend", "API"],
    category: "Tutorial",
    readTime: 12,
    featured: false,
    status: "published"
  },
  {
    id: 3,
    title: "The Future of Web Development",
    slug: "future-of-web-development", 
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    content: "The web development landscape is constantly evolving. Let's explore the emerging trends and technologies that will define the future...",
    author: "K Venkata Siva Reddy",
    publishedAt: "2023-09-05",
    updatedAt: "2023-09-05",
    tags: ["Web Development", "Trends", "Technology"],
    category: "Opinion",
    readTime: 6,
    featured: true,
    status: "published"
  },
  {
    id: 4,
    title: "Microservices Architecture with Spring Boot",
    slug: "microservices-spring-boot",
    excerpt: "Deep dive into building microservices architecture using Spring Boot and Java.",
    content: "Microservices architecture has become the go-to pattern for building scalable enterprise applications. In this guide, we'll explore how to implement microservices using Spring Boot...",
    author: "K Venkata Siva Reddy",
    publishedAt: "2023-08-28",
    updatedAt: "2023-08-30",
    tags: ["Java", "Spring Boot", "Microservices", "Backend"],
    category: "Tutorial",
    readTime: 15,
    featured: true,
    status: "published"
  }
];

export default async function handler(req, res) {
  // Set CORS headers  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'GET') {
    try {
      const { category, tag, featured, limit, page, slug } = req.query;
      
      // If slug is provided, return single blog post
      if (slug) {
        const post = blogPosts.find(p => p.slug === slug && p.status === 'published');
        
        if (!post) {
          return res.status(404).json({
            success: false,
            error: 'Blog post not found'
          });
        }
        
        // Get related posts (same category, excluding current post)
        const relatedPosts = blogPosts
          .filter(p => p.category === post.category && p.id !== post.id && p.status === 'published')
          .slice(0, 3);
        
        return res.status(200).json({
          success: true,
          data: {
            ...post,
            relatedPosts
          }
        });
      }
      
      let filteredPosts = blogPosts.filter(post => post.status === 'published');
      
      // Filter by category
      if (category) {
        filteredPosts = filteredPosts.filter(
          post => post.category.toLowerCase() === category.toLowerCase()
        );
      }
      
      // Filter by tag
      if (tag) {
        filteredPosts = filteredPosts.filter(
          post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
        );
      }
      
      // Filter by featured
      if (featured === 'true') {
        filteredPosts = filteredPosts.filter(post => post.featured);
      }
      
      // Sort by published date (newest first)
      filteredPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      
      // Apply pagination
      const limitNum = parseInt(limit) || 10;
      const pageNum = parseInt(page) || 1;
      const offset = (pageNum - 1) * limitNum;
      const paginatedPosts = filteredPosts.slice(offset, offset + limitNum);
      
      return res.status(200).json({
        success: true,
        data: paginatedPosts,
        meta: {
          total: filteredPosts.length,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(filteredPosts.length / limitNum),
          hasMore: offset + limitNum < filteredPosts.length
        }
      });
      
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch blog posts'
      });
    }
  }
  
  // Method not allowed
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
} 