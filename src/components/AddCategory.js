import React, { useState } from 'react';
import { Form, FormGroup, Button, Input, Modal, ModalHeader } from 'reactstrap';
import ProtoTypes from 'prop-types';
 
const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputeValue] = useState('');

    const [modal, setModal] = useState(false);

    const handleInputChange = (e) => {
        setInputeValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 3) {
            setCategories(cats => [ inputValue,...cats]);
            setInputeValue('');
        } else {
            toggle(modal);
        }
    }

    const toggle = () => setModal(!modal);


    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup className='d-flex form-group'>
                <Input
                    bsSize="lg"
                    type="search"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="m-3"
                />

                <Button
                    color="primary"
                    size="lg"
                    className="m-3"

                >
                    Search
                </Button>
            </FormGroup>


            <Modal
                centered
                fullscreen="sm"
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle} >
                    You need write at least 3 characters
                </ModalHeader>


            </Modal>
        </Form>



    )
}

export default AddCategory;

AddCategory.propTypes= {
    setCategories: ProtoTypes.func.isRequired
}