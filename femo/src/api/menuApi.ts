import { MenuItem } from '../types/menu'

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const response = await fetch('http://localhost:8080/api/getMenuList')
  if (!response.ok) {
    throw new Error('메뉴 데이터를 불러오는데 실패했습니다')
  }
  return response.json()
} 