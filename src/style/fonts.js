import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weights: [300, 400, 600, 700],
  variable: '--font-raleway'
});

export { raleway };
