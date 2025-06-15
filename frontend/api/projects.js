// Mock project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with React frontend and Node.js backend. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "TailwindCSS"],
    features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Inventory Management"],
    github: "https://github.com/kudamalasivareddy/ecommerce-platform",
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
    github: "https://github.com/kudamalasivareddy/task-manager",
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
    github: "https://github.com/kudamalasivareddy/weather-dashboard",
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
    github: "https://github.com/kudamalasivareddy/api-gateway",
    demo: null,
    category: "Backend",
    status: "completed",
    createdAt: "2023-03-20",
    updatedAt: "2023-08-15"
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
      const { category, status, limit, offset, id } = req.query;
      
      // If ID is provided, return single project
      if (id) {
        const projectId = parseInt(id);
        const project = projects.find(p => p.id === projectId);
        
        if (!project) {
          return res.status(404).json({
            success: false,
            error: 'Project not found'
          });
        }
        
        return res.status(200).json({
          success: true,
          data: project
        });
      }
      
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
      
      return res.status(200).json({
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
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch projects'
      });
    }
  }
  
  // Method not allowed
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
} 