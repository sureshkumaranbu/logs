import M from 'materialize-css/dist/js/materialize.min.js';
import React from 'react'
import {connect} from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({tech, deleteTech}) => {

    const onDelete = () => {
        deleteTech(tech);
        M.toast({html: `${tech.firstName} ${tech.lastName} has been deleted`})
    }
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={onDelete}>delete</i>
                </a>
            </div>
        </li>
    )
}


export default connect(null, {deleteTech})(TechItem)
