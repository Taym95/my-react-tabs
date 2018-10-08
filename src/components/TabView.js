import React, {Component} from 'react';
import { isUndefined, has, isEmpty } from 'lodash'

// components
import TabViewNavigation from './TabViewNavigation';
import TabViewContent from './TabViewContent';

// helpers
import { inheritParentProps, generateUniqueGuid } from '../helpers/helper'

class TabView extends Component {

    constructor(props) {
        super(props)

        this.tabViewGuid = generateUniqueGuid();
        this.state = {
            currentTabIndex: (isUndefined(props.currentTabIndex) ? 0 : props.currentTabIndex)
        }
    }

    handleTabClick = (tabIndex) => {
        this.setState({
            currentTabIndex: tabIndex
        });

    };

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return inheritParentProps(this, child, ['id'], {
                handleTabClick: this.handleTabClick,
                currentTabIndex: this.state.currentTabIndex,
                tabViewGuid: this.tabViewGuid
            });
        })
    }

    renderChildrenFromDataSource = () => {
        return (
          <React.Fragment>
              <TabViewNavigation {...this.props} currentTabIndex={this.state.currentTabIndex} handleTabClick={this.handleTabClick} />
              <TabViewContent {...this.props} currentTabIndex={this.state.currentTabIndex} />
          </React.Fragment>
        )
    }

    render() {

        let className = 'tabview';
        if (has(this.props.className) && !isEmpty(this.props.className))
            className += ' ' + this.props.className;

        const output = (has(this.props, 'dataSource') && !isUndefined(this.props.dataSource) ? this.renderChildrenFromDataSource() : this.renderChildren());

        return (
          <div id={this.tabViewGuid} className={className}>
              {output}
          </div>
        )
    }
}

TabView.propTypes = {};

export default TabView;
