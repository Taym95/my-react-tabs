import React from 'react'

// helpers
import { inheritParentProps } from '../helpers/helper'

class TabViewNavigation extends React.Component {

    renderChildren() {
        return React.Children.map(this.props.children, (child, tabIndex) => {
            return inheritParentProps(this, child, ['currentTabIndex', 'handleTabClick'], {
                key: tabIndex,
                tabIndex: tabIndex
            });
        })
    }

    render() {
        const output = this.renderChildren();

        return (
          <ul className="tabview-nav">
              {output}
          </ul>
        )

    }

}


export default TabViewNavigation
