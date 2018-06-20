import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import { NotFound } from '../../components';
import { MainContainer, Showcase, Home } from '../../containers';
import { Menus } from '../../apidata/Menus';
// import { getRoutes } from '../../routes';

class App extends Component {
    constructor(){
        super();
        this.state = {
            listofMenu: []
        }
    }
    componentWillMount(){
        if(Menus && Menus.length > 0) {
            this.setState({listofMenu: Menus});
        }
    }

    render(){
      const { listofMenu } = this.state;

      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/toys" component={Showcase} />
          <Route component={NotFound} />
        </Switch>
        )
    }
}

export default App;

/* <Route exact path="/">
              <SideMenu>
                {listofMenu && listofMenu.length > 0 && listofMenu.map((menu, i) => {
                    return(
                      <Link key={i} to={`/toys/${menu.pathSlug}`}><li>{menu.name}</li></Link>
                    );
                    })
                }
              </SideMenu>
</Route> */