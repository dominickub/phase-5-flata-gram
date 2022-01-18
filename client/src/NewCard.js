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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useState} from 'react'

function NewCard({post,likes}) {

   const [like, setLike] = useState(false)

    function handleLike() {
        setLike(!like)
        
    }
        console.log(likes)
    
    return (
        <Card key={post.id}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="img"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={post.image_url}
                alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {post.caption}
                </Typography>
                <Typography>
                    {post.caption}
                </Typography>
            </CardContent>
            <CardActions>
                {like ? (
                    <Button onClick={handleLike} size="small"><ThumbUpIcon />{likes}</Button>
                ) : (
                    <Button onClick={handleLike} size="small">Like</Button>
                )}
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}

export default NewCard