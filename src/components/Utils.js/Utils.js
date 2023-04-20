import { IconSize } from 'components/constant';
import { BsEmojiNeutral, BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

export const BtnIcon = label => {
  switch (label) {
    case 'neutral':
      return <BsEmojiNeutral size={IconSize.lg} />;
    case 'good':
      return <BsEmojiSmile size={IconSize.lg} />;
    case 'bad':
      return <BsEmojiFrown size={IconSize.lg} />;
    default:
      throw new Error(`Unknown label ${label}`);
  }
};
