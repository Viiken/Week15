import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/esm/Button';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Music from './Music.js'

function Click(){
  <Switch>
    <Route path="/music">
    <Music/>
    </Route>
  </Switch>
}

export default function Loading() {
  return (
    //Spinner and buton to continue
    <div  className="downloadAlign">
      <div>
      <Spinner id="spinner" animation="border" variant="danger" role="status">
        <span className="visually-hidden">Getting Your Music Library...</span>
      </Spinner>
      </div>
      <div>
      <Button href="/music">Continue</Button>
      </div>
    </div>
  );
}

