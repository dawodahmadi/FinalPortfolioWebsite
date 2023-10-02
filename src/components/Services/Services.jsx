import { Card, Container, Grid, Typography, CardContent, CardMedia  } from '@mui/material';
import React from 'react'
import { forwardRef } from 'react';
import s4 from  '../../assets/images/services/s4.png';
import s2 from '../../assets/images/services/s2.png';
import s3 from '../../assets/images/services/s3.png';
const Services = forwardRef((props, ref) => {
    const service = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Our SEO services will help you rank higher on search engine results pages and drive more traffic to your website.",
            image: s4,
       },
        {
            title: "Social Media Marketing", 
            description: "We can help you create and execute a social media strategy that engages your audience and drives conversions.",
            image: s2,
        },
        {
            title: "Email Marketing", 
            description: "Our email marketing campaigns are designed to help you nurture leads and build lasting relationships with your customers.",
            image: s3
        },
    ];
    return (
        <div  ref={ref}>
        <section id='service-section' className='services-section bg-light'>
            <Container>
            <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '10%'}}>      
                <Typography variant='h4' gutterBottom>
                    Our Services
                </Typography>
                </div>
                <Grid container spacing={3}>
                    {service.map((service, index)=>(
                        <Grid item xs={12} md={4} key={index}>
                            <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardMedia component="img" style={{height: "100px",objectFit: 'contain',paddingTop: '18px', marginTop: '15px'}} image={service.image} alt={service.title}/>
                                <CardContent>                 
                                    <Typography variant='h5' style={{marginTop: '15px'}} component="div">
                                        {service.title}
                                    </Typography>
                                    <Typography variant='body2'  style={{marginTop: '15px'}} color="text-secondary">
                                        {service.description}
                                    </Typography>
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

export default Services