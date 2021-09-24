import React, { Fragment } from "react";

class Transaksi extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      Facemask: [
        ["Facemask Strawberry", 10000],
        ["Facemask Greentea", 20000],
        ["Facemask Choco", 30000],
        ["Facemask Charcoal", 40000],
      ],
      
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { produk1, produk2} = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const {Facemask, totalTagihan } = this.state;
    return (
      <div style={{ backgroundColor: "#ffffff", height: "50px"   }}>
        <div style={{ fontWeight: "bold" }} bgcolor="#ffffff" align ="center" direction ="left" scrollamount="3">Tugas Modul 5 Praktikum RPLBK Kelompok 01 </div>
        <div className="titleWrapper">
          <left>
            <p className="judul" style={{ color:"#000000", fontFamily:"Arial", fontWeight: "light" }}>Transaksi</p>
            </left>
        </div>
          <div className="inputWrapper">
            <left>
            <label >Face Mask and Scrub</label>
            </left>
            <div>
            </div>
            <left>
            <label >gram</label>
            </left>
            <div>
              <left>
              <input
              style={{
                background: "#DDA0DD",
                color: "#4B0082",
                margin: "auto",
                height: "40px",
                border: "#9254de",
                fontSize: "15px"
              }}
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </left>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="sarapan">
                <br />
                <left>
                <label >Pilih Varian    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">Facemask</option>
                  <Fragment>
                    {Facemask.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </left>
                
                <br />
              </div>
              <h3
                style={{
                  color: "#000000",
                  textAlign: "left",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"Arial"
                }}
              >
                Total Harga {totalTagihan} 
              </h3>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Transaksi;
