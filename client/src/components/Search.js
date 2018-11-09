import React, { Component } from 'react'
import UserSearch from './UserSearch'
import {compose} from 'react-apollo'
import Paper from '@material-ui/core/Paper'
import BannerTopBar from './BannerTopBar'

// Materia UI

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '50%',
    flexGrow: 1,
    padding: 10,
    marginLeft: '25%',
    marginTop: '5%',
    marginBottom: '10%'
  }
})

class Search extends Component {

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <BannerTopBar
          size='medium'
          title='Users Search'
          text='Find anyone involved in Advanced Algos here.'
          backgroundUrl='https://advancedalgos.net/img/photos/connect.jpg'
        />
        <Paper className={classes.root}>
          <UserSearch />
        </Paper>
      </React.Fragment>
    )
  }
}

export default compose(
	withStyles(styles)
)(Search)
