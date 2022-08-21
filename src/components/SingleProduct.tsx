import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Product } from "../types/products"

function SingleProduct({id, images, title, description, price, category}: Product) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
      <Card sx={{height: '100%', background: '#faf9f9', margin: '5px'}}>
        <CardMedia
          component={'img'}
          // image={product.images[0]}
          image={images[0]}
          alt={description}
          title={title}
          sx={{height: 190}}   
        />
        <CardContent sx={{paddingBottom: '0'}}>
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 'bold' }}
            component='text'
          >
            {title}
          </Typography>
          <Typography 
            variant='body2'
          >
            Price: {price} €
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='text' endIcon
          >Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SingleProduct