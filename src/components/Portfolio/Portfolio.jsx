import React from 'react'
import { Container,Typography,Card, CardContent, CardMedia,Button,Grid} from '@mui/material'
import { forwardRef } from 'react';
import b2 from '../../assets/images/Portfolio/b2.jpg'
import b3 from '../../assets/images/Portfolio/b3.jpg'
import b4 from '../../assets/images/Portfolio/b4.jpg'
const Portfolio = forwardRef((props, ref) => {
  return (
    <div  ref={ref}>
        <section id='portfolio-section' className='portfolio-section'> 
        <Container id="portfolio-container">
            <div style={{ textAlign: 'center', marginBottom: '20px',marginTop: '60px'}}>
            <Typography variant='h4' gutterBottom style={{marginTop: '10%' }} >
                Portfolio
            </Typography>
            </div>
            <Grid container spacing={2}>
                {[
                    {
                        title: 'Social Media', image: b2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        title: 'Email Marketing', image: b3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        title: 'Search Engine Optimization', image: b4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },

                ].map((item,index)=>(
                    <Grid item md={4} key={index} className='animated animate__fadeInUp animate__delay-0.5s'>
                        <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <CardMedia component="img" style={{objectFit: 'contain'}} image={item.image} alt={item.title}/>
                            <CardContent>
                                <Typography variant='h5' component="div" className='text-center'>
                                    {item.title}
                                </Typography>
                                <Typography variant='body2' color="text.secondary" className='text-center'>
                                    {item.description}
                                </Typography>
                                <div className='text-center mt-2'>
                                    <Button variant="contained" color='primary'>
                                        Learn More
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>
        </Container>
        </section>
    </div>
  )
});

export default Portfolio