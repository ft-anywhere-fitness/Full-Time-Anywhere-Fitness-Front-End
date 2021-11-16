// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Class from "./Class";

const Classes = ({ classes }) => {
  return (
    <div>
      {classes.map((session) => {
        return (
          <Class key={session.id} props={session} />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { classes: state.classes };
};

export default connect(mapStateToProps, null)(Classes);
