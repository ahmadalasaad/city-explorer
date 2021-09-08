import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class CityMovie extends Component {
    render() {


        return (
            this.props.MoviesList.map(item => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt='' />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                overview: {item.overview}
                            </Card.Text>
                            <Card.Text>
                                vote_average: {item.vote_average}
                            </Card.Text>
                            <Card.Text>
                                vote_count: {item.vote_count}
                            </Card.Text>
                            <Card.Text>
                                popularity: {item.popularity}
                            </Card.Text>
                            <Card.Text>
                                release_date: {item.release_date}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        )
    }
}
export default CityMovie;