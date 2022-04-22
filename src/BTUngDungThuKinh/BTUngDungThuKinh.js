import React, { Component } from "react";

export default class BTUngDungThuKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    sanPham: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    }
  }

  renderProduct = () => {
    return this.arrProduct.map((glass,index) => {
      return <img key={index}
      className="ml-2 p-2 border border-width-1"
      src={glass.url}
      style={{ width: 110, cursor: "pointer" }}
      onClick ={() => {
        this.setState({
          sanPham: glass
        })
      }
      }
    />
    })
  }


  render() {
    let {name,url,desc} = this.state.sanPham;

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: 2000,
          minHeight: 2000,
        }}
      >
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", minHeight: 2000 }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                    style={{ width: 250 }}
                  />
                  <img
                    className="position-absolute glassesStyle"
                    src={url}
                    style={{
                      width: 150,
                      top: 75,
                      right: 70,
                      opacity: "0.7",
                      transform: "rotate(0deg)",
                      animation:
                        "2s ease 0s 1 normal none running animChangeGlasses1650616747951",
                    }}
                  />
                  <div
                    className="position-relative "
                    style={{
                      width: 250,
                      top: 200,
                      left: 270,
                      paddingLeft: 15,
                      backgroundColor: "rgba(255, 127, 0, 0.5)",
                      textAlign: "left",
                      height: 105,
                    }}
                  >
                    <span
                      className="font-weight-bold"
                      style={{ color: "rgb(171, 130, 255)", fontSize: 17 }}
                    >
                      {name}
                    </span>{" "}
                    <br />
                    <span
                      style={{ fontSize: 14, paddingRight: 5, fontWeight: 400 }}
                    >
                      {desc}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                  style={{ width: 250 }}
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderProduct()}
            {/* <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v1.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v2.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v3.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v4.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v5.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v6.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v7.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v8.png"
              style={{ width: 110, cursor: "pointer" }}
            />
            <img
              className="ml-2 p-2 border border-width-1"
              src="./glassesImage/v9.png"
              style={{ width: 110, cursor: "pointer" }}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
