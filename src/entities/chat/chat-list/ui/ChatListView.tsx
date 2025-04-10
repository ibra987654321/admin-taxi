import React, { FC } from 'react';

interface ChatListViewProps {
  chatList: any;
}

export const ChatListView: FC<ChatListViewProps> = ({ chatList }) => {
  return (
    <div className="grid gap-5 bg-white h-full">
      {chatList.map((chat: any) => (
        <div key={chat.id} className="px-2">
          <div className="flex flex-col justify-center  w-full">
            <div className="my-4 mx-2">
              <div className="font-semibold text-base">{chat.name}</div>
              <div className="text-xs text-[#5A607F]">{chat.status}</div>
            </div>
          </div>
          <hr className="border border-[#f1f1f1]" />
          <div className="grid gap-5 mx-5">
            {chat.messages.map((message: any) => (
              <div key={message.id}>
                <div className="bg-[#F0F0F0] max-w-[526px] rounded-lg p-4 text-sm">
                  <div>{message.message}</div>
                </div>
                <span className="text-xs text-[#5A607F]">{message.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
