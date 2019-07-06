import React, { useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';
import { addTechs } from '../../actions/techActions'
import { connect } from 'react-redux';

const AddTechModal = ({addTechs}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        const data = {
            firstName,
            lastName
        }
        if(firstName === '' || lastName === '') {
            M.toast({html: 'Please enter the first and last name'})
        } else {
            addTechs(data);
            M.toast({ html: `${firstName} ${lastName} was added as a tech`});

            // clear fields
            setFirstName('');
            setLastName('');
        }
        
    }
    return (
        <div id='add-tech-modal' className="modal">
            <div className='modal-content'>
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className='active'> First Name </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className='active'> First Name </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn blue">Enter</a>
            </div>
        </div>
    )
}


export default connect(null, {addTechs})(AddTechModal);
