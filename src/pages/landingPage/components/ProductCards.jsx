import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProductCart from "../../../components/productCard";

const ProductCards = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
        <GridItem>
          <ProductCart />
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductCards;
