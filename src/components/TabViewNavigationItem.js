import React from 'react'


class TabViewNavigationItem extends React.Component {

    render() {
        const { text, currentTabIndex, tabIndex} = this.props;
        let className = '';
        if (tabIndex === currentTabIndex)
            className = 'active';


        return (
          <li className={className} onClick={() => this.props.handleTabClick(this.props.tabIndex)}>
              <span>{text}</span>
          </li>
        )


    }

}


export default TabViewNavigationItem;
