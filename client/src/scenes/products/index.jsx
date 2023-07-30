import{ useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetProductsQuery } from "../../state/api";
import Modal from '@mui/material/Modal';
import React from 'react'
import InvModal from '../modals/inventory'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

// product is as an acronym for inventory
const Product = ({
  _id,
  name,
  price,
  volume,
  manufacturer,
  category,
  reorderLevel,
  measurement,
  currency,
  quantity,
  reorderCount,
  description,
  rating,
  supply,
  stat
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {currency || '$'} {Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Unit: {measurement || 'N/A'}</Typography>
          <Typography>Quantity: {quantity || 'N/A'}</Typography>
          <Typography>Reorder cont: {reorderCount || 'N/A'}</Typography>
          <Typography>Reorder Level: {reorderLevel || 'N/A'}</Typography>
          <Typography>Supplier: {manufacturer || 'N/A'}</Typography>
          <Typography>Category: {category || 'N/A'}</Typography>
          <Typography>Volume: {volume || 'N/A'}</Typography>
           <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Inventory" subtitle="See your list of items and products."/>
      <div className="mt-4">
        <Button variant="contained" startIcon={<AssignmentTurnedInIcon />} onClick={handleOpen} >
        Add an item
        </Button>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute',
                top: '50%',
                left: '86%',
                height: '92%',
                transform: 'translate(-50%, -50%)',
                width: 550,
                borderRadius:'10px 1px 1px 10px',
                bgcolor: 'background.paper',
                border: '1px solid #fff',
                boxShadow: 24,
                p: 4
            }}>
            <InvModal handleClose={handleClose}/>
          </Box>
          </Modal>
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              price,
              volume,
              manufacturer,
              category,
              reorderLevel,
              measurement,
              currency,
              quantity,
              reorderCount,
              description,
              rating,
              supply,
              stat
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                volume={volume}
                reorderLevel={reorderLevel}
                reorderCount={reorderCount}
                manufacturer={manufacturer}
                measurement={measurement}
                currency={currency}
                quantity={quantity}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
      </div>
    </Box>
  );
};

export default Products;
