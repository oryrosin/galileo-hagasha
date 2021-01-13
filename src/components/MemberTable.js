// import "./MemberCard.css";
import { Container, Row,  } from 'react-bootstrap';
import Card from '@material-ui/core/Card';


function MemberTable(props){
    const {member}= props;
    
    return (
    <Container>
        <Row>
            <Card>
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Dror_Israel_and_Hanoar_Haoved_Ve%27Halomed_uniforms.png"
                 alt="Card"/>
                <div className="card-body">
                    <h4 className="card-title" style={{color:"black"}}>{"החבר"+" "+ member.name }</h4>
                    <p className="card-text" style={{color:"black"}}>{"התאגדות"+" "+ member.hitagdut}</p>
                </div>
            </Card>
        </Row> 
    </Container>
        
      );
}
export default MemberTable