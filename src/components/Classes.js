// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Class from "./Class";

const Classes = (props) => {
  const { classes } = props;
  return (
    <div>
      {classes.map((session) => {
        return (
          <Class key={session.class_id} session={session} />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { classes: state.classes };
};

export default connect(mapStateToProps, null)(Classes);
