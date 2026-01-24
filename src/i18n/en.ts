export interface TranslationKeys {
  nav: {
    home: string;
    paintings: string;
    poetry: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    featuredWorks: string;
    aboutTitle: string;
    aboutP1: string;
    aboutP2: string;
    aboutP3: string;
    viewPaintings: string;
    poetryTeaser: string;
    poetryPoemLine1: string;
    poetryPoemLine2: string;
    poetryPoemLine3: string;
    poetryPoemLine4: string;
    poetryFrom: string;
    poetryDescription: string;
    readPoetry: string;
    landscape: string;
    figurative: string;
    stillLife: string;
    abstract: string;
  };
  paintings: {
    title: string;
    hint: string;
  };
  poetry: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    orSendMessage: string;
  };
  submission: {
    title: string;
    message: string;
    returnHome: string;
  };
  meta: {
    description: string;
  };
  footer: {
    rights: string;
  };
}

export const en: TranslationKeys = {
  nav: {
    home: 'Home',
    paintings: 'Paintings',
    poetry: 'Poetry',
    contact: 'Contact',
  },
  home: {
    heroTitle: 'Victor Fuentes',
    heroSubtitle: 'Nicaraguan Painter & Poet',
    featuredWorks: 'Featured Works',
    aboutTitle: 'About the Artist',
    aboutP1: 'Victor Fuentes is a Nicaraguan painter and poet whose work captures the vibrant spirit of Central American life. Born in Granada, he developed his artistic voice through decades of dedicated practice, blending traditional techniques with a deeply personal vision that reflects his homeland\'s rich cultural heritage.',
    aboutP2: 'His paintings traverse multiple genres—from lush landscapes depicting volcanic peaks and colonial architecture to intimate figurative works and bold abstract compositions. Each piece carries the warmth of tropical light and the emotional depth that comes from a lifetime of observing the human condition.',
    aboutP3: 'Beyond the canvas, Victor expresses himself through poetry, weaving words in both Spanish and English to explore themes of love, memory, and the beauty found in everyday moments. His dual practice as painter and poet creates a unique artistic dialogue, each medium informing and enriching the other.',
    viewPaintings: 'View Paintings',
    poetryTeaser: 'Poetry',
    poetryPoemLine1: 'In the quiet of morning light,',
    poetryPoemLine2: 'colors speak what words cannot—',
    poetryPoemLine3: 'a brushstroke holds the weight of years,',
    poetryPoemLine4: 'memories painted, never forgot.',
    poetryFrom: 'from',
    poetryDescription: 'Explore Victor\'s bilingual poetry collection, featuring works in both English and Spanish that complement his visual art.',
    readPoetry: 'Read Poetry',
    landscape: 'Landscape',
    figurative: 'Figurative',
    stillLife: 'Still Life',
    abstract: 'Abstract',
  },
  paintings: {
    title: 'Paintings',
    hint: 'Click on a painting to view details',
  },
  poetry: {
    title: 'Poetry',
    subtitle: 'A collection of poems',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Get in touch',
    emailLabel: 'Email',
    orSendMessage: 'Or send a message',
  },
  submission: {
    title: 'Thank You',
    message: 'Your message has been sent successfully.',
    returnHome: 'Return to Home',
  },
  meta: {
    description: 'Victor Fuentes - Artist and Poet. Explore paintings and poetry.',
  },
  footer: {
    rights: 'All rights reserved',
  },
};
