import React,{useState} from 'react'
import {Card} from "react-bootstrap";
import Apply from './apply/apply';
import Form from './form/form';

function IndividualCards(props) {
    const data=props.data;
    const [formFlag,setFormFlag]=useState(true);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data["post"]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data["location"]}</Card.Subtitle>
                    <Card.Text>
                        <div><b>Salary: </b>${data["salary"]}</div>
                    </Card.Text>
                    <Card.Text>
                        <Apply id={data["_id"]} form={setFormFlag} formFlag={formFlag}/>
                        {formFlag||<Form post={data["post"]} id={data["_id"]} form={setFormFlag}/>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default IndividualCards;
