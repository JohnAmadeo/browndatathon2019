import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  track: {
    background: '#0084FF',
  },
  thumb: {
    background: '#0084FF',
  },
  root: {
    width: '100%',
  },
  container: {
    padding: '22px 0px',
  },
};

class StepSlider extends React.Component {
  handleChange = (_, value) => {
    this.setState({ value });
  };

  render() {
    const { container, root, track, thumb } = this.props.classes;

    console.log(this.props);

    return (
      <div className={root}>
        <Slider
          classes={{ container, track, thumb }}
          value={this.props.value}
          min={this.props.minValue}
          max={this.props.maxValue}
          step={1}
          onChange={this.props.onSlide}
        />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);