'use client';

import { useState, useEffect } from 'react';
import { sanityClient } from '@/lib/sanity';

export default function SanityTest() {
  const [connectionStatus, setConnectionStatus] = useState('testing');
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const testConnection = async () => {
      try {
        setConnectionStatus('connecting');
        
        // Test basic connection
        const result = await sanityClient.fetch('*[_type == "post"] | order(_createdAt desc)[0...5]');
        
        if (Array.isArray(result)) {
          setPosts(result);
          setConnectionStatus('connected');
        } else {
          setConnectionStatus('error');
          setError('Unexpected response format');
        }
      } catch (err) {
        setConnectionStatus('error');
        setError(err.message);
        console.error('Sanity connection error:', err);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sanity Kapcsolat Teszt</h2>
      
      <div className="mb-4">
        <strong>Státusz:</strong> 
        <span className={`ml-2 px-2 py-1 rounded text-sm ${
          connectionStatus === 'connected' ? 'bg-green-100 text-green-800' :
          connectionStatus === 'error' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {connectionStatus === 'connected' ? 'Kapcsolódva' :
           connectionStatus === 'error' ? 'Hiba' :
           'Kapcsolódás...'}
        </span>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
          <strong>Hiba:</strong> {error}
        </div>
      )}

      {connectionStatus === 'connected' && (
        <div className="mb-4">
          <strong>Talált cikkek:</strong> {posts.length}
          {posts.length > 0 && (
            <div className="mt-2 p-3 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Első cikkek:</h3>
              {posts.map((post, index) => (
                <div key={post._id || index} className="mb-2 p-2 bg-white rounded border">
                  <strong>{post.title || 'Névtelen cikk'}</strong>
                  {post.slug && <span className="ml-2 text-gray-500">({post.slug.current})</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="text-sm text-gray-600">
        <p><strong>Project ID:</strong> 0bk6d52j</p>
        <p><strong>Dataset:</strong> production</p>
        <p><strong>API Version:</strong> 2024-01-01</p>
      </div>
    </div>
  );
}
