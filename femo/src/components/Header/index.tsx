import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// 메뉴 아이템 타입 정의
interface MenuItem {
  path: string
  label: string
}

const Header = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/getMenuList')  // Spring Boot API 엔드포인트
        const data = await response.json()
        setMenuItems(data)
      } catch (error) {
        console.error('메뉴 데이터 로딩 실패:', error)
        // 에러 시 기본 메뉴 표시
      }
    }

    fetchMenuItems()
  }, [])

  return (
    <header className="header">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header 