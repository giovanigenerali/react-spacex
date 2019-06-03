import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from "react-moment";

export default function LaunchItem(props) {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    links
  } = props.launch;

  return (
    <div className="card card-body mb-3">
      <div className="row">
        {links.mission_patch_small && (
          <div className="col-md-2 text-center">
            <img
              className="img-fluid"
              src={links.mission_patch_small}
              alt={mission_name}
              style={{ width: "100px" }}
            />
          </div>
        )}
        <div
          className={classNames({
            "col-md-7": links.mission_patch_small,
            "col-md-9": !links.mission_patch_small
          })}
        >
          <h4>
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            <span className="font-weight-bold text-white mr-2">
              <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
            </span>
          </p>
        </div>
        <div className="col-md-3 text-center">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
