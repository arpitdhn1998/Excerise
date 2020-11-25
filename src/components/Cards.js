import React from 'react'

import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import LineCharts from "./LineCharts"
import Barchart from "./Barchart"
import Doughnut from "./Doghnut"

const Cards = () => {
    return (
        <>
            <div className="row mycard">

                <div className="col-4 md-4  ">
                    <Card style={{ width: '18rem', height: "13.5rem" }}>
                        <Card.Body>
                            <Card.Title>Author Sales</Card.Title>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 md-4">
                    <Card style={{ width: '18rem', height: "13.5rem" }}>
                        <Card.Body>
                            <Card.Title>Technologies</Card.Title>

                            <Doughnut />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 md-4">
                    <Card style={{ width: '18rem', height: "13.5rem" }}>
                        <Card.Body>
                            <Card.Title>Total Orders</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                            <LineCharts />
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row mycard">

                <div className="col-4 md-4  ">
                    <Card style={{ width: '18rem', height: "13.5rem" }}>
                        <Card.Body>
                            <Card.Title>ANNOUNCEMENTS</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Incredibly Positive Reviews</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 md-4">
                    <Card style={{ width: '18rem', height: "13.5rem" }}>
                        <Card.Body>
                            <Card.Title>PROJECTS</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">First Milestone Achivement</Card.Subtitle>
                            <Card.Text>
                                To start a blog,think of a topic about and first brainstorm party is
                                a way to write details
                    </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 md-4">
                    <Card style={{ width: '18rem', height: "13.5rem" }}>
                        <Card.Body>
                            <Card.Title>TODAY'S SCHEDULE</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">UI/UX Design Updates</Card.Subtitle>
                            <Card.Text style={{ fontWeight: "25px", color: "blue" }}>
                                11:15AM-12:30PM
                            </Card.Text>
                            <Card.Subtitle className="mt-5 text-muted">245 R St.Manhattan NY</Card.Subtitle>


                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row mycard">

                <div className="col-4 md-4  ">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>TOP'S PRODUCTS</Card.Title>
                            <hr />
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                            <ul style={{ listStyle: "none" }}>
                                <li>HTML5 Templates         +79%
                                <Card.Subtitle className="mb-2 text-muted">Front-End Admin and Email</Card.Subtitle>
                                </li>
                                <li>Wordpress Themes         -27% </li>
                                <Card.Subtitle className="mb-2 text-muted">eCommerce Website,Plugin</Card.Subtitle>
                                <li>eCommerce Websites         -27% </li>
                                <Card.Subtitle className="mb-2 text-muted">Shops,Fashion sites,$otp </Card.Subtitle>
                                <li>UI/UX Design               +34%</li>
                                <Card.Subtitle className="mb-2 text-muted">Everything your never imagine </Card.Subtitle>

                                <li>Frobio Themes              +34%</li>
                                <Card.Subtitle className="mb-2 text-muted">Front-End Admin </Card.Subtitle>
                            </ul>


                        </Card.Body>
                    </Card>
                </div>
                <div className="col-8 md-8">
                    <Card style={{ width: "39rem" }}>
                        <Card.Body>
                            <Card.Title>SALES'S STATISTICS</Card.Title>
                            <hr />
                            <Barchart />

                        </Card.Body>
                    </Card>
                </div>

            </div>
        </>
    )
}

export default Cards