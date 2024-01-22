import {Box, Typography, useTheme} from '@mui/material';
import FlexBetween from './Flexbetween';

type Props = {
  title: string;
  subtitle?: string;
  sidetext?: string;
  icon?: React.ReactNode;
}

const BoxHeader = ({icon, title, subtitle, sidetext}: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[900]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%" ml='4rem'>
          <Typography variant='h4' mb='-0.1rem' fontSize="18px" color={palette.grey[900]}>{title}</Typography>
          <Typography variant='h6' fontSize="14px">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant='h5' fontWeight="700" color={palette.secondary[500]}>
        {sidetext}
      </Typography>
    </FlexBetween>
  )
}

export default BoxHeader