import React from 'react'
import {Card} from "react-bootstrap";
function Individual(prop) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{prop.data["name"]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{prop.data["qualification"]}</Card.Subtitle>
                    <Card.Text>
                        <div><b>Expected Salary: </b>${prop.data["expectedSalary"]}</div>
                        <div><b>Notice Period: </b>{prop.data["noticePeriod"]} days</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Individual;
