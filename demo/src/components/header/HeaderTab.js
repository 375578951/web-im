import React from "react"
import PropTypes from "prop-types"
import { Menu, Icon } from "antd"

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const HeaderTab = ({ collapse, ...rest }) => {
	const tabs = ["Contacts", "Chat", "Public"]
	const tabsLen = tabs.length
	const tabCls = collapse ? "" : `ant-col-${Math.floor(24 / tabsLen)}`

	const tabsItem = tabs.map(name =>
		<Menu.Item key={name} className={tabCls}>
			<span className="nav-text">
				{name}
			</span>
		</Menu.Item>
	)

	const tabsColItem = (
		<SubMenu title={<Icon type="bars" />} className="collapse">
			{tabsItem}
		</SubMenu>
	)

	return (
		<Menu id="x-header-tab" mode="horizontal" {...rest}>
			{collapse ? tabsColItem : tabsItem}
		</Menu>
	)
}

HeaderTab.propTypes = {
	collapse: PropTypes.bool
	// menuOptions: PropTypes.array.isRequired,
}

export default HeaderTab
