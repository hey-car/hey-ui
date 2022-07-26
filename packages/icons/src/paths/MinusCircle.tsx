import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const MinusCircle = createSvgIcon(
  <React.Fragment>
    <circle cx="12" cy="12" r="10" transform="rotate(90 12 12)" />
    <path d="M18 13L6 13V11L18 11L18 13Z" fill="#fff" />
  </React.Fragment>,
  'MinusCircle',
);
