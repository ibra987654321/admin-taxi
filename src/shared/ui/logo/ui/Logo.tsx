import classNames from 'classnames';

import { useTranslation } from '~shared/lib/i18n';

import Logotype from '../assets/logo.svg';

import styles from './Logo.module.scss';

export interface LogoProps {
  collased?: boolean;
}

export const Logo = ({ collased = true }) => {
  const { t } = useTranslation();
  const wrapperClass = classNames(styles.wrapper, !collased ? styles.closed : '');

  return (
    <div className={wrapperClass}>
      {/*<h2 className={styles.title}>*/}
      <div className="text-[30px] font-bold text-center w-full">
        <span>Bas</span>
        <span className="text-[#ECA20D]">Taxi</span>
      </div>
      {/*</h2>*/}
    </div>
  );
};
