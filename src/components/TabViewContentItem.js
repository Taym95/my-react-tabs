import React from 'react'

// helpers
import { inheritParentProps, addClassNameByPropValue } from '../helpers/helper'

class TabViewContentItem extends React.Component {

    renderChildren() {
        return React.Children.map(this.props.children, (child, tabIndex) => {
            return inheritParentProps(this, child);
        })
    }

    render() {

        let { showScroller } = this.props;
        const output =  this.renderChildren();

        let className = 'tabview-panel';

        if (showScroller !== false)
            className = className += ' scroller';

        className = addClassNameByPropValue(className, this.props, 'tabIndex', this.props.currentTabIndex, 'panel-show');
        className = addClassNameByPropValue(className, this.props, 'isHmiOptimized', true, 'hmi-optimized');



        return (
          <div className={className} data-hmi-scroll="1" style={{color: "red"}}>
              {output}
          </div>
        )

    }

}


export default TabViewContentItem
