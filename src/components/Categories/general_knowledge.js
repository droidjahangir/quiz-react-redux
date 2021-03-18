import React from "react";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import CoverImage from "../../images/QM.png";
import Ques from "./ques";
import jsData from "../../questions.json";


import { score } from "../../actions";
import { connect } from "react-redux";

class general_knowledge extends React.Component {
  constructor() {
    super();
    this.compare = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
    };

    this.data = jsData.topics[0].generalKnowledge;

    const values = Object.values(jsData.topics[0].generalKnowledge);
    const randomValue = values[parseInt(Math.random() * values.length)];
    console.log(randomValue);

    // random unique value :
    var arr = [];
    while (arr.length < 20) {
      var r = Math.floor(Math.random() * 20);
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    this.state = {
      count: 10,
      click: 1,
      // techAllData: this.data,
      techSingleData: this.data[arr[0]],
      randomValue,
      score: 0,
      selected_option_index: null,
      random_unique_value: arr
    };
    // console.log(this.state.techAllData)
    // console.log(this.state.techSingleData.answer)
  }

  componentDidMount() {
    // this.setInterval = setInterval(() => {
    //   this.setState({ count: this.state.count - 1 });
    // }, 1000);
    this.onTimer();
  }

  onTimer = () => {
    setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
      // console.log(`count value : ${this.state.count}`)
      if (this.state.count < 0) {
        this.setState({
          count: 10,
        });
        this.increment();
      }
    }, 1000);
  };

  onOptionSelect = (item_index) => {
    this.setState({
      selected_option_index: item_index,
    });
    // console.log(`selected item index no ${item_index}`);
  };

  increment = () => {

    this.state.random_unique_value.map((e) => { console.log(`random val ${e}`) })

    const values = Object.values(jsData.topics[0].generalKnowledge);
    this.setState({
      techSingleData: values[this.state.random_unique_value[this.state.click]],
    });
    console.log(`next question no: ${this.state.random_unique_value[this.state.click]}`)

    const { history } = this.props;
    this.setState({ click: this.state.click + 1 });
    this.setState({
      count: 10,
    });

    // const values = Object.values(jsData.topics[0].generalKnowledge);
    // const randomValue = values[parseInt(Math.random() * values.length)];
    // console.log(`next random value ${randomValue}`);

    // this.setState({ techSingleData: randomValue });

    if (
      this.compare[this.state.selected_option_index] ===
      this.state.techSingleData.answer
    ) {
      this.state.score = this.state.score + 10;
      this.props.score(this.state.score);
      console.log(`redux score value : ${this.props.store_score}`);

      console.log(this.state.score);
    } else {
      console.log(this.state.score);
    }
    this.setState({ selected_option_index: null });

    this.setState({ techSingleData: this.data[this.state.click] });
    if (this.state.click > 19) {
      console.log(this.data);
      this.props.history.push({
        pathname: "/thankyou",
        state: {
          answer_data: this.data,
        },
      });
    }
    console.log(this.state.techSingleData);
  };



  onOptionSelect = (item_index) => {
    this.setState({ selected_option_index: item_index });
    console.log(`selected item index no ${item_index}`);
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="style.css" />
          <title>Credits</title>
        </head>
        <body id="bg-color">
          <div>
            <div class="container-fluid">
              <div class="row nav__container" style={{ backgroundColor: "white" }}>
                <div class="col-md-4">
                  <img src={CoverImage} alt="header" id="myImg" />
                </div>
                <div class="col-md-4">
                  <div class="middle__insideTitle">General Knowledge</div>
                </div>
                <div class="col-md-4 ">
                  <Button
                    href="/"
                    type="button"
                    className="btn  btn-primary mt-3 w-50"
                    id="myBtn"
                    style={{
                      marginLeft: "42%",
                      float: "right",
                      borderRadius: "24px",
                    }}
                  >
                    <h3 className="fw-bold">Home</h3>
                  </Button>
                </div>
              </div>
            </div>
            <ProgressBar now={this.state.click * 5} />
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3 text-center">
                  {/* <button
                    class="btn btn-success w-6"
                    style={{ borderRadius: "22px", marginTop: "177px" }}
                    onClick={this.decrement}
                  >
                    <h3 class="fs-3 fw-bold">Previous</h3>
                  </button> */}
                </div>

                <div class="col-md-6">
                  <Ques
                    data={this.state.techSingleData}
                    optionSelect={this.onOptionSelect}
                  />
                </div>
                <div class="col-md-3 text-center">
                  <h3 class="mt-2 fw-bold">
                    {" "}
                    Time left:
                     {count}
                    s
                  </h3>
                  <button
                    class="btn btn-success w-55"
                    style={{ borderRadius: "22px", marginTop: "135px" }}
                    onClick={this.increment}
                  >
                    <h3 class="fs-3 fw-bold">Next</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossorigin="anonymous"
          ></script>
        </body>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { store_score: state.updated_score };
};

export default connect(mapStateToProps, { score })(general_knowledge);

// export default general_knowledge;
