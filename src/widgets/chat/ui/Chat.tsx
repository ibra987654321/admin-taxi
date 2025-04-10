import React from 'react';

import { Box, DriversIcon, PassengersIcon, Tabs, TabsProps } from '~shared/ui';
import { PassengersListView } from '~entities/chat/passengers';
import { passengersList, usePassengersList } from '~entities/chat/passengers/model';
import { useDriversList } from '~entities/chat/drivers/model';
import { DriversListView } from '~entities/chat/drivers';
import { ChatListView } from '~entities/chat/chat-list';
import { useChatList, useSetChatList } from '~entities/chat/chat-list/model';

export const Chat = () => {
  const passengersList = usePassengersList();
  const driversList = useDriversList();
  const chatList = useChatList();

  const setChatList = useSetChatList();

  const loadtChatList = (id: any) => {
    console.log(id);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex text-[16px]  items-center justify-center w-full gap-3">
          <PassengersIcon /> Пассажиры
        </div>
      ),
      children: (
        <div className="pt-[20px]">
          <PassengersListView passengersList={passengersList} clickTo={loadtChatList} />
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="flex text-[16px] items-center justify-center w-full gap-3">
          <DriversIcon />
          Водители
        </div>
      ),
      children: (
        <div className="pt-[20px]">
          <DriversListView driversList={driversList} />
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-[400px_1fr] gap-1">
      <div>
        <Box>
          <Tabs defaultActiveKey="1" items={items} size="small" centered />
        </Box>
      </div>
      <div className="">
        <ChatListView chatList={chatList} />
      </div>
    </div>
  );
};
