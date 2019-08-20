import React, { Component } from 'react';


export default class UpdateRequest extends Component {
    // static defaultProps = {
    //     onRegistrationSuccess: () => { }
    // }

    // state = { error: null }

    render() {
        return (
            <>
                <div className="headline">
                    <h3>Update maintenance request for tenant</h3>
                    <b> Request 1 Description name</b>
                    Request 1 Description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
                <div className="total-update-form">
                    <form>
                        <div className="project-assigned">
                            <input type="checkbox" name="project-assigned" value="project-assigned" /> Project assigned
                        <input type="text" name="notes" id="notes" placeholder="notes about project assigned" />
                        </div>
                        <div className="project-started">
                            <input type="checkbox" name="project-started" value="project-started" /> Project started
                        <input type="text" name="notes" id="notes" placeholder="notes about project started" />
                        </div>
                        <div className="project-completed">
                            <input type="checkbox" name="project-completed" value="project-completed" /> Project completed
                        <input type="text" name="notes" id="notes" placeholder="notes about project completed" />
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}