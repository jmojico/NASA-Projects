import React from "react";
import {FetchProjects, fetchProjects} from "./FetchProjects";

class FetchProjectById extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            projects: props.data
        };
    }

    getRandomArbitrary = (min, max) => {
        let randomFloat = Math.random() * (max - min) + min;
        return Math.trunc(randomFloat);
    }
     componentDidMount() {
        const id = this.getRandomArbitrary(1,12000);
         fetch("https://api.nasa.gov/techport/api/projects/" + this.state.projects[id].id + "?api_key=CggcbLsc9vvABUw1FHiLHeVZtmuavPpFyOgDkJxb")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        projectDetails: result.project
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, projectDetails } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading project...</div>;
        } else {
            return (
                <ul>
                        <li>
                            {projectDetails.id}
                        </li>
                        <li>
                            {projectDetails.title}
                        </li>
                        <li>
                            {projectDetails.startDate}
                        </li>
                        <li>
                            {projectDetails.endDate}
                        </li>
                </ul>
            );
        }
    }
}

export {FetchProjectById};