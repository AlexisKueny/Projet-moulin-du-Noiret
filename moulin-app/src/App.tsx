import { useTheme } from '@mui/material'
import Header from './common/Header.tsx'
import Footer from './common/Footer.tsx'
import { Outlet } from 'react-router'

const App = () => {
  const theme = useTheme()

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
