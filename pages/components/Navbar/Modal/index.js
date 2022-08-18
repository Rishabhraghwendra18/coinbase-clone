import React,{useContext} from "react";
import { Modal, Box, Tabs, Tab, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SendCrypto from "./SendCrypto";
import ReceiveCrypto from "./ReceiveCrypto";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function ModalForSendAndReceive({ isOpen, onClose }) {
  const [value, setValue] = React.useState(0);
  const unselectedStyle = {
    border: '1px solid #282b2f',
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomeTabs = styled(Tabs)(() => ({
    display: "flex",
    "justify-content": "space-evenly",
    "align-items": "center",
    height: "5rem",
    padding:0,
    borderBottom: "none !important",
    '.MuiTabs-flexContainer':{
      width:'100%',
      height:'100%',
    },
    ".MuiTabs-indicator": {
      display: "none",
    },
    ".MuiTabs-scroller": {
      height: "100%",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
  }));
  const CustomTab = styled(Tab)(() => ({
    height: "100%",
    width: "fit-content",
    flex: "auto",
    display: "grid",
    "place-items": "center",
    "font-size": "1.2rem",
    "font-weight": 600,
    "&:hover": {
      cursor: "pointer",
      "background-color": "#323131",
    },
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding:0,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ padding: 0 }}
    >
      <Box sx={style}>
        <Box>
          <CustomeTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <CustomTab label="Send" {...a11yProps(0)} style={value !==0 ? unselectedStyle : null}/>
            <CustomTab label="Receive" {...a11yProps(1)} style={value !==1 ? unselectedStyle : null}/>
          </CustomeTabs>
        </Box>
        <TabPanel value={value} index={0} >
          <SendCrypto/>
        </TabPanel>
        <TabPanel value={value} index={1} >
          <ReceiveCrypto/>
        </TabPanel>
      </Box>
    </Modal>
  );
}

export default ModalForSendAndReceive;
