const express = require('express');
const router = express.Router();

// Mock project data (in a real application, this would come from a database)
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with React frontend and Node.js backend. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "TailwindCSS"],
    features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Inventory Management"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    category: "Full Stack",
    status: "completed",
    createdAt: "2023-01-15",
    updatedAt: "2023-06-20"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Firebase", "Material-UI", "React DnD"],
    features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "File Attachments"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.com",
    category: "Frontend",
    status: "completed",
    createdAt: "2022-08-10",
    updatedAt: "2023-02-15"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Modern weather dashboard with location-based forecasts, interactive maps, and weather alerts. Built with React and integrated with multiple weather APIs.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
    features: ["Location Services", "5-day Forecast", "Interactive Maps", "Weather Alerts"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.com",
    category: "Frontend",
    status: "completed",
    createdAt: "2022-12-05",
    updatedAt: "2023-04-10"
  },
  {
    id: 4,
    title: "API Gateway Service",
    description: "Microservices API gateway built with Node.js and Express. Features rate limiting, authentication, request/response transformation, and monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express", "Redis", "Docker", "JWT"],
    features: ["Rate Limiting", "Authentication", "Load Balancing", "Monitoring"],
    github: "https://github.com/yourusername/api-gateway",
    demo: null,
    category: "Backend",
    status: "completed",
    createdAt: "2023-03-20",
    updatedAt: "2023-08-15"
  }
];

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
  try {
    const { category, status, limit, offset } = req.query;
    
    let filteredProjects = [...projects];
    
    // Filter by category
    if (category && category !== 'all') {
      filteredProjects = filteredProjects.filter(
        project => project.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by status
    if (status) {
      filteredProjects = filteredProjects.filter(
        project => project.status === status
      );
    }
    
    // Apply pagination
    const limitNum = parseInt(limit) || 10;
    const offsetNum = parseInt(offset) || 0;
    const paginatedProjects = filteredProjects.slice(offsetNum, offsetNum + limitNum);
    
    res.status(200).json({
      success: true,
      data: paginatedProjects,
      meta: {
        total: filteredProjects.length,
        limit: limitNum,
        offset: offsetNum,
        hasMore: offsetNum + limitNum < filteredProjects.length
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects'
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project'
    });
  }
});

// GET /api/projects/categories - Get all project categories
router.get('/meta/categories', (req, res) => {
  try {
    const categories = [...new Set(projects.map(project => project.category))];
    
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

// GET /api/projects/technologies - Get all technologies used
router.get('/meta/technologies', (req, res) => {
  try {
    const allTechnologies = projects.flatMap(project => project.technologies);
    const uniqueTechnologies = [...new Set(allTechnologies)];
    
    // Count usage of each technology
    const technologyCounts = uniqueTechnologies.map(tech => ({
      name: tech,
      count: allTechnologies.filter(t => t === tech).length
    })).sort((a, b) => b.count - a.count);
    
    res.status(200).json({
      success: true,
      data: technologyCounts
    });
  } catch (error) {
    console.error('Error fetching technologies:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch technologies'
    });
  }
});

// GET /api/projects/search - Search projects
router.get('/search/:query', (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const { limit, offset } = req.query;
    
    const searchResults = projects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
      project.category.toLowerCase().includes(query)
    );
    
    // Apply pagination
    const limitNum = parseInt(limit) || 10;
    const offsetNum = parseInt(offset) || 0;
    const paginatedResults = searchResults.slice(offsetNum, offsetNum + limitNum);
    
    res.status(200).json({
      success: true,
      data: paginatedResults,
      meta: {
        query,
        total: searchResults.length,
        limit: limitNum,
        offset: offsetNum,
        hasMore: offsetNum + limitNum < searchResults.length
      }
    });
  } catch (error) {
    console.error('Error searching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search projects'
    });
  }
});

// GET /api/projects/featured - Get featured projects
router.get('/meta/featured', (req, res) => {
  try {
    // For now, return the most recent 3 projects as featured
    const featuredProjects = projects
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, 3);
    
    res.status(200).json({
      success: true,
      data: featuredProjects
    });
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch featured projects'
    });
  }
});

// GET /api/projects/stats - Get project statistics
router.get('/meta/stats', (req, res) => {
  try {
    const stats = {
      totalProjects: projects.length,
      completedProjects: projects.filter(p => p.status === 'completed').length,
      categoryCounts: {},
      technologyCounts: {},
      recentActivity: projects
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, 3)
        .map(p => ({
          id: p.id,
          title: p.title,
          updatedAt: p.updatedAt
        }))
    };
    
    // Count projects by category
    projects.forEach(project => {
      stats.categoryCounts[project.category] = (stats.categoryCounts[project.category] || 0) + 1;
    });
    
    // Count technology usage
    const allTechs = projects.flatMap(p => p.technologies);
    allTechs.forEach(tech => {
      stats.technologyCounts[tech] = (stats.technologyCounts[tech] || 0) + 1;
    });
    
    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching project stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project statistics'
    });
  }
});

module.exports = router; 