import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { forwardRef } from 'react';
const Contact = forwardRef((props, ref) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
    
    };
    return (
        <div ref={ref}>
            <section>
                <Container style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ marginBottom: '20px', marginTop: '10%' }}>
                        <Typography variant='h4' gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                            Contact Us
                        </Typography>
                    </div>
                    <Typography>
                        Interested in learning more about our digital marketing services? Get in touch with us today!
                    </Typography>
                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    variant='outlined'
                                    placeholder='Enter your name'
                                    style={{ marginBottom: '16px', marginTop: '12px' }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Email"
                                    variant='outlined'
                                    placeholder='Enter your email'
                                    style={{ marginBottom: '16px' }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Phone"
                                    variant='outlined'
                                    placeholder='Enter your phone'
                                    style={{ marginBottom: '16px' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Message"
                                    variant='outlined'
                                    multiline
                                    rows={7}
                                    placeholder='Enter your message'
                                    style={{ marginBottom: '16px', marginTop: '12px' }}
                                />
                            </Grid>
                        </Grid>
                        <Button type='submit' variant='contained'  style={{display: 'flex', justifyContent: 'right'}}>
                            Submit
                        </Button>
                    </form>
                </Container>
            </section>
        </div>
    )
});

export default Contact