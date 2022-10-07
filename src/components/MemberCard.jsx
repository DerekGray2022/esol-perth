import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemberCard = (props)=> {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title><h3>{props.name}</h3></Card.Title>
                <Card.Text>
                    {props.intro}
                </Card.Text>
                <Button variant="primary">Read More...</Button>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;