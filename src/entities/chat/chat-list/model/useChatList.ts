import { useAtomValue, useSetAtom } from 'jotai';

import { useResetAtom } from 'jotai/utils';

import { chatList, setChatList } from './atoms';

export const useChatList = () => {
  return useAtomValue(chatList);
};

export const useSetChatList = () => {
  return useSetAtom(setChatList);
};

export const useResetChatList = () => {
  return useResetAtom(chatList);
};
