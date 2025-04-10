import { atom, atomWithDefault } from '~shared/lib/atom-state';

import { getDriversListView } from '../api';

const moc = [
  {
    id: 1,
    title: 'Обращение №323223',
    desc: 'Здравствуйте, уважаемая служба поддержки! Я хотел бы обратиться по поводу моего последнего заказа с такси. Я сделал заказ через приложение (или по телефону) на (дата и время заказа), номер заказа: (номер заказа).',
    time: '5 мин',
  },
  {
    id: 2,
    title: 'Обращение №654453',
    desc: 'Уважаемая служба поддержки! Я хотел бы обратиться по поводу моего последнего заказа с такси. Я сделал заказ через приложение (или по телефону) на (дата и время заказа), номер заказа: (номер заказа).',
    time: '6 мин',
  },
];

export const driversList = atomWithDefault((_get) => moc);

export const setDriversList = atom(
  (get) => get(driversList),
  async (_get, set) => {
    const response = await getDriversListView();
    const data = response.data;
    set(driversList, data);
  }
);
