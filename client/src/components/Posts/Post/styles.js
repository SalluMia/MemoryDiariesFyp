import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  infodate:{
    backgroundColor: '#02325c !important',
    color:'white',
    fontSize:'12px !important',
    fontFamily:'Nunito !important',
    padding:'4px 8px',
    fontWeight:'bold !important'

  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '100%',
    position: 'relative',
    borderBottom:'3px solid #02325c !important',
    transition: 'transform .2s',
    border:'1px solid rgba(179, 178, 178, 0.623) !important',
    '&:hover': {
			transform: 'scale(1.06)',
			zIndex:'9999999',
			border:'1px solid grey'
		},
  },

  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  },
  title: {
    padding: '0 16px',
    margin:'10px 0px !important',
    color: '#233d4d',
    // fontFamily:'Nunito !important'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});
