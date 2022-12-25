import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import './Header.scss'
import Menu from 'components/Menu/Menu'
import logo from 'assets/logo.svg'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Menu />
                    <CartHeader/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
