import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { getPassengersListView } from '~entities/chat/passengers/api/api';

const moc = [
  {
    id: 1,
    title: 'Обращение №25609',
    desc: 'Здравствуйте, уважаемая служба поддержки! Я хотел бы обратиться по поводу моего последнего заказа с такси. Я сделал заказ через приложение (или по телефону) на (дата и время заказа), номер заказа: (номер заказа).',
    time: '5 мин',
  },
  {
    id: 2,
    title: 'Обращение №25609',
    desc: 'Здравствуйте, уважаемая служба поддержки! Я хотел бы обратиться по поводу моего последнего заказа с такси. Я сделал заказ через приложение (или по телефону) на (дата и время заказа), номер заказа: (номер заказа).',
    time: '6 мин',
  },
];

export const passengersList = atomWithDefault((_get) => moc);

export const setPassengersList = atom(
  (get) => get(passengersList),
  async (_get, set) => {
    const response = await getPassengersListView();
    const data = response.data;
    set(passengersList, data);
  }
);
