import { Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/Flexbetween';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Navbar = () => {
  const { palette } = useTheme();

  return (
    <FlexBetween mb="0.25rem" p="1rem 0rem" color={palette.grey[900]}>
      <FlexBetween gap="0.75rem">
        <CurrencyExchangeIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px" color={palette.grey[900]}>
          Investments Calculation
        </Typography>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar