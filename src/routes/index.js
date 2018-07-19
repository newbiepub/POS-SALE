import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class AppRoute extends React.PureComponent {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} render={(props) => <div>Hello Home <button onClick={() => props.history.push('/about')}>Navigate</button></div>}/>
                    <Route exact path={'/about'} render={() => <div>Hello about</div>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRoute;