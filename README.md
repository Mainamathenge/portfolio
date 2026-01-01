# Joseph Maina - AI-First Portfolio

An AI-powered portfolio website featuring real-time chat with a local Llama model via Ollama.

## Features

- 🤖 **AI Chat Assistant**: Real-time conversational AI powered by Llama 2 running locally
- 🎨 **Minimalist Design**: Clean, modern dark theme with smooth animations
- 📱 **Mobile Responsive**: Fully responsive design for all devices
- 🚀 **Fast & Lightweight**: Built with Vite and React
- 🐳 **Docker Ready**: Easy deployment with Docker Compose
- 🔒 **Privacy First**: All AI processing happens locally, no external API calls

## Tech Stack

### Frontend
- React 18
- Vite
- Vanilla CSS (Minimalist design system)
- Axios for API calls

### Backend
- Node.js with Express
- Axios for Ollama communication
- CORS enabled

### AI Infrastructure
- Ollama (Local LLM runtime)
- Llama 2 model
- Docker & Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- At least 8GB RAM (16GB recommended)
- ~4-7GB disk space for the Llama model

### Installation

1. **Clone or navigate to the portfolio directory**
   ```bash
   cd /Users/mac/Documents/Personal-projects/portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Start all services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

   This will start:
   - Ollama service with Llama 2 model
   - Backend API server
   
   Note: The first time you run this, Ollama will download the Llama 2 model (~4GB), which may take some time.

5. **Pull the Llama model (first time only)**
   ```bash
   docker exec -it portfolio-ollama ollama pull llama2
   ```

6. **Start the frontend development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

### AI Chat
- Click the chat button in the bottom-right corner
- Ask questions about Joseph's background, projects, skills, or experience
- Try suggested prompts for quick exploration

### Navigation
- Use the navigation menu to jump to different sections
- Smooth scrolling between sections
- Mobile-friendly hamburger menu (on small screens)

## Development

### Project Structure
```
portfolio/
├── server/                 # Backend API
│   ├── src/
│   │   ├── index.js       # Express server
│   │   └── portfolioContext.js  # AI context data
│   └── package.json
├── src/                   # Frontend React app
│   ├── components/        # React components
│   │   ├── AIChat.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── EducationCard.jsx
│   │   └── CertificationCard.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── docker-compose.yml
├── Dockerfile.backend
└── package.json
```

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm start` - Start backend server
- `npm run dev` - Start with hot reload

**Docker:**
- `docker-compose up -d` - Start all services
- `docker-compose down` - Stop all services
- `docker-compose logs -f` - View logs

## Testing the AI

Test the Ollama service directly:
```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "Hello, introduce yourself briefly"
}'
```

Test the backend API:
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What projects has Joseph worked on?"}'
```

## Customization

### Update Portfolio Content
Edit `src/data/portfolioData.js` to update:
- Personal information
- Projects
- Education
- Certifications
- Skills

### Update AI Context
Edit `server/src/portfolioContext.js` to modify what the AI knows about the portfolio.

### Styling
- Main design system: `src/index.css`
- Component styles: Individual CSS files in `src/components/`

## Deployment

### Production Build
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Docker Production
For production deployment, you can modify `docker-compose.yml` to include the frontend in a container as well.

## Troubleshooting

**AI service not available:**
- Ensure Docker is running
- Check if Ollama container is running: `docker ps`
- Pull the model: `docker exec -it portfolio-ollama ollama pull llama2`

**Backend connection errors:**
- Verify backend is running on port 3001
- Check CORS settings in `server/src/index.js`

**Slow AI responses:**
- First response may be slow as the model loads
- Ensure sufficient RAM is available
- Consider using a smaller model like `llama2:7b`

## License

MIT

## Author

**Joseph Maina**
- Email: mainamathengej@gmail.com
- LinkedIn: [linkedin.com/in/joseph-maina-836701181](https://linkedin.com/in/joseph-maina-836701181)
- Location: Nairobi, Kenya
