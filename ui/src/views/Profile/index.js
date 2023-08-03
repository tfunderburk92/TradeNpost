import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Tooltip ,
  TextField,
  Avatar, Paper} from '@mui/material';
  import ImageIcon from '@mui/icons-material/Image';
  import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ManageIcon from '@mui/icons-material/ManageAccounts';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {getUsername, getUser} from '../../utility/utils'
import ava from '../../images/avatar.jpg'

export default function Profile() {

  // State to store the data in
  const [items, setItems] = React.useState([]);
  const [offers, setOffers] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const userId = getUser() // 10
  const username = getUsername()
  console.log('username', username)

  //  loads all items when the page is loaded
  useEffect(() => {

    if(!userId) return

    const fetchItems = async () => {
      console.log('Hello')


      const url = search ? `http://localhost:9000/items/search/${userId}/${search}` : `http://localhost:9000/items/get-items/${userId}`
      // const response = await fetch(`http://localhost:9000/items/get-items/${userId}`); // http://localhost:9000/get-items/10
      const response = await fetch(url);
      const data = await response.json();
      console.log('data', data)
      setItems(data);
    }

    fetchItems();
  }, [userId, search])


    // Loads all offers when page is loaded
    useEffect(() => {
      const fetchOffers = async () => {
        const response = await fetch('http://localhost:9000/offers');
        const data = await response.json();
        setOffers(data);
      }
  
      fetchOffers();
    }, [])
  


    const handleSearchChange = (e) => {
      setSearch(e.target.value)
    } 


    return (
      <div className="parent-profile-container">



<Tooltip title="Account settings">
<IconButton color="secondary" className="profile-link-btn">
  <ManageIcon />
          </IconButton>
          </Tooltip>


            <div className="profile-title-container">
                <div className="profile-inventory-title"><h1>My Inventory</h1></div>
          <div className="profile-pic-container">
            <img className="avatar-img" src={ava} />
            <h1>Username: {username}</h1>
          </div>
</div>
            
            
    <div className="profile-container">

                <div className="">
                   




            <div className="search-inventory-container">

            <TextField onChange={handleSearchChange} label="Search my inventory" variant="outlined" />


            <Tooltip title="Add Item">
         <Link to="/item">
<IconButton color="secondary">
  <AddCircleOutlineIcon />
          </IconButton>
          </Link> 
        </Tooltip>  


            </div>
            


  <Paper elevation={3}>


              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {/* iterate over our items array and displays each item */}
                {items.map(item => (
                  <ListItemButton key={item.itemId}>


<ListItemAvatar>
          <Avatar src={item.imageURL} />
        </ListItemAvatar>

                    <ListItemText primary={item.itemName} secondary={ item.description} />
            </ListItemButton>
            
          ))}
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
                {/* iterates over our offers array and display each item */}
                {offers.map(offer => (
                  <ListItemButton>
                    <ListItemText primary={offer.offerDate} secondary={ offer.offerMessage} />
            </ListItemButton>
            
          ))}
          </List>



              

  </Paper>

        </div>
          
    </div>

    </div>
  )
}
