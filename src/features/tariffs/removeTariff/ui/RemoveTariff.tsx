import React, { FC, useState } from 'react';

import { Button, Form, Input, Modal, useNotification } from '~shared/ui';
import { addTariff } from '~features/tariffs/addTariff/api';

interface AddTariffAddTariffProps {}

export const RemoveTariff: FC<AddTariffAddTariffProps> = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const notification = useNotification();

  const handleClick = async () => {
    setLoading(true);
    console.log('dasdas');
    const data = form.getFieldsValue();
    const response = await addTariff(data);
    console.log(response);

    if (response?.data) {
      notification.openNotification({
        message: 'Успешно сохранено',
        type: 'success',
      });

      setLoading(false);
      setModal(false);
    }

    if (response?.error) {
      notification.openNotification({
        message: response.message,
        type: 'error',
      });

      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <div>
      {notification.contextHolder}
      <Button type="primary" onClick={() => setModal(true)}>
        Добавить
      </Button>
      <Modal open={modal} footer={null} centered onCancel={() => setModal(false)}>
        <div className="grid gap-5">
          <div className="text-xl">Добавить</div>
          <Form form={form} onFinish={handleClick}>
            <Form.Item name="cityId">
              <Input placeholder="cityId" />
            </Form.Item>
            <Form.Item name="carClassId">
              <Input placeholder="carClassId" />
            </Form.Item>
            <Form.Item name="baseFare">
              <Input placeholder="baseFare" />
            </Form.Item>
            <Form.Item name="costPerKm">
              <Input placeholder="costPerKm" />
            </Form.Item>
            <Form.Item name="costPerMinute">
              <Input placeholder="costPerMinute" />
            </Form.Item>
            <Form.Item name="seasonalMultiplier">
              <Input placeholder="seasonalMultiplier" />
            </Form.Item>
          </Form>
          <div className="flex justify-between gap-5">
            <Button onClick={() => setModal(false)}>Отмена</Button>
            <Button type="primary" onClick={handleClick} disabled={loading}>
              Добавить
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
