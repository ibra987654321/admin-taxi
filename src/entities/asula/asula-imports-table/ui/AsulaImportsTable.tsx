import { useTranslation } from 'react-i18next';

import { Table, TableColumnsType, useWindowInnerWidth } from '~shared/ui';
import {
  AsulaImportTableItemType,
  AsulaImportTablePaginationType,
} from '~entities/asula/asula-imports-table';

interface AsulaImportsTableType {
  loading: boolean;
  asulaImportList: AsulaImportTableItemType[] | null;
  pagination: AsulaImportTablePaginationType | null;
  actionsSlot?: any;
  setAsulaImportDetail?: any;
}

export const AsulaImportsTable = ({
  loading,
  asulaImportList,
  pagination,
  actionsSlot,
  setAsulaImportDetail,
}: AsulaImportsTableType) => {
  const { t } = useTranslation();
  const windowWidth = useWindowInnerWidth();
  const columns: TableColumnsType<AsulaImportTableItemType> = [
    {
      title: '№',
      render: (_value, _row, idx) =>
        idx + 1 + ((pagination?.currentPage || 0) - 1) * (pagination?.limit || 0),
      align: 'center',
      width: '55px',
      fixed: 'left',
    },
    {
      title: t('asula.companyName'),
      dataIndex: 'company_name_ru',
      key: 'company_name_ru',
      align: 'center',
      width: '280px',
    },
    {
      title: t('asula.domain'),
      dataIndex: 'domain_ru',
      key: 'domain_ru',
      align: 'center',
      width: '110px',
    },
    {
      title: t('asula.location'),
      dataIndex: 'location_ru',
      key: 'location_ru',
      align: 'center',
      width: '180px',
    },
    {
      title: t('asula.format'),
      dataIndex: 'format_ru',
      key: 'format_ru',
      align: 'center',
      width: '110px',
    },
    {
      title: t('asula.speciality'),
      dataIndex: 'speciality_ru',
      key: 'speciality_ru',
      align: 'center',
      width: '180px',
    },
    {
      title: t('asula.registrationNumber'),
      dataIndex: 'registration_number',
      key: 'registration_number',
      align: 'center',
      width: '110px',
    },
    {
      title: t('asula.serialNumber'),
      dataIndex: 'serial_number',
      key: 'serial_number',
      align: 'center',
      width: '110px',
    },
    {
      title: t('asula.registrationDate'),
      dataIndex: 'registration_date',
      key: 'registration_date',
      align: 'center',
      width: '110px',
    },
    {
      title: t('actions.actions'),
      dataIndex: 'operation',
      align: 'center',
      render: (_value, row, _index) => (
        <div
          onClick={() => setAsulaImportDetail(row)}
          className="flex justify-center items-center gap-4"
        >
          {actionsSlot}
        </div>
      ),
      width: '100px',
      fixed: 'right',
    },
  ];

  return (
    <>
      <Table
        bordered
        size="small"
        dataSource={asulaImportList || []}
        columns={columns}
        rowKey={(obj) => obj.id_license_import}
        loading={loading}
        pagination={false}
      />
    </>
  );
};
