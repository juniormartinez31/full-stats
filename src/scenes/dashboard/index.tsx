import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const gridTemp = `
   'a b c'
   'a b c'
   'a b c'
   'a b f'
   'd e f'
   'd e f'
   'd h i'
   'g h i'
   'g h j'
   'g h j'
`

const gridTempSmall = `
'a'
'a'
'a'
'a'
'b'
'b'
'b'
'b'
'c'
'c'
'c'
'c'
'd'
'd'
'd'
'e'
'e'
'f'
'f'
'f'
'g'
'g'
'g'
'h'
'h'
'h'
'i'
'i'
'j'
'j'
`

const Dashcontrol = (props: Props) => {
   const isAboveMedium = useMediaQuery('(min-width: 1200px)')
    const { palette } = useTheme()
  return (
    <Box width='100%' height='100%' display='grid' gap='1.5rem'
    sx={
      isAboveMedium ? 
      {
      gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
      gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
     gridTemplateAreas: gridTemp
    } : {
      gridAutoColumns: '1fr',
      gridAutoRows: '80px',
      gridTemplateAreas: gridTempSmall,
    }
  }
    >
         <Box bgcolor='#e4d8d8' gridArea='a'></Box>
         <Box bgcolor='#e4d8d8' gridArea='b'></Box>
         <Box bgcolor='#e4d8d8' gridArea='c'></Box>
         <Box bgcolor='#e4d8d8' gridArea='d'></Box>
         <Box bgcolor='#e4d8d8' gridArea='e'></Box>
         <Box bgcolor='#e4d8d8' gridArea='f'></Box>
         <Box bgcolor='#e4d8d8' gridArea='g'></Box>
         <Box bgcolor='#e4d8d8' gridArea='h'></Box>
         <Box bgcolor='#e4d8d8' gridArea='i'></Box>
         <Box bgcolor='#e4d8d8' gridArea='j'></Box>
    </Box>
  )
}

export default Dashcontrol