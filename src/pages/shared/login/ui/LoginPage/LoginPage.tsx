import { useCallback } from 'react';

import { useSetUser, useUser } from '~entities/shared/user';
import { SignInForm, SignInFormProps } from '~features/auth';
import { useTranslation } from '~shared/lib/i18n';
import { Navigate, RoutesUrls, useNavigate } from '~shared/lib/router';
import { SeoHelmet } from '~shared/lib/seo';
import { Box } from '~shared/ui';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();
  const user = useUser();
  const setUser = useSetUser();
  const { t } = useTranslation();

  const handleSignIn: SignInFormProps['onSignIn'] = useCallback(
    ({ authState }) => {
      setUser({ authState }).then(() => {
        return navigate(RoutesUrls.main, { replace: true });
      });
    },
    [navigate, setUser]
  );

  if (user) {
    return <Navigate to={RoutesUrls.main} replace />;
  }

  return (
    <>
      <SeoHelmet title={t('cm:routes.login') || ''} />
      <div className="max-h-[100vh] overflow-y-auto max-w-[1352px] m-auto">
        <div className="grid place-items-center p-[0_26px] sm:p-[0_22px] h-[calc(100vh-80px)]">
          <div className=" grid justify-self-center gap-20 max-w-[420px] w-full h-fit sm:mb-6">
            <div>
              <div className="text-[40px] font-bold text-center">
                <span>Bas</span>
                <span className="text-[#ECA20D]">Taxi</span>
              </div>
              <div className="text-[#AAAAAA] text-center">Admin Panel</div>
            </div>

            <SignInForm onSignIn={handleSignIn} />
          </div>
        </div>
      </div>
    </>
  );
};
