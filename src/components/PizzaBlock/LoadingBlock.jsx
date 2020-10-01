import React from 'react';

import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="125" cy="125" r="125" />
      <rect x="2" y="275" rx="3" ry="3" width="250" height="25" />
      <rect x="3" y="317" rx="6" ry="6" width="250" height="75" />
      <rect x="1" y="413" rx="3" ry="3" width="59" height="26" />
      <rect x="107" y="402" rx="20" ry="20" width="146" height="44" />
    </ContentLoader>
  );
}

export default LoadingBlock;
