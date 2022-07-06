import React from 'react';

import { Colors, LogoProps } from './Logo.types';

function Logo({ size = 32, color = 'primary' }: LogoProps) {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 199 65"
      width={size * 3}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M11.5664 0.638184H0.457294V49.0283H11.5664V32.1802C11.5664 30.2074 11.9766 28.6943 12.8012 27.645C13.6237 26.5958 14.7946 26.0701 16.318 26.0701C19.1566 26.0701 20.5769 27.9625 20.5769 31.7473V49.0262H31.6859V29.6487C31.6859 25.2455 30.7501 21.9039 28.8783 19.6199C27.0065 17.3358 24.24 16.1938 20.5789 16.1938C18.602 16.1938 16.8333 16.5751 15.2708 17.3358C13.7061 18.0965 12.4713 19.1767 11.5664 20.5743V0.638184ZM44.8111 48.0079C47.6909 49.3437 50.5007 50.0137 54.3679 50.0137C56.7118 50.0137 58.969 49.8075 61.1706 49.3952C63.3723 48.985 66.3593 47.977 68.0476 47.1957L65.3842 39.5807C63.9866 40.2404 63.028 40.4486 61.2181 40.8176C59.4061 41.1866 57.6167 41.3721 55.848 41.3721C53.0919 41.3721 51.1335 40.8052 49.5503 39.9188C47.9651 39.0345 47.2374 37.7935 46.6623 35.9423H67.6456C67.8909 34.8333 68.0146 33.5572 68.0146 32.1163C68.0146 27.2224 66.6066 23.3428 63.7887 20.4836C60.9686 17.6244 57.1735 16.1938 52.4013 16.1938C49.068 16.1938 46.1366 16.9338 43.6072 18.416C41.0779 19.8961 39.1319 21.9143 37.7754 24.4642C36.417 27.0163 35.7387 29.8961 35.7387 33.1037C35.7387 36.6432 36.5303 39.6776 38.1135 42.207C39.6988 44.7364 41.9313 46.6721 44.8111 48.0079ZM55.9511 25.39C56.9179 26.3362 57.4828 27.6328 57.6477 29.2778V29.2799H46.4788C47.1777 25.7425 49.0907 23.9717 52.2179 23.9717C53.7392 23.9717 54.9843 24.4438 55.9511 25.39ZM75.4357 64.7013C74.0793 64.7013 72.7518 64.5673 71.4551 64.2993C70.1585 64.0314 68.4166 63.4768 67.6353 63.0254L70.7274 54.1839C71.9622 54.5817 72.391 54.6415 74.0773 54.6415C75.5574 54.6415 76.7303 54.2602 77.5941 53.4995C78.4578 52.7388 79.3009 51.3721 80.1235 49.3972L81.1109 47.1132L68.7753 17.1832H80.4945L87.0354 35.8825L92.8982 17.1832H104.685L91.3562 50.3228C89.7916 54.1901 88.2805 57.142 86.821 59.1787C85.3616 61.2154 83.7454 62.644 81.9767 63.4686C80.208 64.289 78.029 64.7013 75.4357 64.7013ZM141.288 47.946C143.469 49.3251 145.937 50.0137 148.695 50.0137C150.752 50.0137 152.593 49.6117 154.215 48.8098C155.84 48.0058 157.126 46.8658 158.072 45.3837L158.196 49.0242H168.625V17.1812H158.196L158.072 20.8835C157.124 19.4034 155.85 18.2531 154.246 17.4286C152.641 16.6061 150.892 16.1938 149 16.1938C146.12 16.1938 143.548 16.9668 141.286 18.5088C139.025 20.0528 137.277 22.1101 136.042 24.6807C134.807 27.2513 134.191 30.1023 134.191 33.2274C134.191 36.5607 134.828 39.5024 136.104 42.0524C137.38 44.6024 139.107 46.5669 141.288 47.946ZM156.347 38.1645C155.153 39.4818 153.611 40.1394 151.719 40.1394C149.827 40.1394 148.272 39.4818 147.06 38.1645C145.846 36.8473 145.24 35.161 145.24 33.1037C145.24 31.0464 145.846 29.3601 147.06 28.0429C148.272 26.7277 149.827 26.068 151.719 26.068C153.611 26.068 155.153 26.7277 156.347 28.0429C157.541 29.3601 158.136 31.0485 158.136 33.1037C158.136 35.161 157.541 36.8473 156.347 38.1645ZM174.902 17.1812H185.702L185.826 21.9328C186.607 20.2054 187.677 18.8778 189.035 17.9522C190.394 17.0266 191.977 16.5649 193.787 16.5649C195.184 16.5649 197.326 17.0864 198.355 17.5379L195.762 27.4369C194.659 27.0679 193.931 26.9318 192.49 26.9318C190.35 26.9318 188.736 27.641 187.646 29.0613C186.555 30.4795 186.011 32.5905 186.011 35.3878V49.0263H174.902V17.1812ZM117.825 38.1955C119.266 39.4097 121.259 40.0157 123.811 40.0157C125.527 40.0157 127.64 39.6426 129.534 39.1025L132.488 47.6637C131.233 48.2842 129.816 48.7933 128.219 49.1809C126.265 49.6529 124.279 49.89 122.263 49.89C118.808 49.89 115.753 49.2221 113.1 47.8842C110.447 46.5484 108.367 44.6251 106.866 42.1143C105.366 39.6055 104.615 36.6432 104.615 33.2274C104.615 30.0178 105.335 27.14 106.776 24.588C108.217 22.038 110.272 20.0198 112.948 18.5397C115.623 17.0576 118.707 16.3175 122.206 16.3175C124.139 16.3175 126.114 16.5422 128.13 16.9957C129.99 17.4142 131.538 17.9419 132.803 18.5686L129.775 27.2266C127.924 26.6453 125.576 26.1918 123.626 26.1918C121.156 26.1918 119.212 26.8102 117.794 28.0429C116.374 29.2777 115.665 30.9661 115.665 33.1038C115.665 35.2848 116.384 36.9834 117.825 38.1955Z"
        fill={Colors[color].fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M196.892 54.9758V63.8194L105.684 63.8194V54.9758L196.892 54.9758Z"
        fill={Colors[color].undermark}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Logo;
