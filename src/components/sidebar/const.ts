import { ReactComponent as Cryptoservices } from '../../icons/cryptoservices.svg';
import { ReactComponent as DataFix } from '../../icons/dataFix.svg';
import { ReactComponent as Exit } from '../../icons/exit.svg';
import { ReactComponent as Info } from '../../icons/info.svg';
import { ReactComponent as List } from '../../icons/list.svg';
import { ReactComponent as Log } from '../../icons/log.svg';
import { ReactComponent as PublishedAPIinformation } from '../../icons/published-API-information.svg';
import { ReactComponent as Question } from '../../icons/question.svg';
import { ReactComponent as Report } from '../../icons/report.svg';
import { ReactComponent as SelfTest } from '../../icons/self-test.svg';
import { ReactComponent as Settings } from '../../icons/settings.svg';

interface Link {
  title: string;
  icon: any;
  path: string;
}

export const SIDEBAR_LINKS: Link[] = [
  {
    title: 'Запрос',
    icon: Question,
    path: 'request',
  },
  {
    title: 'Список сообщений',
    icon: List,
    path: 'messages',
  },
  {
    title: 'Журнал операций',
    icon: Log,
    path: 'log',
  },
  {
    title: 'Самодиагностика',
    icon: SelfTest,
    path: 'self-test',
  },
  {
    title: 'Отчет',
    icon: Report,
    path: 'report',
  },
  {
    title: 'Криптосервисы',
    icon: Cryptoservices,
    path: 'cryptoservices',
  },
  {
    title: 'DataFix',
    icon: DataFix,
    path: 'dataFix',
  },
  {
    title: 'Информация об опубликованных API',
    icon: PublishedAPIinformation,
    path: 'published-API-information',
  },
];

export const SIDEBAR_FOOTER_LINKS: Link[] = [
  {
    title: 'Настройки',
    icon: Settings,
    path: 'settings',
  },
  {
    title: 'Информация',
    icon: Info,
    path: 'info',
  },
  {
    title: 'Выход',
    icon: Exit,
    path: 'exit',
  },
];
