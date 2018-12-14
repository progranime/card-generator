import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
// load styles
import './styles/app.css'
// load store
import store from './store'
import Login from './routes/Login'

// load components
import Spinner from './components/Spinner'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'

// load routes
const Home = lazy(() => import('./routes/Home'))
const CardFormCreate = lazy(() => import('./routes/BusinessCardForm/Create'))
const CardFormEdit = lazy(() => import('./routes/BusinessCardForm/Edit'))
const CardFormView = lazy(() => import('./routes/BusinessCardForm/View'))
const AdminDashboard = lazy(() => import('./routes/Admin/Dashboard'))
const AdminDashboardEdit = lazy(() => import('./routes/Admin/Dashboard/Edit'))
const AdminDashboardView = lazy(() => import('./routes/Admin/Dashboard/View'))
const AdminManageUser = lazy(() => import('./routes/Admin/ManageUser'))
const AdminManageUserEdit = lazy(() => import('./routes/Admin/ManageUser/Edit'))
const AdminManageUserCreate = lazy(() =>
    import('./routes/Admin/ManageUser/Create')
)
const Notification = lazy(() => import('./routes/Notification'))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Suspense
                            fallback={
                                <Spinner
                                    loading={true}
                                    styling={{
                                        position: 'relative',
                                        top: '90px'
                                    }}
                                />
                            }
                        >
                            <Navbar />

                            <Switch>
                                <PrivateRoute exact path="/" component={Home} />
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute
                                    exact
                                    path="/card/create"
                                    component={CardFormCreate}
                                />
                                <PrivateRoute
                                    exact
                                    path="/card/:id/edit"
                                    component={CardFormEdit}
                                />

                                <PrivateRoute
                                    exact
                                    path="/card/:id/view"
                                    component={CardFormView}
                                />

                                <PrivateRoute
                                    exact
                                    path="/admin/dashboard"
                                    component={AdminDashboard}
                                    authorize={['admin', 'printer']}
                                />

                                <PrivateRoute
                                    exact
                                    path="/admin/dashboard/:id/edit"
                                    component={AdminDashboardEdit}
                                    authorize={['admin', 'printer']}
                                />

                                <PrivateRoute
                                    exact
                                    path="/admin/dashboard/:id/view"
                                    component={AdminDashboardView}
                                    authorize={['admin', 'printer']}
                                />

                                <PrivateRoute
                                    exact
                                    path="/admin/manage-user"
                                    component={AdminManageUser}
                                    authorize={['admin']}
                                />

                                <PrivateRoute
                                    exact
                                    path="/admin/manage-user/create"
                                    component={AdminManageUserCreate}
                                    authorize={['admin']}
                                />

                                <PrivateRoute
                                    exact
                                    path="/admin/manage-user/:id/edit"
                                    component={AdminManageUserEdit}
                                    authorize={['admin']}
                                />

                                <PrivateRoute
                                    exact
                                    path="/notification"
                                    component={Notification}
                                />

                                <Route
                                    component={NotFound}
                                    history={this.props.history}
                                />
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
