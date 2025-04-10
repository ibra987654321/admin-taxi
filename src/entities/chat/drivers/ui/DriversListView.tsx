import React, { FC } from 'react';

interface DriversListViewProps {
  driversList: any;
}

export const DriversListView: FC<DriversListViewProps> = ({ driversList }) => {
  return (
    <div className="grid gap-5">
      {driversList.map((passenger: any) => (
        <div
          key={passenger.id}
          className="p-3 rounded-md hover:bg-[#E4EFFF] hover:shadow-sm transition duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-between w-full gap-3">
            <div className="font-semibold text-base]">{passenger.title}</div>
            <span className="text-xs text-[#A1A7C4]">{passenger.time}</span>
          </div>

          <div className="text-xs text-[#5A607F]">{passenger.desc}</div>
        </div>
      ))}
    </div>
  );
};
