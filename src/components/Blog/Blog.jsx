import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import { forwardRef } from 'react';
import b5 from '../../assets/images/Portfolio/b5.jpg'
import b6 from '../../assets/images/Portfolio/b6.jpg'
import b7 from '../../assets/images/Portfolio/b7.jpg'

const Blog = forwardRef((props, ref) => {
    const [newsData, setNewsData] = useState(null);
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const formattedDate = currentDate.toLocaleString(undefined, options);
    const blogPost = [
        {
            title: "Email Marketing",
            image: b5,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac aliquet lorem. Donec in malesuada neque, id feugiat odio.",
            date: formattedDate

        },
        {
            title: "Social Media",
            image: b6,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac aliquet lorem. Donec in malesuada neque, id feugiat odio.",
            date: formattedDate
        },
        {
            title: "Search Engine Optimization",
            image: b7,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac aliquet lorem. Donec in malesuada neque, id feugiat odio.",
            date: formattedDate
        },
    ]
    const handleReadMoreClick = async () => {
        const apiKey = '7ea84f891b714618816036df255132ef';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setNewsData(data.articles);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };
    return (
        <div ref={ref}>
            <section >
                <Container>
                    <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10%' }}>
                        <Typography variant='h3' gutterBottom>
                            Blog
                        </Typography>
                    </div>
                    <Grid container spacing={2} justifyContent="space-around">
                        {blogPost.map((post, index) => (
                            <Grid item key={index} md={4} xs={12} sm={6} >
                                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia component="img" style={{ objectFit: 'contain' }} image={post.image} alt='{post.title}' />
                                    <CardContent>
                                        <Typography variant='h5' style={{ fontWeight: 'bold', marginBottom: '10px' }} component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant='h6' style={{ marginBottom: '15px' }} component="div">
                                            {post.content}
                                        </Typography>
                                        <Button variant='contained' style={{ marginBottom: '20px' }} color='primary' onClick={handleReadMoreClick}>
                                            Read More
                                            <ArrowForwardIcon />
                                        </Button>

                                        {/* Display news articles */}
                                        {newsData && (
                                            <div>
                                                <h2>Latest Blogs</h2>
                                                {newsData.map((article, index) => (
                                                    <div key={index}>
                                                        <h3>{article.title}</h3>
                                                        <p>{article.description}</p>
                                                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                                                            Read more
                                                        </a>
                                                        <hr />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                    <hr style={{ marginLeft: '10px', marginRight: '10px' }} />
                                    <div style={{ margin: '10px' }}>
                                        Posted on {post.date} by Dawod Ahmadi
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </div>
    )
});

export default Blog