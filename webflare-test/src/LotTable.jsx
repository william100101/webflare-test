import React, { useState } from 'react';
import EditForm from './EditForm';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

function LotTable() {
    const [totalListValues, totalListValuesSetter] = useState([]); // To all list values
    const [selectedListValues, selectedListValuesSetter] = useState([]); // To SELECTED list values
    const [formShow, setFormShow] = useState(false); // To control visibility of the edit form


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Sales Order</th>
                        <th>#</th>
                        <th>Description</th>
                        <th>Consignor</th>
                        <th>Estimate</th>
                    </tr>
                </thead>
                <tbody>
                    {totalListValues.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{item.salesOrder}</td>
                            <td>{item.number}</td>
                            <td>{item.description}</td>
                            <td>{item.consignor}</td>
                            <td>{item.estimate}</td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Menu
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setFormShow(true)} variant="primary" style={{ marginTop: '10px' }}>Edit</Dropdown.Item>
                                    <Dropdown.Item>Duplicate</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </tr>
                    ))}
                        {/*
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>1</td>
                            <td>1</td>
                            <td>asdf</td>
                            <td>adsf</td>
                            <td>1</td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Menu
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setFormShow(true)} variant="primary" style={{ marginTop: '10px' }}>Edit</Dropdown.Item>
                                    <Dropdown.Item>Duplicate</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </tr>*/}
                </tbody>
            </Table>

            <Button onClick={() => setFormShow(true)} variant="primary" style={{ marginTop: '10px' }}>
                Add New Lot
            </Button>

            <EditForm formShow={formShow} setFormShow={setFormShow} />
        </>
    );
}

export default LotTable;