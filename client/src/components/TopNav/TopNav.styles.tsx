import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) => {
  return {
    headerContainer: {
      display: "flex!important",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "60px",
      flexWrap: "nowrap",
      [theme.breakpoints.down("md")]: {
        height: "80px",
        flexWrap: "wrap",
        padding: "5px auto",
      },
    },
    navItem: {
      color: theme.palette.success.main,
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.common.white,
        textDecoration: "none",
      },
      "&:not(:last-child)": {
        marginRight: "12px",
      },
      [theme.breakpoints.down("sm")]: {
        "&:not(:last-child)": {
          marginRight: "8px",
        },
      },
    },
    authLink: {
      fontWeight: "700",
    },
    headerLogo: {
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.primary.dark,
      border: `1px solid  ${theme.palette.success.main}`,
      boxShadow: `2px 2px 2px ${theme.palette.primary.main}`,
      fontSize: "22px",
      padding: "0 7px 3px",
      "&:hover": {
        border: `1px solid  ${theme.palette.common.white}`,
        backgroundColor: theme.palette.common.black,
        boxShadow: `2px 2px 2px ${theme.palette.primary.dark}`,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        padding: "0 5px 2px",
      },
    },
  };
});
