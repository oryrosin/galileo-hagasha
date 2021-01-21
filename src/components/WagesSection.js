import axios from "axios"
import { useEffect, useState } from "react"
import { Form, Row, Col, Button, Table } from "react-bootstrap"
import WageModel from "../Models/wageModel"
import './WagesSection.css'
import { FaFileExcel } from 'react-icons/fa';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



function WagesSection(props) {
    const [filter1, setFilter1] = useState("")
    const [filter2, setFilter2] = useState("")
    const [filter3, setFilter3] = useState("")
    const [filter4, setFilter4] = useState("")
    const [filter, setFilter] = useState("")
    const [wagesData, setWagesData] = useState(null)
    // axios get
    // filters by onChange
    // return table of members each is clickble for wages view
    useEffect(() => {
        async function getWagesData() {
            const res = await axios.get("https://api.airtable.com/v0/appivINepijXjwR9W/Table%203?api_key=keyk7ppRxdcVwPFzd");
            const wagesRows = res.data.records.map((row) => new WageModel(row.fields, row.id));
            setWagesData(wagesRows);
        }
        getWagesData();
    }, []);

    let wagesToShow;
    if (wagesData !== null) {
        wagesToShow = wagesData.map((wage) =>
            <tr>
                <td>{wage.fName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td>{wage.lName}</td>
                <td><FaFileExcel /></td>
                <td><FaFileExcel /></td>
                <td><FaFileExcel /></td>
            </tr>
        ); console.log(wagesData)
    }

    return (
        <>
            <h1>שכר ועונש</h1>
            <Form id="wage-section-form">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> התאגדות</Form.Label>
                    <Col sm={4}><Form.Control type="text"
                        value={filter} onChange={(e) => setFilter1(e.target.value)} /></Col>
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
                    <Col sm={3}></Col> 
                    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="galileo-data-4u"
                    sheet="tablexls"
                    buttonText="הורד כקובץ Excel" />
                </Form.Group>
                
            </Form>
            <div>
                <br />
                <Table responsive striped bordered hover variant="dark" id="table-to-xls">
                    <thead>
                        <tr>
                            <td>שם פרטי</td>
                            <td>שם משפחה</td>
                            <td> ת.ז</td>
                            <td>חודש</td>
                            <td>שנה</td>
                            <td>גמי"ש</td>
                            <td>ברוטו</td>
                            <td> נטו</td>
                            <td>עלות</td>
                            <td>ביטוח לאומי</td>
                            <td>פנסיה</td>
                            <td>אחוז משרה</td>
                            <td>דמי חבר</td>
                            <td>הצג תלוש</td>
                            <td>הצג תלוש</td>
                            <td>הצג תלוש</td>
                        </tr>
                    </thead>
                    <tbody> {wagesToShow} </tbody>
                </Table>
                <br />
                
            </div>
        </>


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