import React from 'react';
import { useState } from 'react';
import './user-dashboard.styles.scss';
import { Button, FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import axios from 'axios';

import { Dialog } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const UserDashboard = () => {

    const handleSubmit = () => {
        axios.post("http://localhost:4000/api/user/blog" , {
            title: title,
            message: message
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log("error is" , err);
        });
    }
    const [openPopup , setOpenPopup] = useState(false);
    const [title , setTitle] = useState('');
    const [message , setMessage] = useState('');

    return(
        <div className="dashboard-container">
            <div>
            <Button onClick={() => setOpenPopup(true)}>Add Blog</Button>
            <Dialog open={openPopup} className="dialog-container">
                <FormControl className="dialog-control">
                <Input type="text" name="title" placeholder="title" 
                    value={title} onChange={e => setTitle(e.target.value)}/>
                </FormControl>
                <FormControl className="dialog-control">
                    <TextareaAutosize rowsMin={5} placeholder="message" 
                     value={message} onChange={e => setMessage(e.target.value)} />
                </FormControl>
                <div className="custom-button">
                <Button type="submit" value="close" onClick={() => setOpenPopup(false)}>Close</Button>
                <Button type="submit" value="save" onClick={handleSubmit}>Save</Button>
                </div>
                </Dialog>
                </div>
        </div>
    );
}

export default UserDashboard;