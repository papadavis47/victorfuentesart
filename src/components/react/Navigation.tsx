import React from 'react';

export default function Navigation() {
  return (
    <div className='bg-yellow-200 flex items-baseline justify-between p-4'>
      <div>
        <a href='/'>
          <span className='text-orange-200 hidden md:block p-2 bg-orange-400'>Icon Here</span>
        </a>
      </div>
      <nav>
        <ul className='flex justify-between text-orange-600 gap-5'>
          <li>
            <a href='/bio'>bio</a>
          </li>
          <li>
            <a href='/painting'>painting</a>
          </li>
          <li>
            <a href='/poetry'>poetry</a>
          </li>
          <li>
            <a href='/contact'>contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
