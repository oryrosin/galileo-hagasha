import { useState } from "react"
import { Form, Row, Col, Button} from "react-bootstrap"
import './WagesSection.css'


function WagesSection(props){
    const [filter1, setFilter1] = useState("")
    const [filter2, setFilter2] = useState("")
    const [filter3, setFilter3] = useState("")
    const [filter4, setFilter4] = useState("")
    const [filter, setFilter] = useState("")
    // axios get

    useEffect(()=>{
        async function getWagesData(){
            const res= await axios.get("https://api.airtable.com/v0/appivINepijXjwR9W/Table%203?api_key=keyk7ppRxdcVwPFzd");
            const members= res.data.records.map((plainMember) => new MemberModel(plainMember.fields, plainMember.id));
            setMembersData(members);
        }
        editSelectedMember() ;
        },[showModal]);
    // filters by onChange
    // return table of members each is clickble for wages view
    
    return(
        <Form id="wage-section-form">
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}> התאגדות</Form.Label>
            <Col sm={4}><Form.Control type="text" 
            value={filter} onChange={(e)=> setFilter1(e.target.value)}/></Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>מעגל חיים</Form.Label>
            <Col sm={4}><Form.Control type="text" /></Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>חבר</Form.Label>
            <Col sm={4}><Form.Control type="text" /></Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>מתאריך</Form.Label>
            <Col sm={4}><Form.Control type="text" /></Col>
            <Form.Label column sm={2}>עד תאריך</Form.Label>
            <Col sm={4}><Form.Control type="text" /></Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>מעסיק</Form.Label>
            <Col sm={4}><Form.Control type="text" /></Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>אג"ש</Form.Label>
            <Col sm={4}><Form.Control type="text" /></Col>
        </Form.Group>
        
        
        </Form>


        // <Form id="wage-section-form">
        //     <Form.Label htmlFor="filter" >התאגדות </Form.Label>
        //     <input type="text" id="filter-by-hitagdut" 
        //     // value={filter} onChange={(e)=> setFilter1(e.target.value)}
        //     /><br/>
        //     <Form.Label htmlFor="filter" > שם החבר</Form.Label>
        //     <input type="text" id="filter-by-name" 
        //     // value={filter} onChange={(e)=> setFilter2(e.target.value)}
        //     /><br/>
        //     <Form.Label htmlFor="filter" > גמי"ש/ מעסיק </Form.Label>
        //     <input type="text" id="filter-by-gamish" 
        //     // value={filter} onChange={(e)=> setFilter3(e.target.value)}
        //     /><br/>
            
        // </Form>
        
    )
}

export default WagesSection