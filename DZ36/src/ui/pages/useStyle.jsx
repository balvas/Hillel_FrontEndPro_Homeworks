import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
   container: {
      width: '100%',
      margin: '0 auto',
      maxЦidth: '75%',
      backgroundСolor: '#fff',
      padding: '10px'
   },

   formStyle: {
      background: '#fff',
      padding: 10,
      marginTop: 25,
      marginBottom: 25,
      display: 'flex',
      justifyContent: 'center',
   },

   formInput: {
      minHeight: 25,
      padding: 10,
      border: '1px solid',
      width: '100%',
   },

   formDiv: {
      width: '100% !important',
      display: 'block',
   },

   form__edit: {
      minHeight: 25,
      padding: 10,
      width: '89%',
      border: '1px solid #66deb2'
   },

   form__btn: {
      background: '#0be69d',
      border: 'none',
      cursor: 'pointer',
      width: 100
   },

   header: {
      marginTop: 20,
      padding: 10,
      display: 'flex',
      justifyContent: 'center'
   },

   footer: {
      marginTop: [20, 'auto', 20],
      padding: 10,
      display: 'flex',
      justifyContent: 'center'

   },

   headerLogo: {
      '& li': {
         display: 'inline',
         listStyle: 'none',
         padding: 20
      }

   },
   footerUl: {
      '& li': {
         display: 'inline',
         listStyle: 'none',
         padding: 20
      }

   },

})