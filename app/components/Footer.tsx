import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto p-4 border-gray-700 border-t">
      <div className="mx-auto text-center container">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
