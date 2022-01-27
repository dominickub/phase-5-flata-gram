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
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


function NewCard({post,likes,id,handleDeletePost,currentUser,users,handleUpdatePost}) {
    const [edit, setEdit] = useState(false)
    
    const [caption, setCaption] = useState({
        caption: ""
    });
    console.log(caption)

    function handleDeleteClick(e) {
        e.preventDefault()
    
        fetch(`/posts/${post.id}`, {
          method: "DELETE",
            // body: JSON.stringify({post_id: post.id})
        })
        //   .then((r => r.json()))
        //   .then(data => handleDeletePost(data));
     
        handleDeletePost(post.id);
      }
    
      const handleUpdateClick= e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('caption', caption)


        console.log(caption)

        fetch(`/posts/${id}`,{
            method: 'PATCH',
            body: formData
        },window.location.reload()
        )}
        
        const handleUpdateCaption = (e) => {
            setCaption(e.target.value );
        

    }
    function handleEdit() {
        setEdit(!edit)
    }
    const editForm = () => {
        if (edit === false) {
            return (
                null
            )
        } else {
            return (
                <label>
                    <input id='edit' onChange={handleUpdateCaption} type="text"></input>
                    <FontAwesomeIcon onClick={handleUpdateClick} id='editSubmit' icon={faEdit} />
                </label>
            )
        }
    }
    //   function deleteButton() {
    //     if (post.user_id == currentUser.id)
    //       <IconButton onClick={handleDeleteClick} aria-label="delete" size="large">
    //         <DeleteIcon />
    //       </IconButton>
    //   }

   const [like, setLike] = useState(false)

    function handleLike() {
        setLike(!like)
        
    }
        console.log(post.total_likes)
    
    return (
        <Card id="card"key={post.id}
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', position:"center"}}
            >
            <typography id="username">
                {post.user.username}
            </typography>
            <CardMedia
                component="img"
                sx={{
                    spacing:"1%",
                    // pt:56.25%
                    pt: '1.25%',
                }}
                image={post.image_url}
                alt="random"
            />
            
            <CardActions>{post.total_likes}
                {like ? (
                    <Button onClick={handleLike} size="small"><ThumbUpIcon /></Button>
                ) : (
                    <Button onClick={handleLike} size="small">Like</Button>
                )}
                
                { (post.user_id == currentUser.id)?
                    <IconButton onClick={handleEdit} aria-label="delete" size="large" >
                        <EditIcon />
                    </IconButton>:""  
                }
                { (post.user_id == currentUser.id)?
                    <IconButton onClick={handleDeleteClick} aria-label="delete" size="large">
                        <DeleteIcon />
                    </IconButton>:""  
                }
                {editForm()}
            </CardActions>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" id="caption">
                    {post.caption}
                </Typography>
                {/* <Typography id="comments">
                    {post.caption}
                </Typography> */}
            </CardContent>
        </Card>
    )
}

export default NewCard