import { LoadingButton } from "@mui/lab";
import { useIsFormLoading } from "./FormLoadingContext";

export const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useIsFormLoading();

  return (
    <LoadingButton
      size="large"
      variant="contained"
      type="submit"
      loading={isLoading}
    >
      {children}
    </LoadingButton>
  );
};
