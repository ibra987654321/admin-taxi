/*
 * <> </>
 */

import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { DatePicker } from 'antd';

import { timezoneDayjs } from '~shared/lib/utils';

import {
  AsulaFormatSelect,
  useAsulaFormats,
  useSetAsulaFormats,
} from '~entities/asula/asula-format-select';
import { AsulaImportTableItemType } from '~entities/asula/asula-imports-table';

import { checkINN, checkIsNumber } from '~shared/lib/validation';

import { createAsulaImport } from '~features/asula/asula-table/AsulaImportAction/api';

import { Button, Form, Input, Modal, TextArea } from '../../../../../shared/ui';

interface AsulaImportAddViewType {
  asulaImportDetail: AsulaImportTableItemType | null;
  type: string;
  notification: any;
}

export const AsulaImportActionView = ({
  asulaImportDetail,
  type,
  notification,
}: AsulaImportAddViewType) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const dateFormatList = ['DD.MM.YYYY'];

  const asulaFormats = useAsulaFormats();

  const setAsulaFormats = useSetAsulaFormats();

  useEffect(() => {
    if (modal && type === 'edit') {
      form.setFieldsValue(asulaImportDetail);

      form.setFieldValue(
        'registration_date',
        asulaImportDetail?.registration_date
          ? timezoneDayjs(asulaImportDetail.registration_date, 'DD.MM.YYYY')
          : timezoneDayjs(Date.now(), 'DD.MM.YYYY')
      );
    } else if (modal) {
      setAsulaFormats();
    }
  }, [modal]);

  const onFinish = async (data: AsulaImportTableItemType) => {
    if (type === 'edit') {
      console.log('edit');
      console.log(data);
    } else {
      const requestData: Partial<AsulaImportTableItemType> = {
        ...data,
        registration_date: timezoneDayjs(data.registration_date).format('DD.MM.YYYY'),
        format_ky: form.getFieldValue('format_ky').join(', '),
        format_ru: form.getFieldValue('format_ru').join(', '),
        year: Number(timezoneDayjs(data.registration_date).format('YYYY')),
      };

      const response = await createAsulaImport(requestData);

      if (!response?.error) {
        notification.openNotification({
          message: response.data[0]?.sms ?? response.message ?? t('notify.succesSaved'),
          type: 'success',
        });

        cancelHandled();
      }

      if (response?.error) {
        notification.openNotification({
          message: response.message ?? t('notify.error'),
          type: 'error',
        });
      }
    }
  };

  const cancelHandled = () => {
    form.resetFields();
    setModal(false);
  };

  const trimWhitespace = (data: any, value: string) => {
    const trimmedValue = value?.trim() || '';
    form.setFieldValue(`${data.field}`, trimmedValue);

    if (trimmedValue.length === 0) {
      return Promise.reject(t('notify.full'));
    }

    return Promise.resolve(trimmedValue);
  };

  const checkInn = (_: any, value: any) => {
    const number = checkIsNumber(value);
    const correctValue = checkINN(number);

    form.setFieldValue('pin', correctValue);

    if (!correctValue || correctValue.length < 14) {
      return Promise.reject(new Error(t('notify.pinLength') || ''));
    }

    return Promise.resolve();
  };

  return (
    <div>
      {type === 'edit' ? (
        <Button type="primary" onClick={() => setModal(true)}>
          {t('actions.edit')}
        </Button>
      ) : (
        <Button type="primary" size="large" onClick={() => setModal(true)}>
          {t('actions.add')}
        </Button>
      )}

      <Modal open={modal} onCancel={cancelHandled} footer={false} width="100%" centered>
        <Form autoComplete="off" onFinish={onFinish} form={form} className="grid gap-5 mt-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="address_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <Input placeholder={t('auth:form.address') ?? ''} suffix="(Кыр)" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="address_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <Input placeholder={t('auth:form.address') ?? ''} suffix="(Рус)" />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="basis_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <TextArea
                  placeholder={t('asula.basis') ?? ''}
                  className="h-full"
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  suffix="(Кыр)"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="basis_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <TextArea
                  placeholder={t('asula.basis') ?? ''}
                  className="h-full"
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  suffix="(Рус)"
                />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="company_name_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <TextArea
                  placeholder={t('asula.companyName') ?? ''}
                  className="h-full"
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  suffix="(Кыр)"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="company_name_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <TextArea
                  placeholder={t('asula.companyName') ?? ''}
                  className="h-full"
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  suffix="(Рус)"
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="domain_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <TextArea
                  placeholder={t('asula.domain') ?? ''}
                  className="h-full"
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  suffix="(Кыр)"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="domain_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <TextArea
                  placeholder={t('asula.domain') ?? ''}
                  className="h-full"
                  autoSize={{ minRows: 3, maxRows: 10 }}
                  suffix="(Рус)"
                />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="format_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <AsulaFormatSelect
                  options={asulaFormats}
                  placeholder={t('asula.format') ?? ''}
                  suffix="(Кыр)"
                  lang="ky"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="format_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <AsulaFormatSelect
                  options={asulaFormats}
                  placeholder={t('asula.format') ?? ''}
                  suffix="(Рус)"
                  lang="ru"
                />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="location_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <Input placeholder={t('asula.location') ?? ''} suffix="(Кыр)" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="location_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <Input placeholder={t('asula.location') ?? ''} suffix="(Рус)" />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="pin"
                className="m-0"
                rules={[{ required: true, validator: checkInn }]}
              >
                <Input placeholder={t('auth:form.pin') ?? ''} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="registration_number"
                className="m-0"
                rules={[{ required: true, validator: trimWhitespace }]}
              >
                <Input placeholder={t('asula.registrationNumber') ?? ''} />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="serial_number"
                className="m-0"
                rules={[{ required: true, validator: trimWhitespace }]}
              >
                <Input placeholder={t('asula.serialNumber') ?? ''} />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="registration_date"
                className="m-0"
                rules={[
                  {
                    required: true,
                    message: t('notify.full') || '',
                  },
                ]}
              >
                <DatePicker
                  placeholder={t('asula.registrationDate') ?? ''}
                  size="large"
                  format={dateFormatList}
                  className="w-full"
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Form.Item
                name="speciality_ky"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <Input placeholder={t('asula.speciality') ?? ''} suffix="(Кыр)" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="speciality_ru"
                className="m-0"
                rules={[{ required: true, message: t('notify.full') || '' }]}
              >
                <Input placeholder={t('asula.speciality') ?? ''} suffix="(Рус)" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button size="middle" onClick={cancelHandled}>
              {t('actions.close')}
            </Button>
            {type === 'add' && (
              <Button size="middle" htmlType="submit" type="primary">
                {t('actions.save')}
              </Button>
            )}
          </div>
        </Form>
      </Modal>
    </div>
  );
};
