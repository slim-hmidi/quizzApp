import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PaperWrapper from './PaperWrapper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Quizz = (props) => {
  const {
    classes,
    operand1,
    operand2,
    handleFirstButton,
    handleSecondButton,
    firstValue,
    secondValue,
  } = props;


  return (
    <Grid
      container
      spacing={0}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
        <PaperWrapper
          title="What is the result of :"
          description={`${operand1} + ${operand2}`}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleFirstButton}
          >
            {firstValue}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSecondButton}
          >
            {secondValue}
          </Button>

        </PaperWrapper>
      </Grid>
    </Grid>
  );
};


Quizz.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
  operand1: PropTypes.number.isRequired,
  operand2: PropTypes.number.isRequired,
  handleFirstButton: PropTypes.func.isRequired,
  handleSecondButton: PropTypes.func.isRequired,
  firstValue: PropTypes.number.isRequired,
  secondValue: PropTypes.number.isRequired,
};

const withStyle = withStyles(styles)(Quizz);
export default withStyle;
