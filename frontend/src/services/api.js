import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 404) {
      console.error('Resource not found');
    } else if (error.response?.status === 500) {
      console.error('Server error occurred');
    }
    
    return Promise.reject(error.response?.data || error.message);
  }
);

// API endpoints
export const contactAPI = {
  // Send contact form message
  sendMessage: (formData) => api.post('/contact', formData),
  
  // Subscribe to newsletter (optional)
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
};

// Blog API endpoints (for future blog functionality)
export const blogAPI = {
  // Get all blog posts
  getPosts: (page = 1, limit = 10) => api.get(`/blog/posts?page=${page}&limit=${limit}`),
  
  // Get single blog post
  getPost: (slug) => api.get(`/blog/posts/${slug}`),
  
  // Search blog posts
  searchPosts: (query) => api.get(`/blog/search?q=${query}`),
};

// Projects API (if you want to manage projects dynamically)
export const projectsAPI = {
  // Get all projects
  getProjects: () => api.get('/projects'),
  
  // Get single project
  getProject: (id) => api.get(`/projects/${id}`),
};

export default api; 