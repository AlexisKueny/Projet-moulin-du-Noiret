import { AppBar, Toolbar, useTheme } from "@mui/material";
import { Link } from "react-router";

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
                    <img src="./favicon.ico" height="75px"></img>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        gap: "20px",

                    }}>
                        
                        <Link to="/historique">Historique</Link>
                        <Link to="/projet">Projet</Link>
                        <Link to="/travaux">Travaux</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;