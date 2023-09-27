import FlexBet from '@/components/flexBet'
import EightKIcon from '@mui/icons-material/EightK';
import { Box, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {

    const { palette } = useTheme()

    const [select, setSelect] = useState('dash control')

  return (
    <FlexBet
      mb='0.25rem'
      p='0.5rem 0rem'
      color={palette.grey[300]}
    >
      {/* left side */}
      <FlexBet
      gap='0.75rem'>
        <EightKIcon sx={{ fontSize: '29px' }} />
        <Typography
        variant='h4'
        fontSize='15px'>
            Financy Times
        </Typography>
      </FlexBet>

      {/* right side */}
      <FlexBet gap='2rem'>
        <Box
        sx={{ 
            "&:hover": { color: palette.primary[100] }
        }}
        >
         <Link
         to='/'
         onClick={() => setSelect('dash control')}
         style={{
            color: select === 'dash control' ? 'inherit' : palette.grey[700],
            textDecoration: 'inherit'
         }}
         >
           dash control
         </Link>
        </Box>

        <Box
        sx={{ 
            "&:hover": { color: palette.primary[100] }
        }}
        >
         <Link
         to='/prediction'
         onClick={() => setSelect('prediction')}
         style={{
            color: select === 'prediction' ? 'inherit' : palette.grey[700],
            textDecoration: 'inherit'
         }}
         >
           prediction
         </Link>
        </Box>
        <Box></Box>
      </FlexBet>
    </FlexBet>
  )
}

export default Navbar