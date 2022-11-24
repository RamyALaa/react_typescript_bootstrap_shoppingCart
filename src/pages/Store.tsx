import storeItems from "../data/items.json"
import {Row, Col } from "react-bootstrap"
import StoreItem from "../components/StoreItem";
const Store = () => {
    return ( <>
    <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map(item => (
            <Col><StoreItem {...item}/></Col>
        ))}
        
    </Row>
    </> );
}
 
export default Store;