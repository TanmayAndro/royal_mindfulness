import { Alert, AlertTitle, Collapse, Snackbar } from "@mui/material";
import React, { FC } from "react";

interface AlertComponentProps {
  errorData?: string;
  type?: "error"|"success";
  handleClose?: () => void;
}

const AlertComponent: FC<AlertComponentProps> = ({
  errorData,
  handleClose,
  type
}) => {
  return (
    <>
      {errorData && (
        <Collapse in={true}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={true}
            autoHideDuration={6000}
            onClose={handleClose}
            key={"top" + "right"}
          >
            <Alert
              severity={type}
              sx={{ width: "100%" }}
              onClose={handleClose}
            >
              <AlertTitle>Error</AlertTitle>
              {errorData}
            </Alert>
          </Snackbar>
        </Collapse>
      )}
    </>
  );
};

export default AlertComponent;
