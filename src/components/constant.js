import { BsEmojiNeutral, BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

export const IconSize = Object.freeze({
  sm: '16px',
  md: '24px',
  lg: '32px',
});
export const IconsOptions = [
  {
    icon: <BsEmojiSmile size={IconSize.lg} />,
    title: 'good',
    color: 'green',
  },
  {
    icon: <BsEmojiNeutral size={IconSize.lg} />,
    title: 'neutral',
    color: '#F6BA6F',
  },
  {
    icon: <BsEmojiFrown size={IconSize.lg} />,
    title: 'bad',
    color: 'orangered',
  },
];
