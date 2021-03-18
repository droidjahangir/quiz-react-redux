import React from "react";
import Button from "react-bootstrap/Button";
import _, { findIndex } from 'lodash'

class Answer extends React.Component {
  state = {};

  compare = ['A', 'B', 'C', 'D']

  render() {
    console.log("Answer page ");
    console.log(this.props.location.state);

    // console.log("obj", obj);
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
          <title>Thank you </title>
        </head>
        <body id="ansColor">
          <div>
            <div class="container-fluid">
              <div class="row text-center">
                <h1 className="fw-bold">Answer sheet for choosen Topic</h1>
              </div>
            </div>
            <div class="container">
              <div>
                {this.props.location.state.full_data.map((element, index) => (
                  <div class='row mb-2'>
                    {/* <div>{element.id}</div>
                    <div>{element.question}</div> */}
                    ({element.id})
                    {element.question}
                    <p><b>Answer:</b>  {element.answer}. </p>
                    <p><b>Options:</b></p>
                    { element.option.map((e) => <p>{e}</p>) }                  </div>
                ))}
              </div>
              <div class="row mb-2">
                <Button href="/" class=" mb-5" style={{ float: "right" }}>
                  Home
                </Button>
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

export default Answer;
