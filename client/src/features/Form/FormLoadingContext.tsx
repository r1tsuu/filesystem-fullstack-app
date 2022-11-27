import { createContext, useContext } from "react";

const FormLoadingContext = createContext<boolean | null>(null);

export const FormLoadingProvider = ({
  isLoading,
  children,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <FormLoadingContext.Provider value={isLoading}>
      {children}
    </FormLoadingContext.Provider>
  );
};

export const useIsFormLoading = () => {
  const context = useContext(FormLoadingContext);

  if (context === null)
    throw new Error("Using FormLoading context hook outside Provider");

  return context;
};
