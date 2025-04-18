import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTranslation } from '~shared/lib/i18n';
import { Button, Form, Input, Typography, useNotification } from '~shared/ui';

import { externalSignIn, signIn } from '../../api';
import { SignInData } from '../../model';

export interface SignInFormProps {
  onSignIn: (payload: SignInData) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({ onSignIn }) => {
  const notification = useNotification();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const queryToken = searchParams.get('external');

  const handleSignInSuccess = (data: any) => {
    onSignIn(data);

    if (queryToken) {
      setSearchParams((params) => {
        params.delete('myParam');

        return params;
      });
    }
  };

  const handleSignIn = async (signInFn: () => Promise<any>, isExternal: boolean) => {
    try {
      setLoading(true);
      const response = await signInFn();
      console.log(response);
      // if (error && data === false) {
      //   throw new Error(message);
      // }
      //
      handleSignInSuccess(response);
    } catch (err) {
      console.error('Error during sign in:', err);
      const errorMessage = isExternal
        ? t('cm:notify.externalSignInError')
        : t('cm:notify.wrongLoginOrPassword');

      notification.openNotification({
        message: errorMessage,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  // const handleExternalSignIn = async () => {
  //   if (queryToken) {
  //     console.log('Token external');
  //     await handleSignIn(() => externalSignIn(queryToken), true);
  //   }
  // };

  const handleSubmit = async () => {
    await handleSignIn(
      () =>
        signIn({
          email: form.getFieldValue('email')?.trim(),
          password: form.getFieldValue('password')?.trim(),
          twoFactorToken: form.getFieldValue('twoFactorToken')?.trim(),
        }),
      false
    );
  };

  // useEffect(() => {
  //   handleExternalSignIn();
  // }, [queryToken, setSearchParams]);

  return (
    <div className="grid gap-10">
      {notification.contextHolder}
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item rules={[{ required: true, message: t('notify.full') || '' }]} name="email">
          <Input placeholder={t('auth:form.email') || ''} />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: t('notify.full') || '' }]} name="password">
          <Input type="password" placeholder={t('auth:form.password') || ''} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: t('notify.full') || '' }]}
          name="twoFactorToken"
        >
          <Input type="number" placeholder="twoFactorToken" />
        </Form.Item>
        <div className="flex flex-col gap-6 items-center mt-8 ">
          {/* <div className="flex justify-center gap-6 ">
            <Typography.Text underline className="text-xs ">
              <NavLink className="text-black" to={RoutesUrls?.recovery}>
                {t('routes.forgetPassword')}
              </NavLink>
            </Typography.Text>
          </div> */}
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="w-full"
            loading={loading}
          >
            {t('auth:buttons.signIn')}
          </Button>
        </div>
      </Form>
    </div>
  );
};
