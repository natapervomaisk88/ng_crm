export type Article = {
  id: number;
  title: string;
  description: string;
  isShow: boolean;
};

export let data: Array<Article> = [
  {
    id: 1,
    title: 'Створили папку model',
    description: 'В цієї папці описали типи',
    isShow: true,
  },
  {
    id: 2,
    title: 'Після типів',
    description: 'Створили масив об`єктів',
    isShow: true,
  },
  {
    id: 3,
    title: 'В нової компоненті',
    description: 'Імпортували Common Module',
    isShow: true,
  },
  {
    id: 4,
    title: 'Він потрібен',
    description:
      'Для того, щоб у шаблоні можна було використати дірективу *ngFor',
    isShow: true,
  },
  {
    id: 4,
    title: 'Сховаємо цей об`єкт',
    description: 'Для того, щоб перевірити дірективу *ngIf',
    isShow: false,
  },
];
