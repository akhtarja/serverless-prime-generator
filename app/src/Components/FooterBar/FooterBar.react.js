import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
};

class FooterBar extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position='fixed' color='default' className={this.props.classes.appBar}>
          <Toolbar>
            <Typography variant='body2' color='inherit' className={this.props.classes.grow}>
              © {this.javedLink()} 2019. All Rights Reserved.
              <br />
              Powered by {this.reactLink()}, {this.nodeLink()}, and {this.awsLink()}
            </Typography>
            <Button
              color='inherit'
              href='https://github.com/akhtarja/serverless-prime-generator'
              target='_blank'
            >
              View on GitHub
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  javedLink() {
    return (
      <Link
        href='https://www.javed.dev'
        target='_blank'
      >
        Javed Akhtar
      </Link>
    )
  }

  reactLink() {
    return (
      <Link
        href='https://reactjs.org'
        target='_blank'
        >
        React
      </Link>
    );
  }

  nodeLink() {
    return (
      <Link
        href='https://nodejs.org'
        target='_blank'
        >
        NodeJS
      </Link>
    );
  }

  awsLink() {
    return (
      <Link
        href='https://aws.amazon.com'
        target='_blank'
        >
        Amazon Web Services
      </Link>
    );
  }
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterBar);
