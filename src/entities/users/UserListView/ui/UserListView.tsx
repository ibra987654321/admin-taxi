import { FC } from 'react';

import { IUser } from '~entities/users/UserListView/api';
import { Table, TableColumnsType } from '~shared/ui';

export interface UserListViewProps {
  usersList: IUser[] | null;
}

export const UserListView: FC<UserListViewProps> = ({ usersList }) => {
  const columns: TableColumnsType<IUser> = [
    {
      title: 'Имя пользователя',
      dataIndex: 'fullName',
      key: 'fullName',
      align: 'left',
      render: (row) => (
        <div className="flex gap-5 items-center w-full justify-start">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#1E5EFF" />
            <mask id="mask0_9_161" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <circle cx="18" cy="18" r="18" fill="white" />
            </mask>
            <g mask="url(#mask0_9_161)">
              <circle cx="18" cy="33.7999" r="12.6" fill="#B6CBFF" />
              <circle cx="18" cy="14" r="5.4" fill="#B6CBFF" />
            </g>
          </svg>
          {row}
        </div>
      ),
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      align: 'center',
    },
    {
      title: 'ID Пользователя',
      dataIndex: 'id',
      key: 'id',
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
        dataSource={usersList || []}
        columns={columns}
        rowKey={(obj) => obj.id}
        pagination={false}
      />
    </>
  );
};
