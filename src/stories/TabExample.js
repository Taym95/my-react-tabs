import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TabView from '../components/TabView';
import TabViewNavigationItem from '../components/TabViewNavigationItem';
import TabViewNavigation from '../components/TabViewNavigation';
import TabViewContentItem from '../components/TabViewContentItem';
import TabViewContent from '../components/TabViewContent';

class TabExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentTab: 0,
        }
    }
    handleTabClick = (tanIndex) => {
        this.setState({
            currentTab: tanIndex,
        });
    };
    render() {
        return (
          <TabView>
              <TabViewNavigation>
                  <TabViewNavigationItem text="Tab1" currentTabIndex={this.state.currentTab} handleTabClick={this.handleTabClick} />
                  <TabViewNavigationItem text="Tab2" currentTabIndex={this.state.currentTab} handleTabClick={this.handleTabClick} />
                  <TabViewNavigationItem text="Tab3" currentTabIndex={this.state.currentTab} handleTabClick={this.handleTabClick} />
                  <TabViewNavigationItem text="Tab4" currentTabIndex={this.state.currentTab} handleTabClick={this.handleTabClick}  />
              </TabViewNavigation>
              <TabViewContent>
                  <TabViewContentItem>
                      Tab1
                  </TabViewContentItem>
                  <TabViewContentItem>
                      Tab2
                  </TabViewContentItem>
                  <TabViewContentItem>
                      Tab3
                  </TabViewContentItem>
                  <TabViewContentItem>
                      Tab4
                  </TabViewContentItem>
              </TabViewContent>
          </TabView>
        );
    }
}

TabExample.propTypes = {};

export default TabExample;
