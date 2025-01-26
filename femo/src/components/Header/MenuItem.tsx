import { Link } from 'react-router-dom'
import { MenuItem as MenuItemType } from '../../types/menu'

interface MenuItemProps {
  item: MenuItemType
  index: number
}

export const MenuItem = ({ item, index }: MenuItemProps) => (
  <li key={`menu-item-${item.path}-${index}`}>
    <Link to={item.path || '#'}>{item.label}</Link>
  </li>
) 