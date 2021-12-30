import { createMuiTheme } from "@material-ui/core";
import { Pagination, ThemeProvider } from "@mui/material";
import { VFC } from "react";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
// @ts-ignore
export const CustomPagination: VFC = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page: any) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        {
          // @ts-ignore
          <Pagination
            count={numOfPages}
            // @ts-ignore
            onChange={(e) => handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color="primary"
          />
        }
      </ThemeProvider>
    </div>
  );
};
