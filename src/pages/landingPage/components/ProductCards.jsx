import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProductCart from "../../../components/productCard";

const ProductCards = ({ products }) => {
  console.log("product: ", products);
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products?.map((p) => {
          return (
            <GridItem key={p?.id}>
              <ProductCart product={p} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductCards;
