import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      links {
        mission_patch_small
      }
    }
  }
`;

export default class Launches extends Component {
  render() {
    return (
      <>
        <h1 className="display-4 my-4">Launches</h1>
        <MissionKey />

        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }

            if (error) {
              return console.log("LAUNCHES_QUERY", error);
            }

            return data.launches.map(launch => (
              <LaunchItem key={launch.flight_number} launch={launch} />
            ));
          }}
        </Query>
      </>
    );
  }
}
