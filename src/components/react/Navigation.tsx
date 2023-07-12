import React from 'react';

export default function Navigation({ links }: { links: JSX.Element }) {
  return (
    <div className='bg-yellow-700 flex items-baseline justify-between p-4'>
      <div>
        <a href='/'>
          <span className='text-white hidden md:block p-2 bg-orange-400'>Icon Here</span>
        </a>
      </div>
      {links}
    </div>
  );
}
