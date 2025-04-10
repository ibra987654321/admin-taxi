import { useEffect, useState } from 'react';

import {
  AsulaImportsTable,
  useAsulaImportTableList,
  useSetAsulaImportTableList,
} from '~entities/asula/asula-imports-table';
import { Pagination, useNotification } from '~shared/ui';

import { AsulaImportActionView } from '../../../../features/asula/asula-table';

export const AsulaTable = () => {
  const [loading, setLoading] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [asulaImportDetail, setAsulaImportDetail] = useState(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const notification = useNotification();

  const asulaImportTableList = useAsulaImportTableList();

  const setAsulaImportTableList = useSetAsulaImportTableList();

  useEffect(() => {
    if (!asulaImportTableList) {
      setAsulaImportTableList({ page: currentPage, limit });
    }

    setCurrentPage(asulaImportTableList?.pagination.currentPage || 0);
    setLimit(asulaImportTableList?.pagination.limit || 0);
  }, [asulaImportTableList]);

  const onChange = (v: any, a: any) => {
    setCurrentPage(v);
    setLimit(a);
    setAsulaImportTableList({ page: v, limit: a });
  };

  return (
    <div>
      {notification.contextHolder}
      <div className="w-full flex justify-end pb-5">
        <AsulaImportActionView
          notification={notification}
          asulaImportDetail={asulaImportDetail}
          type="add"
        />
      </div>

      <AsulaImportsTable
        asulaImportList={asulaImportTableList?.data || []}
        loading={loading}
        pagination={asulaImportTableList?.pagination || null}
        setAsulaImportDetail={setAsulaImportDetail}
        actionsSlot={
          <>
            <AsulaImportActionView
              notification={notification}
              asulaImportDetail={asulaImportDetail}
              type="edit"
            />
          </>
        }
      />
      <Pagination
        size="default"
        className="mt-6 block"
        current={currentPage}
        pageSize={limit}
        total={asulaImportTableList?.pagination.total}
        onChange={onChange}
      />
    </div>
  );
};
