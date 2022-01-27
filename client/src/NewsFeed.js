import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useState} from 'react'
import NewCard from './NewCard'
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function NewsFeed({handleUpdatePost, posts,currentUser, pictures, handleDeletePost,users}) {
  const [like, setLike] = useState(false)
 let caption = posts.map((post) =>post.caption)
 let picture = pictures.map((picture)=> console.log(picture.picture))
 let likes = posts.map((post) =>console.log(post.total_likes) )

 function handleLike() {
  setLike(!like)
  } 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              News Feed
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid id="grid" container spacing={1}>
            {posts.map((post) => (
              <NewCard  handleUpdatePost={handleUpdatePost} currentUser={currentUser} id={post.id} handleDeletePost={handleDeletePost} key={post.id} post={post} likes={post.total_likes}/>
              // <Grid item key={post} xs={12} sm={6} md={4}>
              //   <Card
              //     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              //   >
              //     <CardMedia
              //       component="img"
              //       sx={{
              //         // 16:9
              //         pt: '56.25%',
              //       }}
              //       image={post.picture}
              //       alt="random"
              //     />
              //     <CardContent sx={{ flexGrow: 1 }}>
              //       <Typography gutterBottom variant="h5" component="h2">
              //       {post.caption}
              //       </Typography>
              //       <Typography>
              //         {post.caption}
              //       </Typography>
              //     </CardContent>
              //     <CardActions>
              //     {like ? (
              //     <Button onClick={handleLike} size="small"><ThumbUpIcon />{post.caption}</Button>
              //     ) : (
              //     <Button onClick={handleLike} size="small">Like</Button>
              //     )}
              //       <Button size="small">Edit</Button>
              //     </CardActions>
              //   </Card>
              // </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}