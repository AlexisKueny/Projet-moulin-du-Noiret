import { AppBar, Stack, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router";
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: theme.palette.secondary.light,
        }}
      >
        <Toolbar>
          <Link to="/">
            <img src="./favicon.ico" height={75} alt="logo" />
          </Link>
          <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "20px",
          }}>
            <Link to="/historique" style={{textDecoration:"none", color:theme.palette.text.primary}}>
              <Stack direction={"row"} alignItems={"center"}>
                <HistoryEduRoundedIcon />
                <h3>Historique</h3>
              </Stack>
            </Link>
            <Link to="/projet" style={{textDecoration: "none", color:theme.palette.text.primary}}>
              <Stack direction={"row"} alignItems={"center"}>
                <ArchitectureRoundedIcon />
                <h3>Projet</h3>
              </Stack>
            </Link>
            <Link to="/travaux" style={{textDecoration: "none" , color:theme.palette.text.primary}}>
              <Stack direction={"row"} alignItems={"center"}>
                <ConstructionRoundedIcon />
                <h3>Travaux</h3>
              </Stack>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;