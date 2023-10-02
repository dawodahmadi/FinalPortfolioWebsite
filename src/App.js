import React, { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../src/assets/images/b1.jpg';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Github from './components/Github/Github';
import { Link as ScrollLink } from 'react-scroll';
import Footer from './components/Footer/Footer';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);
  const githubRef = useRef(null);

  const scrollToComponent = (ref) => {
    const offsetTop = ref?.current?.offsetTop;
    if (offsetTop !== undefined) {
      scroll.scrollTo(offsetTop, {
        duration: 800,
        smooth: true,
        offset: -60, 
      });
    }
  };

  const styles = {
    appBar: {
      backgroundColor: 'white',
      transition: 'background-color 0.3s ease',
    },
    button: {
      color: 'black',
    },
  };

  return (
    <div className="App">
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt='Logo' height="60" />
          </Typography>
          <Link onClick={() => scrollToComponent(aboutRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>About</Button>
          </Link>
          <Link onClick={() => scrollToComponent(servicesRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>Service</Button>
          </Link>
          <Link onClick={() => scrollToComponent(portfolioRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>Portfolio</Button>
          </Link>
          <Link onClick={() => scrollToComponent(blogRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>Blog</Button>
          </Link>
          <Link onClick={() => scrollToComponent(testimonialRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>Testimonials</Button>
          </Link>
          <Link onClick={() => scrollToComponent(contactRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>Contact</Button>
          </Link>
          {/* <Link onClick={() => scrollToComponent(githubRef)} smooth={true} duration={500}>
            <Button color="inherit" sx={styles.button}>Github</Button>
          </Link> */}
         
      <ScrollLink to="githubRef" smooth duration={500} onClick={scrollToComponent}>
        <Button color="inherit"  sx={styles.button} >Github</Button>
      </ScrollLink>
        </Toolbar>
      </AppBar>

      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
      <Services ref={servicesRef} />
      <Blog ref={blogRef} />
      <Testimonials ref={testimonialRef}/>
      <Contact ref={contactRef} />
      <Github ref={githubRef}/>
    <Footer/>
    </div>
    
  );
}

export default App;
