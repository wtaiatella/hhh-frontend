import React from "react";


export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="p-24 flex justify-center">
          <div className="max-w-[900px] w-full grid grid-cols-auth rounded-lg shadow-lg overflow-hidden">
              {children}
          </div>
      </div>
  );
}
