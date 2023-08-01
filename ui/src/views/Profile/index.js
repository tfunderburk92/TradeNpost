import React from 'react'

import {List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Tooltip ,
  Avatar, Paper} from '@mui/material';
  import ImageIcon from '@mui/icons-material/Image';
  import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ManageIcon from '@mui/icons-material/ManageAccounts';

export default function index() {
    return (
      <div className="parent-profile-container">



<Tooltip title="Account settings">
<IconButton color="secondary" className="profile-link-btn">
  <ManageIcon />
          </IconButton>
          </Tooltip>


            <div className="profile-title-container">
                <div className="profile-inventory-title"><h1>My Inventory</h1></div>
                <div className="profile-pic-container"><img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/85/85e8bc6526fe108e8001e137c4ce2fd95dc1153b_full.jpg" /></div>
</div>
            
            
    <div className="profile-container">

                <div className="">
                   

  <Paper elevation={3}>


          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Image" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Description" secondary="Unopened Box Iphone 14 Promax" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="Charleston,SC 29401" />
      </ListItemButton>
    </List>

            </Paper>

            
        </div>

        <div className="grid-empty">
                   
        </div>

        <div className="grid-empty">
        </div>

        <div className="profile-item-four">

            
              <h1>Interests</h1>

        <Paper elevation={3}>

<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
<ListItemButton>
<ListItemAvatar>
<Avatar>
  <ImageIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Image" />
</ListItemButton>
<ListItemButton>
<ListItemAvatar>
<Avatar>
  <WorkIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Description" secondary="Unopened Box Iphone 14 Promax" />
</ListItemButton>
<ListItemButton>
<ListItemAvatar>
<Avatar>
  <BeachAccessIcon />
</Avatar>
</ListItemAvatar>
<ListItemText primary="Location" secondary="Charleston,SC 29401" />
</ListItemButton>
</List>

  </Paper>

        </div>
          
    </div>

    </div>
  )
}
