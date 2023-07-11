import React from 'react';

export default function Navigation() {
  return (
    <div className='bg-yellow-200 flex items-baseline justify-between '>
      <div>
        <span className='text-orange-700 '>Icon Here</span>
      </div>
      <nav>
        <ul className='flex justify-between text-orange-600'>
          <li>Bio</li>
          <li>Painting</li>
          <li>Poetry</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
