'use client';

import { useState } from 'react';
import LumaSpinLoader from './LumaSpinLoader';

export default function SimpleSanityTest() {
  const [testResults, setTestResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const runTests = async () => {
    setIsLoading(true);
    setTestResults([]);
    
          const tests = [
        {
          name: 'Sanity Studio elérhetőség',
          test: async () => {
            try {
              const response = await fetch('http://localhost:3333');
              return response.ok ? '✅ OK' : `❌ HTTP ${response.status}`;
            } catch (error) {
              return `❌ Hiba: ${error.message}`;
            }
          }
        },
        {
          name: 'Sanity API endpoint (token nélkül)',
          test: async () => {
            try {
              const response = await fetch('https://0bk6d52j.api.sanity.io/v2024-01-01/data/query/production?query=*[_type%20%3D%3D%20%22post%22]');
              return response.ok ? '✅ OK' : `❌ HTTP ${response.status}`;
            } catch (error) {
              return `❌ Hiba: ${error.message}`;
            }
          }
        },
        {
          name: 'Sanity API endpoint (token-nel)',
          test: async () => {
            try {
              const response = await fetch('https://0bk6d52j.api.sanity.io/v2024-01-01/data/query/production?query=*[_type%20%3D%3D%20%22post%22]', {
                headers: {
                  'Authorization': 'Bearer skJFelduM19FhcbCpqUHi0iWIpSRcgVWbkj4uFZh7qLNO5P1iYK4h8fJa6lWMOPA7McyJ6UzpWkTOY31xxmKMQr9p7ThIL2s2u0wO0d0QIToZZ4so0CG6N6yDi6Vnrkk3UhRokaJgGn1jcvB7Ti3AfHR90lI32jrfiOHcLSDlamNhGcDrSb2'
                }
              });
              return response.ok ? '✅ OK' : `❌ HTTP ${response.status}`;
            } catch (error) {
              return `❌ Hiba: ${error.message}`;
            }
          }
        }
      ];

    for (const test of tests) {
      const result = await test.test();
      setTestResults(prev => [...prev, { name: test.name, result }]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sanity Kapcsolat Részletes Teszt</h2>
      
      <button
        onClick={runTests}
        disabled={isLoading}
        className="mb-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark disabled:opacity-50"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <LumaSpinLoader size="small" />
            <span>Tesztelés...</span>
          </div>
        ) : (
          'Tesztek futtatása'
        )}
      </button>

      {testResults.length > 0 && (
        <div className="space-y-2">
          {testResults.map((test, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded">
              <strong>{test.name}:</strong> {test.result}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-semibold text-blue-800 mb-2">Hibaelhárítási tippek:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Ellenőrizd, hogy a Sanity Studio fut-e a localhost:3333 címen</li>
          <li>• Hozz létre egy API kulcsot a Sanity Manage oldalon</li>
          <li>• Másold be a token-t a lib/sanity.js fájlba</li>
          <li>• Ellenőrizd a CORS beállításokat</li>
          <li>• Nézd meg a böngésző konzolját további hibákért</li>
        </ul>
      </div>
      
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
        <h3 className="font-semibold text-green-800 mb-2">✅ Token beállítva!</h3>
        <p className="text-sm text-green-700">
          A Sanity API token sikeresen be van állítva. Most már működnie kell a kapcsolatnak!
        </p>
      </div>
    </div>
  );
}
