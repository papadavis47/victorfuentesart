import React, { useState } from 'react';

export interface PoemLine {
  id: number;
  englishLine: string;
  spanishLine: string;
}

export type Props = {
  spanishTitle: string;
  englishTitle: string;
  data: PoemLine[];
};

export default function Poem({ spanishTitle, englishTitle, data }: Props) {
  const [english, setEnglish] = useState(false);
  return (
    <>
      <h1 className='text-3xl font-bold md:text-4xl mb-4'>
        {english ? englishTitle : spanishTitle}
      </h1>
      <div>
        {data.map((item) => (
          <p key={item.id} className='py-1 md:text-lg text-md font-semibold'>
            {english ? item.englishLine : item.spanishLine}
          </p>
        ))}
      </div>
      <button
        className=' mt-6 block w-full sm:w-auto rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
        onClick={() => setEnglish(!english)}
      >
        {english ? 'read spanish version' : 'leer la versión en inglés'}
      </button>
    </>
  );
}
