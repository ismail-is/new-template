import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45298.03216134262!2d74.854779!3d12.866884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a34c141082d%3A0x18911cd5a26f737!2sMillennium%20Towers%2C%20Mother%20Theresa%20Rd%2C%20Kankanady%2C%20Mangaluru%2C%20Karnataka%20575002!5e1!3m2!1sen!2sin!4v1717406513630!5m2!1sen!2sin" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		
        </div>
        }
}

export default Map