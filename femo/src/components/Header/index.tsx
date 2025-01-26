import { useQuery } from '@tanstack/react-query'
import { fetchMenuItems } from '../../api/menuApi'
import { MenuItem } from './MenuItem'
import { MenuItem as MenuItemType } from '../../types/menu'

const Header = () => {
  const { data: menuItems = [], isError, isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems,
    staleTime: 5 * 60 * 1000,
    retry: 1
  })

  if (isLoading) return <div>로딩 중...</div>
  if (isError) return <div>메뉴를 불러오는데 실패했습니다.</div>

  return (
    <header className="header">
      <nav>
        <ul>
          {menuItems.map((item: MenuItemType, index: number) => (
            <MenuItem key={`menu-${index}`} item={item} index={index} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header 