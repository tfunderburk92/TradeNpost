import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListingDetail() {

    // This useParams allows us to get the ID from the URL
    // And then we use that ID to grab the listing that we want to display the details of
    const { id } = useParams();
    const [listing, setListing] = useState(null)

    // This is for the expandable card
    const [expanded, setExpanded] = React.useState(false);

    // Also for the expendable card
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  // This useEffect tries to load our specific listing on page load
    useEffect(() => {
        const fetchListingDetails = async () => {
          const response = await fetch(`http://localhost:9000/listings/${id}`);
          const data = await response.json();
          console.log('data', data)
          setListing(data);
        }
    
        fetchListingDetails();
      }, [id])


  // If listing is undefined, we return loading
  if(!listing) {
    return <div>Loading...</div>
  }

  // Otherwise we return the JSX for the component
  return (



    <div className="listing-detail-container">
    <Card>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={listing.itemName}
      subheader={`Created at: ${listing.created_at}`}
    />
    <CardMedia
      component="img"
      height="194"
      image={listing.imageURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {listing.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Expiry date: {listing.expiryDate}</Typography>
        <Typography paragraph>Full Name: {listing.firstName} {listing.lastName}</Typography>
            <Typography paragraph><a href={`mailto:${listing.email}`} >{ listing.email} </a></Typography>
      </CardContent>
    </Collapse>
  </Card>
  </div>

    
  )
}
