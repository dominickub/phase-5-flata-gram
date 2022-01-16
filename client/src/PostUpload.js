import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function PostUpload() {
    const [selectedImage, setSelectedImage] = useState(null)

    function handleSubmit() {
        console.log('poop')
    }
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
                }}
            />
            <br></br>
            <label for="fname">Caption</label>  <input type="text" id='caption' /> 
            </label>
            <FontAwesomeIcon onClick={handleSubmit} icon={faArrowCircleRight}  />
        </div>
        
    )
}

export default PostUpload

