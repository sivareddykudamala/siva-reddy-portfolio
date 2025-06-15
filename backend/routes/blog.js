const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiting for newsletter signup
const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // limit each IP to 3 requests per hour
  message: {
    error: 'Too many newsletter subscription attempts. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Mock blog data (placeholder for future implementation)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    excerpt: "Learn the fundamentals of React Hooks and how they can improve your functional components.",
    content: "Full article content would go here...",
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
    content: "Full article content would go here...",
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
    content: "Full article content would go here...",
    author: "K Venkata Siva Reddy",
    publishedAt: "2023-09-05",
    updatedAt: "2023-09-05",
    tags: ["Web Development", "Trends", "Technology"],
    category: "Opinion",
    readTime: 6,
    featured: true,
    status: "published"
  }
];

// GET /api/blog/posts - Get all blog posts
router.get('/posts', (req, res) => {
  try {
    const { category, tag, featured, limit, page } = req.query;
    
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
    
    res.status(200).json({
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
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog posts'
    });
  }
});

// GET /api/blog/posts/:slug - Get single blog post
router.get('/posts/:slug', (req, res) => {
  try {
    const { slug } = req.params;
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
    
    res.status(200).json({
      success: true,
      data: {
        ...post,
        relatedPosts
      }
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog post'
    });
  }
});

// GET /api/blog/categories - Get all blog categories
router.get('/categories', (req, res) => {
  try {
    const publishedPosts = blogPosts.filter(post => post.status === 'published');
    const categories = [...new Set(publishedPosts.map(post => post.category))];
    
    // Count posts per category
    const categoryCounts = categories.map(category => ({
      name: category,
      count: publishedPosts.filter(post => post.category === category).length
    }));
    
    res.status(200).json({
      success: true,
      data: categoryCounts
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

// GET /api/blog/tags - Get all blog tags
router.get('/tags', (req, res) => {
  try {
    const publishedPosts = blogPosts.filter(post => post.status === 'published');
    const allTags = publishedPosts.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)];
    
    // Count usage of each tag
    const tagCounts = uniqueTags.map(tag => ({
      name: tag,
      count: allTags.filter(t => t === tag).length
    })).sort((a, b) => b.count - a.count);
    
    res.status(200).json({
      success: true,
      data: tagCounts
    });
  } catch (error) {
    console.error('Error fetching tags:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch tags'
    });
  }
});

// GET /api/blog/search - Search blog posts
router.get('/search', (req, res) => {
  try {
    const { q: query, limit, page } = req.query;
    
    if (!query) {
      return res.status(400).json({
        success: false,
        error: 'Search query is required'
      });
    }
    
    const searchQuery = query.toLowerCase();
    const publishedPosts = blogPosts.filter(post => post.status === 'published');
    
    const searchResults = publishedPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
      post.category.toLowerCase().includes(searchQuery)
    );
    
    // Apply pagination
    const limitNum = parseInt(limit) || 10;
    const pageNum = parseInt(page) || 1;
    const offset = (pageNum - 1) * limitNum;
    const paginatedResults = searchResults.slice(offset, offset + limitNum);
    
    res.status(200).json({
      success: true,
      data: paginatedResults,
      meta: {
        query,
        total: searchResults.length,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(searchResults.length / limitNum),
        hasMore: offset + limitNum < searchResults.length
      }
    });
  } catch (error) {
    console.error('Error searching blog posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search blog posts'
    });
  }
});

// GET /api/blog/featured - Get featured blog posts
router.get('/featured', (req, res) => {
  try {
    const featuredPosts = blogPosts
      .filter(post => post.featured && post.status === 'published')
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    
    res.status(200).json({
      success: true,
      data: featuredPosts
    });
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch featured posts'
    });
  }
});

// POST /api/blog/newsletter/subscribe - Newsletter subscription
router.post('/newsletter/subscribe', 
  newsletterLimiter,
  [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Please provide a valid email address')
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors.array()
        });
      }

      const { email } = req.body;
      
      // In a real application, you would:
      // 1. Check if email already exists
      // 2. Save to newsletter database
      // 3. Send welcome email
      // 4. Integrate with email service (Mailchimp, ConvertKit, etc.)
      
      console.log(`📧 Newsletter subscription: ${email}`);
      
      // For now, just return success
      res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter!',
        data: {
          email,
          subscribedAt: new Date().toISOString()
        }
      });
      
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to subscribe to newsletter'
      });
    }
  }
);

// GET /api/blog/stats - Get blog statistics
router.get('/stats', (req, res) => {
  try {
    const publishedPosts = blogPosts.filter(post => post.status === 'published');
    const totalReadTime = publishedPosts.reduce((sum, post) => sum + post.readTime, 0);
    
    const stats = {
      totalPosts: publishedPosts.length,
      totalReadTime,
      averageReadTime: Math.round(totalReadTime / publishedPosts.length),
      categoryCounts: {},
      tagCounts: {},
      recentPosts: publishedPosts
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 5)
        .map(p => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          publishedAt: p.publishedAt
        }))
    };
    
    // Count posts by category
    publishedPosts.forEach(post => {
      stats.categoryCounts[post.category] = (stats.categoryCounts[post.category] || 0) + 1;
    });
    
    // Count tag usage
    const allTags = publishedPosts.flatMap(p => p.tags);
    allTags.forEach(tag => {
      stats.tagCounts[tag] = (stats.tagCounts[tag] || 0) + 1;
    });
    
    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog statistics'
    });
  }
});

// GET /api/blog/sitemap - Get blog sitemap data
router.get('/sitemap', (req, res) => {
  try {
    const publishedPosts = blogPosts.filter(post => post.status === 'published');
    const sitemap = publishedPosts.map(post => ({
      slug: post.slug,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: post.featured ? 0.8 : 0.6
    }));
    
    res.status(200).json({
      success: true,
      data: sitemap
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate sitemap'
    });
  }
});

module.exports = router; 