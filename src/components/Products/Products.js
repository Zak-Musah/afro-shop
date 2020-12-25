import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Products = ({ products, handleAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={product.media.source}
                title={product.name}
              />
              <CardContent>
                <div className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${product.price.formatted}
                  </Typography>
                </div>
                <Typography
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                />
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                  aria-label="Add to Cart"
                  onClick={() => handleAddToCart(product.id, 1)}
                >
                  <AddShoppingCart />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
