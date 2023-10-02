import React from 'react'
import { Container, Typography, Box,CardMedia} from '@mui/material';
import Carousel from "react-material-ui-carousel";
import { forwardRef } from 'react';
import t1 from '../../assets/images/testimonials/t1.jpg';
import t2 from '../../assets/images/testimonials/t2.jpg';


const Testimonial = forwardRef((props, ref) => {
    const testimonials = [
        {
            name: 'John Doe',
            image: t1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nulla in lacus vestibulum convallis.Donec quis tellus eget ipsum blandit porttitor vel eget arcu." 
        },   
        {
            name: 'Jane Smith',
            image: t2,
            description: "Sed euismod orci vel nisi bibendum, eu convallis lacussemper. Duis consequat nulla vel nunc ullamcorper, eget fringilla elit pulvinar. Donec vel dignissim sapien." 
      
        },
    ]

    
  return (
    <div  ref={ref}>
    <section >
        <Container style={{flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <div style={{  marginBottom: '20px',marginTop: '10%'}}>
            <Typography variant='h4' gutterBottom>
                Testimonials
            </Typography>
            </div>
            <Carousel id="testimonial-slider" autoPlay>
                {testimonials.map((testimonials,index)=>(
                    <Box key={index}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image text-center'>
                            <CardMedia component="img" style={{height: "100px",objectFit: 'contain',paddingTop: '18px'}} image={testimonials.image} alt={testimonials.title}/>
                            </div>
                            <div >
                                <Typography variant='h5'>
                                    {testimonials.name}
                                </Typography>
                                <Typography variant='h5' >
                                    {testimonials.description}
                                </Typography>
                            </div>
                            </div>
                    </Box>
                ))
                }
            </Carousel>
        </Container>

    </section>
    </div>
  )
});

export default Testimonial;