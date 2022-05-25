import { FC } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
  cartCount: number;
}
const CartNavItemInner: FC<Props> = ({ cartCount }) => {
  return (
    <div style={{ position: 'relative' }}>
      <ShoppingCartIcon
        fontSize="small"
        sx={{ position: 'absolute', top: '1px', right: '17px' }}
      />
      <span style={{ marginLeft: '17px', fontWeight: '300' }}>
        &nbsp;({cartCount})
      </span>
    </div>
  );
};

export default CartNavItemInner;
