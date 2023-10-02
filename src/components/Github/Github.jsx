import { useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Github/Loader";
import { forwardRef } from 'react';
import { TextField } from "@material-ui/core";
import { Container, Grid, Typography, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Avatar, Card, CardContent } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Github = forwardRef((props, ref) =>  {
  const [input, setInput] = useState("")
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false)
  const [totalItemCount, setTotalItemCount] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  //! SEARCH USER FUNCTION
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      axios.get(`https://api.github.com/search/users?q=${input}`).then(res => { setUserSearch(res.data.items); setTotalItemCount(res.data) })
      setLoading(false)
      console.log(userSearch);
    }, 1200);
  }

  //! CHANGE PAGINATION SEARCH USER
  const handlePageClick = (event, newPage) => {
    setCurrentPage(newPage);
    fetchData(newPage);
  };

  const fetchData = (page) => {
    axios.get(`https://api.github.com/search/users?q=${input}&page=${page}`)
      .then(res => setUserSearch(res.data.items))
      .catch(error => console.error(error));
  };
  const scrollToProfile = (login) => {
    const profileSection = document.getElementById(login);
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div ref={ref}>
       <Container style={{ height: '100vh' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Search GitHub Profile
          </Typography>
          <form onSubmit={onSubmitHandler}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={8} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                    setUserSearch([]);
                  }}
                  placeholder="Search"
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
    
      {/* Pagination Bar */}
      <Grid container justifyContent="center">
      <Grid item xs={12} md={6} >
        <div className="pagination text-center" style={{marginBottom: '15%'}}>
          {userSearch.length ? (
            <div>
              {/* Render your user data here */}
              {/* <ul>
                {userSearch.map(user => (
                  <li key={user.id}>{user.login}</li>
                ))}
              </ul> */}
              <Pagination
                count={10}
                color="primary"
                shape="rounded"
                page={currentPage}
                onChange={handlePageClick}
              />
            </div>
          ) : (
            'No users found'
          )}
        </div>
      </Grid>
    </Grid>
      {/* USER LIST CONTAINER*/}
      <Grid container spacing={2} justifyContent="center">
      {/* USER LIST */}
      {loading ? (
        <Loader />
      ) : (
        userSearch.map(user => (
          <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
            {/* USER CARD */}
            <Card className="card card-bordered border-white flex flex-col items-center pt-5 bg-slate-800">
              {/* CARD AVATAR */}
              <div className="avatar flex items-center justify-center">
                <Avatar alt="avatar" src={user.avatar_url} sx={{ width: 140, height: 140 }} />
              </div>
              {/* CARD BODY */}
              <CardContent className="card-body flex flex-col items-center">
                <Typography variant="h5" component="div">
                  {user.login}
                </Typography>
                <div className="flex items-center my-2">
                  <Typography variant="subtitle1">{user.location}</Typography>
                </div>
                <div className="flex items-center mb-2">
                  <a href={user.blog} target="_blank" rel="noopener noreferrer">
                    {user.blog}
                  </a>
                </div>
                <div>
                  <Button variant="outlined" startIcon={<BsGithub className="mr-2 text-lg" />}>
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
    </div>
  );
});

export default Github ;