import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordioncareer = withStyles({
  root: {
    width: '100%',
    borderTop: '1px solid #15374B',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    color: '#FFF',
    backgroundColor: '#15374B',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -8,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '4px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="Data">
      <Accordioncareer square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><h5 style={{color: "#FFF"}}><ExpandMoreIcon />&nbsp;What Should I Wear?</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#7A7A7A", fontSize: 20.5, wordSpacing: 3.9, letterSpacing: 1.5}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </Typography>
        </AccordionDetails>
      </Accordioncareer>
      <Accordioncareer square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h5 style={{color: "#FFF"}}><ExpandMoreIcon/>&nbsp;How To Create Proper CV?</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#7A7A7A", fontSize: 20.5, wordSpacing: 3.9, letterSpacing: 1.5}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </Typography>
        </AccordionDetails>
      </Accordioncareer>
      <Accordioncareer square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><h5 style={{color: "#FFF"}}><ExpandMoreIcon/>&nbsp;Find Me Good Position</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#7A7A7A", fontSize: 20.5, wordSpacing: 3.9, letterSpacing: 1.5}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </Typography>
        </AccordionDetails>
      </Accordioncareer>
      <Accordioncareer square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography><h5 style={{color: "#FFF"}}><ExpandMoreIcon/>&nbsp;How to Pass Interview?</h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#7A7A7A", fontSize: 20.5, wordSpacing: 3.9, letterSpacing: 1.5}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </Typography>
        </AccordionDetails>
      </Accordioncareer>
      
    </div>
  );
}

