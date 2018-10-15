import React, {Component} from 'react';

// helpers
import { inheritParentProps, generateUniqueGuid } from '../helpers/helper'

import '../style/tabview.css';

class TabView extends Component {

    constructor(props) {
        super(props);

        this.tabViewGuid = generateUniqueGuid();
        this.state = {
            currentTabIndex: props.currentTabIndex ? 0 : props.currentTabIndex
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

    render() {

        let className = 'tabview';
        if (this.props.className && this.props.className)
            className += ' ' + this.props.className;

        return (
          <div id={this.tabViewGuid} className={className}>
              {this.renderChildren()}
          </div>
        )
    }
}

TabView.propTypes = {};

export default TabView;
