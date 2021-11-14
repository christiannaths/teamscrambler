import React from 'react';
import {
  IoTrash,
  IoShuffle,
  IoShirt,
  IoCheckmark,
  IoPersonAdd,
} from 'react-icons/io5';

function Icon(props) {
  const { name, ...rest } = props;

  const Component = {
    trash: IoTrash,
    shuffle: IoShuffle,
    shirt: IoShirt,
    checkmark: IoCheckmark,
    'person-add': IoPersonAdd,
  }[name];

  return <Component {...rest} />;
}

export { IoTrash as IconTrash };
export { IoShuffle as IconShuffle };
export { IoShirt as IconShirt };
export { IoCheckmark as IconCheckmark };
export { IoPersonAdd as IconPersonAdd };
export default Icon;
