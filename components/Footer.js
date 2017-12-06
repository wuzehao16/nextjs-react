import React from 'react'
import { withStyles } from 'material-ui/styles'
import Link from 'next/link'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import classNames from 'classnames'
// import product from '../pages/product'
const styles = theme => ({
  root: {
    width: '100vw'
  }
})

class Footer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    // this.props.router.push(value);
  };
  render () {
    const { classes } = this.props
    const { value } = this.state;
    return (
      <div>
        
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationButton href="/" label="首页" icon={<i className="iconfont icon-homepage"/>} />
          <BottomNavigationButton href="/product" label="产品" icon={<i className="iconfont icon-manage" />} />
          <BottomNavigationButton label="发现" icon={<i className="iconfont icon-faxian1" />} />
          <BottomNavigationButton label="我" icon={<i className="iconfont icon-mine" />} />
        </BottomNavigation>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
