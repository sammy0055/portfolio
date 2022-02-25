import "../styles/body2.css";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";

const style = {
  chip: {
    margin: "5px",
    color: "#637381",
  },
};

function Body2(props) {
  return (
    <div className="Body2">
      <section className="Project-container">
        .<h1 className="Project-title">My Amazing Projects.</h1>
        <div>
          <div className="Card-Container">
            <Card style={{ backgroundColor: "#161C24" }} className="Card">
              <div className="Titleapp">
                <h2>School App</h2>
                <a href="https://github.com/sammy0055/student-app-management">
                  <GitHubIcon sx={{ color: "white" }} />
                </a>
              </div>
              <p>
                A simple tool to manage college students data and caculate
                students grades. role base app
              </p>
              <h3>Tech Stack</h3>
              <Chip sx={style.chip} label="react js" />
              <Chip sx={style.chip} label="node js" />
              <Chip sx={style.chip} label="express js" />
              <Chip sx={style.chip} label="material ui" />
              <Chip sx={style.chip} label="firebase" />
              <Chip sx={style.chip} label="mongoDB" />
              <Chip sx={style.chip} label="twilio sendgrid" />
              <Chip sx={style.chip} label="aws s3 bucket" />
            </Card>
            <Card style={{ backgroundColor: "#161C24" }} className="Card">
              <div className="Titleapp">
                <h2>Social App</h2>
                <a href="https://github.com/sammy0055/mimi_social_app">
                  <GitHubIcon sx={{ color: "white" }} />
                </a>
              </div>
              <p>
                A Mini social media App for sharing post with friends and family
              </p>
              <h3>Tech Stack</h3>
              <Chip sx={style.chip} label="react js" />
              <Chip sx={style.chip} label="node js" />
              <Chip sx={style.chip} label="express js" />
              <Chip sx={style.chip} label="material ui" />
              <Chip sx={style.chip} label="firebase" />
              <Chip sx={style.chip} label="mongoDB" />
              <Chip sx={style.chip} label="bosboy" />
            </Card>
          </div>
          <div className="Card-Container">
            <Card style={{ backgroundColor: "#161C24" }} className="Card">
              <div className="Titleapp">
                <h2>Newspapper App</h2>
                <a href="https://github.com/sammy0055/inside_eleme">
                  <GitHubIcon sx={{ color: "white" }}/>
                </a>{" "}
              </div>
              <p>
                A simple Newspapper App with CMS Compactabibility and payment
                system
              </p>
              <h3>Tech Stack</h3>
              <Chip sx={style.chip} label="react js" />
              <Chip sx={style.chip} label="node js" />
              <Chip sx={style.chip} label="express js" />
              <Chip sx={style.chip} label="material ui" />
              <Chip sx={style.chip} label="firebase" />
              <Chip sx={style.chip} label="mongoDB" />
              <Chip sx={style.chip} label="stripe" />
            </Card>

            <Card style={{ backgroundColor: "#161C24" }} className="Card">
              <div className="Titleapp">
                <h2>Stripe payment App</h2>
                <a href="https://github.com/sammy0055/paymentagteway-demo">
                  <GitHubIcon sx={{ color: "white" }} />
                </a>{" "}
              </div>
              <p>
                A simple payment App with stripe integrate payment flow, custom payment, subscriptions etc.
              </p>
              <h3>Tech Stack</h3>
              <Chip sx={style.chip} label="react js" />
              <Chip sx={style.chip} label="node js" />
              <Chip sx={style.chip} label="express js" />
              <Chip sx={style.chip} label="material ui" />
              <Chip sx={style.chip} label="firebase" />
              <Chip sx={style.chip} label="mongoDB" />
              <Chip sx={style.chip} label="stripe" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body2;
