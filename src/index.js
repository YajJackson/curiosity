import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import {Grid} from 'react-bootstrap'

import './index.css';

import App from './App';
import NavHeader from './components/NavHeader'
import CoursePage from './components/courses/CoursePage'
import StudyPage from './components/study/StudyPage'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
    <Grid>
      <Route path='/' component={NavHeader} />
      <Route path='/courses' component={CoursePage} />
      <Route path='/study' component={StudyPage} />
    </Grid>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()