package com.example.demo.api;

import jakarta.persistence.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

@RestController
public class Menu {
    
    @Autowired
    private MenuRepository menuRepository;
    
    @GetMapping("/api/getMenuList")
    public List<MenuItem> getMenus() {
        return menuRepository.findAll();
    }
}

@Entity
@Table(name = "SYS_MENU_INFO")
class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MENU_SN")
    private Long id;
    
    @Column(name = "LNKG_PATH_NM")
    private String path;
    
    @Column(name = "MENU_NM")
    private String label;

    @Column(name = "MENU_ID", unique = true)
    private String menuId;

    @Column(name = "UP_MENU_SN")
    private Integer upMenuSn;

    @Column(name = "EXPSR_YN")
    private String expsrYn = "Y";

    @Column(name = "USE_YN")
    private String useYn = "Y";

    @Column(name = "SORT_SN")
    private Integer sortSn;

    // getters and setters
    public String getPath() {
        return path;
    }

    public String getLabel() {
        return label;
    }
}

interface MenuRepository extends JpaRepository<MenuItem, Long> {
}

