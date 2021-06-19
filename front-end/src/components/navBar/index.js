import React from 'react'
import clsx from 'clsx'
import useTheme  from './style'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import StoreIcon from '@material-ui/icons/Store'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import useStyles from './style'
import { useHistory } from 'react-router-dom'
import useAuth from '../../hook/useAuth'

export default function NavBar() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const history = useHistory()
  const { deslogar } = useAuth()
  
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Bem vindo 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuList>
            <MenuItem onClick={ () => history.push('produtos') }>
              <ListItemIcon>
                <StoreIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Minha loja</Typography>
            </MenuItem>
            <MenuItem onClick={ () => history.push('perfil') }>
              <ListItemIcon>
                <AccountBoxIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Minha conta</Typography>
            </MenuItem>
            <MenuItem onClick={deslogar}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Deslogar
              </Typography>
            </MenuItem>
          </MenuList>
        </List>
        <Divider />

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h2">
        Meus produtos
   
        </Typography>

      </main>
    </div>
  )
}
