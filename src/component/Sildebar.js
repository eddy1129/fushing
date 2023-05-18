import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react"  //React Hook



function Sildebar() {
    let [input, setInput] = useState('')

    useEffect(() => {
        if (input.length > 4)
            console.log('字串夠長')
        else
            console.log('字串太短')
    }, [input])
    return (
        <Nav defaultActiveKey="/home" className="flex-column" >

            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">搜尋產品</InputGroup.Text>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={e => setInput(e.target.value)}
                />
            </InputGroup>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
    );
}

export default Sildebar;