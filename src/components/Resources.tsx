import React, { useEffect, useState } from 'react';
import { Filter, Globe, Phone } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  categories: string[];
  type: string;
  scope: string;
  phone: string | null;
  phoneLabel: string | null;
  website: string;
  description: string;
  services: string[];
  source: string;
}

const categories = [
  { id: 'all', label: 'All resources' },
  { id: 'substance', label: 'Substance use' },
  { id: 'mental', label: 'Mental health' },
  { id: 'physical', label: 'Physical health' },
  { id: 'addiction', label: 'Addiction support' },
  { id: 'trauma', label: 'Trauma support' },
];

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/resources', { signal: controller.signal })
      .then(async response => {
        if (!response.ok) {
          throw new Error(`Resource service returned ${response.status}.`);
        }
        return response.json() as Promise<Resource[]>;
      })
      .then(data => {
        setResources(data);
        setError(null);
      })
      .catch(loadError => {
        if (!controller.signal.aborted) {
          console.error('Unable to load resource catalog:', loadError);
          setError('The resource directory could not be loaded. Start the local backend and try again.');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  const filteredResources = resources.filter(resource =>
    selectedCategory === 'all' || resource.categories.includes(selectedCategory)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Support Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse official U.S. treatment and health-center directories. Confirm services, eligibility, availability, and cost with each provider.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filter by support area</h2>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="resource-category">
          Category
        </label>
        <select
          id="resource-category"
          value={selectedCategory}
          onChange={event => setSelectedCategory(event.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.label}</option>
          ))}
        </select>
      </div>

      {isLoading && <p role="status" className="text-gray-600">Loading verified resource directories…</p>}
      {error && <p role="alert" className="rounded-lg bg-amber-50 p-4 text-amber-900">{error}</p>}
      {!isLoading && !error && (
        <>
          <p className="text-gray-600 mb-6" aria-live="polite">
            Showing {filteredResources.length} official {filteredResources.length === 1 ? 'directory' : 'directories'}
            {selectedCategory !== 'all' && ` for ${categories.find(category => category.id === selectedCategory)?.label.toLowerCase()}`}.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredResources.map(resource => (
              <article key={resource.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{resource.name}</h3>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800">{resource.type}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{resource.scope}</p>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <ul className="flex flex-wrap gap-2 mb-5" aria-label="Services">
                  {resource.services.map(service => (
                    <li key={service} className="rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-800">{service}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-gray-100 pt-4">
                  {resource.phone && resource.phoneLabel && (
                    <a className="inline-flex items-center gap-2 text-blue-700 hover:underline" href={`tel:${resource.phone}`}>
                      <Phone className="h-4 w-4" aria-hidden="true" />{resource.phoneLabel}
                    </a>
                  )}
                  <a className="inline-flex items-center gap-2 text-blue-700 hover:underline" href={resource.website} target="_blank" rel="noreferrer">
                    <Globe className="h-4 w-4" aria-hidden="true" />Visit official directory
                  </a>
                  <a className="text-xs text-gray-500 hover:underline" href={resource.source} target="_blank" rel="noreferrer">Source</a>
                </div>
              </article>
            ))}
          </div>
          {filteredResources.length === 0 && (
            <p className="text-center py-12 text-gray-600">No directories are listed for this category yet.</p>
          )}
        </>
      )}

      <p className="mt-8 text-sm text-gray-600">
        Listings link to national directories and referral services; they are not individually vetted providers or endorsements. This tool does not diagnose or provide medical advice.
      </p>
    </div>
  );
}
