import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className={styles.back}>
                <Router>
                    <Switch>
                        <Route exact={true} component={LoginPage} path="/" />

                        <Route
                            exact
                            path='/react_restaurant'
                            render={() => <StartPage />}
                        />

                        <Route
                            exact
                            path="/react_restaurant/menu"
                            render = {() => <MenuPage /> }
                        />

                        <Route
                            exact
                            path='/react_restaurant/staffing'
                            render={() => <StaffPage />}
                        />

                        <Route
                            exact
                            path='/react_restaurant/new_menu_entry'
                            render={() => <NewItemPage />}
                        />

                        <Route
                            exact
                            path='/react_restaurant/new_employee_entry'
                            render={() => <NewItemPage />}
                        />

                        <Route exact={true} component={ErrorPage} path="/error" />
                        {/* <Route exact={true} component={AnnouncementPage} path="/ann" /> */}
                    </Switch>
                </Router>
            </div >
        )
    };
}

export default App;
