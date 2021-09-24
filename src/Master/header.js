import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "0px",
  },
  line: {
    height: "10px",
    backgroundColor: "#ffffff",
  },
  link: {
    textDecoration: "none",
  },
}));

const themes = {
  light: {
    background: "#FFC0CB",
    color: "#000000",
  },
  dark: {
    background: "#DDA0DD",
    color: "#000000",
  },
};

const ThemeContext = createContext();

export default function Footer() {
  const classes = styles();
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background}}>
        <Toolbar position="sticky" className={classes.bar}>
          <div >
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "light" }}
              >
                 Beranda 
              </Link>
            </Button>

            <Button>
              <Link
                to="/masker"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "light" }}
              >
                 Face Mask 
              </Link>
            </Button>
            
            <Button>
              <Link
                to="/transaksi"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "light" }}
              >
                 Transaksi 
              </Link>
            </Button>
            <Button 
              style={{ color: valueTheme.color, fontWeight: "light" }}
              className="Button"
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              Ganti Tema
            </Button>
          </div>
        </Toolbar>
        <div className={classes.line}></div>
      </div>
    </ThemeContext.Provider>
  );
}
