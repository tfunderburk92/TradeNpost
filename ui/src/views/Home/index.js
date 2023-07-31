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
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [coords, setCoords] = useState(null)
  const [zoom, setZoom] = useState(4)
  const [reports, setReports] = useState(null)
  const [address, setAddress] = useState("")

  useEffect(() => {
    if (isUserLoggedIn()) {
      const fetchData = async () => {
        const user = await getMe()
        const coords = await getCoords(user.zipcode)
        console.log("coords: ", coords)
        console.log(
          (parseFloat(coords[0].boundingbox[0]) +
            parseFloat(coords[0].boundingbox[1])) /
            2,
        )
        console.log(coords[0].boundingbox)
        const lat =
          (parseFloat(coords[0].boundingbox[0]) +
            parseFloat(coords[0].boundingbox[1])) /
          2
        const lon =
          (parseFloat(coords[0].boundingbox[2]) +
            parseFloat(coords[0].boundingbox[3])) /
          2
        setCoords([lat, lon])
        setZoom(11)
        const county = coords[0].display_name.split(",")[1]
        console.log("county: ", county)
        // const reports = await getReportsByCounty(county)
      }
      fetchData()
    }
  }, [])

  const handleBoundsChanged = (e) => {
    setCoords(e.center)
    setZoom(e.zoom)
  }
  const handleSearch = async () => {
    const location = await getLocationByAddress(address)
    console.log("location:", location)
    const getCounty = (locationArray, index = 0) => {
      if (locationArray[index] === undefined) {
        console.error("No County found")
        return ""
      }
      // check if the location is in format city, county, state, country
      if (locationArray[index].display_name.split(",").length !== 4) {
        return getCounty(locationArray, index + 1)
      }
      // set new map coords
      setCoords([locationArray[index].lat, locationArray[index].lon])
      // return the county
      return locationArray[index].display_name.split(",")[1]
    }

    const county = getCounty(location)
    console.log(county)
    const foundReports = await getReportsByCounty(county)
    console.log("foundReports: ", foundReports)
    setReports(foundReports)
  }

  console.log("coords state: ", coords)

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
