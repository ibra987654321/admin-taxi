import { FC } from 'react';

import { Table, TableColumnsType } from '~shared/ui';

import { ITariff } from '../api';

export interface UserListViewProps {
  tariffsList: ITariff[] | null;
}

export const TariffsListView: FC<UserListViewProps> = ({ tariffsList }) => {
  const columns: TableColumnsType<ITariff> = [
    {
      title: 'baseFare  ',
      dataIndex: 'baseFare',
      key: 'fullName',
      align: 'left',
    },
    {
      title: 'carClassId',
      dataIndex: 'carClassId',
      key: 'carClassId',
      align: 'center',
    },
    {
      title: 'cityId',
      dataIndex: 'cityId',
      key: 'cityId',
      align: 'center',
    },
    // {
    //     title: t('actions.actions'),
    //     dataIndex: 'operation',
    //     align: 'center',
    //     render: (_value, row, _index) => (
    //         <div
    //             onClick={() => setAsulaImportDetail(row)}
    //             className="flex justify-center items-center gap-4"
    //         >
    //             {actionsSlot}
    //         </div>
    //     ),
    //     width: '100px',
    //     fixed: 'right',
    // },
  ];

  return (
    <>
      <Table
        size="small"
        dataSource={tariffsList || []}
        columns={columns}
        rowKey={(obj) => obj.id}
        pagination={false}
      />
    </>
  );
};
