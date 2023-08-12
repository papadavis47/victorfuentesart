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
      <h1>{english ? englishTitle : spanishTitle}</h1>
      <div>
        {data.map((item) => (
          <p key={item.id}>{english ? item.englishLine : item.spanishLine}</p>
        ))}
      </div>
      <button onClick={() => setEnglish(!english)}>{english ? 'Spanish' : 'English'}</button>
    </>
  );
}
