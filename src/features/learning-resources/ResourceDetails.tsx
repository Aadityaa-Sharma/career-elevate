import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, BookOpen, Tag } from 'lucide-react';
import resourcesData from '../../shared/data/resources.json';
import { Resource } from '../../shared/types/resource';

export default function ResourceDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const resource = resourcesData.find((r: Resource) => r.id === Number(id));

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
          <p className="text-gray-600 mb-8">The resource you're looking for doesn't exist.</p>
          <Link
            to="/learning-resources/resources"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="relative h-80 overflow-hidden bg-gray-100">
            <img
              src={resource.imageUrl}
              alt={resource.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                <BookOpen className="w-4 h-4" />
                {resource.type}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 border border-purple-200">
                <Tag className="w-4 h-4" />
                {resource.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {resource.title}
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {resource.description}
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                Resource Link
              </h2>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 break-all transition-colors underline"
              >
                {resource.url}
              </a>
            </div>

            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>Visit Resource</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-900">Category:</span> {resource.category}
              </div>
              <div>
                <span className="font-semibold text-gray-900">Type:</span> {resource.type}
              </div>
              <div>
                <span className="font-semibold text-gray-900">ID:</span> #{resource.id}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/learning-resources/resources"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:border-blue-400 hover:bg-gray-50 transition-all"
          >
            Explore More Resources
          </Link>
        </div>
      </div>
    </div>
  );
}