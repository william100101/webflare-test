import React, { useState } from 'react'; // Add useState import

// Custom Components
import EditForm from './EditForm'

// Bootstraped components
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

function LotTable() {
    let salesCount = 1;

    // List Comopnent Constants
    const [totalListValues, totalListValuesSetter] = useState([]);
    const [selectedListValues, selectedListValuesSetter] = useState([]);
    
    // Adding an item to the table


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <input type = "checkbox"/>
                        </th>
                        <th>Sales Order</th>
                        <th>#</th>
                        <th>Description</th>
                        <th>Cosignor</th>
                        <th>Estimate</th>
                    </tr>
                </thead>
                <tbody> {/* sale order should be unique*/}
                    {totalListValues.map((item, index) => ( 
                        <tr key={index}>
                            <td>
                                <input type = "checkbox"/>
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
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Duplicate</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button onClick={() =>
                totalListValuesSetter([
                    ...totalListValues,
                    
                ]
                )
            }/>
                Add New Lot
            <Button/>
        </>
    );
}

export default LotTable;