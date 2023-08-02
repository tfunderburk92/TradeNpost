import { isUserLoggedIn } from "../../utility/utils"
import { useEffect, useState } from "react"
import {
  getMe,
  getCoords,
  getReportsByCounty,
  getLocationByAddress,
} from "../../utility/api"
import { TextField, Button, Paper  } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function Home(props) {




  return (
    <Paper>


<div className="search-container"> 
<TextField id="outlined-basic" label="Search" variant="outlined" placeholder="Keyword" />
  </div>



<div className="home-container">

        <div className="home-left">

          <div>
            <h1 className="typography">"Trade what<br/>you have for<br/>what you want"</h1>
          </div>
          <div><h1 className="typography xl2">"Your money<br/>is no good<br/>here"</h1></div>

        </div>
        <div className="home-right">
          <h2>Popular Posts</h2>

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
      

      {/* <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={handleSearch}
      />
      <Map
        height={600}
        center={!coords ? [39.5, -98.35] : coords}
        zoom={zoom}
        onBoundsChanged={(e) => handleBoundsChanged(e)}
      >
        {!reports ? null : reports.map((report) => {
          console.log("report: ", report)
          return (
            <Marker width={50} anchor={[report.lat, report.lon]} />
          )
        })}
        <Marker width={50} anchor={[32.7765, -79.9311]} />
        <ZoomControl />
      </Map> */}
    </Paper>
  )
}

export default Home
