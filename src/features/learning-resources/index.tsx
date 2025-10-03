import { Routes, Route } from 'react-router-dom';
import Navbar from '../../shared/components/learning-resources/Navbar';
import Home from './Home';
import About from './About';
import Resources from './Resources';
import ResourceDetails from './ResourceDetails';

export default function LearningResources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetails />} />
      </Routes>
    </div>
  );
}
