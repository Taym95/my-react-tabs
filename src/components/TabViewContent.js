import React from 'react'

// helpers
import { inheritParentProps } from '../helpers/helper'


class TabViewContent extends React.Component {

    renderChildren() {
        return React.Children.map(this.props.children, (child, tabIndex) => {
            return inheritParentProps(this, child, ['currentTabIndex', 'handleTabClick'], {
                key: tabIndex,
                tabIndex: tabIndex
            });
        })
    }

    render() {
        return (
          <div className="tabview-content">
              {this.renderChildren()}
          </div>
        )

    }

}


export default TabViewContent;
