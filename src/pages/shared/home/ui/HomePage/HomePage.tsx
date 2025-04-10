import { useTranslation } from 'react-i18next';

import { SeoHelmet } from '~shared/lib/seo';
import { EmployeesList } from '~widgets/institution/employee';
import { AsulaTable } from '~widgets/asula/asula-table';

interface IHomePage {}

export function HomePage({}: IHomePage) {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet title={t('seo:defaultTitle') || ''} />
      <div className="grid place-items-center lg:max-h-[100vh] min-h-[calc(100vh-228px)]">
        <div className="text-center">
          <AsulaTable />
        </div>
      </div>
    </>
  );
}
