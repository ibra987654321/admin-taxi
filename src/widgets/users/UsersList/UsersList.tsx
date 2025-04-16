import { useEffect } from 'react';

import { UserListView } from '~entities/users/UserListView';
import {
  useSetUsersList,
  useUsersList,
  useUsersPagination,
} from '~entities/users/UserListView/model';

import {
  PaginationView,
  usePage,
  usePerPage,
  useSetPage,
  useSetPerPage,
} from '~entities/shared/pagination';

export const UsersList = () => {
  const usersList = useUsersList();
  const usersPagination = useUsersPagination();
  const page = usePage();
  const perPage = usePerPage();
  const setPerPage = useSetPerPage();
  const setUsersList = useSetUsersList();

  useEffect(() => {
    setPerPage(50);
    setUsersList();
  }, []);

  const onChangeSelector = (selected: number) => {
    // if (selected !== 1) {
    //     setUsersList({
    //         idOrganization: user?.org,
    //         idOrganizationGroup: 0,
    //         idStatus: selected,
    //         page,
    //         pageSize: perPage,
    //     });
    // }
    //
    // if (!selected) {
    //     resetKids();
    // }
  };

  return (
    <>
      <UserListView usersList={usersList} />
      <div className="flex justify-end">
        <PaginationView
          pageSize={Number(perPage) || 1}
          total={usersList?.length ? Number(usersPagination?.totalPages) : 0}
          onChange={onChangeSelector}
        />
      </div>
    </>
  );
};
