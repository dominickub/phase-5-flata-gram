import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function PostUpload() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [caption, setCaption] = useState({
        caption: ""
    });

    console.log(caption)
    const imageUpload = useRef()
    
    const handleSubmit= e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('caption', caption)
        formData.append('picture', selectedImage)

        console.log(caption)

        fetch('/posts',{
            method: 'POST',
            body: formData
        })
    }
    const handleChange = (e) => {
        setCaption(e.target.value );
    };

    
    // function handleSubmit() {
    //     fetch("/post", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(caption,selectedImage),
    //       })
    //         .then((res) => res.json())
    //         .then((res) => {
    //         //   setSelectedImage(res.picture);
    //           setCaption(res.caption)
    //           console.log(res)
    //           // something to append to the UI the obj created
    //         })
    //     console.log('poop')
    // }

    return (
        <div>
            <h1 id='share'> Share Your Image</h1>
            {selectedImage && (
                <div>
                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <label className="custom-file-upload">
            <FontAwesomeIcon icon={faFileUpload} />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                    
                }}ref={imageUpload}
            />
            <br></br>
            <label for="fname">Caption</label>  <input type="text" id='caption'value={caption.caption} name="caption" onChange={handleChange} /> 
            </label>
            <FontAwesomeIcon onClick={handleSubmit} icon={faArrowCircleRight}  />
        </div>
        
    )
}

export default PostUpload

