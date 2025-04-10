import React, { FC } from 'react';

import { Chat } from '~widgets/chat';

interface ChatPageProps {}

export const ChatPage: FC<ChatPageProps> = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};
