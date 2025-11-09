import moulinMain from '../assets/HeroCropped.png'
import { Grow, useTheme } from '@mui/material';

const Home = () => {
    const theme = useTheme();

    const cssVars = {
        // CSS custom properties and computed stripes
        '--s': '62px',
        '--c1': theme.palette.secondary.main,
        '--c2': theme.palette.primary.main,
        '--l1': `transparent 48%, ${theme.palette.secondary.main} 0 52%, transparent 0`,
        '--l2': `transparent 1.3%, ${theme.palette.primary.main} 0 32%, transparent 0`,
        background: `linear-gradient(-45deg, var(--l2)),
                     linear-gradient(45deg, var(--l1)),
                     linear-gradient(45deg, var(--l2)) calc(var(--s)/2) calc(var(--s)/2),
                     linear-gradient(-45deg, var(--l1)) var(--c2)`,
        backgroundSize: `calc(2*var(--s)) var(--s), var(--s) var(--s)`
    }

    return (
        <>
            <div style={{
                ...cssVars,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                alignContent: "center"
            }}>
                <h1>Moulin du Noiret</h1>
                <h2>Saint Jorioz - Haute Savoie</h2>
                <Grow in>

                    <img
                        src={moulinMain}
                        alt="moulin home"
                        height={1000}
                        style={{
                            maxWidth: "95%",
                            maxHeight: "87vh",
                            margin: 20
                        }}
                    />
                </Grow>
            </div>
        </>
    )
}

export default Home;