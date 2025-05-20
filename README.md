
# Food Delivery Platform

A comprehensive food delivery platform connecting customers, restaurants, and delivery drivers. This application provides an end-to-end solution for food ordering, restaurant management, and delivery logistics.

## 🚀 Features

- **Customer**: Browse restaurants, place orders, track deliveries, leave reviews
- **Restaurant**: Manage menu, accept/reject orders, track order status
- **Driver**: Accept delivery tasks, navigate to pickup/delivery locations, mark deliveries as complete
- **Admin**: Manage users, restaurants, and system configuration

## 📋 Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

## 🔧 Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/food-delivery-platform.git
cd food-delivery-platform
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=http://localhost:8000/api
```

4. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

## 🛠️ Technologies Used

### Frontend
- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Beautifully designed components built with Radix UI and Tailwind CSS
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **TanStack Query**: Data fetching and state management
- **Axios**: HTTP client

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Recharts**: Data visualization
- **Lucide Icons**: Beautiful icons

## 🧩 Project Structure

- `src/components`: Reusable UI components
- `src/hooks`: Custom React hooks for shared logic
- `src/pages`: Application pages
- `src/services`: API services
- `src/context`: React context for global state
- `src/types`: TypeScript type definitions
- `src/lib`: Utility functions

For a detailed explanation of each file in the project, see the [File Explainer](./filesExplainer.md).

## 📊 System Architecture

The application follows a client-centric architecture with React on the frontend and a RESTful API backend (not included in this repository). See the [System Diagram](./systemDiagram.md) for a visual representation of the system architecture.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow the existing code style and formatting
- Write meaningful commit messages
- Add appropriate comments to your code
- Update documentation when necessary
- Write tests for new features

## 📄 Scripts

For a detailed explanation of available scripts, see the [Scripts Documentation](./scripts.md).

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
