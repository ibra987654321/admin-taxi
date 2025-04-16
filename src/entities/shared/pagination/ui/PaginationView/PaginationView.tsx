import { FC, useEffect } from 'react';

import { Pagination, PaginationProps } from '~shared/ui';

import { useSetPage } from '../../model';

export interface PaginationViewProps extends PaginationProps {
  resetPage?: boolean;
}

export const PaginationView: FC<PaginationViewProps> = ({
  size = 'small',
  resetPage = true,
  ...props
}) => {
  const setPage = useSetPage();

  useEffect(() => {
    if (resetPage) {
      return () => {
        setPage(1);
      };
    }
  }, []);

  // const itemRender: PaginationProps["itemRender"] = (
  //   _,
  //   type,
  //   originalElement
  // ) => {
  //   if (type === "prev") {
  //     return null;
  //   }

  //   if (type === "next") {
  //     return null;
  //   }

  //   return originalElement;
  // };

  return <Pagination size={size} {...props} />;
};
