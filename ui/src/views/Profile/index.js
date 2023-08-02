import React, {useEffect, useState} from 'react'

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
import ava from '../../images/avatar.jpg'


export default function Profile() {

  // State to store the data in
  const [items, setItems] = React.useState([]);
  const [offers, setOffers] = React.useState([]);

  //  loads all items when the page is loaded
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:9000/items');
      const data = await response.json();
      setItems(data);
    }

    fetchItems();
  }, [])


    // Loads all offers when page is loaded
    useEffect(() => {
      const fetchOffers = async () => {
        const response = await fetch('http://localhost:9000/offers');
        const data = await response.json();
        setOffers(data);
      }
  
      fetchOffers();
    }, [])
  


    return (
      <div className="parent-profile-container">



<Tooltip title="Account settings">
<IconButton color="secondary" className="profile-link-btn">
  <ManageIcon />
          </IconButton>
          </Tooltip>


            <div className="profile-title-container">
                <div className="profile-inventory-title"><h1>My Inventory</h1></div>
                <div className="profile-pic-container"><img className="avatar-img" src={ava} /></div>
</div>
            
            
    <div className="profile-container">

                <div className="">
                   

  <Paper elevation={3}>


              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {/* iterate over our items array and displays each item */}
                {items.map(item => (
                  <ListItemButton>


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
