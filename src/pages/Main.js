import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./Main.css";
import { Routes, Route, Link, BrowserRouter, Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";


function Main() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const key = process.env.REACT_APP_API_KEY;
    const type = location.state;
    const url = "https://api.nytimes.com/svc/books/v3/lists/current/" + type + ".json?api-key=" + key;

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBooks(response.data.results.books);
                console.log(response.data.results.books);
            })
    }, [url])

    
    return (
        <div>
            <p>Newyork Times Bestsellers</p>
            <ButtonBox>
                <button onClick={() => {
                    navigate("/main", {state: "hardcover-fiction"})
                }} className="review-book">Hardcover-Fiction</button>
                <button onClick={() => {
                    navigate("/main", {state: "hardcover-nonfiction"})
                }} className="review-book">Hardcover-Non Fiction</button>
                <button onClick={() => {
                    navigate("/main", {state: "paperback-nonfiction"})
                }} className="review-book">PaperBack-Non Fiction</button>
                

            </ButtonBox>
            <section>
                {books.map((book) => {
                    const { author, book_image, buy_links, description, publisher, rank, title } = book;
                    return (
                        <Box key={rank}>
                            <div>
                                <img src={book_image} alt={title} />
                            </div>

                            <div className="mainDiv">
                                <h1 className="title">{title}</h1>
                                <li className="disc">{description}</li>
                                <li className="author">Author: {author}</li>
                                <li className="publisher">Publisher: {publisher}</li>
                              <Link to="/main/review"><button className="review">Reviews</button></Link> 
                              
                            </div>

                           
                            <ul>
                                <li className="list-title">Buy Now</li>
                                {buy_links.map((link) => {
                                    const { name, url } = link;
                                    return (
                                        <div key={name}>
                                            <button><a className="aTag" href={url}>{name}</a></button>
                                        </div>
                                    );
                                })}
                            </ul>
                        </Box>
                    )


                })
                }
            </section>
        </div>
    )
}

const Box = styled.div`
    display: flex;
    color: #feeeee;
    margin: 20px 100px 20px 100px;
    border-radius: 20px;
    background-color: white;
    font-family: 'Source Sans Pro', sans-serif;
    color: #232946;
`;

const ButtonBox = styled.div`
    display: flex;
    margin: 8px 400px;
    align-content: center;
`;
export default Main;