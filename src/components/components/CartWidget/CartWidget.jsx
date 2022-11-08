import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return(
        <IconButton aria-label="cart">
        <Badge badgeContent={4} color="success">
            <ShoppingCartIcon/>
        </Badge>
        </IconButton>
    );
}

export default CartWidget;