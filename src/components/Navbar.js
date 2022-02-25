import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedIn from "@mui/icons-material/LinkedIn";

const style = {
  marginRight: "6px",
};

const width = window.innerWidth;
const breakpoint = 465;

export default function Navbar() {
  return (
    <>
      {width > breakpoint ? (
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <Chip sx={style} label="+2348171727284" color="primary" />
            <Chip label="ronicksamuel@gmail.com" color="primary" />
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="fixed"
          color="transparent"
          style={{ backgroundColor: "black" }}
        >
          <Toolbar>
            <div>
              <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
                <LinkedIn
                  style={{
                    margin: "12px",
                    color: "skyblue",
                    fontSize: "2em",
                  }}
                />
              </a>
              <a href="https://github.com/sammy0055">
                <GitHubIcon
                  style={{ margin: "12px", fontSize: "2em", color: "#637381" }}
                />
              </a>
              <a href="https://wa.me/message/POR6INKEAOCFH1">
                <WhatsAppIcon
                  style={{ margin: "12px", color: "green", fontSize: "2em" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
                <InstagramIcon
                  style={{ margin: "12px", color: "#637381", fontSize: "2em" }}
                />
              </a>

              <a href="https://twitter.com/rockey045">
                <TwitterIcon
                  style={{
                    margin: "12px",
                    color: "skyblue",
                    fontSize: "2em",
                  }}
                />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}
