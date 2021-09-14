import React, { createContext, useMemo } from "react";

export const DetailTabContext = createContext({
  companies: [],
  countries: [],
  trailers: [],
});

const DetailContext = ({ children, value }) => {
  const detailValue = useMemo(
    () => ({
      companies: value.companies,
      countries: value.countries,
      trailers: value.trailers,
    }),
    [value]
  );

  return (
    <DetailTabContext.Provider value={detailValue}>
      {children}
    </DetailTabContext.Provider>
  );
};

export default DetailContext;
