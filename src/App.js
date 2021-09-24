import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import maskImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "##ffffff",
    color: "#ffffff",
    backgroundSize: "100%",
  },
  dark: {
    background: "#ff1493",
    color: "#ff1493",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "10%"  }}>
        <div style={{ fontWeight: "bold" }} bgcolor="#ffffff" align ="center" direction ="left" scrollamount="10"> {valueInput.name} Tugas Modul 5 Praktikum RPLBK Kelompok 01 </div>
 
    
            <button
                className="button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
              <FontAwesomeIcon icon={faHome} />
              </button>
            
          <center>
          <div className="judul">
             <h2 className="judul" style={{ color:"#000000", fontFamily:"Arial", fontWeight: "bold" }}>Face Mask and Scrub</h2>
            <div className="gambar">
              <center>
             
                <img src={maskImage} style={{ height: "500px"  }} />
             
              </center>
            </div>
          </div>
          </center>
          </div>
          <h2>
          </h2>
    </ThemeContext.Provider>
    </body>
  );
}
