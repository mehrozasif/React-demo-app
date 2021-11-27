import React from "react";
import yellow_Png from "../../assets/images/yellowball.png";
import blue_Png from "../../assets/images/blueball.png";
import Loginform from "../smallcomponents/Loginform";
export const Login = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="main-bg">
          <div className="row mx-auto py-2 mb-lg-5">
            <div className="col-md-9 m-auto py-2">
              <div className="br-15 bg-white shade hover-shade px-md-5 position-relative">
                <img
                  className="position-absolute yellow-ball d-md-block d-none"
                  src={yellow_Png}
                  alt="yellow_ball"
                />
                <img
                  className="position-absolute blue-ball d-md-block d-none"
                  src={blue_Png}
                  alt="blue_ball"
                />
                <img
                  className="position-absolute small-blue-ball d-md-block d-none"
                  src={blue_Png}
                  alt="smallblue_ball"
                />
                <Loginform {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
