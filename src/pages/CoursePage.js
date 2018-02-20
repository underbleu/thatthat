import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainMenu } from 'components'
import {
  CategoryListContainer,
  CourseListContainer,
} from 'containers'
import { withAuth } from 'hocs'

const MainPage = () => (
  <React.Fragment>
    <MainMenu />
    <CategoryListContainer />
    <Switch>
      <Route exact path="/courses" component={CourseListContainer} />
      <Route path="/courses/:category" component={CourseListContainer} />
    </Switch>
  </React.Fragment>
)

export default withAuth(MainPage)
