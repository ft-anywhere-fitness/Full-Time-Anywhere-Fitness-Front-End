// Libraries
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AxiosWithAuth from '../utils/AxiosWithAuth';

// Components
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("api/classes")
      .then(res => {
        console.log(res);
        setClasses(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
