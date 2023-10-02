import React from 'react'
import { Container, Grid, Typography, Button } from '@mui/material';
import { forwardRef } from 'react';
import John from '../../assets/images/banner/shutterstock_457517419.jpg';
import DawodAhmadiCV from '../../assets/cv/DawodAhmadiCV.pdf';

const About = forwardRef((props, ref) => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = DawodAhmadiCV;
        link.download = 'DawodAhmadiCV.pdf';
        link.click();
    };
    const handleHireMeClick = () => {
        alert('Congratulations! You are hired.');
      };

    return (
        <div ref={ref}>
            <section id='about-section' className='about-section'>
                <Container>
                    <Grid Container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <Typography variant='h4' gutterBottom style={{ marginTop: '10%', fontWeight: 'bold' }}>
                                About me
                            </Typography>
                            <Typography paragraph>
                                Hi, my name is Dawod Ahmadi and I am a digital marketing expert
                                with over 5 years of experience. I have worked with a variety of
                                clients from different industries, helping them grow their
                                businesses through effective digital marketing strategies. My
                                areas of expertise include SEO, social media marketing, email
                                marketing, and content marketing.
                            </Typography>
                            <Typography>
                                When I'm not working, I enjoy hiking, playing basketball, and
                                reading books about entrepreneurship.
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={John} alt="Picture of John Doe" style={{ width: '600px', height: '300px', marginTop: '15px' }} />
                            <div className='site-buttons'>
                                <div className='d-flex flex-row flex-wrap'>
                                    <Button style={{marginRight: "10px"}}
                                        variant='contained'
                                        color='primary'
                                        className='mr-4'
                                        size='large'
                                        onClick={handleHireMeClick} 
                                    >
                                        Hire Me
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        className='mr-4'
                                        size='large'
                                        onClick={downloadCV} // Call the downloadCV function when the button is clicked
                                    >
                                        Get CV
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
});

export default About